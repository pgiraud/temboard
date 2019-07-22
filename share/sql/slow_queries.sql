DROP SCHEMA IF EXISTS slowqueries CASCADE;
CREATE SCHEMA slowqueries;
SET search_path TO slowqueries, public;

BEGIN;

CREATE TABLE slowqueries (
  query_id SERIAL,
  agent_address TEXT NOT NULL,
  agent_port INTEGER NOT NULL,
  datetime TIMESTAMPTZ,
  duration REAL,
  username VARCHAR(64),
  appname VARCHAR(64),
  dbname VARCHAR(64),
  temp_blks_written INTEGER,
  hitratio INTEGER,
  ntuples INTEGER,
  query VARCHAR,
  plan VARCHAR
) PARTITION BY RANGE(datetime);

CREATE TABLE slowqueries_insert_table AS TABLE slowqueries;
-- CREATE TABLE slowqueries_insert_table (
  -- query_id SERIAL,
  -- agent_address TEXT NOT NULL,
  -- agent_port INTEGER NOT NULL,
  -- datetime TIMESTAMPTZ,
  -- duration REAL,
  -- username VARCHAR(64),
  -- appname VARCHAR(64),
  -- dbname VARCHAR(64),
  -- temp_blks_written INTEGER,
  -- hitratio INTEGER,
  -- ntuples INTEGER,
  -- query VARCHAR,
  -- plan VARCHAR
-- );


GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA slowqueries TO temboard;
GRANT ALL ON ALL TABLES IN SCHEMA slowqueries TO temboard;
GRANT ALL ON ALL SEQUENCES IN SCHEMA slowqueries TO temboard;

CREATE OR REPLACE FUNCTION slowqueries_partition()
  RETURNS TRIGGER AS $PROC$
  DECLARE
    year TEXT;
    month_dt TEXT;
    month TEXT;
    partition TEXT;
    new_insert TEXT;
    new_table TEXT;
  BEGIN
    year = date_part('year', NEW.datetime);
    month = LPAD(date_part('month', NEW.datetime)::text, 2, '0');
    month_dt := date_trunc('month', NEW.datetime);
    partition := 'slowqueries_' || year || month;
    IF NOT EXISTS (SELECT relname FROM pg_class WHERE relname = partition) THEN
      RAISE NOTICE 'Creating Partition: %', partition;

      new_table := 'CREATE TABLE ' || partition
        || ' PARTITION OF slowqueries.slowqueries'
        || ' FOR VALUES FROM ('' '
        || month_dt
        || ' '' )  TO ( '' '
        || month_dt::timestamp + interval'1 month' || ' '' ) ;'
        || 'ALTER TABLE ' || partition
        || ' ADD CONSTRAINT fk_instance_address_port FOREIGN KEY (agent_address, agent_port)'
        || ' REFERENCES application.instances (agent_address, agent_port) ON DELETE CASCADE ON UPDATE CASCADE;';

      EXECUTE new_table;

    END IF;

    EXECUTE 'INSERT INTO slowqueries.slowqueries
      (agent_address, agent_port, datetime, duration, username, appname, dbname, temp_blks_written, hitratio, ntuples, query, plan)
      VALUES ('
      || quote_literal(NEW.agent_address) || ', '
      || NEW.agent_port || ', '
      || quote_literal(NEW.datetime) || '::timestamp, '
      || NEW.duration || ', '
      || quote_literal(NEW.username) || ', '
      || quote_literal(NEW.appname) || ', '
      || quote_literal(NEW.dbname) || ', '
      || NEW.temp_blks_written || ', '
      || NEW.hitratio || ', '
      || NEW.ntuples || ', '
      || quote_literal(NEW.query) || ', '
      || quote_literal(NEW.plan) || ');';

    -- Don't insert anything in the slowqueries_insert_table
    RETURN NULL;
  END;
  $PROC$ LANGUAGE plpgsql VOLATILE;

CREATE TRIGGER insert_slowquery
BEFORE INSERT
ON slowqueries_insert_table
FOR EACH ROW
EXECUTE PROCEDURE slowqueries_partition();

COMMIT;

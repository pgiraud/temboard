DROP SCHEMA IF EXISTS slowqueries CASCADE;
CREATE SCHEMA slowqueries;
SET search_path TO slowqueries, public;

BEGIN;

CREATE TABLE slowqueries (
  query_id SERIAL PRIMARY KEY,
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
);

COMMIT;

GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA slowqueries TO temboard;
GRANT ALL ON ALL TABLES IN SCHEMA slowqueries TO temboard;
GRANT ALL ON ALL SEQUENCES IN SCHEMA slowqueries TO temboard;

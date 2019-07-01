from sqlalchemy.schema import (
    MetaData,
    Table,
    Column,
)
from sqlalchemy.types import (
    DateTime,
    Integer,
    REAL,
    UnicodeText,
)

metadata = MetaData()

slowqueries = Table(
    'slowqueries', metadata,
    Column('query_id', Integer, primary_key=True),
    Column('datetime', DateTime),
    Column('duration', REAL),
    Column('username', UnicodeText),
    Column('appname', UnicodeText),
    Column('dbname', UnicodeText),
    Column('temp_blks_written', Integer),
    Column('hitratio', Integer),
    Column('ntuples', Integer),
    Column('query', UnicodeText),
    Column('plan', UnicodeText),
    schema="slowqueries")

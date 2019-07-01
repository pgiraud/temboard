import datetime
from sqlalchemy.ext.declarative import declarative_base

import tables

Model = declarative_base()


class SlowQueries(Model):
    __table__ = tables.slowqueries

    def as_dict(self):
        def convert(o):
            if isinstance(o, datetime.datetime):
                return o.isoformat()
            return o

        return {
            c.name: convert(getattr(self, c.name))
            for c in self.__table__.columns
        }

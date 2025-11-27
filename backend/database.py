import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


DEFAULT_LOCAL_DB_URL = "postgresql+psycopg2://postgres:shridhar@localhost:5432/grippi_db"

DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_LOCAL_DB_URL)


engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,  
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)

Base = declarative_base()

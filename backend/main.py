
from typing import List, Optional

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import Base, engine, SessionLocal
from models import Campaign
from schemas import CampaignsResponse
from sample import sample_data

Base.metadata.create_all(bind=engine)


sample_data()

app = FastAPI(title="Grippi Campaign Analytics API")


origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/campaigns", response_model=List[CampaignsResponse])
def list_campaigns(
    status: Optional[str] = None,
    db: Session = Depends(get_db),
):

    query = db.query(Campaign)
    if status is not None:
        query = query.filter(Campaign.status == status)

    campaigns = query.all()
    return campaigns

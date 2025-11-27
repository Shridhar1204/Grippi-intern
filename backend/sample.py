from sqlalchemy.orm import Session
from database import SessionLocal
from models import Campaign

def sample_data() -> None:
    db: Session = SessionLocal()
    try:
        existing_count = db.query(Campaign).count()
        if existing_count > 0:
            return
        sample_campaigns = [
            {"name": "Summer Sale",      "status": "Active", "clicks": 150, "cost": 45.99, "impressions": 1000},
            {"name": "Black Friday",     "status": "Paused", "clicks": 320, "cost": 89.50, "impressions": 2500},
            {"name": "Diwali Blast",   "status": "Active", "clicks": 210, "cost": 60.00, "impressions": 1800},
            {"name": "Winter Arc",    "status": "Active", "clicks": 95,  "cost": 30.25, "impressions": 900},
            {"name": "Christmas Sale", "status": "Paused", "clicks": 430, "cost": 120.75, "impressions": 3500},
            {"name": "Holi Campaign",  "status": "Active", "clicks": 80,  "cost": 25.00, "impressions": 5000},
            {"name": "New Year Offer", "status": "Paused", "clicks": 260, "cost": 70.10, "impressions": 2000},
            {"name": "Valentine Day",  "status": "Active", "clicks": 140, "cost": 55.55, "impressions": 1600},
            {"name": "Dhanteras Deals", "status": "Paused", "clicks": 110, "cost": 40.00, "impressions": 1300},
            {"name": "App Promotion", "status": "Active", "clicks": 300, "cost": 95.90, "impressions": 4000},
        ]

        for data in sample_campaigns:
              campaign = Campaign(
              name=data["name"],
              status=data["status"],
              clicks=data["clicks"],
              cost=data["cost"],
              impressions=data["impressions"]
              )  
              db.add(campaign)

        db.commit()
    
    finally:
        db.close()

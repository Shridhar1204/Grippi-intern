from pydantic import BaseModel

class CampaignsResponse(BaseModel):
    id: int
    name: str
    status: str
    clicks: int
    cost: float
    impressions: int

    class Config:
        orm_mode = True

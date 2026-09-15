from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="HEALTHOS API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "name": "HEALTHOS API",
        "status": "running"
    }


@app.get("/api/today")
def get_today():
    return {
        "readiness": 74,
        "sleep": {
            "value": 6.7,
            "unit": "hours"
        },
        "hrv": {
            "value": 48,
            "unit": "ms"
        },
        "resting_hr": {
            "value": 63,
            "unit": "bpm"
        },
        "steps": 6320,
        "training_load": 520,
        "nutrition": {
            "calories": 1840,
            "protein": 118
        }
    }

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, HttpUrl
from typing import Optional

app = FastAPI(title="Truthlens API", version="0.1.0")

# CORS configuration
ALLOWED_ORIGINS = [
    "http://localhost:9002",  # Next.js dev
    "http://127.0.0.1:9002",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AnalyzeRequest(BaseModel):
    url: Optional[HttpUrl] = None


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/analyze")
async def analyze(
    file: Optional[UploadFile] = File(default=None),
    body: Optional[AnalyzeRequest] = None,
):
    """
    Mock analyzer endpoint.
    Accepts either a file (multipart/form-data) or a JSON body with a media URL.
    Returns a mocked analysis payload for now.
    """
    if not file and not (body and body.url):
        raise HTTPException(status_code=400, detail="Provide either 'file' or JSON body with 'url'")

    input_type = "file" if file else "url"
    input_name = file.filename if file else str(body.url)

    # Mock processing result
    result = {
        "inputType": input_type,
        "input": input_name,
        "verdict": "likely_real",
        "confidence": 0.82,
        "signals": [
            {"name": "compression_artifacts", "score": 0.18},
            {"name": "frame_inconsistency", "score": 0.21},
            {"name": "audio_desync", "score": 0.14},
        ],
        "processedAt": "mock",
        "latencyMs": 1234,
    }

    return {"ok": True, "analysis": result}

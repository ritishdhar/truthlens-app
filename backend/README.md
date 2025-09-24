# Truthlens API (FastAPI)

Minimal FastAPI boilerplate with CORS and a mocked `/analyze` endpoint.

## Requirements
- Python 3.9+ (recommend 3.11)
- pip (or uv / pipx)

## Install
From the repo root (Windows PowerShell):

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install --upgrade pip
pip install fastapi uvicorn[standard] pydantic
```

Alternatively, with uv:
```powershell
pip install uv
uv pip install -r <(echo fastapi uvicorn[standard] pydantic)
```

## Run (dev)
```powershell
# From backend directory with venv activated
uvicorn backend.app.main:app --reload --host 0.0.0.0 --port 8000
```

Open the docs at:
- Swagger: http://127.0.0.1:8000/docs
- Redoc:   http://127.0.0.1:8000/redoc

## Endpoints
- `GET /health` – health check
- `POST /analyze` – mock analysis
  - accepts `multipart/form-data` with `file`
  - or `application/json` with `{ "url": "https://..." }`

## CORS
Allowed origins (edit in `backend/app/main.py`):
```python
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
```

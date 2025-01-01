from fastapi import FastAPI
from ultralytics import YOLO

app = FastAPI()

try:
    model = YOLO('../pt files/model 31.12.24.pt')  # Load the YOLO model
    model_status = "Model loaded successfully!"
except Exception as e:
    model_status = f"Error loading model: {e}"

@app.get("/")
async def read_root():
    return {"status": model_status}
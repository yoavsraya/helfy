from fastapi import FastAPI, File, UploadFile
from ultralytics import YOLO
from PIL import Image
import io

app = FastAPI()

model = YOLO('../pt files/model 31.12.24.pt') 

@app.post("/detect/")
async def detect(file: UploadFile = File(...)):
    # Load the image
    image = Image.open(io.BytesIO(await file.read()))

    # Perform inference
    results = model(image)

    # Convert results to JSON
    detections = results.pandas().xyxy[0].to_dict(orient="records")
    return {"detections": detections}
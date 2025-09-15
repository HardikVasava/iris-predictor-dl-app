from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import joblib
import numpy as np
import pandas as pd

model = load_model('../model-training/models/iris_model.keras')
scaler = joblib.load('../model-training/models/iris_scaler.pkl')

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Iris Prediction API is live!"})

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'No input data provided'}), 400

    try:
        flower = pd.DataFrame([data])
        flower_scaled = scaler.transform(flower)

        class_names = ['setosa', 'versicolor', 'virginica']
        prediction = model.predict(flower_scaled)
        predicted_class = class_names[np.argmax(prediction)]

        return jsonify({'prediction': predicted_class})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://127.0.0.1:5000"}})
# Load your model (make sure the path is correct)
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

print("SAVAGE")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    symptoms = data['symptoms']

    # Convert symptoms list to a NumPy array
    symptoms_array = np.array(symptoms).reshape(1, -1)

    # Predict the disease using the loaded model
    prediction = model.predict(symptoms_array)
    # Get the predicted disease (adjust based on your model)
    predicted_disease = prediction[0]

    return jsonify({'prediction': predicted_disease})

if __name__ == '__main__':
    app.run(debug=True)

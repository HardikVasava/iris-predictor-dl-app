# 🌸 Iris Flower Classification - Full Stack Application

This project is a full-stack machine learning application designed to classify Iris flower species—setosa, versicolor, or virginica—based on four botanical measurements: Sepal Length, Sepal Width, Petal Length, and Petal Width.

---

## 📂 Dataset

This project uses the classic Iris dataset, which contains 150 samples of Iris flowers from three species (setosa, versicolor, virginica) with four botanical features.

You can find the dataset here:  
[UCI Machine Learning Repository - Iris Data Set](https://archive.ics.uci.edu/ml/datasets/iris)

Alternatively, the dataset is also directly accessible via the `scikit-learn` library:

```python
from sklearn.datasets import load_iris
data = load_iris()
```

## 🔧 Tech Stack

- **Data Analysis & Visualization:** pandas, seaborn, matplotlib  
- **Modeling:** TensorFlow and Keras  
- **Backend:** Flask REST API  
- **Frontend:** React with Tailwind CSS and Axios  

---

## 📁 Project Structure

- **model_training/**  
  Contains the trained model file, scaler, and Jupyter notebook for training and exploration.  
- **backend/**  
  Flask API source code for serving predictions.  
- **frontend/**  
  React application for user interaction and visualization.  
- **data/**  
  Contains the original Iris dataset file.  
- **README.md**  
  Project documentation.

---

## 📊 1. Data Exploration & Visualization

The Iris dataset includes 150 samples divided into three species. The main features are Sepal Length, Sepal Width, Petal Length, Petal Width, and the target species.

Visualizations include:  
- Pairplot showing feature comparisons across species  
- Heatmap illustrating feature correlations  
- KDE plots to display feature distributions grouped by species  

---

## 🤖 2. Model Training (TensorFlow/Keras)

- Target labels are encoded with LabelBinarizer.  
- Features are normalized using MinMaxScaler.  
- The neural network consists of one hidden layer with four neurons using ReLU activation and an output layer with three neurons using Softmax for classification.  
- The model is trained using the Adam optimizer, categorical cross-entropy loss, and accuracy metrics, with early stopping enabled to prevent overfitting.  
- Outputs include the trained model file, scaler file, and accuracy/loss visualizations.

---

## 🧪 3. Prediction Function

The prediction function accepts user input features, scales them, and uses the trained model to classify the species. It returns one of the three Iris species as the output.

---

## 🌐 4. Flask REST API

- **Endpoints:**  
  - GET `/` for a health check  
  - POST `/predict` to submit flower measurements and receive predicted species

- Sample input includes the four botanical measurements.  
- The API responds with the predicted species name.

- To run the API, install required dependencies and start the Flask server.

---

## 💻 5. React Frontend

- The frontend provides a clean, modern, and responsive UI.  
- Users can input flower measurements and get real-time predictions.  
- Features include input validation, toggleable dark mode, and seamless API integration using Axios.  
- Instructions to install dependencies and start the React app are provided.

---

## 🚀 Getting Started

1. Clone the repository.  
2. Train the model by running the Jupyter notebook in the model_training folder.  
3. Start the Flask backend API.  
4. Launch the React frontend.  
5. Access the app via localhost in your browser.

---

## 🛠 Technologies Used

| Layer        | Tools                                  |
|--------------|---------------------------------------|
| Data/EDA     | pandas, seaborn, matplotlib            |
| Modeling     | TensorFlow, Keras, scikit-learn        |
| API          | Flask, joblib, numpy, pandas           |
| Frontend     | React, Tailwind CSS, Axios              |

---

## 🧪 Sample Prediction

Given an input of sepal and petal measurements, the application predicts the species of the Iris flower accurately.

---

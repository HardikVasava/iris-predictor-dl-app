import React, { useState } from 'react';
import axios from 'axios';
import { HiOutlineRefresh } from 'react-icons/hi';

function App() {
  const [formData, setFormData] = useState({
    sepal_length: '',
    sepal_width: '',
    petal_length: '',
    petal_width: ''
  });

  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Allow only float values
    if (value === '' || !isNaN(value)) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all values are positive and floats
    if (Object.values(formData).some(value => value <= 0 || value === '')) {
      setError('Please enter valid positive float values.');
      return;
    }

    setError('');
    setPrediction('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setPrediction(response.data.prediction);
    } catch (err) {
      setError('Failed to fetch prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-indigo-500 to-blue-500'} min-h-screen flex items-center justify-center transition-all duration-300`}>
      <div className={`w-full max-w-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-3xl font-semibold text-indigo-600 dark:text-indigo-300`}>Iris Flower Prediction</h1>
          <button
            className="p-2 bg-indigo-600 text-white rounded-full dark:bg-indigo-300 dark:text-gray-900 hover:scale-105 transition-all duration-300"
            onClick={toggleDarkMode}
          >
            {darkMode ? '🌙' : '🌞'}
          </button>
        </div>

        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {['sepal_length', 'sepal_width', 'petal_length', 'petal_width'].map((field, idx) => (
              <div key={idx} className="input-group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {field.replace('_', ' ').toUpperCase()}
                </label>
                <input
                  type="number"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  step="any"
                  className={`w-full p-4 bg-transparent border-2 ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} text-gray-900 dark:text-white rounded-xl shadow-lg transform focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500`}
                  placeholder={`Enter ${field.replace('_', ' ').toUpperCase()}`}
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className={`w-full py-3 px-4 text-white rounded-xl shadow-md transform transition-all duration-300 ${loading ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700'}`}
              disabled={loading}
            >
              {loading ? (
                <div className="w-full text-center">
                  <div className="animate-spin border-t-2 border-white w-6 h-6 rounded-full mx-auto"></div>
                </div>
              ) : (
                'Predict'
              )}
            </button>
          </form>

          {error && (
            <div className="text-center text-red-500 mt-4">
              <p>{error}</p>
            </div>
          )}

          {prediction && (
            <div className="text-center text-lg font-semibold text-indigo-700 mt-6">
              <h2>Predicted Flower: <span className="text-xl font-bold">{prediction}</span></h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

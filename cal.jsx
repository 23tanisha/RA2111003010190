import React, { useState } from 'react';

// Replace with the actual base URL of your API
const API_BASE_URL = 'http://20.244.56.144/test';

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch numbers from the backend
  const fetchNumbers = async (endpoint) => {
    setLoading(true);
    setError('');

    try {
      // Corrected template literal usage
      const response = await fetch(${API_BASE_URL}/${endpoint});
      if (!response.ok) {
        // Corrected template literal usage
        throw new Error(HTTP error! status: ${response.status});
      }
      const data = await response.json();
      return data.numbers;
    } catch (e) {
      // Corrected template literal usage
      setError(Failed to fetch numbers: ${e.message});
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Calculate average of the numbers
  const calculateAverage = (nums) => {
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return sum / nums.length || 0;
  };

  // Update the list of numbers and the average
  const updateNumbers = (newNumbers) => {
    const updatedNumbers = [...new Set([...numbers, ...newNumbers])].slice(-10); // Keeping only the last 10 unique numbers
    setNumbers(updatedNumbers);
    setAverage(calculateAverage(updatedNumbers));
  };

  // Handle button clicks to fetch different types of numbers
  const handleFetchNumbers = async (type) => {
    const newNumbers = await fetchNumbers(type);
    if (newNumbers.length) {
      updateNumbers(newNumbers);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      {['primes', 'fibo', 'even', 'rand'].map((type) => (
        <button key={type} onClick={() => handleFetchNumbers(type)} disabled={loading}>
          Get {type.charAt(0).toUpperCase() + type.slice(1)} Numbers
        </button>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h2>Numbers:</h2>
        {numbers.join(', ')}
      </div>
      <div>
        <h2>Average:</h2>
        {average.toFixed(2)}
      </div>
    </div>
  );
};

export default AverageCalculator;
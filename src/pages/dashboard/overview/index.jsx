import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';

const Overview = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const [countResponse, productsResponse, profileResponse] = await Promise.all([
        axios.get('https://advert-app-back.onrender.com/products/count'),
        axios.get('https://advert-app-back.onrender.com/users/me/products'),
        axios.get('https://advert-app-back.onrender.com/users/profile'),
      ]);

      return {
        productCount: countResponse.data,
        userProducts: productsResponse.data,
        userProfile: profileResponse.data,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data.');
      
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Prepare data for charts
  const prepareChartData = (userProducts) => {
    const labels = userProducts.map(product => product.title);
    const data = userProducts.map(product => product.price); // Example: using price for bar chart

    // Prepare data for pie chart (assuming product categories exist)
    const productCategories = userProducts.map(product => product.category);
    const uniqueCategories = [...new Set(productCategories)];
    const pieData = uniqueCategories.map(category => ({
      label: category,
      data: userProducts.filter(product => product.category === category).length,
    }));

    return {
      labels,
      data,
      pieData,
    };
  };

  // Fetch and prepare data on component mount
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        if (data) {
          const preparedData = prepareChartData(data.userProducts);
          setChartData(preparedData);
        }
      } catch (error) {
        if (error.response) {
          // Handle specific error based on response status code
          setError(`Error fetching data: ${error.response.data.message}`);
        } else {
          // Handle generic network errors
          setError('Error fetching data. Please check your network connection.');
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Render loading, error, or chart data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      {chartData && (
        <>
          <h2>Product Prices</h2>
          <Bar
            data={{
              labels: chartData.labels,
              datasets: [{
                label: 'Product Prices',
                data: chartData.data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              }],
            }}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />

          <h2>Product Category Distribution</h2>
          <Pie
            data={{
              labels: chartData.pieData.map(category => category.label),
              datasets: [{
                data: chartData.pieData.map(category => category.data),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Replace with appropriate colors
              }],
            }}
            options={{
              responsive: true,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Overview;
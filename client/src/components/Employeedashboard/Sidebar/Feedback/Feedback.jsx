import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2'; // Import Line from react-chartjs-2
import './Feedback.css';

const Feedback = () => {
  // Dummy data for Doughnut charts
  const feedbackData = {
    labels: ['Positive', 'Improvement', 'Appreciation'],
    datasets: [
      {
        data: [20, 30, 50],
        backgroundColor: ['#14F33D', '#F38714', '#1468F3'],
      },
    ],
  };

  // Dummy data for Line chart
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Feedback Trends',
        data: [10, 25, 20, 35, 30, 45],
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <div className='fc'>
        <div className='chart'>
          <div className='first'>
            <h2>Feedback Received</h2>
            <Doughnut data={feedbackData} />
          </div>

          <div className='second'>
            <h2>Feedback Submitted</h2>
            <Doughnut data={feedbackData} />
          </div>

       
          <div className='third'>
            <h2>Feedback Trends</h2>
            <Line data={lineChartData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Feedback.css'; 
const Feedback = () => {
  // Dummy data
  const feedbackData = {
    labels: ['Positive', 'Improvement', 'Appreciation'],
    datasets: [
      {
        data: [20, 30, 50],
        backgroundColor: ['#14F33D', '#F38714', '#1468F3'],
      },
    ],
  };

  return (
    <>
    <div className='chart'>

      <div className='first'>
        <h2>Feedback Received</h2>
        <Doughnut data={feedbackData} />
      </div>

      <div className='second'>
        <h2>Feedback Submitted</h2>
        <Doughnut data={feedbackData} />
      </div>
    </div>
    </>
  );
};

export default Feedback;

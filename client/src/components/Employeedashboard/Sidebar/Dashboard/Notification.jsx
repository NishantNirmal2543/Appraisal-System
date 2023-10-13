import React from 'react';

const notifications = [
  { id: 1, text: 'New message from John', icon: '📬' },
  { id: 2, text: 'You have 5 new emails', icon: '📧' },
  { id: 3, text: 'Reminder: Meeting at 2 PM', icon: '📅' },
];

const Dashboard = () => {
  return (
    
    <div style={dashboardStyles}>
     
      <div style={notificationContainerStyles}>
        {notifications.map((notification) => (
          <div key={notification.id} style={notificationCardStyles}>
            <div style={iconStyles}>{notification.icon}</div>
            <div>{notification.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const dashboardStyles = {
  margin:'10px',
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
  padding:'10px',
  marginBottom: 'auto',
};

const notificationContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',


};

const notificationCardStyles = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  // marginBottom: '10px',
   width: '200px',

 
};

const iconStyles = {
  fontSize: '24px',
  marginRight: '10px',
};

export default Dashboard;

import React, { useState } from 'react';

const Notification = ({ notifications }) => {
  const [showDialog, setShowDialog] = useState(false);

  const notificationCount = notifications.length;

  const handleBellClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div style={dashboardStyles}>
      <div style={notificationContainerStyles}>
        <div style={notificationCountStyles} onClick={handleBellClick}>
          {notificationCount > -1 && (
            <span>
              <i className="fas fa-bell"></i> {notificationCount}
            
            </span>
          )}
        </div>
        
      </div>
      {showDialog && 
       <div style={dialogOverlayStyles} onClick={handleCloseDialog}>
       <div style={dialogStyles}>
       {notifications.map((notification) => (
          <div key={notification.id} style={notificationCardStyles}>
            <div style={iconStyles}>{notification.icon}</div>
            <div>{notification.message}</div>
          </div>
        ))}
       </div>
     </div>}
    </div>
  );
};



const dashboardStyles = {
  margin: '10px',
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
  padding: '10px',
  marginBottom: 'auto',
  


};

const notificationContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const notificationCountStyles = {
  marginBottom: '10px',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const notificationCardStyles = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  width: '200px',
};

const iconStyles = {
  fontSize: '24px',
  marginRight: '10px',
};

const dialogOverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const dialogStyles = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  padding: '20px',
};

export default Notification;

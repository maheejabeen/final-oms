import { useState } from "react";

function SmartNotifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "medicine", title: "Medicine Reminder", message: "Time to take Paracetamol 500mg", time: "2 hours ago", read: false, priority: "high" },
    { id: 2, type: "appointment", title: "Upcoming Appointment", message: "Appointment with Dr. Smith tomorrow at 10:00 AM", time: "5 hours ago", read: false, priority: "medium" },
    { id: 3, type: "report", title: "Test Results Ready", message: "Your blood test results are now available", time: "1 day ago", read: true, priority: "medium" },
    { id: 4, type: "health", title: "Health Tip", message: "Remember to drink 8 glasses of water daily", time: "2 days ago", read: true, priority: "low" },
    { id: 5, type: "medicine", title: "Prescription Refill", message: "Your Amlodipine prescription expires in 3 days", time: "3 days ago", read: false, priority: "high" }
  ]);

  const [settings, setSettings] = useState({
    medicineReminders: true,
    appointmentAlerts: true,
    healthTips: true,
    testResults: true,
    emergencyAlerts: true
  });

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const toggleSetting = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'medicine': return '💊';
      case 'appointment': return '📅';
      case 'report': return '📈';
      case 'health': return '🌱';
      default: return '🔔';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#ff4757';
      case 'medium': return '#ffa502';
      case 'low': return '#2ed573';
      default: return '#747d8c';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <h1>🔔 Smart Notifications</h1>
        <p>Stay updated with your health reminders and alerts</p>
        
        <div className="notification-stats">
          <div className="stat">
            <span className="stat-number">{notifications.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-number">{unreadCount}</span>
            <span className="stat-label">Unread</span>
          </div>
        </div>

        <div className="notification-actions">
          <button onClick={markAllAsRead} className="action-btn">
            ✓ Mark All Read
          </button>
          <button onClick={clearAll} className="action-btn danger">
            🗑️ Clear All
          </button>
        </div>
      </div>

      <div className="notifications-content">
        {/* Notifications List */}
        <div className="notifications-list">
          <h3>📨 Recent Notifications</h3>
          
          {notifications.length === 0 ? (
            <div className="no-notifications">
              <p>🎉 No notifications! You're all caught up.</p>
            </div>
          ) : (
            notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${!notification.read ? 'unread' : ''}`}
              >
                <div className="notification-icon">
                  {getNotificationIcon(notification.type)}
                </div>
                
                <div className="notification-content">
                  <div className="notification-header">
                    <h4>{notification.title}</h4>
                    <div 
                      className="priority-indicator"
                      style={{ backgroundColor: getPriorityColor(notification.priority) }}
                    ></div>
                  </div>
                  <p>{notification.message}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
                
                <div className="notification-actions">
                  {!notification.read && (
                    <button 
                      onClick={() => markAsRead(notification.id)}
                      className="mark-read-btn"
                    >
                      ✓
                    </button>
                  )}
                  <button 
                    onClick={() => deleteNotification(notification.id)}
                    className="delete-btn"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Notification Settings */}
        <div className="notification-settings">
          <h3>⚙️ Notification Settings</h3>
          
          <div className="settings-list">
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.medicineReminders}
                  onChange={() => toggleSetting('medicineReminders')}
                />
                💊 Medicine Reminders
              </label>
            </div>
            
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.appointmentAlerts}
                  onChange={() => toggleSetting('appointmentAlerts')}
                />
                📅 Appointment Alerts
              </label>
            </div>
            
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.healthTips}
                  onChange={() => toggleSetting('healthTips')}
                />
                🌱 Health Tips
              </label>
            </div>
            
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.testResults}
                  onChange={() => toggleSetting('testResults')}
                />
                📈 Test Results
              </label>
            </div>
            
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.emergencyAlerts}
                  onChange={() => toggleSetting('emergencyAlerts')}
                />
                🆘 Emergency Alerts
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartNotifications;

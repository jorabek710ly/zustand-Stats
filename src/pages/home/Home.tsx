import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Dashboard</h1>

      <div className="cards-container">
        <div className="card">
          <h2 className="card-title">Your Profile</h2>
          <p className="card-desc">
            View and edit your personal information, change password, and manage your settings.
          </p>
          <button className="card-btn">Go to Profile</button>
        </div>

        <div className="card">
          <h2 className="card-title">Statistics</h2>
          <p className="card-desc">
            See real-time statistics, analyze user data, and monitor your activity.
          </p>
          <button className="card-btn">View Stats</button>
        </div>

        <div className="card">
          <h2 className="card-title">Support</h2>
          <p className="card-desc">
            Need help? Contact our support team or browse the documentation for answers.
          </p>
          <button className="card-btn">Get Support</button>
        </div>
      </div>

     
    </div>
  );
};

export default React.memo(Home);

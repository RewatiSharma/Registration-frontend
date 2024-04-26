import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate(); 
  const RegisterClick = () => {
    navigate('/RegistrationForm');
  };

  const BatchClick = () => {
    navigate('/batchmaster');
  };

  const ManagerClick = () => {
    navigate('/batchmanager');
  };

  return (
    <div className="dashboard">
      <div className="center">
        <h2>BANGLORE COMPUTER EDUCATION</h2>
      </div>
      <div className="cards">
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInX6JdDPhSqCxISURtFF9e2Hdkfvh1jB07g&s"
            alt="Card 1"
          />
          <button onClick={RegisterClick}>Register Now</button>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInX6JdDPhSqCxISURtFF9e2Hdkfvh1jB07g&s"
            alt="Card 2"
          />
          <button onClick={BatchClick}>Batch Creation</button>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInX6JdDPhSqCxISURtFF9e2Hdkfvh1jB07g&s"
            alt="Card 3"
          />
          <button onClick={ManagerClick}>Batch Manager</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
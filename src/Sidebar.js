import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-view">
      <header className="header-bar">
        <h1 className="page-title">Dashboard</h1>
        <div className="header-right">
          <button className="comm-btn">COMMUNITY</button>
          <div className="profile-box">
            <div className="avatar-circle"></div>
            <div className="user-text"><span className="uname">admin</span></div>
          </div>
        </div>
      </header>

      <div className="summary-grid">
        <div className="card-item main-stat">
          <label>Total Projects</label>
          <h2>6</h2>
          <div className="findings-pill">Total findings: 322</div>
        </div>
        <div className="card-item">
          <label>All Open issues</label>
          <h2>322</h2>
        </div>
      </div>

      <section className="projects-section">
        <h3>Projects</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Owner</th>
              <th>Risk Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>💻 sast-deserialization-main</td>
              <td>admin</td>
              <td><span className="risk-badge high">High</span></td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Dashboard;
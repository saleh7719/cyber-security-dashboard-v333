import React from 'react';
import './App.css';

function App() {
  const alerts = [
    { id: "AL-1024", type: "SQL Injection Attempt", severity: "Critical", status: "Blocked" },
    { id: "AL-1025", type: "Unauthorized Access", severity: "High", status: "Investigating" },
    { id: "AL-1026", type: "Malware Signature Detected", severity: "Medium", status: "Quarantined" }
  ];

  return (
    <div className="cyber-dashboard">
      <div className="sidebar">
        <div className="logo">CYBER-CORE v3</div>
        <nav>
          <div className="nav-item active">Live Monitor</div>
          <div className="nav-item">Network Map</div>
          <div className="nav-item">Threat Intelligence</div>
          <div className="nav-item">Settings</div>
        </nav>
      </div>

      <main className="content">
        <header className="header">
          <h2>Security Operations Center</h2>
          <div className="system-status">Network Status: <span className="secure">Protected</span></div>
        </header>

        <div className="metrics">
          <div className="card">
            <h3>Blocked Attacks</h3>
            <p className="value">2,841</p>
          </div>
          <div className="card alert-glow">
            <h3>Active Threats</h3>
            <p className="value">0</p>
          </div>
          <div className="card">
            <h3>Uptime Score</h3>
            <p className="value">99.98%</p>
          </div>
        </div>

        <section className="alerts-section">
          <h3>Real-time Security Logs</h3>
          <table className="alerts-table">
            <thead>
              <tr>
                <th>Alert ID</th>
                <th>Threat Type</th>
                <th>Severity</th>
                <th>Action Taken</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr key={index}>
                  <td>{alert.id}</td>
                  <td>{alert.type}</td>
                  <td className={alert.severity.toLowerCase()}>{alert.severity}</td>
                  <td>{alert.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
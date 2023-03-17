import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="profile">
          <img
            className="doggo"
            src="C:\Users\HP\Desktop\javascript\Project\pet-care\src\doggos.png"
            alt="cute-potato"
          />
          <h3>Nduhiu Muthoni</h3>
          <p>Software Developer</p>
          <ul>
            <li>
              <Link to="/" className="active">
                <span className="icon">
                  <i className="fas fa-home"></i>
                </span>
                <span className="item">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <span className="icon">
                  <i className="fas fa-desktop"></i>
                </span>
                <span className="item">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/pet-details">
                <span className="icon">
                  <i className="fas fa-user-friends"></i>
                </span>
                <span className="item">Pet Details</span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span className="icon">
                  <i className="fas fa-tachometer-alt"></i>
                </span>
                <span className="item">Services</span>
              </Link>
            </li>
            <li>
              <Link to="/service-providers">
                <span className="icon">
                  <i className="fas fa-database"></i>
                </span>
                <span className="item">Service Providers</span>
              </Link>
            </li>
            <li>
              <Link to="/appointments">
                <span className="icon">
                  <i className="fas fa-user-shield"></i>
                </span>
                <span className="item">Appointments</span>
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <span className="icon">
                  <i className="fas fa-cog"></i>
                </span>
                <span className="item">About Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

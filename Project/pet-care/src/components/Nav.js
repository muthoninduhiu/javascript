export default function Nav(){
  return(      
    <div className="wrapper">
      <div className="sidebar">
          <div className="profile">
              <img className="doggo" src='C:\Users\HP\Desktop\javascript\Project\pet-care\src\doggos.png' alt="cute-potato"/>
              <h3>Nduhiu Muthoni</h3>
              <p>Software Developer</p>
              <ul>
                  <li>
                      <a href="#" className="active">
                          <span className="icon"><i className="fas fa-home"></i></span>
                          <span className="item">Home</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="icon"><i className="fas fa-desktop"></i></span>
                          <span className="item">Dashboard</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="icon"><i className="fas fa-user-friends"></i></span>
                          <span className="item">Pet Details</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="icon"><i className="fas fa-tachometer-alt"></i></span>
                          <span className="item">Services</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="icon"><i className="fas fa-database"></i></span>
                          <span className="item">Service Providers</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="icon"><i className="fas fa-user-shield"></i></span>
                          <span className="item">Appointments</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span className="icon"><i className="fas fa-cog"></i></span>
                          <span className="item">About Us</span>
                      </a>
                  </li>
              </ul>
          </div>
    </div>
    </div>
  );
}

export default function ProfileCard() {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h3>Profile</h3>
          </div>
          <div className="card-body">
            <p>View and manage your profile information here.</p>
            <Link to="/profile" className="btn btn-primary">
              Go to Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
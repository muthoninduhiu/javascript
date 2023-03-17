import React from 'react';
import { Link } from 'react-router-dom';

function BillingCard() {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">
          <h3>Billing</h3>
        </div>
        <div className="card-body">
          <p>View and manage your billing and payment information here.</p>
          <Link to="/billing" className="btn btn-primary">
            Go to Billing
          </Link>
        </div>
      </div>
    </div>
  );
}


export { BillingCard};

import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceProviders() {
  // Define some mock service providers data
  const serviceProviders = [
    {
      id: 1,
      name: "Pet Sitters Inc.",
      description: "Professional pet sitters available 24/7",
      rating: 4.8,
      imageUrl: "https://via.placeholder.com/150",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Dog Walkers United",
      description: "Trained dog walkers for all breeds and sizes",
      rating: 4.5,
      imageUrl: "https://via.placeholder.com/150",
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      name: "Cat Care Club",
      description: "Expert cat sitters and care services",
      rating: 4.9,
      imageUrl: "https://via.placeholder.com/150",
      location: "Chicago, IL"
    }
  ];

  return (
    <div>
      <h2>Service Providers</h2>
      <p>Find and book trusted pet service providers here.</p>
      <div className="row">
        {serviceProviders.map(provider => (
          <div key={provider.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={provider.imageUrl} alt={provider.name} />
              <div className="card-body">
                <h4>{provider.name}</h4>
                <p>{provider.description}</p>
                <p>Location: {provider.location}</p>
                <p>Rating: {provider.rating} / 5.0</p>
                <Link to={`/service-providers/${provider.id}`} className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


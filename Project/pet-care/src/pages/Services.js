import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Pet Grooming',
      description: 'Get your pet looking their best with our grooming services.',
      price: 50,
      availability: [
        {
          date: '2023-04-01',
          times: ['10:00 AM', '2:00 PM']
        },
        {
          date: '2023-04-02',
          times: ['11:00 AM', '3:00 PM']
        },
        {
          date: '2023-04-03',
          times: ['9:00 AM', '1:00 PM']
        }
      ]
    },
    {
      id: 2,
      name: 'Dog Walking',
      description: 'We offer dog walking services to help keep your pet active and healthy.',
      price: 25,
      availability: [
        {
          date: '2023-04-01',
          times: ['9:00 AM', '1:00 PM', '5:00 PM']
        },
        {
          date: '2023-04-02',
          times: ['10:00 AM', '2:00 PM', '6:00 PM']
        },
        {
          date: '2023-04-03',
          times: ['11:00 AM', '3:00 PM', '7:00 PM']
        }
      ]
    }
  ]);

  const bookService = (serviceId, date, time) => {
    // Implement the booking logic here
    console.log(`Booked service ${serviceId} on ${date} at ${time}`);
  };

  return (
    <div>
      <h2>Services</h2>
      <p>Book pet services such as grooming and walking here.</p>
      {services.map((service) => (
        <div key={service.id} className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">{service.name}</h3>
            <p className="card-text">{service.description}</p>
            <p className="card-text">Price: ${service.price}</p>
            <h4>Availability:</h4>
            {service.availability.map((available) => (
              <div key={available.date}>
                <p>{available.date}</p>
                <ul>
                  {available.times.map((time) => (
                    <li key={time}>
                      <button
                        className="btn btn-primary"
                        onClick={() => bookService(service.id, available.date, time)}
                      >
                        {time}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}



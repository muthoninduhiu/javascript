import { useState } from 'react';
export default function Appointment() {
    const [pet, setPet] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle form submission here
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Add a new appointment</h3>
        <label htmlFor="pet">Pet:</label>
        <select id="pet" name="pet" value={pet} onChange={(e) => setPet(e.target.value)} required>
          <option value="">Select a pet</option>
          {/* Options will be added dynamically using JavaScript */}
        </select>
        <label htmlFor="service">Service:</label>
        <input
          type="text"
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Appointment</button>
      </form>
    );
  }
  
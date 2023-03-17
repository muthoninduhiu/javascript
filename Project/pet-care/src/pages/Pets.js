import { useState } from 'react';
export default function Pets() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");
    const [owner, setOwner] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle form submission here
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Add a new pet</h3>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <label htmlFor="owner">Owner:</label>
        <input
          type="text"
          id="owner"
          name="owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          required
        />
        <button type="submit">Add Pet</button>
      </form>
    );
  }
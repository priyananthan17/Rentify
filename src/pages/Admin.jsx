import React, { useState } from 'react';
import "../styles/Admin.css";
export default function Admin() {
  const [formData, setFormData] = useState({
    id: '',
    img: '',
    name: '',
    price: '',
    model: '',
    mileage: '',
    page: '',
    // Add more fields here if needed
  });

  const [nextId, setNextId] = useState(1); // Initial ID value

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a new ID and increment it
    const newId = nextId;
    setNextId(prevId => prevId + 1);

    // Do something with the form data, like submitting it to a server
    console.log({ id: newId, ...formData });
    // You can reset the form fields here if needed
    setFormData({
      id: '',
      img: '',
      name: '',
      price: '',
      model: '',
      mileage: ''
      // Reset other form fields if any
    });
  };

  return (
    <div className="form-container"> {/* Added class for styling */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="img">Image:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="text"
            id="mileage"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="page">Page:</label>
          <input
            type="text"
            id="page"
            name="page"
            value={formData.page}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
  );
};
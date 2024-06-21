import React, { useState } from 'react';

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: false,
    guestName: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email address is invalid';
    if (!formData.age) errors.age = 'Age is required';
    else if (isNaN(formData.age) || formData.age <= 0) errors.age = 'Age must be a number greater than 0';
    if (formData.attendingWithGuest && !formData.guestName) errors.guestName = 'Guest name is required';

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-400">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-white"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-white"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-white"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Are you attending with a guest?</label>
          <input
            type="checkbox"
            name="attendingWithGuest"
            checked={formData.attendingWithGuest}
            onChange={handleChange}
          />
        </div>

        {formData.attendingWithGuest && (
          <div className="mb-4">
            <label className="block mb-2">Guest Name:</label>
            <input
              type="text"
              name="guestName"
              value={formData.guestName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg bg-white"
            />
            {errors.guestName && <p className="text-red-500 text-sm">{errors.guestName}</p>}
          </div>
        )}

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventRegistrationForm;

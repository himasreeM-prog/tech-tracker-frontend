import React, { useState } from 'react';
import api from '../api';

const LearningForm = ({ onItemAdded }) => {
  const [item, setItem] = useState({
    title: '',
    description: '',
    status: 'Not Started',
    progress: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/', item);
    setItem({ title: '', description: '', status: 'Not Started', progress: 0 });
    onItemAdded(); // refresh list
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Learning Item</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={item.title}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="description"
        placeholder="Description"
        value={item.description}
        onChange={handleChange}
      />
      <br />
      <select name="status" value={item.status} onChange={handleChange}>
        <option>Not Started</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <br />
      <input
        type="number"
        name="progress"
        value={item.progress}
        onChange={handleChange}
        min="0"
        max="100"
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default LearningForm;

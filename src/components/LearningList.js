import React, { useEffect, useState } from 'react';
import api from '../api';

const LearningList = ({ refreshTrigger }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await api.get('/');
    setItems(res.data);
  };

  const handleDelete = async (id) => {
    await api.delete(`/${id}`);
    fetchItems(); // Refresh after delete
  };

  useEffect(() => {
    fetchItems();
  }, [refreshTrigger]);

  return (
    <div>
      <h3>All Learning Items</h3>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong> - {item.status} - {item.progress}%
              <br />
              <em>{item.description}</em>
              <br />
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LearningList;

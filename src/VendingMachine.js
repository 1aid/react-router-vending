import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
  const snacks = [
    { id: 1, name: 'Chips' },
    { id: 2, name: 'Soda' },
    { id: 3, name: 'Candy' },
  ];

  return (
    <div>
      <h1>Welcome to the Vending Machine</h1>
      <ul>
        {snacks.map((snack) => (
          <li key={snack.id}>
            <Link to={`/snack/${snack.id}`}>{snack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendingMachine;
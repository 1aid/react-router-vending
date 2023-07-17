import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Snack = () => {
  const { id } = useParams();
  // You can fetch snack details from an API or use a hard-coded list
  const snacks = [
    { id: 1, name: 'Chips', description: 'Delicious potato chips' },
    { id: 2, name: 'Soda', description: 'Refreshing soda drink' },
    { id: 3, name: 'Candy', description: 'Assorted candy treats' },
  ];

  const snack = snacks.find((snack) => snack.id === parseInt(id));

  if (!snack) {
    return <div>Snack not found</div>;
  }

  return (
    <div>
      <h2>{snack.name}</h2>
      <p>{snack.description}</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack;
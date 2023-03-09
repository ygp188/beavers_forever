import React, { useState } from 'react';
import BeaverForm from './BeaverForm';
import OneBeaver from './OneBeaver';

export default function BeaversPage({ beavers, currentUser }) {
  const [allBeavers, setAllBeavers] = useState(beavers);

  const deleteHandler = async (id) => {
    await fetch(`/api/beavers/${id}`, { method: 'DELETE' });
    setAllBeavers((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div>
      {currentUser ? (
        <>
          <BeaverForm setAllBeavers={setAllBeavers} />
          <div className="row">{allBeavers?.map((el) => <OneBeaver key={el.id} beaver={el} deleteHandler={deleteHandler} />)}</div>
        </>
      )
        : <h4>Товарищ бобер, залогиньтесь!</h4>}
    </div>
  );
}

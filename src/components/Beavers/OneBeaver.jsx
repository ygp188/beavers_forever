import React from 'react';

export default function OneBeaver({ beaver, deleteHandler }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={beaver.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{beaver.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        <button className="btn btn-danger" type="button" onClick={() => deleteHandler(beaver.id)}>Run away</button>

      </div>
    </div>
  );
}

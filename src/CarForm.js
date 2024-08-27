import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CarForm({ onSubmit, editingCar }) {
  const [vehicle, setVehicle] = useState('');
  const [wheels, setWheels] = useState('');

  useEffect(() => {
    if (editingCar) {
      setVehicle(editingCar.vehicle);
      setWheels(editingCar.wheels);
    }
  }, [editingCar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(wheels) || wheels <= 0) {
      alert("Wheels must be a positive integer.");
      return;
    }
    onSubmit({ vehicle, wheels: parseInt(wheels, 10) });
    setVehicle('');
    setWheels('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Vehicle"
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Wheels"
        value={wheels}
        onChange={(e) => setWheels(e.target.value)}
        required
      />
      <button type="submit">{editingCar ? 'Update Vehicle' : 'Add Vehicle'}</button>
    </form>
  );
}

CarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  editingCar: PropTypes.shape({
    vehicle: PropTypes.string.isRequired,
    wheels: PropTypes.number.isRequired,
  }),
};

export default CarForm;

import React from 'react';
import PropTypes from 'prop-types';

function CarItem({ car, index, onDelete, onEdit }) {
  return (
    <li>
      {car.vehicle} : {car.wheels} wheels
      <button onClick={() => onEdit(index)}>Edit</button>
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  );
}

CarItem.propTypes = {
  car: PropTypes.shape({
    vehicle: PropTypes.string.isRequired,
    wheels: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default CarItem;

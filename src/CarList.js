import React from 'react';
import PropTypes from 'prop-types';
import CarItem from './CarItem';

function CarList({ cars, onDelete, onEdit }) {
  return (
    <div>
      <h2>Vehicle List</h2>
      <ul>
        {cars.map((car, index) => (
          <CarItem
            key={index}
            index={index}
            car={car}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      vehicle: PropTypes.string.isRequired,
      wheels: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default CarList;

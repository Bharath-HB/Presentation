import React, { useState } from 'react';
import CarList from './CarList';
import CarForm from './CarForm';
import './App.css';

function App() {
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const addCar = (car) => {
    if (editingCar) {
      const updatedCars = [...cars];
      updatedCars[editingIndex] = car;
      setCars(updatedCars);
      setEditingCar(null);
      setEditingIndex(null);
    } else {
      setCars([...cars, car]);
    }
  };

  const deleteCar = (index) => {
    const updatedCars = cars.filter((_, i) => i !== index);
    setCars(updatedCars);
  };

  const editCar = (index) => {
    setEditingCar(cars[index]);
    setEditingIndex(index);
  };

  return (
    <div>
      <h1>Vehicle Management</h1>
      <CarForm onSubmit={addCar} editingCar={editingCar} />
      <CarList cars={cars} onDelete={deleteCar} onEdit={editCar} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({searchTerm}) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants") 
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setPlants(data)})
    .catch((error) => console.error(error))
  }, [])



const filteredPlants = plants.filter((plant) => plant.name && plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);


const handleUpdatePlant = (updatedPlant) => {
  setPlants(plants.map((plant)=> (plant.id === updatedPlant.id ? updatedPlant : plant)));
}

  return (
    <div>
     
    <ul className="cards">
      {filteredPlants.map(plant => (
        <PlantCard key={plant.id} plant = {plant} onUpdatePlant={handleUpdatePlant}/>
      ))}
      </ul>
    </div>);
}

export default PlantList;

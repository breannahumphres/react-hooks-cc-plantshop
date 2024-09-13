import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {

  const [searchTerm, setSearchTerm] = useState('');
  const [plants, setPlants] = useState([]);

  const handleAddPlant = (newPlant) => {
    setPlants([newPlant, ...plants]);
  };


  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <main>
     
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;

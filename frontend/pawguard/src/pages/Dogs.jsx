import { useEffect, useState } from "react";
import { getDogs, addDog, deleteDog, updateDog } from "../services/api";
import Navbar from "../components/Navbar";
import DogForm from "../components/DogForm";
import "../styles/dogs.css";

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [editingDog, setEditingDog] = useState(null);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = () => {
    getDogs().then((data) => setDogs(data));
  };

  const addNewDog = async (dog) => {
    await addDog(dog);
    fetchDogs();
  };

  const handleEditClick = (dog) => {
    setEditingDog(dog);
  };

  const saveUpdatedDog = async (dogData) => {
    if (!editingDog?.id) return;
    await updateDog(editingDog.id, dogData);
    setEditingDog(null);
    fetchDogs();
  };

  const handleDelete = async (id) => {
    await deleteDog(id);
    fetchDogs();
  };

  return (
    <div className="dogs-page">
      <Navbar />

      <DogForm 
        onSubmit={editingDog ? saveUpdatedDog : addNewDog} 
        initialData={editingDog} 
      />

      <ul className="dog-list">
        {dogs.map((dog) => (
          <li key={dog.id}>
            {dog.name} - {dog.breed} - {dog.owner}
            <div className="button-group">
                <button onClick={() => handleEditClick(dog)}>Edit</button>
                <button onClick={() => handleDelete(dog.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
import { useState, useEffect } from "react"; // Added useEffect

export default function DogForm({ onSubmit, initialData }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setBreed(initialData.breed);
      setAge(initialData.age);
      setOwner(initialData.owner);
    } else {
      setName("");
      setBreed("");
      setAge("");
      setOwner("");
    }
  }, [initialData]);

  const submitForm = () => {
    if (!name || !breed || !age || !owner) {
      alert("Please fill all fields");
      return;
    }

    onSubmit({ name, breed, age, owner });

    setName("");
    setBreed("");
    setAge("");
    setOwner("");
  };

  return (
    <div className="dog-form">
      <h3>{initialData ? "Edit Dog Details" : "Add New Dog"}</h3>
      <input placeholder="Dog Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
      <input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <input placeholder="Owner" value={owner} onChange={(e) => setOwner(e.target.value)} />

      <button onClick={submitForm}>
        {initialData ? "Save Changes" : "Add Dog"}
      </button>
      
      {initialData && (
        <button onClick={() => window.location.reload()} style={{backgroundColor: 'gray'}}>
          Cancel
        </button>
      )}
    </div>
  );
}
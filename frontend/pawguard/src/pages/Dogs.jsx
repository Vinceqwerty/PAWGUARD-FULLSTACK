import { useEffect, useState } from "react";
import { getDogs, addDog, deleteDog } from "../services/api";
import Navbar from "../components/Navbar";
import DogForm from "../components/DogForm";

export default function Dogs(){

const [dogs,setDogs] = useState([]);

useEffect(()=>{

 getDogs().then(data=>setDogs(data))

},[])

const addNewDog = async (dog) => {

 await addDog(dog);

 const updated = await getDogs();

 setDogs(updated);

};

return(

<div>

<Navbar />

<h2>Dogs</h2>

<DogForm onSubmit={addNewDog} />

<ul>

{dogs.map(dog=>(
<li key={dog.id}>

{dog.name} - {dog.breed}

<button onClick={()=>deleteDog(dog.id)}>
Delete
</button>

</li>
))}

</ul>

</div>

)

}

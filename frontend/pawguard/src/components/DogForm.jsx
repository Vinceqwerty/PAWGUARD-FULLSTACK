import { useState } from "react";

export default function DogForm({onSubmit}){

 const [name,setName] = useState("");
 const [breed,setBreed] = useState("");
 const [age,setAge] = useState("");
 const [owner,setOwner] = useState("");

 const submitForm = () => {

   if(!name || !breed || !age || !owner){
     alert("Please fill all fields");
     return;
   }

   onSubmit({
     name,
     breed,
     age,
     owner
   });

   setName("");
   setBreed("");
   setAge("");
   setOwner("");

 };

 return(

   <div>

     <input
     placeholder="Dog Name"
     value={name}
     onChange={(e)=>setName(e.target.value)}
     />

     <input
     placeholder="Breed"
     value={breed}
     onChange={(e)=>setBreed(e.target.value)}
     />

     <input
     placeholder="Age"
     type="number"
     value={age}
     onChange={(e)=>setAge(e.target.value)}
     />

     <input
     placeholder="Owner"
     value={owner}
     onChange={(e)=>setOwner(e.target.value)}
     />

     <button onClick={submitForm}>
       Add Dog
     </button>

   </div>

 )

}
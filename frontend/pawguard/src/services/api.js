const API = "http://127.0.0.1:8000/api";

export const getDogs = async () => {
 const res = await fetch(`${API}/dogs/`);
 return res.json();
};

export const addDog = async (dog) => {
 await fetch(`${API}/dogs/`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(dog),
 });
};

export const updateDog = async (id, dog) => {
  await fetch(`${API}/dogs/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dog),
  });
};

export const deleteDog = async (id) => {
 await fetch(`${API}/dogs/${id}/`, {
   method: "DELETE",
 });
};

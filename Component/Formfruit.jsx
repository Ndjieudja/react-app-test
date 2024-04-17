import { useState } from "react";

export default function FormFruit({handleAdd}) {
    // state

    const [newFruit, setNewFruit] = useState("")


    // comportement
    const handlechange = (event) => {
        setNewFruit(event.target.value);
    
      }
    
    const handlesubmit = (event) => {
        event.preventDefault();
    
        const id = new Date().getTime();
        const nom = newFruit;
        const fruitAjouter = ({id, nom});
        handleAdd(fruitAjouter);
        setNewFruit("");
      }


    return (
        <form onSubmit={handlesubmit}>
            <input type="text"
                placeholder="Ajouter..."
                onChange={handlechange}
                value={newFruit}
            />
            <button>submit</button>
        </form>
    )
}
import { useState } from "react";

const MealAdder = () => {
    const [ input, setInput ] = useState("");

    const handleChange = ((event) => {
        console.log(event.target.value)
        setInput(event.target.value);
    });



    return (
        <form className="form"> 
        <label>
            Add a meal to favourites
            <input
             className="input" 
             placeholder="Enter new meal here"
             onChange={handleChange} />
        </label>
        <button className="button">Add meal</button>
        </form>
      );
}
 
export default MealAdder;
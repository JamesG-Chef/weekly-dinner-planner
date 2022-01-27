import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

const MealSelector = (meals) => {
  console.log(meals)
    let randomNumber = Math.floor(Math.random() * 7);
      return meals[randomNumber].name
    
}
  


const meals = [
  {
    name: "Cheese on toast",
    convenience: 9,
  },
  {
    name: "Chicken ceasar salad",
    convenience: 6,
  },
  {
    name: "Pasta Arrabiatta",
    convenience: 6,
  },
  {
    name: "Risotto",
    convenience: 6,
  },
  {
    name: "Steak and chips",
    convenience: 6,
  },
  {
    name: "Falafel and salad",
    convenience: 6,
  },
  {
    name: "Sunday Roast",
    convenience: 6,
  },
];

const DaysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const MealCard = (props) => {
  return <p>{props.day}: {props.meal}</p>
}

const Food = "pizza"

function App() {
  return (
    <div className="App">
     <Header bestmeal={MealSelector(meals)}/>
     <MealCard day={DaysOfWeek[2]} meal={meals[3]} />
    </div>
  );
}

export default App;

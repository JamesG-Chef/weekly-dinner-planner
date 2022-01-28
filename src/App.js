import "./App.css";
import Header from "./components/Header";
import MealCard from "./components/Mealcard"
import MealAdder from "./components/MealAdder";
import { useState } from "react";

const mealslist = [
  "Cheese on toast",
  "Chicken salad",
  "Chilli beans",
  "Fish and chips",
  "Beans on toast",
  "Tuna salad",
  "Tofu stir fry",
  "Steak and ale pie",
  "Thai curry",
  "Steak and chips",
  "Falafel wraps",
  "Fish finger sandwich",
  "Lasagne",
  "Pasta Arrabiatta",
  "Steak and chips",
  "Quesadillas",
  "Pizza",
  "Sausage and egg",
  "Beanburgers and salad",
  "Pasta carbonara",
  "Risotto",
  "Vegetable Madras",
  "Lentil and turmeric broth",
  "Pan fried polenta and eggs",
];

const MealSelector = (mealslist) => {
  let mealspicked = [];
  while (mealspicked.length !== 7) {
    let randomNumber = Math.floor(Math.random() * mealslist.length);
    if (!mealspicked.includes(mealslist[randomNumber])) {
      mealspicked.push(mealslist[randomNumber]);
    }
  }
  return mealspicked;
};

const DaysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Food = "pizza";

function App() {
  const [meals, setMeals] = useState([
    "Cheese on toast",
    "Chicken ceasar salad",
    "Pasta Arrabiatta",
    "Risotto",
    "Steak and chips",
    "Falafel and salad",
    "Sunday Roast",
  ]);

  return (
    <div className="App">
      <div className="menu-container">
        <Header />
        <MealCard day={DaysOfWeek[0]} meal={meals[0]} />
        <MealCard day={DaysOfWeek[1]} meal={meals[1]} />
        <MealCard day={DaysOfWeek[2]} meal={meals[2]} />
        <MealCard day={DaysOfWeek[3]} meal={meals[3]} />
        <MealCard day={DaysOfWeek[4]} meal={meals[4]} />
        <MealCard day={DaysOfWeek[5]} meal={meals[5]} />
        <MealCard day={DaysOfWeek[6]} meal={meals[6]} />

        <button className="generate-button"
          onClick={() => {
            const chosenMeals = MealSelector(mealslist);
            setMeals(chosenMeals);
          }}
        >
          <strong>Generate</strong>
        </button>
        <MealAdder />
      </div>
    </div>
  );
}

export default App;

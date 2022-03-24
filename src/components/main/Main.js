import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Meal from "../meal/Meal";
import "./Main.css";

function Main() {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    //get meal data form meals.json file
    fetch("meals.json")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  //   console.log(meals);
  const cartBtnHandle = (cartedMeal) => {
    const newCart = [...cart, cartedMeal.strMeal];
    setCart(newCart);
  };

  return (
    <div className="main">
      <div className="meals">
        {meals.map((meal, key) => (
          <Meal key={key} meal={meal} cartBtnHandle={cartBtnHandle}></Meal>
        ))}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default Main;

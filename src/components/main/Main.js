import React, { useEffect, useState } from "react";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../utilities/fakedb";
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
    let newCart = [];
    const isExist = cart.find(
      (mealName) => mealName.strMeal === cartedMeal.strMeal
    );
    if (!isExist) {
      newCart = [...cart, cartedMeal];
    } else {
      newCart = [...cart];
    }
    setCart(newCart);
    // console.log(cartedMeal.idMeal);
    setLocalStorageData(cartedMeal.idMeal);
    // console.log(cartedMeal);
  };
  console.log(cart);

  //get cart data from local storage
  useEffect(() => {
    const storedData = getLocalStorageData();
    const newCart = [];
    for (const data in storedData) {
      const saved = meals.find((meal) => meal.idMeal === data);
      if (saved) {
        newCart.push(saved);
      }
    }
    setCart(newCart);
    console.log(storedData);
  }, [meals]);

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

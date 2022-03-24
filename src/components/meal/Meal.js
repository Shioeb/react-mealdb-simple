import React from "react";
import "./Meal.css";

function Meal(props) {
  //   console.log(props);
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  const { cartBtnHandle } = props;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <div className="details">
        <h3>{strMeal}</h3>
        <p>{strInstructions.slice(0, 200)}</p>
      </div>
      <button onClick={() => cartBtnHandle(props.meal)}>Add to cart</button>
    </div>
  );
}

export default Meal;

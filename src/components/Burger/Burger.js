import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const getIngredients = ingredients => {
  const transformedIngredients = Object.entries(ingredients)
    .map(ingredient => {
      let ingredientComp = [];
      let ingredientCount = 0;
      while(ingredientCount < ingredient[1]) {
        ingredientComp.push(<BurgerIngredient key={ingredient[0] + ingredientCount} type={ingredient[0]} />);
        ingredientCount ++;
      }
      return ingredientComp;
    }).reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  return transformedIngredients.length === 0 ? <p>Please start adding ingredients!</p> : transformedIngredients;
}

const Burger = props => {
  const allIngredients = getIngredients(props.ingredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {allIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;
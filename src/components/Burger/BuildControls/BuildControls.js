import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
]

const BuildControls = props => {
  const {
    price,
    ingredientAdded,
    ingredientRemoved,
    disabled,
    purchasable,
    ordered
  } = props;
  
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
      {controls.map((ctrl, index) => (
        <BuildControl
          key={ctrl.label + index}
          label={ctrl.label}
          type={ctrl.type}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
      <button 
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={ordered}
      >ORDER NOW</button>
    </div>
  )};

export default BuildControls;
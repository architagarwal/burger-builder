import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const DANGER = "Danger";
const SUCCESS = "Success";
const CANCEL = "CANCEL";
const CONTINUE = "CONTINUE";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (<li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>);
    });

  return(
    <Aux>
      <h3>Your Order</h3>
      <p>Following ingredients in your burger:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType={DANGER} clicked={props.purchaseCancelled}>{CANCEL}</Button>
      <Button btnType={SUCCESS} clicked={props.purchaseContinued}>{CONTINUE}</Button>
    </Aux>
  );
}

export default OrderSummary;
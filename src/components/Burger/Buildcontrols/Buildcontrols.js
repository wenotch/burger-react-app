import React from "react";
import classes from "./Buildcontrols.module.css";
import BuilControl from "./Buildcontrol/Buildcontrol";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildcontrols = (props) => (
  <div className={classes.Buildcontrols}>
    <p>
      Current price is: <strong> {props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuilControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientremove(ctrl.type)}
        disabled={props.disabl[ctrl.type]}
      />
    ))}

    <button className={classes.OrderButton} disabled={!props.purchasable}>
      ORDER NOW
    </button>
  </div>
);
export default buildcontrols;

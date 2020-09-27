import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/Buildcontrols/Buildcontrols";

const INGREDIENT_PRICES = {
  salad: 2,
  cheese: 3,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
  };

  updatePurchase(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }
  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatecount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatecount;
    const priceAdd = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdd;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchase(updatedIngredients);
  };
  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatecount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatecount;
    const pricededuc = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - pricededuc;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchase(updatedIngredients);
  };
  render() {
    const disabledinfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledinfo) {
      disabledinfo[key] = disabledinfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientremove={this.removeIngredient}
          disabl={disabledinfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

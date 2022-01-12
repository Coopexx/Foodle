import React from "react";

import Header from "./components/Layout/Header";
import MealList from "./components/Meals/MealsList";
import MealsSummary from "./components/Layout/MealsSummary";
import Cart from "./components/Cart/Cart";

import classes from "./App.module.scss";

function App() {
    const meals = [
        {
            id: "m1",
            name: "Sushi",
            info: "Finest fish and veggies",
            price: "22.99",
            amount: 0,
        },
        {
            id: "m2",
            name: "Schnitzel",
            info: "A german specialty!",
            price: "16.50",
            amount: 0,
        },
        {
            id: "m3",
            name: "Barbecue Burger",
            info: "American, raw, meaty",
            price: "12.99",
            amount: 0,
        },
        {
            id: "m4",
            name: "Green Bowl",
            info: "Healthy...and green...",
            price: "18.99",
            amount: 0,
        },
    ];

    const addAmountHandler = (identifier, amount) => {
        for (const name of meals) {
            if (name.id === identifier) {
                name.amount += amount;
            }
        }
    };

    const filterMeals = (meals) => {
        return meals.filter((el) => el.amount > 0);
    };

    return (
        <div className={classes.app}>
            <Cart filter={filterMeals} meals={meals}></Cart>
            <Header />
            <MealsSummary />
            <MealList data={meals} addAmount={addAmountHandler} />
        </div>
    );
}

export default App;

import React from "react";
import Header from "./components/Layout/Header";
import MealList from "./components/Meals/MealsList";
import MealsSummary from "./components/Layout/MealsSummary";

import { v4 as uuidv4 } from "uuid";
import Cart from "./components/Cart/Cart";
import classes from "./App.module.scss";

function App() {
    const DUMMY_DATA = [
        { name: "Sushi", info: "Finest fish and veggies", price: "22.99" },
        { name: "Schnitzel", info: "A german specialty!", price: "16.50" },
        {
            name: "Barbecue Burger",
            info: "American, raw, meaty",
            price: "12.99",
        },
        { name: "Green Bowl", info: "Healthy...and green...", price: "18.99" },
    ];

    for (const item of DUMMY_DATA) {
        item.id = uuidv4();
    }

    return (
        <div className={classes.app}>
            <Cart></Cart>
            <Header />
            <MealsSummary />
            <MealList data={DUMMY_DATA} />
        </div>
    );
}

export default App;

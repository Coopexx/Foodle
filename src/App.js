import React, { useContext } from "react";

import Header from "./components/Layout/Header";
import MealList from "./components/Meals/MealsList";
import MealsSummary from "./components/Layout/MealsSummary";
import Cart from "./components/Cart/Cart";

import classes from "./App.module.scss";
import AuthContext from "./store/auth-context";

function App() {
    const ctx = useContext(AuthContext);

    return (
        <div className={classes.app}>
            {ctx.modalState ? <Cart /> : ""}
            <Header />
            <MealsSummary />
            <MealList />
        </div>
    );
}

export default App;

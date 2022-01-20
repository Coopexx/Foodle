import React, { useReducer, useState } from "react";

//Consumer
const AuthContext = React.createContext({});

//Provider
export const AuthContextProvider = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [mealsTemplate, setMealsTemplate] = useState([]);
    const [cartMeals, setCartMeals] = useState([]);
    const [animation, setAnimation] = useState(false);

    const setAnimationHandler = () => {
        setAnimation(true);
        setTimeout(() => {
            setAnimation(false);
        }, 500);
    };

    const closeModalHandler = () => {
        setShowModal(false);
    };

    const openModalHandler = () => {
        setShowModal(true);
    };

    const setMealsHandler = (data) => {
        setMealsTemplate(data);
    };

    const setCountHandler = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + +action.amount };
            case "decrement":
                return { count: state.count - +action.amount };
            default:
                console.log("Error Reducer");
        }
    };

    const changeMeals = (mealsList, action) => {
        if (mealsList.length === 0) {
            mealsList = mealsTemplate;
        }
        for (const meal of mealsList) {
            if (meal.id === action.id) {
                if (action.type === "add") {
                    meal.amount += action.value;
                }
                if (action.type === "remove") {
                    meal.amount -= action.value;
                }
            }
        }
        filterMeals(mealsList);
        return mealsList;
    };

    const filterMeals = (mealsList) => {
        setCartMeals(mealsList.filter((el) => el.amount > 0));
    };

    const [cardCounter, dispatchSetCountHandler] = useReducer(setCountHandler, {
        count: 0,
    });
    const [meals, dispatchMeals] = useReducer(changeMeals, []);
    return (
        <AuthContext.Provider
            value={{
                modalState: showModal,
                openModal: openModalHandler,
                closeModal: closeModalHandler,
                setCount: dispatchSetCountHandler,
                cartCounter: cardCounter,
                cartMeals: cartMeals,
                changeMealAmount: dispatchMeals,
                setMeals: setMealsHandler,
                setAnimation: setAnimationHandler,
                animation: animation,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

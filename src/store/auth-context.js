import React, { useReducer, useState } from "react";

//Consumer
const AuthContext = React.createContext({});

//Provider
export const AuthContextProvider = (props) => {
    const [showModal, setShowModal] = useState(false);

    const mealsTemplate = [
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

    const closeModalHandler = () => {
        setShowModal(false);
    };

    const openModalHandler = () => {
        setShowModal(true);
    };

    const filterMeals = (meals) => {
        return meals.filter((el) => el.amount > 0);
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + +action.amount };
            case "decrement":
                return { count: state.count - +action.amount };
            default:
                console.log("Error Reducer");
        }
    };

    const mealsFn = (mealsList, action) => {
        switch (action.type) {
            case "add":
                for (const meal of mealsList) {
                    if (meal.id === action.id) {
                        meal.amount += action.value;
                        return mealsList;
                    }
                }
                break;
            case "remove":
                for (const meal of mealsList) {
                    if (meal.id === action.id) {
                        meal.amount -= 1;
                        return mealsList;
                    }
                }
                break;
            default:
                console.log("Error in Meal useReducer");
        }
    };

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const [cartMeals, dispatchcartMealsAdd] = useReducer(
        mealsFn,
        mealsTemplate
    );

    return (
        <AuthContext.Provider
            value={{
                modalState: showModal,
                openModal: openModalHandler,
                closeModal: closeModalHandler,
                setCount: dispatch,
                cartCounter: state,
                cartMeals: cartMeals,
                changeMealAmount: dispatchcartMealsAdd,
                mealList: mealsTemplate,
                filterMeals: filterMeals,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

import React, { useReducer } from "react";
import { useState } from "react";

//Consumer
const AuthContext = React.createContext({});

//Provider
export const AuthContextProvider = (props) => {
    const [showModal, setShowModal] = useState(false);

    const closeModalHandler = () => {
        setShowModal(false);
    };

    const openModalHandler = () => {
        setShowModal(true);
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + +action.amount };
            case "decrement":
                return { count: state.count - 1 };
            default:
                console.log("Error Reducer");
        }
    };

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <AuthContext.Provider
            value={{
                showModal: showModal,
                openModal: openModalHandler,
                closeModal: closeModalHandler,
                setCount: dispatch,
                count: state,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

import React, { useContext } from "react";
import "./Header.scss";
import Button from "../UI/Button";

import backgroundImage from "../../img/meals.jpg";
import AuthContext from "../../store/auth-context";

const Header = () => {
    const ctx = useContext(AuthContext);

    return (
        <>
            <header className="nav">
                <h1 className="nav__caption">ReactMeals</h1>
                <Button
                    type="header"
                    {...ctx.count}
                    openModal={ctx.openModal}
                />
            </header>
            <img alt="Background" className="img" src={backgroundImage}></img>
        </>
    );
};

export default Header;

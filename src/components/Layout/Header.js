import React from "react";
import "./Header.scss";
import Button from "../UI/Button";

import backgroundImage from "../../img/meals.jpg";

const Header = () => {
    return (
        <>
            <header className="nav">
                <h1 className="nav__caption">ReactMeals</h1>
                <Button buttonHeader={true} />
            </header>
            <img alt="Background" className="img" src={backgroundImage}></img>
        </>
    );
};

export default Header;

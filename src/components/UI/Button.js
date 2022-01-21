import classes from "./Button.module.scss";
import shoppingCart from "../../img/shopping-cart.svg";
import AuthContext from "./../../store/auth-context";
import { useContext } from "react";

const ButtonHeader = (props) => {
    const ctx = useContext(AuthContext);

    const openModalHandler = () => {
        props.openModal();
    };

    const animationClass = ctx.animation ? `${classes.animation}` : "";
    const classHelper = `${classes.header} ${animationClass}`;

    return (
        <button className={classHelper} onClick={openModalHandler}>
            <img
                alt="Cart Icon"
                className={classes["header__svg"]}
                src={shoppingCart}
            ></img>
            <h3>Your Cart</h3>
            <h3 className={classes["header__number"]}>{props.count}</h3>
        </button>
    );
};

const ButtonAdd = () => {
    return <button className={classes.add}>+ Add</button>;
};

const TwoButtons = (props) => {
    let className = `${classes[props.type]} ${
        props.type === "submit" && classes.submit_hover
    }`;
    console.log(className);
    let valid = props.isValid;
    if (props.type === "submit" && !props.isValid) {
        className = `${classes[props.type]} ${classes.invalid}`;
    }
    if (props.type === "cancel") {
        valid = true;
    }

    const closeModalHandler = () => {
        if (props.hasOwnProperty("closeModal")) {
            props.closeModal();
        }
    };

    return (
        <button
            className={`${className}`}
            onClick={closeModalHandler}
            disabled={!valid}
        >
            {props.content}
        </button>
    );
};

const ButtonCart = (props) => {
    const className = classes[props.type];

    const countHandler = () => {
        props.clickEvent(props.content);
    };

    return (
        <button className={`${className}`} onClick={countHandler}>
            {props.content}
        </button>
    );
};

const Button = (props) => {
    let buttonType;

    switch (props.type) {
        case "cancel":
            buttonType = <TwoButtons {...props} />;
            break;
        case "submit":
            buttonType = <TwoButtons {...props} />;
            break;
        case "cart":
            buttonType = <ButtonCart {...props} />;
            break;
        case "header":
            buttonType = <ButtonHeader {...props} />;
            break;
        case "add":
            buttonType = <ButtonAdd />;
            break;

        default:
            console.log("Buttontype not found");
    }

    return <>{buttonType}</>;
};
export default Button;

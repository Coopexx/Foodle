import classes from "./Button.module.scss";
import shoppingCart from "../../img/shopping-cart.svg";

const ButtonHeader = (props) => {
    const openModalHandler = () => {
        props.openModal();
    };
    return (
        <button className={classes.header} onClick={openModalHandler}>
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
    const className = classes[props.type];

    const closeModalHandler = () => {
        if (props.hasOwnProperty("closeModal")) {
            props.closeModal();
        }
    };

    return (
        <button className={`${className}`} onClick={closeModalHandler}>
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

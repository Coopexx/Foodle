import classes from "./Button.module.scss";
import shoppingCart from "../../img/shopping-cart.svg";

const ButtonHeader = () => {
    return (
        <div className={classes.button}>
            <img
                alt="Cart Icon"
                className={classes["button__svg"]}
                src={shoppingCart}
            ></img>
            <h3>Your Cart</h3>
            <h3 className={classes["button__number"]}>0</h3>
        </div>
    );
};

const ButtonModal = (props) => {
    const className = classes[props.type];
    return <button className={`${className}`}>{props.name}</button>;
};

const Button = (props) => {
    console.log(props.buttonHeader);
    return (
        <>
            {props.buttonHeader && <ButtonHeader />}
            {!props.buttonHeader && <ButtonModal {...props} />}
        </>
    );
};
export default Button;

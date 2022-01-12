import Button from "../UI/Button";
import classes from "./CartItem.module.scss";

const CartItem = (props) => {
    const options1 = { type: "cart", content: "-" };
    const options2 = { type: "cart", content: "+" };

    return (
        <div className={classes["modal__meal"]}>
            <div className={classes["modal__container-left"]}>
                <p className={classes["modal__name"]}>{props.name}</p>
                <div className={classes["modal__container-price"]}>
                    <p className={classes["modal__price"]}>{props.price}</p>
                    <p className={classes["modal__amount"]}>x {props.amount}</p>
                </div>
            </div>
            <div className={classes["modal__container-right"]}>
                <Button {...options1}></Button>
                <Button {...options2}></Button>
            </div>
        </div>
    );
};

export default CartItem;

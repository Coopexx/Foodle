import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button";
import classes from "./CartItem.module.scss";

const CartItem = (props) => {
    const options1 = { type: "cart", content: "-" };
    const options2 = { type: "cart", content: "+" };

    const ctx = useContext(AuthContext);

    const onClickHandler = (identifier) => {
        switch (identifier) {
            case "-":
                ctx.setCount({
                    type: "decrement",
                    amount: 1,
                });
                break;
            case "+":
                ctx.setCount({
                    type: "increment",
                    amount: 1,
                });
                break;
            default:
                console.log("Error Cart Button");
        }
    };

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
                <Button {...options1} clickEvent={onClickHandler}></Button>
                <Button {...options2} clickEvent={onClickHandler}></Button>
            </div>
        </div>
    );
};

export default CartItem;

import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";

const Cart = () => {
    const options1 = { type: "cancel", content: "Close" };
    const options2 = { type: "submit", content: "Order" };
    const [total, setTotal] = useState(0);

    const ctx = useContext(AuthContext);
    const cartMeals = ctx.filterMeals(ctx.cartMeals);

    useEffect(() => {
        let helperVar = [];
        let newTotal = 0;
        const calcTotal = () => {
            for (const meal of cartMeals) {
                helperVar.push(meal.amount * +meal.price);
            }
        };
        calcTotal();
        for (let i = 0; i < helperVar.length; i++) {
            newTotal += helperVar[i];
        }
        setTotal(newTotal);
    }, [setTotal, cartMeals, total]);

    return (
        <div className={classes.cart}>
            <Modal closeModal={ctx.closeModal}>
                {cartMeals.map((meal) => (
                    <CartItem key={meal.id} {...meal} />
                ))}
                <div className={classes["total__container"]}>
                    <p className={classes["total__amount"]}>Total Amount</p>
                    <p className={classes["total__price"]}>
                        ${total.toFixed(2)}
                    </p>
                </div>
                <div className={classes["button-container"]}>
                    <Button {...options1} closeModal={ctx.closeModal}></Button>
                    <Button {...options2}></Button>
                </div>
            </Modal>
        </div>
    );
};

export default Cart;

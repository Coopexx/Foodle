import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import CartForm from "./CartForm";

const Cart = () => {
    const [total, setTotal] = useState(0);

    const ctx = useContext(AuthContext);

    useEffect(() => {
        let helperVar = [];
        let newTotal = 0;
        const calcTotal = () => {
            for (const meal of ctx.cartMeals) {
                helperVar.push(meal.amount * +meal.price);
            }
        };
        calcTotal();
        for (let i = 0; i < helperVar.length; i++) {
            newTotal += helperVar[i];
        }
        setTotal(newTotal);
    }, [ctx.cartMeals]);

    return (
        <div className={classes.cart}>
            <Modal closeModal={ctx.closeModal}>
                {ctx.cartMeals.map((meal) => (
                    <CartItem key={meal.id} {...meal} />
                ))}
                <div className={classes["total__container"]}>
                    <p className={classes["total__amount"]}>Total Amount</p>
                    <p className={classes["total__price"]}>
                        ${total.toFixed(2)}
                    </p>
                </div>
                <CartForm />
            </Modal>
        </div>
    );
};

export default Cart;

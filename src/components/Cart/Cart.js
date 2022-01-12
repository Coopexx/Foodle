import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Cart = (props) => {
    const options1 = { type: "cancel", content: "Close" };
    const options2 = { type: "submit", content: "Order" };

    const ctx = useContext(AuthContext);

    const filteredMeals = props.filter(props.meals);

    return (
        <div className={classes.cart}>
            {ctx.showModal && (
                <Modal closeModal={ctx.closeModal}>
                    {filteredMeals.map((meal) => (
                        <CartItem key={meal.id} {...meal} />
                    ))}
                    <div className={classes["total__container"]}>
                        <p className={classes["total__amount"]}>Total Amount</p>
                        <p className={classes["total__price"]}>$33.00</p>
                    </div>
                    <div className={classes["button-container"]}>
                        <Button
                            {...options1}
                            closeModal={ctx.closeModal}
                        ></Button>
                        <Button {...options2}></Button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Cart;

import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import Button from "../UI/Button";

const Cart = () => {
    const options1 = { name: "Close", type: "cancel" };
    const options2 = { name: "Order", type: "submit" };

    return (
        <div className={classes.cart}>
            <Modal>
                <CartItem />
                <CartItem />
                <CartItem />
                <div className={classes["total__container"]}>
                    <p className={classes["total__amount"]}>Total Amount</p>
                    <p className={classes["total__price"]}>$33.00</p>
                </div>
                <div className={classes["button-container"]}>
                    <Button buttonHeader={false} {...options1}></Button>
                    <Button buttonHeader={false} {...options2}></Button>
                </div>
            </Modal>
        </div>
    );
};

export default Cart;

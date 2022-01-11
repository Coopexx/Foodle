import classes from "./CartItem.module.scss";

const CartItem = () => {
    return (
        <div className={classes["modal__meal"]}>
            <div className={classes["modal__container-left"]}>
                <p className={classes["modal__name"]}>Sushi</p>
                <div className={classes["modal__container-price"]}>
                    <p className={classes["modal__price"]}>$22.99</p>
                    <p className={classes["modal__amount"]}>x 2</p>
                </div>
            </div>
            <div className={classes["modal__container-right"]}>
                <div className={classes["modal__add"]}>-</div>
                <div className={classes["modal__add"]}>+</div>
            </div>
        </div>
    );
};

export default CartItem;

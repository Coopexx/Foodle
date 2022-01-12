import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button";
import "./MealItemForm.scss";

const MealItemForm = (props) => {
    const ctx = useContext(AuthContext);
    const [amount, setAmount] = useState(1);

    const changeAmountHandler = (event) => {
        setAmount(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        ctx.setCount({ type: "increment", amount: amount });
        props.addAmount(props.identifier, +amount);
        setAmount(1);
    };

    return (
        <form className="amount" onSubmit={onSubmitHandler}>
            <div className="amount__container">
                <label className="amount__text">Amount</label>
                <input
                    className="amount__input"
                    onChange={changeAmountHandler}
                    value={amount}
                    type="number"
                    min="0"
                ></input>
            </div>
            <Button type="add"></Button>
        </form>
    );
};

export default MealItemForm;

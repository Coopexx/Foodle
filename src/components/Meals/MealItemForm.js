import "./MealItemForm.scss";

const MealItemForm = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("submit");
    };

    return (
        <form className="amount" onSubmit={onSubmitHandler}>
            <div className="amount__container">
                <label className="amount__text">Amount</label>
                <input
                    className="amount__input"
                    defaultValue={1}
                    type="number"
                ></input>
            </div>
            <button className="amount__button">+ Add</button>
        </form>
    );
};

export default MealItemForm;

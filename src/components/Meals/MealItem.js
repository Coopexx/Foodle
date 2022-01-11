import "./MealItem.scss";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    return (
        <>
            <li className="meal">
                <div className="description__meal">
                    <h3 className="description__name">{props.name}</h3>
                    <p className="description__subtext">{props.info}</p>
                    <p className="description__price">${props.price}</p>
                </div>
                <MealItemForm />
            </li>
        </>
    );
};

export default MealItem;

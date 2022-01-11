import "./Card.scss";

const Card = (props) => {
    return (
        <div className="meallist-container">
            <div className="meallist">{props.children}</div>
        </div>
    );
};

export default Card;

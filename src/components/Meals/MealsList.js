import MealItem from "./MealItem";
import Card from "../UI/Card";

const MealList = (props) => {
    return (
        <Card>
            {props.data.map((item) => (
                <MealItem key={item.id} {...item} />
            ))}
        </Card>
    );
};

export default MealList;

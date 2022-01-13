import MealItem from "./MealItem";
import Card from "../UI/Card";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const MealList = () => {
    const ctx = useContext(AuthContext);
    return (
        <Card>
            {ctx.mealList.map((item) => {
                return <MealItem key={item.id} {...item} />;
            })}
        </Card>
    );
};

export default MealList;

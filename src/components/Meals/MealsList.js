import MealItem from "./MealItem";
import Card from "../UI/Card";
import { useEffect, useState, useContext } from "react";
import styles from "./MealsList.module.scss";
import AuthContext from "../../store/auth-context";
import config from "../../store/config";

const MealList = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    const ctx = useContext(AuthContext);

    useEffect(() => {
        const url = config.API_KEY + "/meals.json";
        const fetchMeals = async () => {
            const response = await fetch(url);
            const data = await response.json();

            const mealsList = [];
            for (const [key, value] of Object.entries(data)) {
                mealsList.push({
                    id: key,
                    ...value,
                });
            }
            setMeals(mealsList);
            ctx.setMeals(mealsList);
            setLoading(false);
        };
        setLoading(true);
        fetchMeals();
    }, []);

    return (
        <Card>
            {!loading &&
                meals.map((item) => {
                    return <MealItem key={item.id} {...item} />;
                })}
            {loading && <p className={styles.loading}>Loading...</p>}
        </Card>
    );
};

export default MealList;

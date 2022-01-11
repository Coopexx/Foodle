import "./MealsSummary.scss";

const MealsSummary = () => {
    return (
        <section className="description">
            <div className="description__container">
                <h2 className="description__caption">
                    Delicious Food, Delivered To You{" "}
                </h2>
                <p className="description__content">
                    Chose your favorite meal from our broad selection of
                    available meals and enjoy a delivious lunch or dinner at
                    home.
                </p>
                <p className="description__content">
                    All our meal sare cooked with high-quality ingredients,
                    just-in-time and of course by experienced chefs!
                </p>
            </div>
        </section>
    );
};

export default MealsSummary;

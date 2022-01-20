import "./MealsSummary.scss";

const MealsSummary = () => {
    return (
        <section className="description">
            <div className="description__container">
                <h2 className="description__caption">
                    Healthy and delicious. Guaranteed.
                </h2>
                <p className="description__content">
                    Who said that fast food can't be healthy. We definitely not!
                    Something Japanese for the evening? Or something spicy
                    Mexican?
                </p>
                <p className="description__content">
                    At foody you don't have to limit yourself. Order whatever
                    you're hungry for from our broad selection.
                </p>
            </div>
        </section>
    );
};

export default MealsSummary;

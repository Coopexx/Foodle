import config from "./../store/config";

const callDatabase = async (type, obj) => {
    const TYPE = {
        GET: "get",
        POST: "post",
        INIT: "init",
        DELETE: "delete",
    };

    const url = config.API_KEY + "/meals.json";

    if (type === TYPE.INIT) {
        const mealsTemplate = [
            {
                name: "Sushi",
                info: "Finest fish and veggies",
                price: "22.99",
            },
            {
                name: "Schnitzel",
                info: "A german specialty!",
                price: "16.50",
            },
            {
                name: "Barbecue Burger",
                info: "American, raw, meaty",
                price: "12.99",
            },
            {
                name: "Green Bowl",
                info: "Healthy...and green...",
                price: "18.99",
            },
        ];

        for (const meal of mealsTemplate) {
            console.log(meal);
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(meal),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            meal.id = data.name;
        }
    }

    if (type === TYPE.GET) {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    if (type === TYPE.POST) {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(obj.meal),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
    }

    if (type === TYPE.DELETE) {
    }
};

// callDatabase(TYPE.INIT);
// callDatabase(TYPE.GET);
// callDatabase(TYPE.POST, { meal: mealsTemplate[0], amount: 1 });

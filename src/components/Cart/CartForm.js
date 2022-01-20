import Button from "../UI/Button";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import styles from "./CartForm.module.scss";
import config from "../../store/config";

const CartForm = () => {
    const ctx = useContext(AuthContext);

    const options1 = { type: "cancel", content: "Close" };
    const options2 = { type: "submit", content: "Order" };

    const postForm = async (formData) => {
        const url = config.API_KEY + "/user.json";

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (const target of event.target) {
            switch (target.placeholder) {
                case "First Name":
                    formData.firstName = target.value;
                    break;
                case "Last Name":
                    formData.lastName = target.value;
                    break;
                case "Street":
                    formData.street = target.value;
                    break;
                case "Street Number":
                    formData.streetNumber = target.value;
                    break;
                case "Postal Code":
                    formData.postalCode = target.value;
                    break;
                case "City":
                    formData.city = target.value;
                    break;
                default:
            }
        }
        postForm(formData);
    };

    return (
        <div>
            <form onSubmit={submitHandler} className={styles.Form}>
                <div className={styles.separator}>
                    <div className={styles.Form_container}>
                        <input
                            placeholder="First Name"
                            type="text"
                            className={styles.Form_input}
                        ></input>
                        <input
                            placeholder="Street"
                            type="text"
                            className={styles.Form_input}
                        ></input>
                        <input
                            placeholder="Postal Code"
                            type="text"
                            className={styles.Form_input}
                        ></input>
                    </div>
                    <div className={styles.Form_container}>
                        <input
                            placeholder="Last Name"
                            type="text"
                            className={styles.Form_input}
                        ></input>
                        <input
                            placeholder="Street Number"
                            type="text"
                            className={styles.Form_input}
                        ></input>

                        <input
                            placeholder="City"
                            type="text"
                            className={styles.Form_input}
                        ></input>
                    </div>
                </div>
                <div className={styles.Button_container}>
                    <Button {...options1} closeModal={ctx.closeModal}></Button>
                    <Button {...options2} type="submit"></Button>
                </div>
            </form>
        </div>
    );
};

export default CartForm;

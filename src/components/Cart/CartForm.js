import Button from "../UI/Button";
import AuthContext from "../../store/auth-context";
import { useContext, useState, useRef, useEffect, useCallback } from "react";
import styles from "./CartForm.module.scss";
import config from "../../store/config";

const CartForm = () => {
    const [isValid, setIsValid] = useState(false);

    const ctx = useContext(AuthContext);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const streetRef = useRef();
    const streetNumberRef = useRef();
    const postalCodeRef = useRef();
    const cityRef = useRef();

    const options1 = { type: "cancel", content: "Close" };
    const options2 = { type: "submit", content: "Order" };

    const checkValidity = useCallback(() => {
        const firstNameValid = firstNameRef.current.value.trim().length > 0;
        const lastNameValid = lastNameRef.current.value.trim().length > 0;
        const streetValid = streetRef.current.value.trim().length > 0;
        const streetNumberValid =
            streetNumberRef.current.value.trim().length > 0;
        const postalCodeValid =
            postalCodeRef.current.value.trim().length > 0 &&
            !isNaN(postalCodeRef.current.value.trim());
        const cityValid = cityRef.current.value.trim().length > 0;
        const cartNotEmpty = ctx.cartMeals.length > 0;

        if (
            firstNameValid &&
            lastNameValid &&
            streetValid &&
            streetNumberValid &&
            postalCodeValid &&
            cityValid &&
            cartNotEmpty
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }

        if (firstNameValid) {
            firstNameRef.current.classList.remove(`${styles.invalid}`);
        } else {
            firstNameRef.current.classList.add(`${styles.invalid}`);
        }
        if (lastNameValid) {
            lastNameRef.current.classList.remove(`${styles.invalid}`);
        } else {
            lastNameRef.current.classList.add(`${styles.invalid}`);
        }
        if (streetValid) {
            streetRef.current.classList.remove(`${styles.invalid}`);
        } else {
            streetRef.current.classList.add(`${styles.invalid}`);
        }
        if (streetNumberValid) {
            streetNumberRef.current.classList.remove(`${styles.invalid}`);
        } else {
            streetNumberRef.current.classList.add(`${styles.invalid}`);
        }
        if (postalCodeValid) {
            postalCodeRef.current.classList.remove(`${styles.invalid}`);
        } else {
            postalCodeRef.current.classList.add(`${styles.invalid}`);
        }
        if (cityValid) {
            cityRef.current.classList.remove(`${styles.invalid}`);
        } else {
            cityRef.current.classList.add(`${styles.invalid}`);
        }
    }, []);

    useEffect(() => {
        checkValidity();
        if (ctx.cartMeals.length === 0) {
            setIsValid(false);
        }
    }, [ctx.cartMeals, checkValidity]);

    const onChangeHandler = (event) => {
        checkValidity();
        ctx.setFirstName(firstNameRef.current.value);
        ctx.setLastName(lastNameRef.current.value);
        ctx.setStreet(streetRef.current.value);
        ctx.setStreetNumber(streetNumberRef.current.value);
        ctx.setPostalCode(postalCodeRef.current.value);
        ctx.setCity(cityRef.current.value);
    };

    const clearForm = () => {
        ctx.setFirstName("");
        ctx.setLastName("");
        ctx.setStreet("");
        ctx.setStreetNumber("");
        ctx.setPostalCode("");
        ctx.setCity("");
        // Can be activated if resetting mealsList works
        // ctx.setCount({ type: "delete", amount: 0 });
        // ctx.setCartMeals([]);
    };

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
        //prevent button click as long as isValid is false
        console.log("button pressed");

        if (isValid) {
            const formData = {};
            formData.firstName = firstNameRef.current.value;
            formData.lastName = lastNameRef.current.value;
            formData.street = streetRef.current.value;
            formData.streetNumber = streetNumberRef.current.value;
            formData.postalCode = postalCodeRef.current.value;
            formData.city = cityRef.current.value;
            postForm(formData);
            clearForm();
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler} className={styles.Form}>
                <div className={styles.separator}>
                    <div className={styles.Form_container}>
                        <input
                            placeholder="First Name"
                            type="text"
                            className={`${styles.Form_input} ${styles.invalid}`}
                            onChange={onChangeHandler}
                            value={ctx.firstName}
                            ref={firstNameRef}
                        ></input>
                        <input
                            placeholder="Street"
                            type="text"
                            className={`${styles.Form_input} ${styles.invalid}`}
                            onChange={onChangeHandler}
                            value={ctx.street}
                            ref={streetRef}
                        ></input>
                        <input
                            placeholder="Postal Code"
                            type="text"
                            className={`${styles.Form_input} ${styles.invalid}`}
                            onChange={onChangeHandler}
                            value={ctx.postalCode}
                            ref={postalCodeRef}
                        ></input>
                    </div>
                    <div className={styles.Form_container}>
                        <input
                            placeholder="Last Name"
                            type="text"
                            className={`${styles.Form_input} ${styles.invalid}`}
                            onChange={onChangeHandler}
                            value={ctx.lastName}
                            ref={lastNameRef}
                        ></input>
                        <input
                            placeholder="Street Number"
                            type="text"
                            className={`${styles.Form_input} ${styles.invalid}`}
                            onChange={onChangeHandler}
                            value={ctx.streetNumber}
                            ref={streetNumberRef}
                        ></input>

                        <input
                            placeholder="City"
                            type="text"
                            className={`${styles.Form_input} ${styles.invalid}`}
                            onChange={onChangeHandler}
                            value={ctx.city}
                            ref={cityRef}
                        ></input>
                    </div>
                </div>
                <div className={styles.Button_container}>
                    <Button {...options1} closeModal={ctx.closeModal}></Button>
                    <Button
                        {...options2}
                        type="submit"
                        isValid={isValid}
                    ></Button>
                </div>
            </form>
        </div>
    );
};

export default CartForm;

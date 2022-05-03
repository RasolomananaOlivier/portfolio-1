import Link from "next/link";
import styles from "./css/contact.module.css";
import { FaEnvelope, FaMap, FaMapMarker, FaMapMarkerAlt, FaPhone, FaPhoneSquare, FaPhoneSquareAlt, FaRegCopyright, FaRegEnvelope } from "react-icons/fa";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";

const validate = (values) => {

    const { email } = values;

    const errors = {};

    const regexEmail = /[A-Z]|[0-9]{5,}@gmail.com/i;

    if (!regexEmail.test(email)) {
        errors.email = "Invalid email";
    }


    return errors;
};

export function Contact() {
    const [initialValues, setinitialValues] = useState({
        name: "",
        email: "",
        message: "",
    })

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => {

            axios.post(
                'http://localhost:5000',
                {
                    name: values.name,
                    sender: values.email,
                    message: values.message
                }
            )
                .then((result) => {
                    console.log(result);
                    setinitialValues({
                        name: "",
                        email: "",
                        message: "",
                    })
                }).catch((err) => {
                    console.log(err);
                });

        },
    })
    return (
        <>
            <section className={styles.container}>

                <div className={styles.innerContainer1}>
                    <div id='contact' className={styles.gridItem1}>
                        <h1> Contact </h1>
                    </div>
                    <div className={styles.getInTouchContainer}>
                        <h1 className={styles.h1}>Get in touch</h1>
                        <p >
                            If you are interested in working with me ,
                            Don{"'"}t hesitate to contact me. I am open
                            to all kind of projects. Let{"'"}s make something
                            special.
                        </p>

                        <ul>
                            <li><FaRegEnvelope color="blue" />  herimanitraolivierr@gmail.com</li>
                            <li><FaPhone color="blue" />  +261346632470</li>
                            <li><FaMapMarkerAlt color="blue" />  Madagascar Fianarantsoa</li>
                        </ul>
                    </div>

                    <form className={styles.formCard} onSubmit={formik.handleSubmit}>
                        <h2 >
                            SAY SOMETHING
                        </h2>


                        <div className={styles.inputContainer}>
                            <label htmlFor="text" className={styles.label} >Name</label>
                            <input
                                type="text" id="text" name='name'
                                className={styles.input}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                required
                            />

                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="email" className={styles.label} >Email</label>
                            <input type="email" id="email" name='email'
                                className={styles.input}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                required
                            />
                            {
                                formik.touched.email && formik.errors.email
                                    ? <div>Invalid email</div>
                                    : null
                            }
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="Message" className={styles.label} >Your message</label>
                            <textarea id="Message" name='message'

                                className={styles.input}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                required
                            />

                        </div>
                        <button className={styles.button} type='submit'>Send</button>


                    </form>

                </div>





            </section >

            <div className={styles.innerContainer2}>
                <div className={styles.copyRigth}>
                    <h5 >RASOLOMANAN OLIVIER <FaRegCopyright /> 2022</h5>
                </div>
            </div>
        </>

    )
}
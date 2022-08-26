import React, {useContext, useState} from "react";
import {useFormik, Field} from "formik";
import loginstyle from "../../../Assets/styles/register.module.css";
import {UserContext} from "../../../hooks/userContext";
import {useNavigate} from "react-router-dom";

export function Form() {
    const [userContext, setUserContext] = useContext(UserContext)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [skills, setSkills] = useState({
        s1: '',
        s2: '',
        s3: '',
    })

    function hangleChange(e) {
        setSkills((value => ({
            ...value, [e.target.name]: e.target.value
        })));
    }

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            phoneNumber: "",
            district: "",
            password: "",
            repassword: "",
            DOB: "",
            city: "",
            experience: "",
            qualification: []
        },
        onSubmit: (values) => {
            console.log(values)
            fetch("http://127.0.0.1:8080" + "/signup", {
                method: "POST",
                credentials: "include",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(values),
            })
                .then(async response => {
                    setIsSubmitting(false)
                    if (!response.ok) {
                        if (response.status === 400) {
                            setError("Please fill all the fields correctly!")
                        } else if (response.status === 401) {
                            setError("Invalid email and password combination.")
                        } else if (response.status === 500) {
                            console.log(response)
                            const data = await response.json()
                        } else {
                        }
                    } else {
                        const data = await response.json()
                        console.log(data)
                        // setUserContext(oldValues => {
                        //     return {...oldValues, ...data}
                        // })
                        navigate('/');
                    }
                })
                .catch(error => {
                    console.log(error)
                    setIsSubmitting(false)
                })
        },
    });

    return (
        <div className={loginstyle.formcolor}>
            <div className={loginstyle.line}>
                <h1>Input your Information</h1>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className={loginstyle.structure}>
                    <div className={loginstyle.leftside}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            className={loginstyle.inputbox}
                            id="firstName"
                            name="firstName"
                            type="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className={loginstyle.error}>{formik.errors.firstName}</div>
                        ) : null}

                        <label htmlFor="district">district</label>
                        <input
                            className={loginstyle.inputbox}
                            id="district"
                            name="district"
                            type="district"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.district}
                        />
                        {formik.touched.district && formik.errors.district ? (
                            <div className={loginstyle.error}>{formik.errors.district}</div>
                        ) : null}

                        <label htmlFor="DOB">Date Of Birth </label>
                        <input
                            className={loginstyle.inputbox}
                            id="DOB"
                            name="DOB"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.DOB}
                        />

                        {formik.touched.DOB && formik.errors.DOB ? (
                            <div className={loginstyle.error}>{formik.errors.DOB}</div>
                        ) : null}

                        <label htmlFor="username">Email district</label>

                        <input
                            className={loginstyle.inputbox}
                            id="username"
                            name="username"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className={loginstyle.error}>{formik.errors.username}</div>
                        ) : null}

                        <label htmlFor="password">Password</label>

                        <input
                            className={loginstyle.inputbox}
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className={loginstyle.error}>{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div className={loginstyle.rightside}>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            className={loginstyle.inputbox}
                            id="lastName"
                            name="lastName"
                            type="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className={loginstyle.error}>{formik.errors.lastName}</div>
                        ) : null}

                        <label htmlFor="city">city </label>

                        <input
                            className={loginstyle.inputbox}
                            id="city"
                            name="city"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div className={loginstyle.error}>{formik.errors.city}</div>
                        ) : null}

                        <label htmlFor="phoneNumber">Phone number</label>
                        <input
                            className={loginstyle.inputbox}
                            id="phoneNumber"
                            name="phoneNumber"
                            type="phoneNumber"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                            <div className={loginstyle.error}>{formik.errors.phoneNumber}</div>
                        ) : null}

                        <label htmlFor="repassword">Confirm Password </label>

                        <input
                            className={loginstyle.inputbox}
                            id="repassword"
                            name="repassword"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.repassword}
                        />
                        {formik.touched.repassword && formik.errors.repassword ? (
                            <div className={loginstyle.error}>{formik.errors.repassword}</div>
                        ) : null}

                        <label htmlFor="experience">Experience</label>

                        <input
                            className={loginstyle.inputbox}
                            id="experience"
                            name="experience"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.experience}
                        />
                        <label htmlFor="experience">Qualification</label>

                        <div className={loginstyle.educationQualification}>
                            <input
                                className={loginstyle.qualification}
                                name="qualification"
                                type="checkbox"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={'10th'}
                            />
                            <label htmlFor="">10th</label>
                            <input className={loginstyle.qualification}
                                   name="qualification"
                                   type="checkbox"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={'12th'}
                            />
                            <label htmlFor="">12th</label>

                            <input className={loginstyle.qualification}
                                   name="qualification"
                                   type="checkbox"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={"graduation"}
                            /> <label htmlFor="">Graduation</label>

                            <input className={loginstyle.qualification}
                                   name="qualification"
                                   type="checkbox"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={"postgraduate"}
                            /> <label htmlFor="">Post Graduation</label>

                        </div>

                    </div>
                </div>
                <div className={loginstyle.termsandconditions}>

                    <div className={loginstyle.button}>
                        <button type='submit'>Register</button>
                    </div>
                </div>

            </form>
        </div>
    );
}

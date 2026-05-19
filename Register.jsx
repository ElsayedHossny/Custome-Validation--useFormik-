import React from "react";
import Style from "./Register.module.css";
import { useFormik } from "formik";

export default function Register() {


    function validatehandle(formikValues) {
        let { name, email, phone, password, rePassword } = formikValues;
        let errors = {};
        const emailregex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const phoneregex = /^(\+20|0)1[0125][0-9]{8}$/;

        // validation
        //1 Name
        if (!name) {
            errors.name = "Name is Require";
        } else if (name.length < 3) {
            errors.name = "Name min-length is 3";
        } else if (name.length > 10) {
            errors.name = "Name max-length is 10";
        }
        //2 email
        if (!email) {
            errors.email = "Email is Require";
        } else if (!emailregex.test(email)) {
            errors.email = "Email is Notvaild";
        }
        //3 phone
        if (!phone) {
            errors.phone = "Phone is Require";
        } else if (!phoneregex.test(phone)) {
            errors.phone = "Phone is Notvaild";
        }
        //4 password
        if (!password) {
            errors.password = "password is Require";
        }
        //5 repassword
        if (rePassword !== password) {
            errors.rePassword = "Password Notmatched";
        }

        return errors;
    }

    function submithandle(formikValues) {
        console.log(formikValues);
    }

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            rePassword: "",
        },
        validate: validatehandle,
        onSubmit: submithandle,
    });

    return (
        <>
            <div className="w-75 py-5 mx-auto">
                <div className="card shadow-sm">
                    <div className="card-body p-4">
                        <h2 className="mb-1">Register Now</h2>
                        <p className="text-muted mb-4 small">
                            Create your account to get started
                        </p>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="useName" className="form-label">
                                    Full Name
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="fa-solid fa-user"></i>
                                    </span>
                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        className={`form-control`}
                                        type="text"
                                        id="useName"
                                        name="name"
                                        placeholder="John Doe"
                                    />
                                </div>
                                {formik.errors.name && formik.touched.name ? (
                                    <div className="alert alert-danger mt-1 p-1">
                                        {formik.errors.name}
                                    </div>
                                ) : null}

                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="fa-solid fa-envelope"></i>
                                    </span>
                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        className={`form-control`}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                {formik.errors.email && formik.touched.email ? (
                                    <div className="alert alert-danger mt-1 p-1">
                                        {formik.errors.email}
                                    </div>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Phone number
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="fa-solid fa-phone"></i>
                                    </span>
                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        className={`form-control `}
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                {formik.errors.phone && formik.touched.phone ? (
                                    <div className="alert alert-danger mt-1 p-1">
                                        {formik.errors.phone}
                                    </div>
                                ) : null}
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                        <input
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            className={`form-control `}
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                    {formik.errors.password && formik.touched.password ? (
                                        <div className="alert alert-danger mt-1 p-1">
                                            {formik.errors.password}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="rePassword" className="form-label">
                                        Confirm password
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                        <input
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            value={formik.values.rePassword}
                                            className={`form-control `}
                                            type="password"
                                            id="rePassword"
                                            name="rePassword"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                    {formik.errors.rePassword && formik.touched.rePassword ? (
                                        <div className="alert alert-danger mt-1 p-1">
                                            {formik.errors.rePassword}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn bg-main w-100 mt-2 text-white"
                            >
                                <i className="fa-solid fa-user-plus me-2"></i>Create account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

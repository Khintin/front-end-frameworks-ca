import React, { useState } from "react";
import ContactImage from "../../assets/contactpix.jpg";
import HomeAddresIcon from "../../assets/icons8-address-100.png";
import CallIcon from "../../assets/icons8-call-100.png";
import ChatIcon from "../../assets/icons8-chat-48.png";
import FacebookIcon from "../../assets/icons8-facebook-48.png";
import InstIcon from "../../assets/icons8-instagram-48.png";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        subject: "",
        email: "",
        body: "",
    });

    const [formErrors, setFormErrors] = useState({
        fullName: "",
        subject: "",
        email: "",
        body: "",
    });

    const validateForm = () => {
        let valid = true;
        const errors = { fullName: "", subject: "", email: "", body: "" };

        // Full Name validation
        if (formData.fullName.trim().length < 3) {
            valid = false;
            errors.fullName = "Full Name must be at least 3 characters";
        }

        // Subject validation
        if (formData.subject.trim().length < 3) {
            valid = false;
            errors.subject = "Subject must be at least 3 characters";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            valid = false;
            errors.email = "Enter a valid email address";
        }

        // Body validation
        if (formData.body.trim().length < 3) {
            valid = false;
            errors.body = "Body must be at least 3 characters";
        }

        setFormErrors(errors);
        return valid;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Perform form submission logic here (e.g., send data to a server)
            console.log("Form submitted:", formData);
        } else {
            console.log("Form validation failed");
        }
    };

    return (
        <>
            <section className="my-20">
                <div className="flex flex-col justify-center">
                    <img src={ContactImage} className="max-w-lg mx-auto" />
                    <h2 className="text-lg text-center font-bold">TINDAHAN</h2>
                    <div className="flex flex-row justify-center">
                        <img src={HomeAddresIcon} alt="address icon" className="w-9" />
                        <p>Addres: 123 Street, Oslo, Norway</p>
                    </div>
                    <div className="flex flex-row gap-1 justify-center">
                        <img src={CallIcon} alt="phone icon" className="w-8" />
                        <p>Phone: +47 12345678</p>
                    </div>
                    <div className="flex flex-row justify-center py-5 gap-5">
                        <img src={FacebookIcon} />
                        <img src={InstIcon} />
                        <img src={ChatIcon} />
                    </div>
                </div>
                <div className="max-w-4xl mx-auto mt-8 p-4 bg-slate-300">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col flex-wrap md:flex-row w-full"
                    >
                        <div className="basis-full md:basis-1/2 md:pr-2 mb-4">
                            <label
                                htmlFor="fullName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded ${
                                    formErrors.fullName && "border-red-500"
                                }`}
                            />
                            {formErrors.fullName && (
                                <span className="text-red-500 text-xs italic">
                                    {formErrors.fullName}
                                </span>
                            )}
                        </div>

                        <div className="basis-full md:basis-1/2 md:pl-2 mb-4">
                            <label
                                htmlFor="subject"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded ${
                                    formErrors.subject && "border-red-500"
                                }`}
                            />
                            {formErrors.subject && (
                                <span className="text-red-500 text-xs italic">
                                    {formErrors.subject}
                                </span>
                            )}
                        </div>

                        <div className="basis-full col-span-2 mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded ${
                                    formErrors.email && "border-red-500"
                                }`}
                            />
                            {formErrors.email && (
                                <span className="text-red-500 text-xs italic">
                                    {formErrors.email}
                                </span>
                            )}
                        </div>

                        <div className="basis-full col-span-2 mb-4">
                            <label
                                htmlFor="body"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Body
                            </label>
                            <textarea
                                id="body"
                                name="body"
                                value={formData.body}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded ${
                                    formErrors.body && "border-red-500"
                                }`}
                            ></textarea>
                            {formErrors.body && (
                                <span className="text-red-500 text-xs italic">
                                    {formErrors.body}
                                </span>
                            )}
                        </div>

                        <button
                            type="button"
                            className="col-span-2 border-double border-red-400 border-4 hover:bg-red-400 py-1 px-4"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <p className="max-w-4xl mx-auto text-green-600 my-6">Message Successfully Sent!</p>
            </section>
        </>
    );
};

export default ContactPage;

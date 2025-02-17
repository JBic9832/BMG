import { useState } from "react";

const ContactForm = ({ dark }) => {
    const [submitted, setSubmitted] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();

        setSubmitted(true);

        console.log("Submitted")

    }

    /**
     * 
     * Create a way for customers to text with you in real time; Definitely disable it after a certain time for these crazy ass late night old people 
     * 
     */

    if (!submitted) {
        return (
            <form onSubmit={submitForm} id="form" action="" netlify>
                <div className="flex flex-col xl:flex-row justify-between gap-8">
                    <div className="flex flex-col justify-between gap-4">
                        <div
                            className="flex gap-2 lg:flex-col text-primary-blue text-4xl lg:text-6xl"
                        >
                            <span>CONTACT</span>
                            <span>US</span>
                        </div>
                        <p className={`text-base ${dark ? "text-white" : "text-black"}`}>Leave us your contact information with a short description of what you need and we will give you a call ASAP!</p>
                        <div className={`${dark ? "text-white" : "text-black"}`}>
                            {/* <div>GIVE US A CALL: <a href="tel:+15555555555"><span className="font-semibold text-primary-blue">(555) 555-5555</span></a></div> */}
                            <div>EMAIL: <span className="font-semibold text-primary-blue">company@email.com</span></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-between">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col xl:flex-row gap-4">
                                <input
                                    className={`border-2 border-primary-blue p-2 rounded-lg ${dark ? "bg-dark" : "bg-light"}`}
                                    type="text"
                                    placeholder="First Name"
                                />
                                <input
                                    className={`border-2 border-primary-blue p-2 rounded-lg ${dark ? "bg-dark" : "bg-light"}`}
                                    type="text"
                                    placeholder="Last Name"
                                />
                                <input
                                    className={`border-2 border-primary-blue p-2 rounded-lg ${dark ? "bg-dark" : "bg-light"}`}
                                    type="email"
                                    placeholder="Email"
                                />
                                <input
                                    className={`border-2 border-primary-blue p-2 rounded-lg ${dark ? "bg-dark" : "bg-light"}`}
                                    type="tel"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <textarea
                                className={`border-2 border-primary-blue p-2 rounded-lg resize-none ${dark ? "bg-dark" : "bg-light"}`}
                                name="message"
                                id="MESSAGE"
                                placeholder="Message"></textarea>
                        </div>
                        <div className="flex lg:gap-4 justify-end">
                            <button type="reset" className="font-semibold text-red-500"
                            >Cancel</button
                            >
                            <button
                                type="submit"
                                className="ml-auto lg:ml-0 font-semibold text-primary-blue"
                            >Submit</button
                            >
                        </div>
                    </div>
                </div>
            </form>
        );
    } else {
        return (
            <div>
                <h1>Thank you! We will get back to you with a phone call as soon as possible!</h1>
            </div>
        );
    }
}

export default ContactForm;
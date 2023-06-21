import React, { useRef , useState , useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { contact } from "../data";
import {AnimatedPage} from "./AnimatedPage";

const Contact = () => {

    const [isEmailSent, setEmailSent] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e94x8k4', 'template_mgtjy2n', form.current, 'NfM0J5FGN1zJW8oR4')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        if (isEmailSent) {
            const timer = setTimeout(() => {
                setEmailSent(false); // Set the email sent state to false after 3 seconds
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isEmailSent]);

    return (
        <AnimatedPage>
            <section className="section bg-primary" id="contact">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="section-title">Contact me</h2>
                        <p className="subtitle">
                            If you have business proposals and interesting ideas:
                        </p>
                    </div>
                    <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                        <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                            {contact.map((item, index) => {
                                const { icon, title, subtitle, description } = item;
                                return (
                                    <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                                        <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                            {icon}
                                        </div>
                                        <div>
                                            <h4 className="font-body text-xl mb-1">{title}</h4>
                                            <p className="mb-1">{subtitle}</p>
                                            <p className="text-accent font-normal">{description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <form className="space-y-8 w-full max-w-[780px]" ref={form} onSubmit={sendEmail}>
                            <div className="flex gap-8">
                                <input className="input" type="text" name="from_name" placeholder="Your name" />
                                <input className="input" type="email" name="from_email" placeholder="Your email" />
                            </div>
                            <input className="input" type="text" name="from_subject" placeholder="Subject" />
                            <textarea
                                className="textarea"
                                name="message"
                                placeholder="Your message"
                            ></textarea>
                            <button type="submit" className="btn btn-lg bg-accent hover:bf-accent-hover">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {isEmailSent && (
                <div className="fixed top-1/4 right-5 transform -translate-y-1/2 bg-accent p-4 border border-white-300 text-white rounded-full transition-opacity duration-500">
                    <div className="flex items-center justify-between">
                        <p className="mr-2">Email has been sent! &#128522;</p>
                        <button
                            className="text-white opacity-75 hover:opacity-100"
                            onClick={() => setEmailSent(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

        </AnimatedPage>
    );
};

export default Contact;

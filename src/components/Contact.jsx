import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contact } from "../data";
import {AnimatedPage} from "./AnimatedPage";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e94x8k4', 'template_mgtjy2n', form.current, 'NfM0J5FGN1zJW8oR4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

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
        </AnimatedPage>
    );
};

export default Contact;

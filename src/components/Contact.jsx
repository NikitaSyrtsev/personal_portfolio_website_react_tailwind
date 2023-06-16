import React, {useState} from "react";
import { contact } from "../data";
import {AnimatedPage} from "./AnimatedPage";
import {
    FormControl,
    Input,
    Textarea,
} from '@chakra-ui/react'

const initValues = { name: "", email: "", subject: "", message: ""}

const initState = {values: initValues}

const Contact = () => {
    const [state, setState] = useState(initState);
    const { values } = state;
    const handleState = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        }
    }));
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
                        <FormControl isRequired className="space-y-8 w-full max-w-[780px]">
                            <div className="flex gap-8">
                                <Input className="input" value={values.name} name="name" onChange={handleState} type="text" placeholder="Your name" />
                                <Input className="input" value={values.name} name="email" onChange={handleState} type="email" placeholder="Your email" />
                            </div>
                            <Input className="input" value={values.name}  name="subject" onChange={handleState} type="text" placeholder="Subject" />
                            <Textarea
                                className="textarea"
                                type="text"
                                placeholder="Your message"
                                value={values.name}  name="message" onChange={handleState}
                            ></Textarea>
                            <button className="btn btn-lg bg-accent hover:bf-accent-hover">
                                Send message
                            </button>
                        </FormControl>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Contact;

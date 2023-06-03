import React from "react";
import {services} from "../data";

const Services = () => {
    return <section id="projects" className="section bg-secondary">
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title">What I do for clients.</h2>
                <p className="subtitle">Here what I can help you with:</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                    const {icon, name, description} = service;
                    return <div className="bg-tertiary p-6 rounded-2xl" key={index}>
                        <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-4 text-[28px]">
                            {icon}
                        </div>
                        <h4 className="text-xl font-medium mb-2">{name}</h4>
                        <p>{description}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
}

export default Services;
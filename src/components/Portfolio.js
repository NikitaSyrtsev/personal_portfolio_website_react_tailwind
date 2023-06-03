import React from "react";
import { projects } from "../data";

const Portfolio = () => {
    return <section className="section bg-secondary min-h-[200px]">
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title">My works:</h2>
                <p className="subtitle">Here you can see instances of my projects</p>
            </div>
            <div className="grid lg:grid-cols-1 gap-8">
                {projects.map((project, index) => {
                    const {name, description, image} = project;
                    return <div className="bg-tertiary p-6 rounded-2xl" key={index}>
                        <h4 className="text-xl font-medium mb-2">{name}</h4>
                        <p>{description}</p>
                        <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-4 text-[28px]">
                            {image}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </section>
}

export default Portfolio;
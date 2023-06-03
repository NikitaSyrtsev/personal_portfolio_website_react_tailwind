import React from "react";
import { projects } from "../data";

const Portfolio = () => {
    const goToGitHub = (link) => {
        window.open(link, "_blank");
    };
    return <section id="projects" className="section bg-secondary min-h-[200px]">
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title">My works.</h2>
                <p className="subtitle">Here you can see instances of my projects:</p>
            </div>
            <div className="grid lg:grid-cols-1 gap-8">
                {projects.map((project, index) => {
                    const {name, description, image, link} = project;
                    return <div className="bg-tertiary p-6 rounded-2xl" key={index}>
                        <h4 className="text-xl font-medium mb-2">{name}</h4>
                        <p>{description}</p>
                        <div className="text-accent rounded-sm w-50 h-50 flex justify-center items-center mb-4 mt-4 text-[28px]">
                            <button onClick={() => goToGitHub(link)}>
                                <img src={image} alt="" className="transition-all duration-300 hover:opacity-75 "/>
                            </button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </section>
}

export default Portfolio;
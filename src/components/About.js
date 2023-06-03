import React from "react";
import photo from "../assets/photo.jpg";

const About = () => {
    return (
        <section className="section bg-tertiary" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-24">
                    <img
                        className="object-cover w-[566px] md:mx-auto lg:mx-0 rounded-2xl hidden md:block"
                        src={photo}
                        alt=""
                    />
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                                Nikita Syrtsev
                            </h2>
                            <p className="mb-4 text-accent">Web-developer</p>
                            <hr className="mb-8 opacity-5" />
                            <p className="mb-8">
                                A year of experience studying web programming. I started by
                                creating a <span className="text-blue-500">CSS</span> and <span className="text-blue-500">JavaScript</span> layouts. Now I actively use frameworks and
                                libraries.
                            </p>
                            <p className="mb-8">
                                I have worked with <span className="text-blue-500">React</span>, <span className="text-blue-500">Next</span>, <span className="text-blue-500">Typescript</span>, <span className="text-blue-500">Node.js</span> and <span className="text-blue-500">Tailwind.css</span>. Currently I study <span className="text-blue-500">Python</span> and <span className="text-blue-500">Flask</span> for
                                improvement of my backend abilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

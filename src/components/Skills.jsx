import React from "react";
import { skills } from "../data";

const Skills = () => {
    return (
        <section className="bg-primary py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-8 md:grid-flow-row">
                    {skills.map((skill) => {
                        return (
                            <div className="transform hover:scale-125 transition-transform">
                                <img src={skill.image} alt=""  title={skill.title} className="h-[6rem] w-[6rem]" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export {Skills};

import React from "react";
import { social } from "../data";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-tertiary py-12">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                    <div className="flex space-x-6 items-center justify-center">
                        {social.map((item, index) => {
                            const { href, icon } = item;
                            return (
                                <a className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer" href={href} key={index}>
                                    {icon}
                                </a>
                            );
                        })}
                    </div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <p>&copy; 2023 Nikita Syrtsev.</p>
                </div>
            </div>
        </footer>
    );
};

export {Footer};

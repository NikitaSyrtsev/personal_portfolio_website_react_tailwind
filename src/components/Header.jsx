import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            return window.scrollY > 1 ? setBg(true) : setBg(false);
        });
    });

    return (
        <header
            className={`${
                bg ? "bg-tertiary h-20" : "h-24"
            } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
        >
            <div className="container mx-auto flex items-center justify-between">
                <a href="/personal_portfolio_website">
                    <img src={logo} alt="" className="mb-[15px] hidden lg:block" />
                </a>
                <div className="hidden lg:block">
                    <Nav />
                </div>
                <div className="hidden lg:block">
                    <Socials />
                </div>
                <div className="lg:hidden">
                    <NavMobile />
                </div>
            </div>
        </header>
    );
};

export default Header;

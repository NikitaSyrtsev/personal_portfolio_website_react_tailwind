import React from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";

const Nav = () => {
    return (
        <nav>
            <ul className="flex space-x-8 capitalize text-[15px]">
                {navigation.map((item, index) => {
                    return (
                        <li
                            className="text-white hover:text-accent cursor-pointer text-[18px]"
                            key={index}
                        >
                            <Link
                                to={item.href}
                                spy={true}
                                smooth={true}
                                offset={-25}
                                duration={500}
                                activeClass="active"
                                className="transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;

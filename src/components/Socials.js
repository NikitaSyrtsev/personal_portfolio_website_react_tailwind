import React from "react";
import {social} from "../data";

const Socials = () => {
    return <ul className='flex space-x-6'>
        {social.map((item, index) => {
            return <li className='flex justify-center items-center text-accent hover:text-white transition-all duration-300' key={index}>
                <a className="text-base" href={item.href} target="_blank" rel="noopener noreferrer">{item.icon}</a>
            </li>
        })}
    </ul>;
};

export default Socials;
import { FiGithub, FiMail, FiMapPin } from "react-icons/fi";

import { SiLeetcode, SiTelegram } from "react-icons/si";

import SkillImg1 from "./assets/img/skills/html.svg";
import SkillImg2 from "./assets/img/skills/css.svg";
import SkillImg3 from "./assets/img/skills/javascript.svg";
import SkillImg4 from "./assets/img/skills/typescript.svg";
import SkillImg5 from "./assets/img/skills/react.svg";
import SkillImg6 from "./assets/img/skills/tailwind.svg";
import SkillImg7 from "./assets/img/skills/python.svg";
import SkillImg8 from "./assets/img/skills/git.svg";

export const navigation = [
    {
        name: "home",
        href: "home",
    },
    {
        name: "about",
        href: "about",
    },
    {
        name: "portfolio",
        href: "portfolio",
    },

    {
        name: "contact",
        href: "contact",
    },
];

export const social = [
    {
        icon: <FiMail />,
        href: "",
    },
    {
        icon: <FiGithub />,
        href: "",
    },
    {
        icon: <SiTelegram />,
        href: "",
    },
    {
        icon: <SiLeetcode />,
        href: "",
    },
];

export const skills = [
    {
        image: SkillImg1,
    },
    {
        image: SkillImg2,
    },
    {
        image: SkillImg3,
    },
    {
        image: SkillImg4,
    },
    {
        image: SkillImg5,
    },
    {
        image: SkillImg6,
    },
    {
        image: SkillImg7,
    },
    {
        image: SkillImg8,
    },
];

export const contact = [
    {
        icon: <FiMail />,
        title: "Have a question?",
        subtitle: "I am here to help you.",
        description: "Email me at nik.syrtsev02@gmail.com",
    },
    {
        icon: <FiMapPin />,
        title: "Current Location",
        subtitle: "Rostov-on-Don, Russia",
        description: "",
    },
];

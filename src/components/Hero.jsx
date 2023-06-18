import React, {useRef} from "react";
import About from "./About";
import {AnimatedPage} from "./AnimatedPage";
import {Link} from "react-router-dom";

const Hero = () => {
    const componentRef = useRef(null);

    return (
        <AnimatedPage>
            <section
                id="home"
                className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
            >
                <div className="container mx-auto">
                    <div className="flex items-center pt-8">
                        <div className="flex-1 flex flex-col items-center lg:items-start">
                            <p className="text-lg text-accent mb-[22px] text-[30px]">
                                Hello, I'm Nikita! &#128075;
                            </p>
                            <h1 className="text-4x1 leading-[44px] md:text-5xl md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking-[-2px]">
                                I am a novice Web-developer.
                            </h1>
                            <Link to="contact" className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all duration-300 rounded-full mt-[20px]">
                                Contact Me
                            </Link>
                            <div ref={componentRef}></div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
        </AnimatedPage>
    );
};

export default Hero;

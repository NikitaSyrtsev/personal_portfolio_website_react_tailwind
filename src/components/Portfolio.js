import React from "react";

const Portfolio = () => {
    return <section className="section bg-secondary min-h-[200px]">
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title">My works:</h2>
                <p className="subtitle">Here you can see instances of my projects</p>
            </div>
        </div>
        <div className="container mx-auto bg-black">
            <div>
                <h2>name</h2>
                <p> description</p>
                <p>photo</p>
            </div>
        </div>
    </section>
}

export default Portfolio;
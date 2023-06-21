import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-primary">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-accent">Oops! The page you are looking for does not exist.</p>
            <Link to="/personal_portfolio_website" className="mt-4 px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-hover transition-all duration-300">Back to Home Page</Link>
        </div>
    );
}

export {NotFoundPage};
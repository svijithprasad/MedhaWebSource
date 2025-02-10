import React from "react";
import "./Loader.css";

const Loader = ({ isLoading }) => {
    return (
        <div className={`loader-container-custom ${isLoading ? '' : 'hidden'}`}>
            <img 
                src="/images/loading.png" 
                alt="Loading Logo" 
                className="loader-logo" 
            />
        </div>
    );
};

export default Loader;
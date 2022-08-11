import React from "react";

const Loading = () => (
    <div className="flex items-center justify-center mt-11">
        <div className="spinner-border inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

export default Loading;

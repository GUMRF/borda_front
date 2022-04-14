import React from 'react';
import { Link } from 'react-router-dom';
import { imgURL } from "../config";

export const NotFound = () => (
    <div>
        <img src={imgURL} className="h-64 w-full" />
        <marquee
            direction="right"
            scrollamount="30"
            className="text-2xl font-semibold h-40"
        >
            <h3 className="text-9xl">404 Page Not Found</h3>
        </marquee>
        <Link to = "/" className="text-3xl text-red-500 font font-semibold">Go home</Link>
    </div>
);

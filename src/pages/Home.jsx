import React from "react";
import Default from "../layouts/Default";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
    const value = useSelector((state) => state.counter.value);
    return (
        <Default title="Home">
            <div className="flex flex-col items-center h-screen justify-center space-y-5">
                <p className="text-2xl">Counter value is: {value}</p>
                <Link to="/counter" className="underline">
                    Go to Counter to increment/decrement.
                </Link>
            </div>
        </Default>
    );
}

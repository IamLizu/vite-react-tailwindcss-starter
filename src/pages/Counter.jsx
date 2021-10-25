import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import Default from "../layouts/Default";
import { decrement, increment } from "../store/slices/counter";
import { Link } from "react-router-dom";

export default function Counter() {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <Default title="Counter">
            <div className="flex flex-col items-center h-screen justify-center space-y-5">
                <div>
                    <p className="text-4xl">{value}</p>
                </div>

                <div className="space-x-2">
                    <Button
                        text="Increment"
                        onClick={() => dispatch(increment())}
                    />
                    <Button
                        text="Decrement"
                        onClick={() => dispatch(decrement())}
                    />
                </div>

                <Link to="/" className="underline">
                    Go to home
                </Link>
            </div>
        </Default>
    );
}

import PropTypes from "prop-types";
import React from "react";

export default function Button({ text, onClick }) {
    return (
        <button
            className="bg-indigo-500 text-white px-5 py-3 font-semibold text-3xl hover:bg-indigo-400 active:bg-indigo-600"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
};

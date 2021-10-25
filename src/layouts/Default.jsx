import PropTypes from "prop-types";
import React from "react";

export default function Default({ title, children }) {
    React.useEffect(() => {
        document.title = title;
    });

    return <>{children}</>;
}

Default.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string
};

import React, { useState, useEffect } from 'react';

const SingleColor = ({ weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setAlert(false), 3000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <article
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(`#${hexColor}`);
            }}
            className={`color ${index >= 10 ? 'color-light' : null}`}
            style={{ backgroundColor: `#${hexColor}` }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{`#${hexColor}`}</p>
            {alert ? (
                <p className={`alert ${index >= 10 ? 'color-light' : null}`}>
                    Copied to clipboard
                </p>
            ) : null}
        </article>
    );
};

export default SingleColor;

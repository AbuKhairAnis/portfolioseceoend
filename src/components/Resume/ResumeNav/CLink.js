import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const CLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{
                    width: match ? "300px" : "25px",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CLink;
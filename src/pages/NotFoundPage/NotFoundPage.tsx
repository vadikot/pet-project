import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            Sorry, page not found... <Link to="/">home page</Link>
        </div>
    );
};

export default NotFoundPage;
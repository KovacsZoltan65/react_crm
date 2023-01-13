import React from 'react';

import { Helmet } from 'react-helmet';

export const PageTitle = ({ children }) => {
    return (
        <Helmet>
            {/*}
            <title>{children} | Lightence Admin</title>
            {*/}
            <title>{children}</title>
        </Helmet>
    );
};
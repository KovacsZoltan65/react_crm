import React, { Suspense } from 'react';
import { Loading } from 'components/common/Loading';

// eslint-disable-next-line @typescript-eslint/ban-types
export const withLoading = (Component) => {
    return (props) => (
        <Suspense fallback={<Loading />}>
            <Component {...props} />
        </Suspense>
    );
};

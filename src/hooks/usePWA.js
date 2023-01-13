import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addDeferredPrompt } from '../store/slices/pwaSlice';

export const usePWA = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            dispatch(addDeferredPrompt(e));
        };

        window.addEventListener('beforeinstallprompt', handler);
    }, [dispatch]);
};

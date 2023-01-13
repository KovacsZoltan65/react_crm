import { useEffect } from 'react';
import { setTheme } from '../store/slices/themeSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { Dates } from '../constants/Dates';

const getNextTime = (ms) => {
    const now = Date.now();
    const clearDate = Dates.getClearDate();
    const nextTime = clearDate.add(ms, 'ms');

    const delta = +nextTime - now;

    return delta < 0 ? delta + 24 * 3600 * 1000 : delta;
};

let timeoutNightStarts = null;
let timeoutNightEnds = null;

export const useAutoNightMode = () => {
    const dispatch = useAppDispatch();
    const nightModeState = useAppSelector((state) => state.nightMode);
    const isNightMode = nightModeState.isNightMode;
    const nightTime = nightModeState.nightTime;

    useEffect(() => {
        timeoutNightStarts && clearTimeout(timeoutNightStarts);
        timeoutNightEnds && clearTimeout(timeoutNightEnds);

        if (isNightMode) {
            const runTimeoutStart = () => {
                dispatch(setTheme('dark'));
                timeoutNightStarts = setTimeout(runTimeoutStart, 24 * 3600 * 1000);
            };

            const nextStartTime = getNextTime(nightTime[0]);
            timeoutNightStarts = setTimeout(runTimeoutStart, nextStartTime);

            const runTimeoutEnd = () => {
                dispatch(setTheme('light'));
                timeoutNightEnds = setTimeout(runTimeoutEnd, 24 * 3600 * 1000);
            };

            let nextEndTime = getNextTime(nightTime[1]);
            nextEndTime = nextStartTime > nextEndTime ? nextEndTime + 24 * 3600 * 1000 : nextEndTime;

            timeoutNightEnds = setTimeout(runTimeoutEnd, nextEndTime);
        }

        return () => {
            timeoutNightStarts && clearTimeout(timeoutNightStarts);
            timeoutNightEnds && clearTimeout(timeoutNightEnds);
        };
    }, [dispatch, isNightMode, nightTime]);
};

import React from 'react';

import { MoonIcon } from '../icons/MoonIcon';
import { SunIcon } from '../icons/SunIcon';

import * as S from './MoonSunSwitch.styles';

export const MoonSunSwitch = ({ isMoonActive, onClickMoon, onClickSun }) => {
    return (
        <S.ButtonGroup $isFirstActive={isMoonActive}>
            <S.Btn size="small" type="link" icon={<MoonIcon />} onClick={onClickMoon} />
            <S.Btn size="small" type="link" icon={<SunIcon />} onClick={onClickSun} />
        </S.ButtonGroup>
    );
};

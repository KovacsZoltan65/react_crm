import React from 'react';
import { DropDownProps } from 'antd';
import * as S from './Dropdown.styles';

export const Dropdown = ({ children, ...props }) => {
    return (
        <S.Dropdown getPopupContainer={(triggerNode) => triggerNode} {...props}>
            {children}
        </S.Dropdown>
    );
};
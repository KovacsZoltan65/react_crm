import React from 'react';
import { InputProps as AntInputProps, InputRef } from 'antd';
import * as S from './InputPassword.styles';

const initialState = {
    className: typeof String,
    visibilityToggle: typeof Boolean
}

export const InputPassword = ({ className, children, ...props }, ref) => {
    <S.InputPassword ref={ref} className={className} {...props} >
        {children}
    </S.InputPassword>
};
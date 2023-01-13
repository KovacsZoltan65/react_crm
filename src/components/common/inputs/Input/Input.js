import React from 'react';
import { Input as AntInput, InputProps as AntInputProps, InputRef } from 'antd';
import * as S from './Input.styles';

const initialState = {
    className: typeof String
};

export const { TextArea } = AntInput;

export const Input = ({ className, children, ...props }, ref) => {
    <S.Input ref={ref} className={className} {...props} >
        {children}
    </S.Input>
};
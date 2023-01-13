import React from 'react';
import { InputProps as AntInputProps, InputRef } from 'antd';

import * as S from './InputPassword.styles';

export const InputPassword = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <S.InputPassword ref={ref} className={className} {...props}>
            {children}
        </S.InputPassword>
    ),
);
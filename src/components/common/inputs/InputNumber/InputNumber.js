import React from 'react';
//import { InputNumberProps as AntdInputNumberProps } from 'antd';
import * as S from './InputNumber.styles';

export const InputNumber = React.forwardRef(
    ({ className, children, $block, ...props }, ref) => (
        <S.InputNumber ref={ref} className={className} $block={$block} {...props}>
            {children}
        </S.InputNumber>
    ),
);

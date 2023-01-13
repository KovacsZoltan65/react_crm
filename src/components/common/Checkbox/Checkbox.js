import { CheckboxProps } from 'antd';
import React from 'react';

import * as S from './Checkbox.styles';

export const { CheckboxGroup } = S;

export const Checkbox = (props) => {
    return <S.Checkbox {...props} />;
};
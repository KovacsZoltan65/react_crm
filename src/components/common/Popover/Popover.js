import React from 'react';
//import { PopoverProps } from 'antd';

import * as S from './Popover.styles';

export const Popover = ({ children, ...props }) => {
    return <S.Popover {...props}>{children}</S.Popover>;
};

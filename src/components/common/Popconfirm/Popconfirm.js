import React from 'react';
//import { PopconfirmProps } from 'antd';

import * as S from './Popconfirm.styles';

export const Popconfirm = ({ children, ...props }) => {
    return <S.Popconfirm {...props}>{children}</S.Popconfirm>;
};

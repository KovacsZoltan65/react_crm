import React from 'react';
import { Badge as AntdBadge } from 'antd';
//import { NotificationType } from '../Notification/Notification';
import * as S from './Badge.styles';

export const { Ribbon } = AntdBadge;

export const Badge = ({ className, severity, children, ...props }) => (
    <S.Badge className={className} {...(severity && { severity })} {...props}>
        {children}
    </S.Badge>
);

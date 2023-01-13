import React from 'react';
import { BreadcrumbProps } from 'antd';
import * as S from './Breadcrumb.styles';

export const BreadcrumbItem = S.BreadcrumbItem;

export const Breadcrumb = ({ children, ...props }) => {
    return <S.Breadcrumb {...props}>{children}</S.Breadcrumb>;
};

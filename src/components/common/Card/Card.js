import React from 'react';
import { CardProps as AntCardProps } from 'antd';
import { defaultPaddings } from '../../../constants/defaultPaddings';
import { useResponsive } from '../../../hooks/useResponsive';
import * as S from './Card.styles';

export const Card = ({ className, padding, size, autoHeight = true, children, ...props }) => {
    const { isTablet, isDesktop } = useResponsive();

    return (
        <S.Card
            size={size ? size : isTablet ? 'default' : 'small'}
            className={className}
            bordered={false}
            $padding={
                padding || padding === 0
                    ? padding
                    : (isDesktop && defaultPaddings.desktop) || (isTablet && defaultPaddings.tablet) || defaultPaddings.mobile
            }
            $autoHeight={autoHeight}
            {...props}
        >
            {children}
        </S.Card>
    );
};
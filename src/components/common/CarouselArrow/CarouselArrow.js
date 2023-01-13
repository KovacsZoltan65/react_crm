import React from 'react';
import { CustomArrowProps } from 'react-slick';

import * as S from './CarouselArrow.styles';

export const CarouselArrow = ({ children, ...props }) => {
    return <S.ArrowWrapper {...props}>{children}</S.ArrowWrapper>;
};

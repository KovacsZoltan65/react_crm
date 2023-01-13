import React from 'react';
//import { HProps } from '../interfaces';
import * as S from './H1.styles';

export const H1 = ({ className, children }) => <S.Text className={className}>{children}</S.Text>;

import React from 'react';

import * as S from './Status.styles';

export const Status = ({ color, text }) => <S.StatusTag color={color}>{text}</S.StatusTag>;

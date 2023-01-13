import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

import * as S from './AddCardLink.styles';

export const AddCardLink = ({ onClick }) => {
    return (
        <S.AddCardWrapper onClick={onClick}>
            <PlusOutlined />
        </S.AddCardWrapper>
    );
};
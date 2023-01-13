import React from 'react';
import { useTranslation } from 'react-i18next';

import NewLaneImage from '../../../../assets/images/new-lane.webp';

import * as S from './NewLaneSection.styles';

export const NewLaneSection = ({ onClick }) => {
    const { t } = useTranslation();
    return (
        <S.NewLaneSection onClick={onClick}>
            <S.CreateNewColumn>
                <S.PlusIcon />
                {t('kanban.createColumn')}
            </S.CreateNewColumn>
            <S.NewLaneImage src={NewLaneImage} />
        </S.NewLaneSection>
    );
};
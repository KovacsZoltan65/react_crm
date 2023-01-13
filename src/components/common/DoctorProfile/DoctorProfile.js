import React from 'react';
import { Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { UserOutlined } from '@ant-design/icons';

import { specifities } from '../../../constants/specifities';

import * as S from './DoctorProfile.styles';

export const DoctorProfile = ({ avatar, name, speciality }) => {
    const { t } = useTranslation();

    const specifity = specifities.find((el) => el.id === speciality)?.name;

    return (
        <S.Profile>
            <Avatar size="large" src={avatar} icon={<UserOutlined />} alt="Doctor avatar" shape="square" />
            <div>
                <S.Info>
                    <S.Title>{t('common.doctor')}</S.Title>
                    <S.Text>{name}</S.Text>
                </S.Info>
                <S.Info>
                    <S.Title>{t('common.specifity')}</S.Title>
                    <S.Text>{t(`common.${specifity}`)}</S.Text>
                </S.Info>
            </div>
        </S.Profile>
    );
};

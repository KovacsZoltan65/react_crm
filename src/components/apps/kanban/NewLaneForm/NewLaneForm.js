import React from 'react';
import { Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import * as S from './NewLaneForm.styles';

export const NewLaneForm = ({ onAdd, onCancel }) => {
    const { t } = useTranslation();
    const handleSubmit = (values) => {
        onAdd({
            id: uuidv4(),
            title: values.title || t('kanban.unnamedLabel'),
        });
    };

    return (
        <S.Form
            name="addCard"
            isFieldsChanged
            footer={<S.FooterButtons size="small" onCancel={onCancel} />}
            onFinish={handleSubmit}
        >
            <S.FormInput name={'title'}>
                <Input placeholder={t('kanban.title')} bordered={false} />
            </S.FormInput>
        </S.Form>
    );
};

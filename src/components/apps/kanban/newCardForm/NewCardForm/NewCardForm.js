import React, { useMemo, useState } from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { BaseButtonsForm } from '../../../../../components/common/forms/BaseButtonsForm/BaseButtonsForm';
//import { CardState, Tag, Participant } from '../../interfaces';
import { TagDropdown } from '../TagDropdown/TagDropdown';

import { ParticipantsDropdown } from '../ParticipantsDropdown/ParticipantsDropdown';

import * as S from './NewCardForm.styles';

const formInputs = [
    {
        title: 'kanban.title',
        name: 'title',
    },
    {
        title: 'kanban.description',
        name: 'description',
    },
];

export const NewCardForm = ({ onAdd, onCancel }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedParticipants, setSelectedParticipants] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const { t } = useTranslation();

    const onFinish = (values) => {
        setLoading(true);
        setTimeout(() => {
            onAdd({ ...values, tags: selectedTags, participants: selectedParticipants });
            setLoading(false);
        }, 1000);
    };

    const formItems = useMemo(
        () =>
            formInputs.map((item, index) => (
                <S.FormInput key={index} name={item.name}>
                    <Input placeholder={t(item.title)} bordered={false} />
                </S.FormInput>
            )),
        [t],
    );

    return (
        <S.CardWrapper>
            <BaseButtonsForm
                name="addCard"
                isFieldsChanged
                footer={<S.FooterButtons loading={isLoading} size="small" onCancel={onCancel} />}
                onFinish={onFinish}
            >
                {formItems}
                <TagDropdown selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
                <ParticipantsDropdown
                    selectedParticipants={selectedParticipants}
                    setSelectedParticipants={setSelectedParticipants}
                />
            </BaseButtonsForm>
        </S.CardWrapper>
    );
};
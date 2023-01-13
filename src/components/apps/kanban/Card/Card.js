import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MoreOutlined } from '@ant-design/icons';

import { Dropdown } from 'components/common/Dropdown/Dropdown';
import { Button } from 'components/common/buttons/Button/Button';
import { ParticipantsDropdown } from '../newCardForm/ParticipantsDropdown/ParticipantsDropdown';
import { TagDropdown } from '../newCardForm/TagDropdown/TagDropdown';
//import { CardState, Tag as ITag, Participant as IParticipant } from '@app/components/apps/kanban/interfaces';

import * as S from './Card.styles';

const EditPopover = ({ onDelete, onArchive, ...props }) => {
    const { t } = useTranslation();

    return (
        <S.CardMenu selectable={false} {...props}>
            <S.MenuItem key="1" onClick={onDelete}>
                {t('common.delete')}
            </S.MenuItem>

            <S.MenuItem key="2" onClick={onArchive}>
                {t('kanban.archive')}
            </S.MenuItem>
        </S.CardMenu>
    );
};

export const Card = ({
    style,
    onClick,
    onDelete,
    onChange,
    className,
    id,
    title,
    description,
    tags = [],
    participants = [],
    cardDraggable,
    editable,
}) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(true);

    const onArrowPress = () => {
        setIsExpanded(!isExpanded);
    };

    const updateCard = (card) => {
        onChange({ ...card, id });
    };

    const onDeleteCard = () => {
        onDelete();
    };

    const updateTags = (tags) => {
        updateCard({ tags });
    };

    const updateParticipants = (participants) => {
        updateCard({ participants });
    };

    return (
        <S.CardWrapper data-id={id} onClick={onClick} style={style} className={className}>
            <S.CollapseCard onChange={onArrowPress} bordered={false} defaultActiveKey={['1']}>
                <S.CardContent
                    showArrow={false}
                    key="1"
                    header={
                        <S.CardHeader>
                            <S.CardTitle
                                draggable={cardDraggable}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                {editable ? (
                                    <S.Input
                                        name="title"
                                        value={title}
                                        border
                                        placeholder={t('kanban.title')}
                                        resize="vertical"
                                        onSave={(value) => updateCard({ title: value })}
                                    />
                                ) : (
                                    title
                                )}
                            </S.CardTitle>
                            <S.CardRightContent>
                                <Button noStyle type="text" icon={<S.ArrowDownIcon $expanded={isExpanded} />} />
                                <Dropdown
                                    overlay={<EditPopover onDelete={onDeleteCard} onArchive={onDeleteCard} />}
                                    placement="bottomRight"
                                    trigger={['click']}
                                >
                                    <Button
                                        noStyle
                                        type="text"
                                        icon={<MoreOutlined />}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    />
                                </Dropdown>
                            </S.CardRightContent>
                        </S.CardHeader>
                    }
                >
                    <S.CardDetails>
                        {editable ? (
                            <S.Input
                                value={description}
                                border
                                placeholder={t('kanban.description')}
                                resize="vertical"
                                onSave={(value) => updateCard({ description: value })}
                            />
                        ) : (
                            description
                        )}
                    </S.CardDetails>
                    <S.CardFooter>
                        <TagDropdown selectedTags={tags} setSelectedTags={updateTags} />
                    </S.CardFooter>

                    <S.ParticipantsWrapper>
                        <ParticipantsDropdown selectedParticipants={participants} setSelectedParticipants={updateParticipants} />
                    </S.ParticipantsWrapper>
                </S.CardContent>
            </S.CollapseCard>
        </S.CardWrapper>
    );
};

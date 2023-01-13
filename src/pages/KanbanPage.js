import React from 'react';
import { useTranslation } from 'react-i18next';

import { Kanban } from '../components/apps/kanban/Kanban/Kanban';

import { PageTitle } from 'components/common/PageTitle/PageTitle';

const KanbanPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageTitle>{t('common.kanban')}</PageTitle>
            <Kanban />
        </>
    );
};

export default KanbanPage;

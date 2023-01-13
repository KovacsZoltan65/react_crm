import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { SecuritySettings } from '../../components/profile/profileCard/profileFormNav/nav/SecuritySettings/SecuritySettings';

const SecuritySettingsPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageTitle>{t('profile.nav.securitySettings.title')}</PageTitle>
            <SecuritySettings />
        </>
    );
};

export default SecuritySettingsPage;
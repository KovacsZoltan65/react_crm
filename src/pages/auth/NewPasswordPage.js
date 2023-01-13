import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '../../components/common/PageTitle/PageTitle';
import { NewPasswordForm } from '../../components/auth/NewPasswordForm/NewPasswordForm';

const NewPasswordPage = () => {
    
    const { t } = useTranslation();

    return (
        <>
            <PageTitle>{t('common.newPassword')}</PageTitle>
            <NewPasswordForm />
        </>
    );
};

export default NewPasswordPage;
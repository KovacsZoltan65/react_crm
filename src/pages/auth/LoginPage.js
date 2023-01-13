import { useTranslation } from 'react-i18next';

import { LoginForm } from '../../components/auth/LoginForm/LoginForm';
import { PageTitle } from '../../components/common/PageTitle/PageTitle';

const LoginPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <PageTitle>{ t('common.login') }</PageTitle>
            <LoginForm />
        </>
    );
};

export default LoginPage;
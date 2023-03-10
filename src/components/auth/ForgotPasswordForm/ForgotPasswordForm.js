import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { BaseForm } from '../../../components/common/forms/BaseForm/BaseForm';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { doResetPassword } from '../../../store/slices/authSlice';
import { notificationController } from '../../../controllers/notificationController';

import * as S from './ForgotPasswordForm.styles';
import * as Auth from '../../../components/layouts/AuthLayout/AuthLayout.styles';

const initValues = {
    email: 'chris.johnson@altence.com',
};

export const ForgotPasswordForm = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (values) => {
        setLoading(true);
        dispatch(doResetPassword(values))
            .unwrap()
            .then(() => {
                navigate('/auth/security-code');
            })
            .catch((err) => {
                notificationController.error({ message: err.message });
                setLoading(false);
            });
    };

    return (
        <Auth.FormWrapper>
            <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
                <Auth.BackWrapper onClick={() => navigate(-1)}>
                    <Auth.BackIcon />
                    {t('common.back')}
                </Auth.BackWrapper>
                <Auth.FormTitle>{t('common.resetPassword')}</Auth.FormTitle>
                <S.Description>{t('forgotPassword.description')}</S.Description>
                <Auth.FormItem
                    name="email"
                    label={t('common.email')}
                    rules={[{ required: true, message: t('common.emailError') }]}
                >
                    <Auth.FormInput placeholder={t('common.email')} />
                </Auth.FormItem>
                <BaseForm.Item noStyle>
                    <S.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
                        {t('forgotPassword.sendInstructions')}
                    </S.SubmitButton>
                </BaseForm.Item>
            </BaseForm>
        </Auth.FormWrapper>
    );
};
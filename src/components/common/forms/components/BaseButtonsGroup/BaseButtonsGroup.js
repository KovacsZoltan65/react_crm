import React, { ComponentProps } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../../../components/common/buttons/Button/Button';

export const BaseButtonsGroup = ({ className, onCancel, loading, ...props }) => {
    const { t } = useTranslation();

    return (
        <Row className={className} gutter={[10, 10]} wrap={false}>
            <Col span={12}>
                <Button block type="ghost" onClick={onCancel} {...props}>
                    {t('common.cancel')}
                </Button>
            </Col>
            <Col span={12}>
                <Button block type="primary" loading={loading} htmlType="submit" {...props}>
                    {t('common.save')}
                </Button>
            </Col>
        </Row>
    );
};
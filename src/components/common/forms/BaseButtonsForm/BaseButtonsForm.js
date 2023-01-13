import React from 'react';

import { BaseForm, BaseFormInterface, BaseFormProps } from '../../../../components/common/forms/BaseForm/BaseForm';
import { BaseButtonsGroup } from '../../../../components/common/forms/components/BaseButtonsGroup/BaseButtonsGroup';
import { BaseFormTitle } from '../../../../components/common/forms/components/BaseFormTitle/BaseFormTitle';
import { BaseFormItem } from '../../../../components/common/forms/components/BaseFormItem/BaseFormItem';
import { BaseFormList } from '../../../../components/common/forms/components/BaseFormList/BaseFormList';

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
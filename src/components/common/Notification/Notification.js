import React from 'react';
import { Space } from 'antd';
import { 
    CheckCircleFilled, 
    ExclamationCircleFilled, 
    InfoCircleFilled, 
    WarningFilled 
} from '@ant-design/icons';

import * as S from './Notification.styles';

export const Notification = ({ type, mentionIconSrc, title, description }) => {
  const icons = {
    info: <InfoCircleFilled />,
    success: <CheckCircleFilled />,
    warning: <ExclamationCircleFilled />,
    error: <WarningFilled />,
    mention: mentionIconSrc,
  };

  const icon = icons[type] || icons.warning;

  return (
    <S.SpaceWrapper type={type} align="start" size="middle">
      {mentionIconSrc ? <S.NotificationIcon src={icon} alt="User icon" /> : icon}
      <Space direction="vertical">
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </Space>
    </S.SpaceWrapper>
  );
};

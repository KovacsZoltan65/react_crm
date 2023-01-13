import React from 'react';
import { Modal as AntdModal, ModalProps as AntModalProps } from 'antd';
import { modalSizes } from 'constants/modalSizes';
import * as S from './Modal.styles';

export const { info: InfoModal, success: SuccessModal, warning: WarningModal, error: ErrorModal } = AntdModal;

export const Modal = ({ size = 'medium', children, ...props }) => {
    const modalSize = Object.entries(modalSizes).find((sz) => sz[0] === size)?.[1];

    return (
        <S.Modal getContainer={false} width={modalSize} {...props}>
            {children}
        </S.Modal>
    );
};

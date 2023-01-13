import React from 'react';
import * as S from './VerificationCodeInput.styles';

export const VerificationCodeInput = (props) => {
    return (
        <S.CodeInput
            removeDefaultStyles
            classNames={{
                container: 'container',
                character: 'character',
                characterInactive: 'character--inactive',
                characterSelected: 'character--selected',
            }}
            placeholder={''}
            {...props}
        />
    );
};

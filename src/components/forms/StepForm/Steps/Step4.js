import * as S from '../StepForm.styles';

export const Step4 = ({ formValues }) => {
    return (
        <S.Details key="4">
            {formValues
                .filter((item) => !!item.value)
                .map((item, index) => {
                    return (
                        <S.DetailsRow key={index}>
                            <S.DetailsTitle>{item.name}</S.DetailsTitle>
                            <S.DetailsValue>{item.value}</S.DetailsValue>
                        </S.DetailsRow>
                    );
                })}
        </S.Details>
    );
};

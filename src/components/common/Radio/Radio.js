import { Radio as AntdRadio, RadioProps } from 'antd';
import * as S from './Radio.styles';

export const { Group: RadioGroup } = AntdRadio;

export const Radio = (props) => {
    return <S.Radio {...props} />;
};

export const RadioButton = (props) => {
    return <S.RadioButton {...props} />;
};
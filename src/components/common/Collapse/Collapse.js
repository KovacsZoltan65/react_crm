import { CollapseProps, Collapse as AntdCollapse } from 'antd';
import * as S from './Collapse.styles';

export const { Panel } = AntdCollapse;

export const Collapse = (props) => {
    return <S.Collapse {...props} />;
};
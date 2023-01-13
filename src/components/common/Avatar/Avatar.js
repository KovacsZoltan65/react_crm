import { AvatarProps, Avatar as AntdAvatar } from 'antd';
import * as S from './Avatar.styles';

export const { Group } = AntdAvatar;

export const Avatar = (props) => {
  return <S.Avatar {...props} />;
};

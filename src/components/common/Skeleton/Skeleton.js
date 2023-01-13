import React from 'react';
import { Skeleton as AntdSkeleton } from 'antd';

import * as S from './Skeleton.styles';

export const {
  Button: SkeletonButton,
  Input: SkeletonInput,
  Avatar: SkeletonAvatar,
  Image: SkeletonImage,
} = AntdSkeleton;

export const Skeleton = (props) => {
  return <S.Skeleton {...props} />;
};

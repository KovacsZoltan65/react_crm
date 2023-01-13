import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spin } from 'antd';

import * as S from './Feed.styles';

export const Feed = ({ next, hasMore, target = 'main-content', children }) => {
    return (
        <InfiniteScroll
            dataLength={children.length}
            next={next}
            hasMore={hasMore}
            loader={
                <S.SpinnerWrapper>
                    <Spin size="large" />
                </S.SpinnerWrapper>
            }
            scrollableTarget={target}
        >
            <S.NewsWrapper>{children}</S.NewsWrapper>
        </InfiniteScroll>
    );
};

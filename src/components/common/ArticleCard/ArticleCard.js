import React from 'react';
import { Avatar, Image } from 'antd';

import { Dates } from 'constants/Dates';
import { Tag } from '../Tag/Tag';

import * as S from './ArticleCard.styles';

export const ArticleCard = ({
    imgUrl,
    title,
    date,
    description,
    author,
    avatar,
    tags,
    className = 'article-card',
}) => {
    return (
        <S.Wrapper className={className}>
            <S.Header>
                {!!avatar && <Avatar src={avatar} alt="author" size={43} />}
                <S.AuthorWrapper>
                    {author && <S.Author>{author}</S.Author>}
                    <S.DateTime>{Dates.format(date, 'L')}</S.DateTime>
                </S.AuthorWrapper>
            </S.Header>
            <Image src={imgUrl} alt="article" preview={false} />
            <S.InfoWrapper>
                <S.InfoHeader>
                    <S.Title>{title}</S.Title>
                </S.InfoHeader>
                <S.Description>{description}</S.Description>
            </S.InfoWrapper>

            {!!tags?.length && (
                <S.TagsWrapper>
                    {tags.map((tag) => (
                        <Tag key={tag.bgColor} title={tag.title} bgColor={tag.bgColor} />
                    ))}
                </S.TagsWrapper>
            )}
        </S.Wrapper>
    );
};

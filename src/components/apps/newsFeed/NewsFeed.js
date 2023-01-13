import React, { useEffect, useState } from 'react';
import { Empty } from 'antd';

import { ArticleCard } from '../../../components/common/ArticleCard/ArticleCard';
import { Feed } from '../../../components/common/Feed/Feed';
import { NewsFilter } from '../../../components/apps/newsFeed/NewsFilter/NewsFilter';
import { getNews } from 'api/news.api';

export const NewsFeed = () => {
    const [news, setNews] = useState([]);
    const [hasMore] = useState(true);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getNews()
            .then((res) => setNews(res))
            .finally(() => setLoaded(true));
    }, []);

    const next = () => {
        getNews().then((newNews) => setNews(news.concat(newNews)));
    };

    return (
        <NewsFilter news={news}>
            {({ filteredNews }) =>
                filteredNews?.length || !loaded ? (
                    <Feed next={next} hasMore={hasMore}>
                        {filteredNews.map((post, index) => (
                            <ArticleCard
                                key={index}
                                title={post.title}
                                description={post.text}
                                date={post.date}
                                imgUrl={post.img}
                                author={post.author}
                                avatar={post.avatarUrl}
                                tags={post.tags}
                            />
                        ))}
                    </Feed>
                ) : (
                    <Empty />
                )
            }
        </NewsFilter>
    );
};

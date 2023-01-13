import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

import { GradientStackedAreaChart } from '../components/charts/GradientStackedAreaChart/GradientStackedAreaChart';
import { VisitorsPieChart } from '../components/charts/VisitorsPieChart';
import { BarAnimationDelayChart } from '../components/charts/BarAnimationDelayChart/BarAnimationDelayChart';
import { ScatterChart } from '../components/charts/ScatterChart/ScatterChart';
import { LineRaceChart } from '../components/charts/LineRaceChart/LineRaceChart';
import { PageTitle } from 'components/common/PageTitle/PageTitle';

const ChartsPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageTitle>{t('common.charts')}</PageTitle>
            <Row gutter={[30, 30]}>
                <Col id="line-race" xs={24}>
                    <LineRaceChart />
                </Col>
                <Col id="gradient-stacked-area" xs={24}>
                    <GradientStackedAreaChart />
                </Col>
                <Col id="bar-animation-delay" xs={24}>
                    <BarAnimationDelayChart />
                </Col>
                <Col id="pie" xs={24} lg={12}>
                    <VisitorsPieChart />
                </Col>
                <Col id="scatter" xs={24} lg={12}>
                    <ScatterChart />
                </Col>
            </Row>
        </>
    );
};

export default ChartsPage;

import { Col, Row } from 'antd';

import { PageTitle } from '../../components/common/PageTitle/PageTitle';
import { useResponsive } from '../../hooks/useResponsive';
import { References } from '../../components/common/References/References';

import * as S from './DashboardPage.styles';

const NftDashboardPage = () => {

    const { isDesktop } = useResponsive();
    
    const DesktopLayout = (
        <Row>
            <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
                <Row gutter={[60, 60]}>
                    
                    <Col span={24}>{'Trending Creator'}</Col>
                    
                    <Col span={24}>{'Recently Added'}</Col>

                    <Col span={24}>{'Trending Collections'}</Col>

                    <Col span={24}>{'Recent Activity'}</Col>
                </Row>

                <References />

            </S.LeftSideCol>

            <S.RightSideCol xl={8} xxl={7}>
                <div id="balance">{'Balance'}</div>
                <S.Space />
                <div id="total-earning">{'Total Earling'}</div>
                <S.Space />
                <S.ScrollWrapper id="activity-story">{'Activity Story'}</S.ScrollWrapper>
            </S.RightSideCol>
        </Row>
    );

    const mobileAndTabletLayout = (
        <div>MobileAndTabletLayout</div>
    );

    return (
        <>
            <PageTitle>NFT Dashboard</PageTitle>
            {isDesktop ? DesktopLayout : mobileAndTabletLayout}
        </>
    );
};

export default NftDashboardPage;
import { Col, Row } from 'antd';

import { PageTitle } from '../../components/common/PageTitle/PageTitle';
import { useResponsive } from '../../hooks/useResponsive';
import { References } from '../../components/common/References/References';

import * as S from './DashboardPage.styles';

const MedicalDashboardPage = () => {

    const { 
        //isTablet, 
        isDesktop 
    } = useResponsive();

    const DesktopLayout = (
        <Row>
            <S.LeftSideCol xl={16} xxl={17}>
                <Row gutter={[30, 30]}>
                    <Col span={24}>
                        <Row gutter={[30, 30]}>
                            {'StatisticsCards'}
                        </Row>
                    </Col>

                    <Col id="map" span={24}>
                        {'MapCard'}
                    </Col>

                    <Col id="latest-screenings" span={24}>
                        {'ScreeningsCard'}
                    </Col>

                    <Col id="treatment-plan" xl={24}>
                        {'TreatmentCard'}
                    </Col>

                    <Col id="covid" xl={24}>
                        {'CovidCard'}
                    </Col>

                    <Col id="activity" xl={24} xxl={12}>
                        {'ActivityCard'}
                    </Col>

                    <Col id="health" xl={24} xxl={12}>
                        {'HealthCard'}
                    </Col>

                    <Col id="favorite-doctors" xl={24}>
                        {'FavoritesDoctorsCard'}
                    </Col>

                    <Col id="news" span={24}>
                        {'NewsCard'}
                    </Col>
                </Row>
                <References />
            </S.LeftSideCol>

            <S.RightSideCol xl={8} xxl={7}>
                <div id="blood-screening">
                    {'BloodScreeningCard'}
                </div>
                <S.Space />
                <S.ScrollWrapper id="patient-timeline">
                    {'PatientResultsCard'}
                </S.ScrollWrapper>
            </S.RightSideCol>
        </Row>
    );

    const mobileAndTabletLayout = (
        <div>MobileAndTabletLayout</div>
    );

    return (
        <>
            <PageTitle>Medical Dashboard</PageTitle>
            {isDesktop ? DesktopLayout : mobileAndTabletLayout}
        </>
    );
};

export default MedicalDashboardPage;
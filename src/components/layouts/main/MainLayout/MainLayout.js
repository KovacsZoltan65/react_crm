import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '../../../../components/header/Header';
import MainSider from '../../../../components/layouts/main/sider/MainSider/MainSider';

import MainContent from '../MainContent/MainContent';
import { MainHeader } from '../MainHeader/MainHeader';
import { MEDICAL_DASHBOARD_PATH, NFT_DASHBOARD_PATH } from '../../../../components/router/AppRouter';
import { useResponsive } from '../../../../hooks/useResponsive';
import { References } from '../../../../components/common/References/References';

import * as S from './MainLayout.styles';

const MainLayout = () => {

    const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
    const [siderCollapsed, setSiderCollapsed] = useState(true);
    const { isDesktop } = useResponsive();
    const location = useLocation();

    const toggleSider = () => setSiderCollapsed(!siderCollapsed);

    useEffect(() => {
        setIsTwoColumnsLayout([MEDICAL_DASHBOARD_PATH, NFT_DASHBOARD_PATH].includes(location.pathname) && isDesktop);
    }, [location.pathname, isDesktop]);

    return (
        <S.LayoutMaster>
            <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
            <S.LayoutMain>
                
                <MainHeader>
                    <Header toggleSider={toggleSider} isSiderOpened={!siderCollapsed} isTwoColumnsLayout={isTwoColumnsLayout} />
                </MainHeader>

                <MainContent>
                    <div>
                        <Outlet/>
                    </div>
                    {!isTwoColumnsLayout && <References />}
                </MainContent>
            </S.LayoutMain>
        </S.LayoutMaster>
    );
};

export default MainLayout;
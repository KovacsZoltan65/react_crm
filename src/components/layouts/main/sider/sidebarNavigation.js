import React from 'react';
import {
    //CompassOutlined,
    DashboardOutlined,
    FormOutlined,
    //HomeOutlined,
    //LayoutOutlined,
    //LineChartOutlined,
    //TableOutlined,
    //UserOutlined,
    //BlockOutlined,
} from '@ant-design/icons';
import { ReactComponent as NftIcon } from '../../../../assets/icons/nft-icon.svg';

export const sidebarNavigation = [
    {
        title: 'common.nft-dashboard',
        key: 'nft-dashboard',
        // TODO use path variable
        url: '/',
        icon: <NftIcon />,
    },
    {
        title: 'common.medical-dashboard',
        key: 'medical-dashboard',
        url: '/medical-dashboard',
        icon: <DashboardOutlined />,
    },
    {
        title: 'companies',
        key: 'companies',
        url: '/companies',
        icon: <DashboardOutlined />,
    },
    {
        title: 'Felugró ablakok',
        key: 'modal',
        url: '/modals',
        icon: <FormOutlined />
    }
];
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from "../../components/layouts/main/MainLayout/MainLayout";

import NftDashboardPage from '../../pages/DashboardPages/NftDashboardPage';
import MedicalDashboardPage from '../../pages/DashboardPages/MedicalDashboardPage';

import CompaniesPage from '../../pages/CompaniesPages/CompaniesPage';

import ModalsPage from 'pages/TestPages/ModalsPage';

import { withLoading } from 'hocs/withLoading.hoc';

export const NFT_DASHBOARD_PATH = '/';
export const MEDICAL_DASHBOARD_PATH = '/medical-dashboard';

const MedicalDashboard = withLoading(MedicalDashboardPage);
const NftDashboard = withLoading(NftDashboardPage);

const Modals = withLoading(ModalsPage);

const Companies = withLoading(CompaniesPage);

export const AppRouter = () => {
    const protectedLayout = (
        <MainLayout/>
    );

    return (
        <BrowserRouter>
            <Routes>
                <Route path={NFT_DASHBOARD_PATH} element={protectedLayout}>
                    <Route path={'/'} element={<NftDashboard />} />
                    <Route path={'/medical-dashboard'} element={<MedicalDashboard />} />
                    <Route path={'/companies'} element={<Companies />} />
                    <Route path={'/modals'} element={<Modals />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};


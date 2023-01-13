import { RightOutlined } from '@ant-design/icons';

import { useResponsive } from '../../../../hooks/useResponsive';
import { useAppSelector } from '../../../../hooks/reduxHooks';

import * as S from './MainSider/MainSider.styles';

import logo from "assets/logo.png";
import logoDark from "assets/logo-dark.png";

export const SiderLogo = ({ isSiderCollapsed, toggleSider }) => {

    const { tabletOnly } = useResponsive();
    const theme = useAppSelector((state) => state.theme.theme);
    //const theme = 'dark';
    const img = theme === 'dark' ? logoDark : logo;

    return (
        <S.SiderLogoDiv>

            <S.SiderLogoLink to="/">
                <img srd={img} alt="Lightence" with={48} height={48}/>
                <S.BrandSpan>Lightence</S.BrandSpan>
            </S.SiderLogoLink>

            {tabletOnly && (
                <S.CollapseButton
                shape="circle"
                size="small"
                $isCollapsed={isSiderCollapsed}
                icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
                onClick={toggleSider}
                />
            )}
        </S.SiderLogoDiv>
    );
};
import { Layout } from 'antd';
import styled, { css } from 'styled-components';

import { LAYOUT, media } from '../../../../styles/themes/constants';

export const Header = styled(Layout.Header)`
    line-height: 1.5;

    @media only screen and ${media.md} {
        padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
        height: ${LAYOUT.desktop.headerHeight};
    }

    @media only screen and ${media.md} {
        ${(props) =>
        props?.$isTwoColumnsLayoutHeader &&
        css`
            padding: 0;
        `}
    }
`;

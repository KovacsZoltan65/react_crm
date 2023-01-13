import styled from 'styled-components';

import { Button } from '../../../../../../../../components/common/buttons/Button/Button';
import { media } from '../../../../../../../../styles/themes/constants';


export const Btn = styled(Button)`
    margin: 0.5rem 0 1.5rem 0;
    width: 100%;

    @media only screen and ${media.md} {
        max-width: 10rem;
    }

    @media only screen and ${media.xl} {
        max-width: unset;
    }
`;

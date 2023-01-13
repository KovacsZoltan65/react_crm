import { Badge as AntBadge } from 'antd';
import styled from 'styled-components';

import { defineColorBySeverity } from 'utils/utils';

export const Badge = styled(AntBadge)`
    color: inherit;

    & .ant-badge-count {
        background: ${(props) => defineColorBySeverity(props.severity)};
    }
`;

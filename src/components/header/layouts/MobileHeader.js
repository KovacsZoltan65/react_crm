import { Col, Row } from 'antd';

export const MobileHeader = ({toggleSider, isSiderOpened}) => {
    return (
        <Row>
            <Col>Profile</Col>
            <Col>
                <Row align="middle">
                    <Col>notify</Col>
                    <Col>header</Col>
                    <Col>Settings</Col>
                </Row>
            </Col>
        </Row>
    );
};
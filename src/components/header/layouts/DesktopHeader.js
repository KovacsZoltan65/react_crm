import { Col, Row } from 'antd';


export const DesktopHeader = ({ isTwoColumnsLayout }) => {

    const leftSide = isTwoColumnsLayout ? (
        <>
            <Row justify="space-between">
                <Col xl={15} xxl={12}>h. search</Col>
                <Col>GHButton</Col>
            </Row>
        </>
    ) : (
        <>
            <Col lg={10} xxl={8}>h. search</Col>
            <Col>GHButton</Col>
        </>
    );

    return (
        <Row justify="space-between" align="middle">
            {leftSide}
        </Row>
    );
};
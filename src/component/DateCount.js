import React from "react";
import { Col, Row } from "react-bootstrap";

const DateCount = ({ omar }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        لديك {omar.length} مواعيد اليوم
      </Col>
    </Row>
  );
};

export default DateCount;

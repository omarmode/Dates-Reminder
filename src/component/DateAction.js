import React from "react";
import { Col, Row } from "react-bootstrap";

function DateAction({ deletDate, Date }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="justify-content-between d-flex">
        <button className="btn-style p-2" onClick={deletDate}>
          مسح الكل{" "}
        </button>
        <button className="btn-style p-2" onClick={Date}>
          عرض البيانات{" "}
        </button>
      </Col>
    </Row>
  );
}

export default DateAction;

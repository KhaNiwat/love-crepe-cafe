import React from "react";
import Style from "../option/option.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import All from "../../img/All.png";
import Addanddel from "../addanddel/addanddel.jsx";
import Form from "react-bootstrap/Form";
export default function option() {
  return (
    <div className={Style.Container}>
      <Row>
        <Col>
          <img src={All} alt="All" />
        </Col>
      </Row>
      <Row className="bg-primary text-white">
        <Col>
          <h4>Pad Thai</h4>
          <h4>2000 W</h4>
          <div className={Style.amount}>
            <Row>
              <Col>
                <Form>
                  {["checkbox", "vae"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <p>amount</p>
                <Addanddel />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CustomInput,
} from "reactstrap";

function SectionButtons() {
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [37.5],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 },
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title">
            <h2>Basic Elements</h2>
          </div>
          <div id="buttons">
            <div className="title">
              <h3>
                Buttons <br />
                <small>Pick your style</small>
              </h3>
            </div>
          </div>
          <Row>
            <Col lg="3" sm="6">
              <div className="title">
                <h3>Radio Buttons</h3>
              </div>
              <div className="form-check-radio">
                <Label check>
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  />
                  Radio is off <span className="form-check-sign" />
                </Label>
              </div>
              <div className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios2"
                    name="exampleRadios"
                    type="radio"
                  />
                  Radio is on <span className="form-check-sign" />
                </Label>
              </div>
              <div className="form-check-radio disabled">
                <Label check>
                  <Input
                    defaultValue="option3"
                    disabled
                    id="exampleRadios3"
                    name="exampleRadios"
                    type="radio"
                  />
                  Disabled radio is off <span className="form-check-sign" />
                </Label>
              </div>
              <div className="form-check-radio disabled">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option4"
                    disabled
                    id="exampleRadios4"
                    name="exampleRadioz"
                    type="radio"
                  />
                  Disabled radio is on <span className="form-check-sign" />
                </Label>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="title">
                <h3>Sliders</h3>
              </div>
              <div className="slider" id="sliderRegular" />
              <br />
              <div className="slider slider-primary" id="sliderDouble" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;

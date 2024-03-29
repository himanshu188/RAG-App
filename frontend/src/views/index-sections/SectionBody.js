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
import React, { useEffect, useState } from "react";
// plugin that creates slider
import DataService from "./data-service";

// reactstrap components
import { Button, FormGroup, Input, Row, Col, Container } from "reactstrap";

function SectionBody() {
  const [apiData, setApiData] = useState(null);
  const [id, setId] = useState("");
  const [sliderValue, setSliderValue] = useState(50); // Initial value

  const fetchData = async () => {
    try {
      var data = {
        query: id,
      };
      const response = await DataService.getLLM(data);
      const result = await response.data.answer;
      setApiData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title btn-center">
            <h2>Influencer</h2>
          </div>
          <div className="section">
            <Row>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/noah_beck.jpg.jpeg")}
                />
                <p className="text-center">Noah Beck</p>
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/adin_ross.jpg.jpeg")}
                />
                <p className="text-center">Adin Ross</p>
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/Cole_Hudson.jpeg")}
                />
                <p className="text-center">Cole Hudson</p>
              </Col>
            </Row>
          </div>
          <div className="title btn-center">
            <h2>Research</h2>
          </div>
          <Row>
            <Col md="3"></Col>
            <Col md="3">
              {
                <FormGroup>
                  <Input
                    placeholder="Prompt"
                    defaultValue="Prompt"
                    type="text"
                    value={id}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              }
            </Col>
            <Col sm="2">
              {/* <h3>Sliders</h3> */}
              <p>Temprature: {sliderValue}</p>
              <div>
                <input
                  className="slider"
                  type="range"
                  id="slider"
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
              </div>
              <br />
            </Col>
            <Col md="2">
              <Button
                className="btn-round mr-1"
                color="default"
                onClick={handleButtonClick}
                outline
                type="button"
              >
                Submit
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md="2"></Col>
            <Col md="8">
              <h3>{apiData && apiData}</h3>
              {/* <h3>Test Data</h3> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionBody;

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
import React, {useEffect,useState} from "react";
// plugin that creates slider
import Slider from "nouislider";
import DataService from "./data-service";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  ontainer,
  Row,
  Col,
  Container,
} from "reactstrap";
import dataService from "./data-service";

function SectionBody() {
    const [apiData, setApiData] = useState(null);
    const [id, setId] = useState('');
    // const [inputId, setInputId] = useState('');
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
//   React.useEffect(() => {
//     fetchData();
//   }, [id]);

    const fetchData = async () => {
        try {
            const response = await dataService.get(id);
            // const result = await response;
            const result = await response.data.description;
            setApiData(result);
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    };


//   const handleIdSubmit = () => {
//     setId((prevId) => inputId);
//   };


  const handleInputChange = (event) => {
    // event.persist(); 
    // setInputId(event.target.value);
    setId(event.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <>
      <div className="section section-buttons">
        <Container>
            <Row>
                <Col md="3">
                    {
                        (
                        <FormGroup>
                            <Input placeholder="Prompt" defaultValue="Prompt" type="text"
                            value={id}
                            onChange={handleInputChange}
                            />
                        </FormGroup>
                        )
                    }
                </Col>
                <Col md="3">
                    <Button
                    className="btn-round mr-1"
                    color="default"
                    onClick={handleButtonClick}
                    outline
                    type="button"
                    >
                    Default
                    </Button>
                </Col>
            </Row>
            <p>
              {
                apiData && (
                    apiData
                )
              }
            </p>
        </Container>
      </div>
    </>
  );
}

export default SectionBody;

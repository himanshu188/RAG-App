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

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import YouTube from "react-youtube";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SalesOverview from "../components/SalesOverview";
import ActiveUsers from "../components/ActiveUsers";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";

function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const videoId = "JRMSDbQtcoQ"; // Replace with the actual YouTube video ID

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const containerStyles = {
    marginLeft: "20px", // Adjust the value as needed
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const appTrendData = [
    {
      name: "TikTok",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
      name: "Instagram",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
  ];

  const reelsVsPostData = [
    {
      name: "Reels",
      data: [421, 354, 445, 436, 209, 312, 380, 394, 420, 496, 403, 379],
    },
    {
      name: "Post",
      data: [330, 173, 200, 224, 168, 160, 382, 134, 320, 264, 332, 286],
    },
  ];

  const InfluencerData = [
    {
      name: "Mid",
      data: [80, 416, 139, 227, 273, 468, 364, 121, 73, 456, 259, 203],
    },
    {
      name: "Large",
      data: [290, 288, 329, 280, 341, 222, 253, 317, 91, 184, 450, 217],
    },
  ];

  const danceData = [
    {
      name: "Number",
      data: [330, 250, 110, 300, 490, 350, 270, 130, 425],
    },
  ];

  const MemeData = [
    {
      name: "Number",
      data: [294, 97, 275, 250, 372, 79, 424, 116, 456],
    },
  ];

  const MusicData = [
    {
      name: "Number",
      data: [59, 244, 234, 220, 372, 314, 268, 287, 130],
    },
  ];
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <Row>
        <Col md="6">
          <SalesOverview
            title={"Trends on Tiktok vs Instagram"}
            percentage={5}
            chart={<LineChart data={appTrendData} />}
          />
        </Col>
        <Col md="6">
          <ActiveUsers
            title={"Dance Trend"}
            percentage={23}
            chart={<BarChart data={danceData} />}
          />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <SalesOverview
            title={"Reels vs Post"}
            percentage={5}
            chart={<LineChart data={reelsVsPostData} />}
          />
        </Col>
        <Col md="6">
          <ActiveUsers
            title={"Meme trends"}
            percentage={23}
            chart={<BarChart data={MemeData} />}
          />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <SalesOverview
            title={"Mid Influencer vs Big Influencer"}
            percentage={5}
            chart={<LineChart data={InfluencerData} />}
          />
        </Col>
        <Col md="6">
          <ActiveUsers
            title={"Music Trends"}
            percentage={23}
            chart={<BarChart data={MusicData} />}
          />
        </Col>
      </Row>
      <div className="section" />
      <Row>
        <Col md="6">
          <div style={containerStyles}>
            {/* <YouTube videoId={videoId} opts={opts} /> */}
          </div>
        </Col>
      </Row>
      <div className="section" />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/joe-gardner-2.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Jane Faker <br />
              </h4>
              <h6 className="description">Music Producer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Follows
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Following
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                            Flume <br />
                            <small>Musical Producer</small>
                          </h6>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Banks <br />
                            <small>Singer</small>
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Not following anyone yet :(</h3>
              <Button className="btn-round" color="warning">
                Find artists
              </Button>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default DashboardPage;

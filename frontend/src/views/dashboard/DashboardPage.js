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
      <DemoFooter />
    </>
  );
}

export default DashboardPage;

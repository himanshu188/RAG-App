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
import { Container, Row, Col, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";
import YouTube from "react-youtube";

function YouTubeSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [videoId, setVideoId] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchYoutube = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
      const apiKey = process.env.REACT_APP_YOUTUBE_API_TOKEN;
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${apiKey}&type=video`
      );

      // Extract video ID from the first result
      const firstVideo = response.data.items[0];
      if (firstVideo) {
        setVideoId(firstVideo.id.videoId);
      } else {
        setVideoId(""); // Reset videoId if no results are found
      }
    } catch (error) {
      console.error("Error searching YouTube:", error);
    }
  };

  const handleButtonClick = () => {
    searchYoutube();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <>
      <Container>
        <div className="title">
          <h2>YouTube</h2>
        </div>
      </Container>
      <Row>
        <Col md="3">
          {
            <FormGroup>
              <Input
                placeholder="Prompt"
                defaultValue="Prompt"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
              />
            </FormGroup>
          }
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
        <Col md="6">
          <div>{videoId && <YouTube videoId={videoId} opts={opts} />}</div>
        </Col>
      </Row>
    </>
  );
}

export default YouTubeSection;

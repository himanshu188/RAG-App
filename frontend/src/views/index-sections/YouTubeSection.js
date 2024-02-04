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
        <div className="title btn-center">
          <h2>YouTube</h2>
        </div>
        <Row>
          <Col md="4"></Col>
          <Col md="3">
            <div className="center">
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
            </div>
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
          <Col md="6">
            <div>{videoId && <YouTube videoId={videoId} opts={opts} />}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default YouTubeSection;

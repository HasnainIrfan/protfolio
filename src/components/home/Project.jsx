import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import { repos } from "../../editable-stuff/config";
import axios from "axios";
import { useEffect } from "react";

const Project = ({ heading }) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {
            repos.reposData &&
            repos.reposData.map((item, index) => {
              return (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={item}
                />
              )
            })
          }
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;

import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    myRole,
    repoLink,
    languages,
    link
  } = value;

  return (
    <Col md={6}>
      <a href={`${link && link !== "" ? link : "/"}`} target="_blank" >
        <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
            <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
            <Card.Text as="h5">{(!myRole) ? "" : "My Role" || <Skeleton count={1} />} </Card.Text>
            <Card.Text>{(!myRole) ? "" : myRole || <Skeleton count={3} />} </Card.Text>
            {repoLink && repoLink !== "" ? <CardButtons svn_url={repoLink} /> : ""}
            <hr />
            {
              languages && languages !== "" ? (
                <Language languages={languages} />
              ) : (
                ""
              )}
          </Card.Body>
        </Card>
      </a>
    </Col>

  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      <a href={svn_url} target=" _blank" className="btn btn-outline-secondary mx-2">
        <i className="fab fa-github" /> Repo
      </a>
    </div>
  );
};

const Language = ({ languages }) => {
  return (
    <div className="pb-3 ">
      Languages:{" "}
      {
        languages?.map((item, i) => (
          <span className="card-link" key={i}>
            <span className="badge bg-light text-dark">
              {item}
            </span>
          </span>
        ))
      }
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;

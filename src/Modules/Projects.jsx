import React, {Fragment} from 'react';
import CustomNav from '../Components/NavBar';
import {Container, Row, Col} from 'react-bootstrap';
import {projectsList} from '../utils/helperList';

const Projects = () => {
    return (
        <>
            <CustomNav/>
            <Container className="mt-2 mt-md-5">
                {projectsList.map(proj => (
                    <Fragment key={proj.label}>
                        <Row className="mb-3 mb-md-5 px-md-5" xs={1} md={2}>
                            <Col>
                                <a href={proj.src} target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid proj-image shadow" src={proj.imgSrc} alt={proj.label}/>
                                </a>
                            </Col>
                            <Col className="pt-3 pt-md-0">
                                <h3 className="font-weight-bold color-customBlue mb-2">{proj.label}</h3>
                                {proj.description && <>
                                    <span className="d-block pb-2" dangerouslySetInnerHTML={{__html: proj.description}}/>
                                </>}
                                {proj.src && <>
                                    <div className="pb-2">
                                        Link: <a href={proj.src} target="_blank"
                                                 rel="noopener noreferrer">{proj.src}</a>
                                    </div>
                                </>}
                                {proj.src2 && <>
                                    <div className="pb-2">
                                        Link2: <a href={proj.src2} target="_blank"
                                                 rel="noopener noreferrer">{proj.src2}</a>
                                    </div>
                                </>}
                                {proj.githubSrc && <>
                                    Source code: <a href={proj.githubSrc} target="_blank"
                                                    rel="noopener noreferrer">{proj.githubSrc}</a><br/>
                                </>}
                            </Col>
                        </Row>
                    </Fragment>
                ))}
                <div className="row text-center">
                    <div className="col">... and much more</div>
                </div>
            </Container>
        </>
    )
};

export default Projects;

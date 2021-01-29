import React, {Fragment} from 'react';
import CustomNav from '../Components/NavBar';
import {Container, Row, ProgressBar, FormLabel, Col} from 'react-bootstrap';
import IconCard from '../Components/IconCard';
import {showcaseSkills, skillsList} from '../utils/helperList';

const Skills = () => {
    return (
        <>
            <CustomNav/>
            <Container
                className="pt-5"
            >
                <Row xs={1} md={2}>
                    <Col>
                        <div className="py-3">
                            {showcaseSkills.map(skill => <Fragment key={skill.label}>
                                <FormLabel className="color-customBlue">{skill.label}</FormLabel>
                                <ProgressBar now={skill.rating} variant="progress-progCustomBlue" style={{height: 4}}
                                             className=""/><br/>
                            </Fragment>)}
                        </div>
                    </Col>
                    <Col>
                        <Row className="justify-content-evenly">
                            {skillsList.map(s => (
                                <IconCard key={s.label} src={s.src}/>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Skills;

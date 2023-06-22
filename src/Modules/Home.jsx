import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLaravel,
  faVuejs,
  faPhp,
  faSass,
  faJs
} from "@fortawesome/free-brands-svg-icons";
import Developer from '../Icons/developer.png';
import useWindowDimensions from '../utils/dimensionHelper';
// library.add()

const Home = ({history}) => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <CustomNav />
      <div className="position-absolute" style={{height: '100vh', top: 0, bottom: 0, left: 0, right: 0, zIndex: -1}}>
        <Container className="h-100">
          <div className="d-flex h-100 mt-4 mt-md-0">
            <div className={`my-auto ${width > 760 ? 'w-50' : ''}`}>
              <div>
                <div className="">
                  <span className="color-customBlueLight h5 font-weight-bold">Hello!</span><br />
                  <span className="color-customBlue h1 font-weight-bold">I'm Andrey Ivlev</span><br />
                  <span className="color-customBlueLight h3">I'm a <span className="font-weight-bold">full stack</span> developer</span><br /><br />
                  <span className="color-customBlueLight h5">I specialize in developing web applications</span><br />
                </div>
                <div>
                  <div className="d-flex my-4">
                    <a target="_blank" rel="noopener noreferrer" title='PHP' href="https://php.net" className="color-customBlue p-0 mr-3"><FontAwesomeIcon size="2x" icon={faPhp} /></a>
                    <a target="_blank" rel="noopener noreferrer" title='Laravel' href="https://laravel.com" className="color-customBlue p-0 mr-3"><FontAwesomeIcon size="2x" icon={faLaravel} /></a>
                    <a target="_blank" rel="noopener noreferrer" title='Vue.js' href="https://vuejs.org" className="color-customBlue p-0 mr-3"><FontAwesomeIcon size="2x" icon={faVuejs} /></a>
                    <a target="_blank" rel="noopener noreferrer" title='Sass' href="https://sass-lang.com/" className="color-customBlue p-0 mr-3"><FontAwesomeIcon size="2x" icon={faSass} /></a>
                    <a target="_blank" rel="noopener noreferrer" title='JavaScript' href="https://github.com/artsapiens" className="color-customBlue p-0 mr-3"><FontAwesomeIcon size="2x" icon={faJs} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/artsapiens" className="color-customBlue p-0 mr-3"><FontAwesomeIcon size="2x" icon={faGithubSquare} /></a>
                  </div>
                  <div className="">
                    <Button className="mb-2 bg-custom font-weight-bold shadow border-0" onClick={() => window.open('mailto:aaivlev@gmail.com?subject=Сообщение от работодателя', '_blank')}>Contact Me</Button>
                    <Button className="mb-2 d-block bg-custom font-weight-bold shadow border-0" onClick={() => {window.open('https://ryazan.hh.ru/resume/cd2ddc6fff0371316d0039ed1f486b356b776f', '_blank')}}>Resume</Button>
                    <Button className="d-block bg-custom font-weight-bold shadow border-0" onClick={() => history.push('/projects')}>Portfolio</Button>
                  </div>

                </div>
              </div>
            </div>
            <div className="w-50 my-auto d-none d-md-block">
              <img src={Developer} alt=""/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
};

export default Home;

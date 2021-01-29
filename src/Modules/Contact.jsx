import React from 'react';
import CustomNav from '../Components/NavBar';
import {Container, Button} from 'react-bootstrap';
import curveSvg from '../Icons/curved.svg';
import useWindowDimensions from '../utils/dimensionHelper';
import GmailSvg from '../Icons/gmail';

const Contact = () => {
    const {width} = useWindowDimensions();
    let textContainerWidthClass, heroTextFontSize;

    if (width < 768) {
        textContainerWidthClass = 'w-100';
        heroTextFontSize = undefined;
    } else if (width >= 768 && width < 992) {
        textContainerWidthClass = 'w-50';
        heroTextFontSize = 'xx-large';
    } else {
        textContainerWidthClass = 'w-50';
        heroTextFontSize = undefined;
    }

    return (
        <>
            <CustomNav/>
            <div className="position-absolute w-100 d-none d-md-block" style={{height: '100vh', top: 0, zIndex: -1000}}>
                <div
                    style={{
                        backgroundImage     : `url(${curveSvg})`,
                        backgroundRepeat    : 'no-repeat',
                        backgroundAttachment: 'fixed',
                        backgroundSize      : `auto 100vh`
                    }}
                    className="h-100 position-fixed fixed-top fixed-bottom"
                />
            </div>
            <Container className={`${textContainerWidthClass} mt-5 float-md-right text-right mr-lg-5`}>
                <h1 className="pr-lg-5 pr-xs-3 text-boldest mb-0 color-customBlue" style={{fontSize: heroTextFontSize}}>
                    Lets <br/>Work <br/> Together!
                </h1>
                <br/>
                <div className="mt-3 mb-3 pr-lg-5 pr-xs-3">
                    <Button className="contact-btns bg-custom shadow border-0 py-1 px-2"
                            onClick={() => window.open('mailto:aaivlev@gmail.com?subject="Hello !"', '_blank')}>
                        <GmailSvg fillColor="#8d81a5" style={{width: 16}}/><span>Mail</span>
                    </Button>
                </div>
            </Container>
        </>
    )
};

export default Contact;

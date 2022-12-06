import Loader from 'react-loaders'
import './index.scss';
import picture from '../../assets/images/html.png'
import reactPic from '../../assets/images/react.png'



const About = () => {
    // let loader = <Loader type="ball-pulse" />
    return (<>
        <div className='about'>
            <h2><u>About Me</u></h2>
            <p className="ptag">Hi!,</p>
            <p className="ptag">
                I am Jonathon. I am a full stack developer. I am familiar with, React, MongoDB, Mysql, and HTML and CSS! <br />I am always trying to better my development
            skills and learning.I like spending time with friends and family and coding of course!</p>
        </div>
        <Loader type="line-spin-fade-loader" />
        <div images="images">
        <img src={picture} alt="placeholdler" className="html-pic" />
        <br />
        <img src={reactPic} alt="placeholdler" className="react-pic" />
        </div>
        </>
    )
}

export default About
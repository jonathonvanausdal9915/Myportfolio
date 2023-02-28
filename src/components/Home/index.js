
import { Link } from "react-router-dom";
import './index.scss';
import profilePic from '../../assets/images/profile.png'
import Loader from 'react-loaders'


const Home = () => {
    
   


    return (<>
        <div className="home-page">
            <div className="text-zone">
                <h1> Hi, <br /> I'm
                Jonathon
                <br />
              
                </h1>
                <h2> Full Stack Developer</h2>
                
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
               
            </div>
                <div className="profile-image">
                    <img src={profilePic} alt="placeholdler" className="profile-pic" />
                </div>
        </div>
     
        <Loader type="line-spin-fade-loader"  active/>

       
          </>
    )
}

export default Home
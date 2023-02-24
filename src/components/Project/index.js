
import './index.scss';
import Loader from 'react-loaders'
const Project = () => {
   return (
<>

<h1 class="neonText">
          My Projects 
    </h1>
<div className="project-layout">
    
        <div className="project-1">
        <iframe  id="iframe1" title="iframe1"src="https://giphy.com/embed/Z6LbWQTHvT7U8BJP89" width="380" height="171" frameBorder={0} className="giphy-embed" allowFullScreen></iframe>
            <a href="https://paneless-windows.herokuapp.com/#/home" id="btn-1" className="btn-1" rel="noopener noreferrer" target="_blank">
        <span></span>
        <span></span>
        <span></span>
        <span></span>Try Me!</a>
        </div>

        <div className="project-2">
        <iframe title="iframe2" id="iframe2"src="https://giphy.com/embed/Fls6kDRnOkRd02S2id" width="380" height="171" frameBorder={0} className="giphy-embed" allowFullScreen></iframe>

        <a href="https://trail-media.herokuapp.com/" id="btn-3" className="btn-1" rel="noopener noreferrer" target="_blank">
        <span></span>
        <span></span>
        <span></span>
        <span></span>Try Me!</a>
    </div>
    

        <div className="project-3">
        <iframe title="iframe3" id="iframe3" src="https://giphy.com/embed/LswoJVa0EMVMcH7o5U" width="380" height="171"  frameBorder={0}className="giphy-embed" allowFullScreen></iframe>
            <a href="https://myfitnesszone.herokuapp.com/" id="btn-2" className="btn-1" rel="noopener noreferrer" target="_blank">
        <span></span>
        <span></span>
        <span></span>
        <span></span>Try Me!</a>
        </div>
     
    
</div>
<Loader type="line-spin-fade-loader" />
</>
   )
    
}
export default Project

import './index.scss';
import Loader from 'react-loaders'
const Project = () => {
   return (
<>
<h2 className="h2-project"><u>My Projects</u></h2>
<div className="project-layout">
    <div className="box-1">   <div className="project-1">
        <iframe title="project-1"src="https://giphy.com/embed/Fls6kDRnOkRd02S2id" width="480" height="271" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <a href="https://trail-media.herokuapp.com/" id="btn-1" className="btn-1" rel="noopener noreferrer" target="_blank">Try Me!</a>
        </div>

        <div className="project-2">
        <iframe title="project-2" src="https://giphy.com/embed/LswoJVa0EMVMcH7o5U" width="480" height="271" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <a href="https://myfitnesszone.herokuapp.com/" id="btn-2" className="btn-1" rel="noopener noreferrer" target="_blank">Try Me!</a>
        </div>
    </div>
    <div className="box-2">
        <div className="project-3">
        <iframe title="project-3" src="https://giphy.com/embed/ySw5TSTG06ARrjxjWk" width="480" height="230" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <a href="https://trail-media.herokuapp.com/" id="btn-3" className="btn-1" rel="noopener noreferrer" target="_blank">Try Me!</a>
        </div>

        <div className="project-4">
        <iframe title="project-4" src="https://giphy.com/embed/bjiNNXygCgu204OnBz" width="480" height="271" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <a href="https://trail-media.herokuapp.com/" id="btn-3" className="btn-1" rel="noopener noreferrer" target="_blank">Try Me!</a>
        </div> 
    </div>
    
</div>
<Loader type="line-spin-fade-loader" />
</>
   )
    
}
export default Project
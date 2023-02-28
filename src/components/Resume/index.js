
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import resume from '../../assets/images/JonathonResume.pdf';
const Resume = () => {
   return (
<>
<div className="resume"> <h1>Download My Resume!</h1> <br />
<FontAwesomeIcon icon={faFilePdf} /></div>
<div className="resume-file">
<a className="resumebtn" href={resume} download="proposed_file_name">Download <br /><FontAwesomeIcon icon={faDownload} /></a>

</div>
<Loader type="line-spin-fade-loader" />




</>
   )
    
}
export default Resume
import './Footer.module.css'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Footer(){
    return(
        <footer className='fo--ter'>
            
            <div><FaGithubSquare /> <FaLinkedin /> <FaInstagramSquare/></div>
            <span>Costs</span>
            <p> from @Kaio.Franklin.Dev &copy; 2024</p>
            
            
        </footer>
    )
}
export default Footer
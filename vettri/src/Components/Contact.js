import './Contact.css'
import { useState } from 'react';
import bg from "./image/bg.jpg"
import insta from "./insta.png"
import linkedin from "./linkedin.png"
import giticon from "./github.png"

const Contact = () => {

    const [show , setshow] = useState(false)
    
    function button1 () {
    setshow(!show)
    }

    return (
        <div className="font">
             <img src={bg} class="bg"></img>
            <h1 className='header'>Contact Me</h1>
                 <div className='know'>
            {
                show && <div className='cont-inter'>

                    <div>
                        <p><b>Contact Number</b> : 9865821843</p>
                        <p><b>Email</b> : msvettrikanth@gmail.com</p>
                        {/* <p><b>LinkedIn</b> : <a href='https://www.linkedin.com/in/vettrikanth/'>LinkedIn</a></p>
                        <p><b>Github</b> : <a href='https://github.com/Vettrikanth'>Git</a></p>
                        <p><b>Instagram</b> : <a href='https://instagram.com/_.vettrikanth?igshid=MzNlNGNkZWQ4Mg=='>Insta/</a></p> */}
                        <p><a href='https://www.linkedin.com/in/vettrikanth/' target='_blank'><img src={linkedin} className='png'></img></a></p>
                        <p><a href='https://instagram.com/_.vettrikanth?igshid=MzNlNGNkZWQ4Mg==' target='_blank'><img src={insta} className='png'></img></a></p>
                        <p><a href='https://github.com/Vettrikanth' target='_blank'><img src={giticon} className='png' ></img></a></p>

                    </div>



                </div>
            }
               <button type='button' onClick={button1} className='button-cont'><b><i>Click Here</i></b></button>

        </div>
        </div>
    )
  };

  export default Contact;
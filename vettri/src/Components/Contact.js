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
            <h1 className='header'>Want To Contact Me?</h1>
                 <div className='know'>
            {
                show && <div className='cont-inter'>

                    <div>
                        <p><b>Contact Number</b> :9865821843</p>
                        <p><b>Email</b> : msvettrikanth@gmail.com</p>
                        {/* <p><b>LinkedIn</b> : <a href='https://www.linkedin.com/in/vettrikanth/'>LinkedIn</a></p>
                        <p><b>Github</b> : <a href='https://github.com/Vettrikanth'>Git</a></p>
                        <p><b>Instagram</b> : <a href='https://instagram.com/_.vettrikanth?igshid=MzNlNGNkZWQ4Mg=='>Insta/</a></p> */}
                        <p><a href='https://www.linkedin.com/in/vettrikanth/'><img src={linkedin} className='insta'></img></a></p>
                        <p><a href='https://instagram.com/_.vettrikanth?igshid=MzNlNGNkZWQ4Mg=='><img src={insta} className='insta'></img></a></p>
                        <p><a href='https://github.com/Vettrikanth'><img src={giticon} className='insta'></img></a></p>

                    </div>



                </div>
            }
               <button type='button' onClick={button1} className='button-cont'><b><i>Click Here</i></b></button>

        </div>
        </div>
    )
  };

  export default Contact;
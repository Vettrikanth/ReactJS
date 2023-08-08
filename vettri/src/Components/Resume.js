import './Resume.css';
import resume from './image/resume.jpg'
import t from './image/tony.jpeg'
import bg from "./image/bg.jpg"

const Resume = () => {
    return (
        <div className='resume'>
            <img src={bg} class="bg"></img>
            <p>I’m a hardworking and passionate engineer interested in the concepts of machine learning and deep learning.I am focused on gaining practical knowledge so as to enhance my skills and I’m looking for an opportunity to showcase my skills.</p>

            <ol>
                <p>Education</p>
                <li>Bala Matric Higher Secondary School 	95.8%</li>
                <li>Bala Matric Higher Secondary School 	96.87%</li>
                <li>B.Tech Artificial Intelligence and Data Science 3rd year  CGPA:8.85</li>
            </ol>
            <ol>
                <p> skills</p>
                <li>
                    Leadership
                </li>
                <li>Content Writing </li>
                <li>Team Management
                </li>
                <li>Problem Solving</li>
            </ol>
            <ul>
                <p>PROGRAMMING LANGUAGES & SKILLS</p>
                <li>Programming: Python</li>
                <li>ML: Scikit learn</li>
                <li>Data Analysis:
                    <ul>
                        <li>Excel,  </li>
                        <li> pandas,</li>
                        <li>numpy ,</li>
                        <li> matplot </li>
                        <li>,seaborn</li>
                    </ul> </li>
            </ul>
            <ul>
                <p>Co-Curricular & Extra Curricular Activities:</p>
                <li>Media and Marketing Coordinator in Department Association</li>
                <li>Active Volunteer in NSS</li>
            </ul>

        </div>

    )
}
export default Resume;
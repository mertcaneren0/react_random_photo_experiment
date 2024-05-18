import Angular from './images/angular.png';
import Bootstrap from './images/bootstrap.png';
import Csharp from './images/csharp.jpeg';
import Fullweb from './images/fullweb.png';
import './Course.css';


const courseMap = {
    Angular,
    Bootstrap,
    Csharp,
    Kompleweb:Fullweb
};

function Course({courseName}){
    
    return(
        <div className='courseDiv'>
            <img className='course' src={courseMap[courseName]} alt="course"/>
        </div>
    )
}

export default Course;
import {LiaChevronLeftSolid,LiaChevronRightSolid} from 'react-icons/lia'
import { useState } from "react";
function Courses({ courses ,removeCourse }) {

    const [index, setIndex] = useState(0)
    const{content,title,price} = courses[index]

    const checkIndex = (index)=>{
        if(index<0){
            return courses.length -1
        }if(index>courses.length -1){
            return 0
        }
        return index
    }

    const prevCourse = ()=>{
        setIndex((index)=>{
            let newIndex = index -1
            return checkIndex(newIndex)
        })
    }
    const nextCourse = ()=>{
        setIndex((index)=>{
            let newIndex = index +1
            return checkIndex(newIndex)
        })
    }


  return (
    <div className="courseMainDiv">
      <div>
        <h2 className="courseMainDiv" >Kurslarım</h2>
        <div className="cardDiv">
            <button className='card-btn' onClick={prevCourse}>
                <LiaChevronLeftSolid/>
            </button>
        <div className="card">
        <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price} TL</h4>
           
        </div>
        <p>{content}</p>
        
    </div>
    <button onClick={nextCourse} className='card-btn'>
                <LiaChevronRightSolid/>
            </button>
          {/* {courses.map((course ,index) => {
            return <Course key={index} {...course} removeOneCourse={removeCourse} />;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default Courses;

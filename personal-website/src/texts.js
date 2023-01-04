import { getAge, checkForPresent, createLanguageBar } from "./utilFunctions"
const {format} = require('date-fns-tz');

const age = getAge();

export const bio = `Hello! My name is Andrew Miller, and I am a ${age} year old recent graduate from Bow Valley College in Calgary, Alberta. \n
 Other than coding, my interests are reading (fantasy, mostly), boxing, cars, and trying out the different food in Calgary's plentiful restaurants and pubs.
Gaming is another hobby, be it on a board, with cards, or on the computer.`

export function projectCreate(array) {
    return (
        <div>
    {array.map((item) => {
        return (
            <div>

            <div style={{backgroundColor:"lightYellow", borderRadius:"5px", padding:"5px"}}>
                <strong>{item.company}</strong><br/>
                {createLanguageBar(item.languages)}
                <p>{format(item.startDate,"MMMM yyyy")} - {checkForPresent(format(item.endDate,"MMMM yyyy"))}</p>
                <br/>
                <p>{item.description}</p>
            </div>
            <br/>
            </div>
        )
    })}
    </div>
    )
};

export function eduCreate(array) {
    let open = "none";
    return(
        <div>
        {array.map((item) => {
            
            return(
                <div>
                    <h3>{item.school.schoolName}</h3>
                    <h4>{item.school.years}</h4>
                    <div style={{display:"flex", flexWrap:"wrap"}}>

                    {item.school.term.map((item) => {
                        return(
                            <div style={{width:"40%"}}>  
                            {item.termNumber}
                            <br/>
                            
                            Courses 
                            <button onClick={()=>{let text = document.getElementById(item.termNumber); text.style.display="block"}}>v</button>
                            <div id={item.termNumber} style={{display:open}}>
                            {item.courses.map((item) => {
                                return(
                                    <div>
                                       <span style={{fontSize:"12px"}}>{item.courseNumber} {item.descript}
                                        </span> 
                                        </div>
                                )
                            })}
                           </div>
                            </div>
                      
                        )})} </div>
                     </div>   )})}
        </div>
    )
}
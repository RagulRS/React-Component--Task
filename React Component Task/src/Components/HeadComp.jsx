import PropsTypes from "prop-types";
import styles from './HeadComp.module.css';
import React, { useState } from 'react';

const HeadComp = () => {
    const headData ={
        descrption: "This site gives you more info about hatchback cars!!"
      };
      const [submitted, setSubmitted] = useState(false);

      const handleSubmit = (event) => {
        event.preventDefault();
       
        setSubmitted(true);
      };
      
    return (
        <div>
            
        <div className={styles["root"]}>
                    <h1>{headData.descrption}</h1>
                    <br/><br/>
            <form>
             <input  type="email" placeholder="Email Address" />
               
             <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            {submitted && <p>Form submitted successfully!</p> }
        </div>

      
        </div>
    )
}







HeadComp.PropsTypes = {
    descrption: PropsTypes.string,
}

export default HeadComp;

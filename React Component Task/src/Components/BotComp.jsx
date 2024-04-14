import PropsTypes from "prop-types";
import styles from './BotComp.module.css';

const BotComp = () => {

    return (
        <div>
            
        <div className={styles["root"]}>  
                    
            <form>
             <input  type="email" placeholder="Email Address" />
               
                <button type="submit" > Submit </button>
            </form>
        </div>

      
        </div>
    )
}

BotComp.PropsTypes = {
    descrption: PropsTypes.string,
}

export default BotComp;
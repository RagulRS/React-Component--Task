import PropsTypes from "prop-types";
import styles from './iconicComp.module.css';

const iconData= [{

  icon: "fa-solid fa-car",
    head: "New Model Cars",
    des: "The car which give more comfort and sportiveness while driving."
  }, {
    icon: "fa-solid fa-gears",
    head: "Sevice Available",
    des: "First 3 services were free and free engine oil replacement at third service period."
  }, {
    icon: "fa-solid fa-car-on",
    head: "EV Cars",
    des: "We provide EV cars with an automatic option"
  }]

const IconicComp1 = ()=>{
return(
    <span className={styles["root1"]}>
        <section className=" text-center" >
      <div > 
    <div >
    <i className={iconData[0].icon}></i><br/><br/>
    <div >
        <h3>{iconData[0].head}</h3>
             <p>{iconData[0].des}</p></div>
    
    </div>
    </div> 
    </section>
    </span>
  
)
}

const IconicComp2 = ()=>{
  return(
      <span className={styles["root2"]}>
          <section className=" text-center" >
        <div > 
      <div >
      <i className={iconData[1].icon}></i><br/><br/>
      <div >
          <h3>{iconData[1].head}</h3>
               <p>{iconData[1].des}</p></div>
      
      </div>
      </div> 
      </section>
      </span>
    
  )
  }

  const IconicComp3 = ()=>{
    return(
        <span className={styles["root3"]}>
            <section className=" text-center" >
          <div > 
        <div >
        <i className={iconData[2].icon}></i><br/><br/>
        <div >
            <h3>{iconData[2].head}</h3>
                 <p>{iconData[2].des}</p></div>
        
        </div>
        </div> 
        </section>
        </span>
      
    )
    }

IconicComp1.PropsTypes = {
  head: PropsTypes.string,
  des: PropsTypes.string,
  icon: PropsTypes.string,
}
IconicComp2.PropsTypes = {
  head: PropsTypes.string,
  des: PropsTypes.string,
  icon: PropsTypes.string,
}
IconicComp3.PropsTypes = {
  head: PropsTypes.string,
  des: PropsTypes.string,
  icon: PropsTypes.string,
}
export default IconicComp1;
export {IconicComp2, IconicComp3}
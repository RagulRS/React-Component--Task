import PropsTypes from "prop-types";
import styles from './ReviewComp.module.css';

const reviewData= [{

  img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    head: "Raman",
    des: "The Customer service is soo good..."
  }, {
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    head: "Sita",
    des: "The Car quality are very nice and riding comfort is good."
  }, {
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    head: "Lakshmanan",
    des: "The features of my car was well explained the sales team. "
  }]
const Title= ()=>{
  return(

  <>
  <h3>What people are saying...</h3>
  </>
  )
}
const ReviewComp1 = ()=>{
return(
    <span className={styles["root1"]}>
        <section className=" text-center" >
      <div > 
    <div >
    <img id={styles["rimg"]} src={reviewData[0].img}></img><br/><br/>
    <div >
        <h3>{reviewData[0].head}</h3>
             <p id={styles["rp"]}>{reviewData[0].des}</p></div>
    
    </div>
    </div> 
    </section>
    </span>
  
)
}

const ReviewComp2 = ()=>{
  return(
      <span className={styles["root2"]}>
          <section className=" text-center" >
        <div > 
      <div >
      <img id={styles["rimg"]} src={reviewData[1].img}></img><br/><br/>
      <div >
          <h3>{reviewData[1].head}</h3>
               <p id={styles["rp"]}>{reviewData[1].des}</p></div>
      
      </div>
      </div> 
      </section>
      </span>
    
  )
  }

  const ReviewComp3 = ()=>{
    return(
        <span className={styles["root3"]}>
            <section className=" text-center" >
          <div > 
        <div >
        <img id={styles["rimg"]}  src={reviewData[2].img}></img><br/><br/>
        <div >
            <h3>{reviewData[2].head}</h3>
                 <p id={styles["rp"]}>{reviewData[2].des}</p></div>
        
        </div>
        </div> 
        </section>
        </span>
      
    )
    }

ReviewComp1.PropsTypes = {
  head: PropsTypes.string,
  des: PropsTypes.string,
  img: PropsTypes.string,
}
ReviewComp2.PropsTypes = {
  head: PropsTypes.string,
  des: PropsTypes.string,
  img: PropsTypes.string,
}
ReviewComp3.PropsTypes = {
  head: PropsTypes.string,
  des: PropsTypes.string,
  img: PropsTypes.string,
}

Title.PropsTypes= PropsTypes.string;


export default ReviewComp1;
export {ReviewComp2, ReviewComp3, Title}
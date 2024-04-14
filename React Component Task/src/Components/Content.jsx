import PropTypes from "prop-types";
import styles from "./Content.module.css";
const carData= [{

    img: "https://techlekh.com/wp-content/uploads/2021/12/Hyundai-Grand-i10-NIOS-Front-Styling.jpg",
      head: "Hyundai Grand i10",
      des: "The Hyundai i10 has 2 Petrol Engine and 1 LPG Engine on offer. The Petrol engine is 1086 cc and 1197 cc while the LPG engine is 1086 cc . It is available with Manual & Automatic transmission. Depending upon the variant and fuel type the i10 has a mileage of 16.95 to 20.36 kmpl & Ground clearance of i10 is 165 mm."
    }, {
      img: "https://imgd-ct.aeplcdn.com/1056x660/n/fnntova_1609967.jpg?q=80",
      head: "Tata Tiago",
      des: "The Tata Tiago is a small hatchback with a 1.2L Revotron petrol and bi-fuel engine that produces 86 PS of power. It has a 4-star Global NCAP rating and comes with 2 airbags. It has a 242 liter boot space and is available in 6 colors."
    }, {
      img: "https://wallpapercave.com/wp/wp2681453.jpg",
      head: "Maruti Suzuki Swift",
      des: "The Maruti Suzuki Swift is a sporty, 5-seater hatchback with a dual-tone design. It has a 1.2-liter petrol engine, with a maximum power of 66 kW and a maximum torque of 113 Nm. The Swift has a fuel efficiency of 22.38 km/l for the petrol (MT) and 22.56 km/l for the petrol (AGS). It has a ground clearance of 163 mm, which allows it to handle rough patches of road with ease."
    }]

const Content1 = () => {
    return(
        <div className={styles["root1"]}>
            
        
        <div className={styles["img1"]}>
            <img id={styles["cimg"]} src={carData[0].img}/>
            </div>
        
        <div  className={styles["content1"]} >
            <h3>{carData[0].head}</h3>
                 <p id={styles["cp"]}>{carData[0].des}</p></div>
        
       
        </div>
      
    )
}

const Content2 = () => {
    return(
        <div className={styles["root2"]}>
            
        <div  className={styles["content2"]} >
            <h3>{carData[1].head}</h3>
                 <p id={styles["cp"]}>{carData[1].des}</p></div>
    
                 <div className={styles["img2"]}><img id={styles["cimg"]} src={carData[1].img}/></div>
        </div>
      
    )
}

const Content4 = () => {
    return(
        <div className={styles["root4"]}>
            <div className={styles["img2"]}><img id={styles["cimg"]}src={carData[1].img}/></div>
        <div  className={styles["content2"]} >
            <h3>{carData[1].head}</h3>
                 <p id={styles["cp"]}>{carData[1].des}</p></div>
    
                 
        </div>
      
    )
}
const Content3 = () => {
    return(
        <div className={styles["root3"]}>
            
        
        <div className={styles["img3"]}><img id={styles["cimg"]} src={carData[2].img}/></div>
        
        <div  className={styles["content3"]} >
            <h3>{carData[2].head}</h3>
                 <p id={styles["cp"]}>{carData[2].des}</p></div>
        
       
        </div>
      
    )
}


export default Content1;
export {Content2, Content3, Content4};

import styles from './FootComp.module.css';

const FootComp =()=>{
   return(
    <div className="bg-light" id={styles["foot"]}>
    <footer  className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#!">About</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Contact</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">© Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item xs-4">
                                <a href="#!"><i id={styles["icon"]} className="fa-brands fa-facebook fa-2x"></i></a>
                            </li>
                            <li className="list-inline-item xs-4">
                                <a href="#!"><i id={styles["icon"]} className="fa-brands fa-x-twitter fa-2x"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i id={styles["icon"]} className="fa-brands fa-instagram fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
   ) ;
}

 



export default FootComp;

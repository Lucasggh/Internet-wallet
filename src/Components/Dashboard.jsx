import CardAccount from "./CardAccount";
import Header from "./Header";
import styles from "../styles/Dashboard.module.css"
import Barplot from "./Barplot";
function Dashboard() {
    return ( 
        <div className={styles.mainContainer}>
            <Header></Header>
            <div className={styles.cardContainer}>
                <CardAccount accName="Main account" balance="1500,00" currency="R$" ></CardAccount>
                <CardAccount accName="Saving account" balance="1500,00" currency="R$" ></CardAccount>    
            </div>


            <section className={styles.transactions}>

                <p className={styles.tittle}>Transactions</p>
                <div className={styles.graphCont}>
                <   Barplot className={styles.barplot}></Barplot>
                    <div className={styles.transactionHistory}>
                </div>
                </div>
                    

            </section>


        </div>
     );
}

export default Dashboard;
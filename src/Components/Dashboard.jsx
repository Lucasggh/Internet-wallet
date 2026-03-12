import CardAccount from "./CardAccount";
import Header from "./Header";
import styles from "../styles/Dashboard.module.css"
function Dashboard() {
    return ( 
        <div>
            <Header></Header>
            <div className={styles}>
                <CardAccount accName="main" balance="1500,00" currency="R$" ></CardAccount>
                <CardAccount accName="main" balance="1500,00" currency="R$" ></CardAccount>    
            </div>

        </div>
     );
}

export default Dashboard;
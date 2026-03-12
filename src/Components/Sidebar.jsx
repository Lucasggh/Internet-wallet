import styles from "../styles/Sidebar.module.css"
import Button from '@mui/material/Button';
function Sidebar() {
    const components = [
        {name:"Dashboard"},
        {name:"Transactions"},
        {name:"Cards"},
        {name:"Settings"}
    ]
    return (  
        <div className={styles.sidebar}>
            <h1>Banquex</h1>
            {components.map((componenteAtual)=>{
                return(
                <Button className={styles.button} variant="outlined" sx={{color:"#0090fa",borderColor:"#0090fa"}}>
                    {componenteAtual.name}                    
                </Button>)
            })}
        </div>
    );
}

export default Sidebar;
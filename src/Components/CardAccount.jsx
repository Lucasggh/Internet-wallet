import styles from "../styles/CardAccount.module.css";
function CardAccount(props) {
  return (
    <div className={styles.card}>
      <p className={styles.accName}>{props.accName}</p>
      <div className={styles.g1}>
        <p>{props.currency}</p>
        <p>{props.balance}</p>
        
      </div>
    </div>
  );
}

export default CardAccount;

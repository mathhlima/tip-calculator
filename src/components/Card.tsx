import React from 'react'
import styles from './styles.module.scss'

export default function Card() {
    return (
        <section className={styles.section}>

            <div className={styles.mainCard}>
                <div className={styles.cardLeft}>
                    <span className={styles.bill}>Bill</span>
                    <input className={styles.quantityInput}></input>
                    <br></br><br></br><br></br>

                    <span className={styles.select}>Select Tip %</span><br></br><br></br>

                    <div className={styles.infoButtons}>
                        
                        <button >5%</button>
                        <button>10%</button>
                        <button className={styles.percentageButton}>15%</button>
                        <button>25%</button>
                        <button>50%</button>
                        <button className={styles.customButton}>Custom</button>
                    </div>
                    <br></br> <br></br> <br></br>
                    <span className={styles.people}>Number of people</span>
                    <input  className={styles.quantityPeople}></input>


                </div>
                <div className={styles.cardRight}>
                    <div className={styles.amount}>
                        <span>Tip Amount</span>
                        <span>/ person</span>

                        <span>$4.27</span>
                    </div>

                    <div className={styles.total}>
                    <span>Total</span>
                        <span>/ person</span>

                        <span>$32.79</span>
                    </div>

                    <div className={styles.resetButton}>
                        <button>Reset</button>
                    </div>
                </div>
            </div>


        </section>
    );
}
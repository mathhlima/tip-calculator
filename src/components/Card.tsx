import React, { useState } from 'react'
import styles from './styles.module.scss'

export default function Card() {
    const [value, setValue] = useState(0);
    
    function handleChange(event: any) {
        setValue(event.target.value)
    }
    debugger;

    return (
        <section className={styles.section}>

            <div className={styles.mainCard}>
                <div className={styles.cardLeft}>
                    <span className={styles.bill}>Bill</span>
                    <input value={value} className={styles.quantityInput} onChange={handleChange}></input>
                    <br></br><br></br><br></br>

                    <span className={styles.select}>Select Tip %</span><br></br><br></br>

                    <div className={styles.infoButtons}>

                        <button>5%</button>
                        <button>10%</button>
                        <button className={styles.percentageButton}>15%</button>
                        <button>25%</button>
                        <button>50%</button>
                        <button className={styles.customButton}>Custom</button>
                    </div>
                    <br></br> <br></br> <br></br>
                    <span className={styles.people}>Number of people</span>
                    <input className={styles.quantityPeople}></input>


                </div>
                <div className={styles.cardRight}>
                    <div className={styles.amount}>

                        <div className={styles.tipAmountPerson}>
                            <span className={styles.tipAmount}>Tip Amount</span><br></br>
                            <span className={styles.person}>/ person</span>
                        </div>


                        <span className={styles.value}>$4.27</span>
                    </div>

                    <div className={styles.total}>

                        <div className={styles.totalPerson}>

                            <span className={styles.totalText}>Total</span><br></br>
                            <span className={styles.person}>/ person</span>

                        </div>


                        <span className={styles.value}>$32.79</span>
                    </div>

                    <div className={styles.resetButton}>
                        
                        <button>Reset</button>
                    </div>
                </div>
            </div>


        </section>
    );
}
import React, { useState} from 'react';
import styles from './HalfSuccessCheckbox.module.css';
import * as motion from "motion/react-client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function HalfSuccessCheckbox() {
    const [isYesChecked, setIsYesChecked] = useState(false);
    const [isNoChecked, setIsNoChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleYesClick = () => {
        setIsYesChecked(!isYesChecked);
        setIsNoChecked(false);
        setIsChecked(!isChecked);
    }

    const handleNoClick = () => {
        setIsNoChecked(!isNoChecked);
        setIsYesChecked(false);
        setIsChecked(!isChecked);
    }

    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.checkboxContainer}>
                    <h3 className={styles.playgroundSubtitle}>checkbox with 50% success rate</h3>
                    <div className={styles.wip}> ݁WIP </div>
                    <div className={styles.checkboxContent}>
                        <h4>would you like to proceed?</h4>
                        <div className={styles.checkboxWrapper}>
                            <div>
                                <span className={styles.checkboxLabel}>yes</span>
                                <motion.div
                                    className={styles.checkbox}
                                    animate={{height: isChecked ? 200 : 30}}
                                    transition={{duration: 3, ease: "easeInOut"}}
                                    onClick={handleYesClick}
                                >
                                    {isYesChecked && <FontAwesomeIcon icon={faCheck} className={styles.checkmarkIcon} />}
                                </motion.div>
                            </div>
                            <div>
                                <span className={styles.checkboxLabel}>no</span>
                                <motion.div
                                    className={styles.checkbox}
                                    animate={{height: isChecked ? 200 : 30}}
                                    transition={{duration: 3, ease: "easeInOut"}}
                                    onClick={handleNoClick}
                                >
                                    {isNoChecked && <FontAwesomeIcon icon={faCheck} className={styles.checkmarkIcon} />}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
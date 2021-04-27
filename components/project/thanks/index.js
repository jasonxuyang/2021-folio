import styles from './styles.module.scss';
import Link from 'next/link';
import Button from '../../shared/button'


function Thanks({
    text,
    url
}) {
    return(
        <>
            <div className={styles.bottom_note}>
                <div className={styles.text}>
                    {text}
                </div>
                <Button 
                    text = 'Next Project'
                    downArrow = 'false'
                    url = {url}
                />
            </div>
        </>
    )
}

export default Thanks;
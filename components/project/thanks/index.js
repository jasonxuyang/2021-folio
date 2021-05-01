import styles from './styles.module.scss';


function Thanks({
    text,
    action
}) {
    return(
        <>
            <div className={styles.bottom_note}>
                <div className={styles.text}>
                    {text}
                </div>
                {action}
            </div>
        </>
    )
}

export default Thanks;
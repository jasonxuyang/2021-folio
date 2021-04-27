import styles from './styles.module.scss';

function Section({
    head,
    content
}) {
    return(
        <div className={styles.section}>
            <h3>{head}</h3>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Section;
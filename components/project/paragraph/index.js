import styles from './styles.module.scss';
import Section from '../section';

function Paragraph({
    head,
    subhead,
    body
}) {
    const content = (
        <div className={styles.content}>
                <p>{subhead}</p>
                <p>{body}</p>
        </div>
    )
    return(
        <Section 
            head = {head}
            content = {content}
        />
    )
}

export default Paragraph;
import Link from 'next/link'
import styles from './styles.module.scss';

function BackButton({
    text,
    url
}) {

    const imgSrc = 'asset/button-arrow.svg';

    return (
        <Link href={url}>
            <a className={styles.button_container}>
                <h3>{text}</h3>
                <img src={imgSrc} alt=''/>
            </a>
        </Link>
    )
}

export default BackButton;
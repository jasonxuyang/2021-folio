import Link from 'next/link'
import styles from './styles.module.scss';

function BackButton({
    url,
}) {

    const imgSrc = 'asset/button-back-arrow.svg';

    return (
        <Link href={url}>
            <a className={styles.button_container}>
                <img src={imgSrc} alt=''/>
                <h3>Back</h3>
            </a>
        </Link>
    )
}

export default BackButton;
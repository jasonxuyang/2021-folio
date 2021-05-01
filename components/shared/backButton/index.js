import Link from 'next/link'
import styles from './styles.module.scss';
import CustomLink from '../customLink'

function BackButton({
    url,
}) {

    const imgSrc = 'asset/button-back-arrow.svg';

    return (
        <CustomLink 
            children = {<div className={styles.button_container}>
                            <img src={imgSrc} alt=''/>
                            <h3>Back</h3>
                        </div>}
            href = {url}
        />
    )
}

export default BackButton;
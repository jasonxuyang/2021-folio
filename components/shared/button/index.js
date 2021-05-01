import CustomLink from '../customLink'
import styles from './styles.module.scss';

function BackButton({
    text,
    url
}) {

    const imgSrc = 'asset/button-arrow.svg';

    return (
        <CustomLink 
            children = {<div className={styles.button_container}>
                            <h3>{text}</h3>
                            <img src={imgSrc} alt=''/>
                        </div>}
            href = {url}
        />
        
    )
}

export default BackButton;
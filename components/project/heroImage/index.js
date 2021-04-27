import styles from './styles.module.scss';

function HeroImage({
    imgUrl,
}) {
    return(
        <div className={styles.img_wrapper}>
            <img className={styles.img_hero} src={imgUrl} alt=''/>
        </div>
    )
}

export default HeroImage;
import styles from './styles.module.scss';

function HeroImage({
    imgUrl,
    alt
}) {
    return(
        <div className={styles.img_wrapper}>
            <img className={styles.img_hero} src={imgUrl} alt={alt}/>
        </div>
    )
}

export default HeroImage;
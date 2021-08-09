import styles from './styles.module.scss';

function ProjectImage({
    imgUrl,
    side,
    alt
}) {
    let useClass;
    const left = styles.img_project_left;
    const right = styles.img_project_right;
    
    if (side == 'left') {
        useClass = left;
    } else {
        useClass = right;
    }
    return(
        <div className={styles.img_wrapper}>
            <img className={useClass} src={imgUrl} alt={alt}/>
        </div>
    )
}

export default ProjectImage;
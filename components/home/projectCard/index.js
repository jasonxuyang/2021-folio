import styles from './styles.module.scss';
import Link from 'next/link';

function ProjectCard({
    imgUrl,
    title,
    workType,
    workFor,
    side,
    url,
}) {

    // Based on "side" prop - will assign the class
    const leftClass = styles.component_container_left;
    const rightClass = styles.component_container_right;
    let useClass;

    if (side == 'right') {
        useClass = rightClass;
    } else {
        useClass = leftClass;
    }

    return(
        <div className={useClass}>
            <Link href={url}>
                <a>
                    <img className={styles.img_thumbnail} src={imgUrl} alt=''/>
                </a>
            </Link>
            <div className={styles.description_container}>
                <div className={styles.secondary_container}>
                    <p>{workType}</p>
                    <p>/</p>
                    <p>{workFor}</p>
                </div>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default ProjectCard;
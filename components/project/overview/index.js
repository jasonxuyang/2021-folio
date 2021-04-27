import styles from './styles.module.scss';

function ProjectCard({
    head,
    body,
    client,
    role,
}) {
    return(
        <div className={styles.overview_section}>
            <h3>{head}</h3>
            <p className={styles.body}>{body}</p>
            <div className={styles.project_info}>
                <div className={styles.project_info_item}>
                    <p>Client</p>
                    <p>{client}</p>
                </div>
                
                <div className={styles.project_info_item}>
                    <p>Role</p>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
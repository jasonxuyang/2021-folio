import styles from './styles.module.scss';


function SidebarMobile({
    topContent,
}) {

    const top = topContent.map((content) =>
        <h2 key={content.toString()}>{content}</h2>
    );

    return (
        <div className={styles.sidebar_container}>
            <div className={styles.top_content}>
                {top}
            </div>
        </div>
    )
}

export default SidebarMobile;
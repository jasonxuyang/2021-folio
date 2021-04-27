import styles from './styles.module.scss';


function Sidebar({
    topContent,
    bottomLinks,
}) {

    const top = topContent.map((content) =>
        <h3 key={content.toString()}>{content}</h3>
    );

    const bottom = bottomLinks.map((link) =>
        <a href={'#' + link} key={link.toString()}>{link}</a>
    );

    return (
        <div className={styles.sidebar_container}>
            <div className={styles.top_content}>
                {top}
            </div>
            <div className={styles.bottom_links}>
                {bottom}
            </div>
        </div>
    )
}

export default Sidebar;
import styles from './styles.module.scss';


function Contact() {
    return(
        <>
            <div className={styles.contact_container}>
                <div>
                    <h1>Contact</h1>
                    <div className={styles.contact_links}>
                        <a href='https://www.linkedin.com/in/jasonxuyang/'>Linkedin</a>
                        <a href='https://github.com/jasonxuyang'>Github</a>
                        <a href='https://drive.google.com/file/d/1tQMbSG1gqYddOso6-U81KPVo9NqxaY3J/view?usp=sharing'>Resume</a>
                    </div>
                </div>
                <div className={styles.bottom_note}>
                    <p>Thanks for scrolling. Please enjoy an adorable <a href='https://youtu.be/jANE8lpoj2c'>pet vlog.</a></p>
                    <p>Jason Yang @2020</p>
                </div>
            </div>
        </>
    )
}

export default Contact;
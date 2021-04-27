import styles from './styles.module.scss';


function About() {
    return(
        <>
            <h1>About</h1>
            <div className={styles.about_section}>
                <div className={styles.about_content}>
                    <p>Here is a picture of me and <a href='https://eatsleepvector.com/'>my brother</a> after Thanksgiving some years ago. I’m the one holding the <a href='https://sweets.seriouseats.com/2012/09/taste-test-taro-ice-pops.html'>taro popsicle</a> and my brother is the dude in all black.</p>
                    <p>I'm a <a href='https://cm.lmc.gatech.edu/'>Computational Media</a> student trying to navigate my way through undergrad at <a href='https://www.gatech.edu/'>Georgia Tech</a> and hopefully figure some things out in the process.</p>
                    <p>In my free time, I like playing video games (<a href='https://lolchess.gg/profile/na/arugula/s4'>Peaked GM in Teamfight Tactics</a>). I also enjoy looking at cool stuff that people build, especially on the <a href='https://experiments.withgoogle.com/collection/chrome'>web.</a></p>
                </div>
                <img src='asset/about-img-369x492.jpg' alt='' className={styles.about_img}/>
            </div>
        </>
    )
}

export default About;
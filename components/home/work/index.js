import ProjectCard from '../projectCard';
import styles from './styles.module.scss';


function Work() {
    return(
        <>
            <h1>Work</h1>
            <div className={styles.work_section}>
                <div className={styles.project_card}>
                    <ProjectCard
                        imgUrl = 'asset/imgs/cover_bits-of-good.jpg'
                        title = 'Bits of Good - Helping non-profits connect with donors and volunteers.'
                        workType = 'Product Design'
                        workFor = 'Student Org'
                        side = 'left'
                        url = '/bits_of_good'
                    />
                </div>
                <div className={styles.project_card}>
                    <ProjectCard
                        imgUrl = 'asset/imgs/cover_hackgt.jpg'
                        title = "HackGT - Building a useful event scheduler for our hackathon participants."
                        workType = 'Product Design'
                        workFor = 'Student Org'
                        side = 'right'
                        url = '/project'
                    />
                </div>
            </div>
        </>
    )
}

export default Work;
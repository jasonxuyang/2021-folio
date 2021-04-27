import styles from './styles.module.scss';
import HeroImage from '../../components/project/heroImage';
import Sidebar from '../../components/shared/sidebar';
import Overview from '../../components/project/overview';
import BackButton from '../../components/shared/backButton'
import Paragraph from '../../components/project/paragraph';
import ProjectImage from '../../components/project/projectImage';
import Thanks from '../../components/project/thanks';
import Section from '../../components/project/section';

function Project() {
    const team = (
        <div className={styles.team_info}>
            <div className={styles.team_info_item}>
                <p>Product Designers</p>
                <p>Yuhan Zhou</p>
                <p>Chaebin Park</p>
                <p>Yangyi Xu</p>
                <p>Jun Yamada</p>
            </div>

            <div className={styles.team_info_item}>
                <p>Engineering Leads</p>
                <p>Prabhav Chawla</p>
                <p>Kris Satya</p>
                <p>Rithik Gavvala</p>
            </div>
        </div>
    )
    return (
        <> 
            <Sidebar 
                topContent = {[
                    <BackButton url = '../home' />
                ]}
                bottomLinks = {[
                    'Overview',
                    'Problem',
                    'Solution',
                    'Team'
                ]}
            />
            <div className={styles.main}>
                <h1>Bits of Good</h1>
                <div className={styles.img}>
                    <HeroImage imgUrl = 'asset/imgs/gen_soln-1.jpg'/>
                </div>
                <section id = 'Overview'>
                    <Overview 
                        head = 'Helping small-scale non-profits grow their support base.'
                        body = 'Bits of Good is a non-profit student organization that connects non-profits with students passionate about social good to develop software.'
                        client = 'Bits of Good'
                        role = 'Product / Visual'
                    />
                </section>
                <div className={styles.img}>
                    <HeroImage imgUrl = 'asset/imgs/gen_soln-hero.jpg'/>
                </div>
                <section id = 'Problem'>
                    <Paragraph 
                        id = 'Problem'
                        head = "Problem"
                        subhead = "Small non-profits feel that the lack of large enterprise tools was hindering their growth."
                        body = "Our research showed that at a small scale, the tools didn't limit a non-profit's ability to scale. It was the inability to find and connect with the people that care about their cause."
                    />
                </section>
                <div className={styles.img}>
                    <HeroImage imgUrl = 'asset/imgs/gen_soln-4.jpg'/>
                </div>
                <section id = 'Solution'>
                    <Paragraph 
                        id = 'Solution'
                        head = "Solution"
                        subhead = "A growth platform that connects non-profits with donors and volunteers."
                        body = "We believe that by creating a space where people can find and support local causes, non-profits will be able to connect with a base of supporters to support their growth. "
                    />
                </section>
                <div className={styles.img_section}>
                    <ProjectImage 
                        imgUrl = 'asset/imgs/gen_soln-3.jpg'
                        side = 'left'
                    />
                    <ProjectImage 
                        imgUrl = 'asset/imgs/gen_soln-2.jpg'
                        side = 'right'
                    />
                </div>
            
                <div className={styles.img}>
                    <HeroImage imgUrl = 'asset/imgs/gen_soln-4.jpg'/>
                </div>

                <div className={styles.img_section}>
                    <ProjectImage 
                        imgUrl = 'asset/imgs/gen_soln-5.jpg'
                        side = 'left'
                    />
                    <ProjectImage 
                        imgUrl = 'asset/imgs/gen_soln-6.jpg'
                        side = 'right'
                    />
                </div>

                <div className={styles.img}>
                    <HeroImage imgUrl = 'asset/imgs/gen_soln-8.jpg'/>
                </div>
                <section id="Team">
                    <Section 
                        head = "Team"
                        content = {team}
                    />
                </section>

                <div className={styles.thanks}>
                    <Thanks 
                        text = {<h3 className={styles.thanks_note}>You can learn more about Bits of Good <a href='https://bitsofgood.org/'>here.</a></h3>}
                        url = '/home'
                    />
                </div>
            </div>
        </>
    )
}

export default Project;
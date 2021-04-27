import styles from './styles.module.scss';
import Sidebar from '../../components/shared/sidebar';
import Work from '../../components/home/work';
import About from '../../components/home/about'
import Contact from '../../components/home/contact'

function Home() {
    return (
        <>
            <Sidebar 
                topContent = {[
                    "Hi, I'm Jason.",
                    "I study CM at Georgia Tech.",
                ]}
                bottomLinks = {[
                    'Work',
                    'About',
                    'Contact',
                ]}
            />
            <div className={styles.main}>
                <section id='Work'>
                    <Work />
                </section>

                <section id='About'>
                    <About />
                </section>

                <section id='Contact'>
                    <Contact />
                </section>
            </div>
        </>
    )
}

export default Home;
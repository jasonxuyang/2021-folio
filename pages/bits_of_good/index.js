import styles from './styles.module.scss';
import HeroImage from '../../components/project/heroImage';
import Sidebar from '../../components/shared/sidebar';
import Overview from '../../components/project/overview';
import BackButton from '../../components/shared/backButton'
import Paragraph from '../../components/project/paragraph';
import ProjectImage from '../../components/project/projectImage';
import Thanks from '../../components/project/thanks';
import Section from '../../components/project/section';
import React, { useEffect } from 'react';

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

    const main = React.createRef();
    const progressBar = React.createRef();
    const pageWrapper = React.createRef();
    const transitionOverlay = React.createRef();
    const overview = React.createRef();
    const problem = React.createRef();
    const solution = React.createRef();
    const teammates = React.createRef();

    let scrollY = 0;
    let wrapperY = 0;
    let body;
    let page;
    let pct = 0;

    React.useEffect(() => {
        initPage();
        return () => {
            cleanupPage();
        }
    }, []);

    function initPage() {
        fadeIn();
        setTimeout(function(){
            transitionIn()
        }, 400);
        main.current.style.position = 'fixed';
        main.current.style.top = 0;
        main.current.style.left = 0;
        progressBar.current.style.position = 'fixed';
        progressBar.current.style.bottom = 0;
        progressBar.current.style.left = 0;
        body = document.body;
        page = document.documentElement;
        window.addEventListener('scroll', scroll);
        window.requestAnimationFrame(render);
    }

    function cleanupPage() {
        window.scrollBy(0, -window.scrollY);
        window.cancelAnimationFrame(render);
        window.removeEventListener('scroll', scroll);
        console.log("Cleaned up.");
    }

    function lerp(a, b, n) {
        return (1 - n) * a + n * b;
    }

    function scroll() {
        scrollY = window.pageYOffset;
    }

    function getScrollPercent() {
        const st = 'scrollTop';
        const sh = 'scrollHeight';
        return (page[st]||body[st]) / ((page[sh]||body[sh]) - page.clientHeight) * 100;
    }

    function render() {
        try {
            body.style.height = main.current.clientHeight + 'px';
            wrapperY = lerp(wrapperY, scrollY, 0.07);
            wrapperY = Math.floor(wrapperY * 100) / 100;
            pct = 100 - getScrollPercent();
            main.current.style.transform = `translate(0px, -${wrapperY}px)`;
            progressBar.current.style.height = `${pct}vh`;
            window.requestAnimationFrame(render);
        } catch (error) {
            console.log("Failed to cleanup before next animation frame render.\n" + error);
        }
    }

    function fadeIn() {
        setTimeout(() => {
            pageWrapper.current.style.opacity = '1';
        }, 800)
    }

    function transitionIn() {
        transitionOverlay.current.style.height = '0';
        setTimeout(() => {
            transitionOverlay.current.style.bottom = '0';
        }, 800)
    }

    function transitionOut(e) {
        transitionOverlay.current.style.height= '100vh';
    }

    function scrollToOverview(e) {
        window.scrollBy(0, overview.current.getBoundingClientRect().top);
    }

    function scrollToProblem(e) {
        window.scrollBy(0, problem.current.getBoundingClientRect().top);
    }

    function scrollToSolution(e) {
        window.scrollBy(0, solution.current.getBoundingClientRect().top);
    }

    function scrollToTeam(e) {
        window.scrollBy(0, teammates.current.getBoundingClientRect().top);
    }

    return (
        <> 
            <div id={styles.page_wrapper} ref={pageWrapper}>
                <div className={styles.progress_bar_wrapper}>
                    <div className={styles.progress_bar} ref={progressBar}></div>
                </div>

                <Sidebar 
                    topContent = {[
                        <div onClick={transitionOut}>
                            <BackButton url = '/home'/>
                        </div>
                    ]}
                    bottomContent = {
                        <>
                            <a href={'#Overview'} onClick={scrollToOverview}>Overview</a>
                            <a href={'#Problem'} onClick={scrollToProblem}>Problem</a>
                            <a href={'#Solution'} onClick={scrollToSolution}>Solution</a>
                            <a href={'#Team'} onClick={scrollToTeam}>Team</a>
                        </>
                    }
                />

                <div className={styles.main} ref={main}>
                    <h1>Bits of Good</h1>
                    <div className={styles.img}>
                        <HeroImage imgUrl = 'asset/imgs/gen_soln-1.jpg'/>
                    </div>
                    <section id = 'Overview' ref={overview}>
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
                    <section id = 'Problem' ref={problem}>
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
                    <section id = 'Solution' ref={solution}>
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
                        <ProjectImage 
                            imgUrl = 'asset/imgs/gen_soln-7.jpg'
                            side = 'left'
                        />
                    </div>

                    <div className={styles.img}>
                        <HeroImage imgUrl = 'asset/imgs/gen_soln-8.jpg'/>
                    </div>
                    <section id="Team" ref={teammates}>
                        <Section 
                            head = "Team"
                            content = {team}
                        />
                    </section>

                    <div className={styles.thanks}>
                        <Thanks 
                            text = {<h3 className={styles.thanks_note}>You can learn more about Bits of Good <a href='https://bitsofgood.org/'>here.</a></h3>}
                            url = '../home'
                        />
                    </div>
                </div>
            </div>
            <div className={styles.transition_overlay} ref={transitionOverlay}></div>
        </>
    )
}

export default Project;
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
import Head from 'next/head';
import Button from '../../components/shared/button'

function Project() {
    const team = (
        <div className={styles.team_info}>
            <div className={styles.team_info_item}>
                <p>Design and Research</p>
                <p>Yuhan Zhou</p>
                <p>Huan Deng</p>
                <p>Chaebin Park</p>
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
        const mediaQuery = window.matchMedia('(min-width: 480px)');
        if (mediaQuery.matches) {
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
            <Head>
                <meta charset="utf-8"/>
                <title>Jason Yang - Design and Code</title>
                <link rel="canonical" href="https://jasonxuyang.com"/>
                <meta name="description" content="Jason Yang is a designer who codes. He's currently learning how to build cool things at Georgia Tech."/>
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta property="og:url" content="jasonxuyang.com"/>
                <meta property="og:title" content="Jason Yang - Product Designer"/>
                <meta property="og:description" content="Jason Yang is a designer who codes. He's currently learning how to build cool things at Georgia Tech."/>
                <link rel="icon" type="image/png" sizes="32x32" href="asset/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="asset/favicon-16x16.png"/>
            </Head>

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
                    <HeroImage imgUrl = 'asset/imgs/gen_soln-1.jpg' alt = 'Landing page for the Bits of Good platform. Features a hero banner of volunteers, a search feature to discover non-profits, and upcoming volunteer events.'/>
                    <section id = 'Overview' ref={overview}>
                        <Overview 
                            head = 'Helping small-scale non-profits grow their support base.'
                            body = 'Bits of Good is a non-profit student organization that connects non-profits with students passionate about social good to develop software.'
                            client = 'Bits of Good'
                            role = 'Product / Visual'
                        />
                    </section>
                    <HeroImage imgUrl = 'asset/imgs/gen_soln-hero.jpg' alt = 'Two men working together to lift boxes.'/>
                    <section id = 'Problem' ref={problem}>
                        <Paragraph 
                            id = 'Problem'
                            head = "Problem"
                            subhead = "Small non-profits feel that the lack of large enterprise tools was hindering their growth."
                            body = "Our research showed that at a small scale, the tools didn't limit a non-profit's ability to scale. It was the inability to find and connect with the people that care about their cause."
                        />
                    </section>
                    <div className={styles.img}>
                        <HeroImage imgUrl = 'asset/imgs/gen_soln-problem.jpg' alt = 'Overview of the design system used for this product. Shows highlight of color, type, grid, and object style system.'/>
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
                            alt = 'UI for the volunteer event description page. Shows the date, event name, location, and general event information.'
                        />
                        <ProjectImage 
                            imgUrl = 'asset/imgs/gen_soln-2.jpg'
                            side = 'right'
                            alt = 'UI for the volunteer events page. Shows a grid of event cards that give basic info about the event.'
                        />
                    </div>
                
                    <div className={styles.img}>
                        <HeroImage imgUrl = 'asset/imgs/gen_soln-4.jpg' alt='Sign up screen for the platform.'/>
                    </div>

                    <div className={styles.img_section}>
                        <ProjectImage 
                            imgUrl = 'asset/imgs/gen_soln-5.jpg'
                            side = 'left'
                            alt = 'Landing screen for the Non-profits page. Shows popular non-profits and the ability to filter non-profits by impact cause.'
                        />
                        <ProjectImage 
                            imgUrl = 'asset/imgs/gen_soln-6.jpg'
                            side = 'right'
                            alt = 'Search results page for searching for a non-profit. Shows ability to filter by popular, closest to you, and most supporters.'
                        />
                        <ProjectImage 
                            imgUrl = 'asset/imgs/gen_soln-7.jpg'
                            side = 'left'
                            alt = 'UI for the Non-profit profile page. Gives high level information about the non-profit.'
                        />
                    </div>

                    <div className={styles.img}>
                        <HeroImage imgUrl = 'asset/imgs/gen_soln-8.jpg' alt = 'A section of the landing page that highlights Bits of Good, the student organization.'/>
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
                            action = {<div onClick={transitionOut}><Button 
                                        text = 'Next Project'
                                        downArrow = 'false'
                                        url = '../hackgt'
                                    /></div>}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.transition_overlay} ref={transitionOverlay}></div>
        </>
    )
}

export default Project;
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
                <p>Product Designer</p>
                <p>Kimberly Do</p>
            </div>

            <div className={styles.team_info_item}>
                <p>Engineering Lead</p>
                <p>Nick Grana</p>
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
                    <h1>HackGT</h1>
                    <div className={styles.img}>
                        <HeroImage imgUrl = 'asset/imgs/appgt-1.jpg' alt = 'Hero shot of the HackGT scheduling app. Shows the schedule screen, with events that are currently happening now.'/>
                    </div>
                    <section id = 'Overview' ref={overview}>
                        <Overview 
                            head = 'Building a scheduler app for hackathon participants.'
                            body = 'HackGT is a non-profit student organization that throws large-scale hackathons to spread the opportunity for innovation to high school and college students.'
                            client = 'HackGT'
                            role = 'Product / Visual'
                        />
                    </section>
                    <div className={styles.img}>
                        <HeroImage imgUrl = 'asset/imgs/appgt-hero.jpg' alt = 'A picture of 4 participants at BuildGT, one of the hackathons that HackGT throws every Spring.'/>
                    </div>
                    <section id = 'Problem' ref={problem}>
                        <Paragraph 
                            id = 'Problem'
                            head = "Problem"
                            subhead = "Each hackathon has hundreds of different types of events with no great way to organize the information."
                            body = "Participants felt they lacked information about workshop level and speaker topics. Additionally, many of them missed events just because they weren't aware of them."
                        />
                    </section>
                    <div className={styles.img}>
                        <HeroImage imgUrl = 'asset/imgs/appgt-problem.jpg' alt='A summary of the problem that our hackathon participants faced - lacking clear information about our workshops and events.'/>
                    </div>
                    <section id = 'Solution' ref={solution}>
                        <Paragraph 
                            id = 'Solution'
                            head = "Solution"
                            subhead = "A scheduling app that gives participants more information about the events they want to go to."
                            body = "Participants can now gather more information about each event, save events to receive push notifications, as well as more easily search and filter events by types and tags."
                        />
                    </section>
                    <div className={styles.img_section}>
                        <div className={styles.img}>
                            <HeroImage imgUrl = 'asset/imgs/appgt-3.png' alt = 'Detail shots of search and filter by event category.'/>
                        </div>
                    </div>
                
                    <div className={styles.img}>
                        <HeroImage imgUrl = 'asset/imgs/appgt-2.jpg' alt = 'Shot of the loading screen and login screen side by side'/>
                    </div>

                    <div className={styles.img_section}>
                        <div className={styles.img}>
                            <HeroImage imgUrl = 'asset/imgs/appgt-4.png' alt = 'Detail shot of the event schedule screen and event description screen'/>
                        </div>
                    </div>

                    <section id="Team" ref={teammates}>
                        <Section 
                            head = "Team"
                            content = {team}
                        />
                    </section>

                    <div className={styles.thanks}>
                        <Thanks 
                            text = {<h3 className={styles.thanks_note}>You can learn more about HackGT <a href='https://hexlabs.org/'>here.</a></h3>}
                            action = {<div onClick={transitionOut}><Button 
                                        text = 'Next Project'
                                        downArrow = 'false'
                                        url = '../bits_of_good'
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
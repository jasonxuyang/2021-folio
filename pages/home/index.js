import styles from './styles.module.scss';
import Sidebar from '../../components/shared/sidebar';
import About from '../../components/home/about';
import Contact from '../../components/home/contact';
import React from 'react';
import SidebarMobile from '../../components/shared/sidebarMobile';
import ProjectCard from '../../components/home/projectCard';
import Head from 'next/head';

function Home() {
    const main = React.createRef();
    const progressBar = React.createRef();
    const pageWrapper = React.createRef();
    const transitionOverlay = React.createRef();
    const work = React.createRef();
    const about = React.createRef();
    const contact = React.createRef();

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
        scrollY = window.scrollY;
    }

    function getScrollPercent() {
        const st = 'scrollTop';
        const sh = 'scrollHeight';
        return (page[st]||body[st]) / ((page[sh]||body[sh]) - page.clientHeight) * 100;
    }

    function render() {
        try {
            scroll();
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

    function scrollToWork(e) {
        window.scrollBy(0, work.current.getBoundingClientRect().top);
    }

    function scrollToAbout(e) {
        window.scrollBy(0, about.current.getBoundingClientRect().top);
    }

    function scrollToContact(e) {
        window.scrollBy(0, contact.current.getBoundingClientRect().top);
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
                <meta property="og:image" content="asset/og-image.jpg"/>
                <link rel="icon" type="image/png" sizes="32x32" href="asset/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="asset/favicon-16x16.png"/>
            </Head>
            <div id={styles.page_wrapper} ref={pageWrapper}>
                <div className={styles.progress_bar_wrapper}>
                    <div className={styles.progress_bar} ref={progressBar}></div>
                </div>
                <Sidebar 
                    topContent = {[
                        "Jason Yang is a designer who codes.",
                        "He's currently learning how to build cool things @GT."
                    ]}

                    bottomContent = {
                        <>
                            <a href={'#Work'} ref={work} onClick={scrollToWork}>Work</a>
                            <a href={'#About'} ref={about} onClick={scrollToAbout}>About</a>
                            <a href={'#About'} ref={contact} onClick={scrollToContact}>Contact</a>
                        </>
                    }

            
                />

                <div className={styles.main} ref={main}>
                    <SidebarMobile 
                        topContent = {[
                            "Jason Yang is a designer who codes.",
                            "He's currently learning how to build cool things @GT."
                        ]}
                    />
                    <section id='Work' ref={work}>
                        <h1>Work</h1>
                        <div className={styles.work_section}>
                            <div className={styles.project_card} onClick={transitionOut}>
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
                    </section>

                    <section id='About' ref={about}>
                        <About />
                    </section>

                    <section id='Contact' ref={contact}>
                        <Contact />
                    </section>
                </div>
            </div>
            <div className={styles.transition_overlay} ref={transitionOverlay}></div>
        </>
    )
}

export default Home;
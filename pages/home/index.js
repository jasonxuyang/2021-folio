import styles from './styles.module.scss';
import Sidebar from '../../components/shared/sidebar';
import Work from '../../components/home/work';
import About from '../../components/home/about';
import Contact from '../../components/home/contact';
import React, { useEffect } from 'react';
import SidebarMobile from '../../components/shared/sidebarMobile';

function Home() {
    const pageWrapper = React.useRef(null);
    const progressBar = React.useRef(null);
    let scrollY = 0;
    let wrapperY = 0;
    let body;
    let page;
    let pct = 0;

    React.useEffect(() => {
        pageWrapper.current.style.position = 'fixed';
        pageWrapper.current.style.top = 0;
        pageWrapper.current.style.left = 0;
        progressBar.current.style.position = 'fixed';
        progressBar.current.style.bottom = 0;
        progressBar.current.style.left = 0;
        body = document.body;
        page = document.documentElement;
        window.addEventListener('scroll', scroll);
        window.requestAnimationFrame(render);
        
        return function cleanup() {
            window.cancelAnimationFrame(render);
            window.removeEventListener('scroll', scroll);
            console.log("Cleaned up.");
        }
    });

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
            body.style.height = pageWrapper.current.clientHeight + 'px';
            wrapperY = lerp(wrapperY, scrollY, 0.07);
            wrapperY = Math.floor(wrapperY * 100) / 100;
            pct = 100 - getScrollPercent();
            pageWrapper.current.style.transform = `translate(0px, -${wrapperY}px)`;
            progressBar.current.style.height = `${pct}vh`;
            window.requestAnimationFrame(render);
        } catch (error) {
            console.log("Failed to cleanup before next animation frame render.\n" + error);
        }
    }

    return (
        <>
            <div className={styles.progress_bar_wrapper}>
                <div className={styles.progress_bar} ref={progressBar}></div>
            </div>

            <Sidebar 
                topContent = {[
                    "Jason Yang",
                    "I'm a designer who likes to code.",
                    "Currently learning how to build cool things @GT."
                ]}
                bottomLinks = {[
                    'Work',
                    'About',
                    'Contact',
                ]}
            />
            <div className={styles.main} ref={pageWrapper}>
                <SidebarMobile 
                    topContent = {[
                        "Jason Yang",
                        "I'm a designer who likes to code.",
                        "Currently learning how to build cool things @GT."
                    ]}
                />
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
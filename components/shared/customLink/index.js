import { useRouter } from 'next/router'
import styles from './styles.module.scss';

function CustomLink({ children, href}) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault();
        setTimeout(function() {
            router.push(href);
        }, 1200)
    }

    return (
        <>
            <a href={href} onClick={handleClick}>
                {children}
            </a>
        </>
    )
}

export default CustomLink
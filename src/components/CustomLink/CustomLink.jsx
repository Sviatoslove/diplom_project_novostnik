import { Link, useMatch } from 'react-router-dom';
import '../Head/head.scss';



const CustomLink = ({children, to, ...props}) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            to={to}
            style={{
                color: match ? 'var(--color-active)' : null,
                transform: match ? 'scale(1.4)' : null,
                transition: 'transform 0s ease 0s'
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

export {CustomLink};
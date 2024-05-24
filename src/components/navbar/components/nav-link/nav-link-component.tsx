import styles from './nav-link-component.module.css'

type props = {
    content: string;
}

export const NavLinkComponent: React.FC<props> = ({content}) => {
    return [
        <li className={styles.links__link}>
        {content}
        </li>
    ] 
};
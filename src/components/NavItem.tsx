import * as React from 'react';

export interface INavItemProps {
    title: string;
    link?: string;
    active?: boolean;
    disabled?: boolean;
}

const NavItem = (props: INavItemProps) => {
    const { title, link, active, disabled } = props;

    return (
        <li className="nav-item">
            <a
                className={`nav-link ${disabled ? 'disabled' : ''} ${active ? 'active' : ''}`}
                href={`${link || '#'}`}
            >
                {title}
            </a>
        </li>
    );
};

export default NavItem;

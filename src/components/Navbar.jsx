import React, { useState } from 'react';

import styles from './css/Navbar.module.css'


import AuthModal from './AuthModal';
import { Link } from 'react-router-dom';

export default function Navbar({ links }) {

    const [isOpen, setIsopen] = useState(false);
    const getLink = (link) => {
        return "/browse/" + link
    }

    console.log("links: ", links)

    return (
        <nav className={styles.navbar}>
            <div>
                <button className={styles.login} onClick={() => setIsopen(!isOpen)}>
                    ورود / ثبت نام
                </button>
                <AuthModal isOpen={isOpen} closeModal={() => setIsopen(false)} />

            </div>
            <div className={styles.links}>
                {links.map(link => (
                    <span>
                        <div className={styles.dropdown}>
                            <p className={styles.nav_link}>
                                <Link className={styles.dropdown_header} to={getLink(link.name)}>{link.description}</Link>
                            </p>
                            <div className={styles.dropdownContent}>
                                {link.sub_dirs.map(sublink => (
                                    <div className={styles.link_group}>
                                        <Link to={getLink(sublink.name)}>:{sublink.description}</Link>
                                        <ul className={styles.link_lists}>
                                            {sublink.sub_dirs.map(subsublink => (
                                                <li>
                                                    <Link to={getLink(subsublink.name)}>{subsublink.description}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </span>
                ))}

            </div>
        </nav>
    )
}
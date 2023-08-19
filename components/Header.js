// Header.tsx
'use client'

import React, { useState, useEffect } from "react";
import styles from '../app/header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 500) { 
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? styles.scrolled : styles.header }>
      <div className={styles.headers}>
      <div className={styles.logo}>ロゴ</div>

        <nav>
          <ul>
            <li>works</li>
            <li>company</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
'use client';

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  disableScroll,
  clearScrollLocks,
} from '@assets/scripts/helpers/bodyScrollLock';
import { isTouchScreen } from '@assets/scripts/helpers/utilities';

const addFades = (parent, child, level2, horizontal = false) => {
  const parentWidth = parent.offsetWidth;
  const parentHeight = parent.offsetHeight;
  const childWidth = child.scrollWidth;
  const childHeight = child.scrollHeight;
  const scrollPosition = horizontal ? parent.scrollLeft : parent.scrollTop;
  const maxScrollPosition = horizontal
    ? parseFloat(childWidth - parentWidth)
    : parseFloat(childHeight - parentHeight);
  const startClass = horizontal ? 'scroll-left' : 'scroll-top';
  const endClass = horizontal ? 'scroll-right' : 'scroll-bottom';

  if (
    (horizontal && childWidth > parentWidth) ||
    (!horizontal && childHeight > parentHeight)
  ) {
    if (scrollPosition === 0) {
      parent.parentNode.classList.add(endClass);
      parent.parentNode.classList.remove(startClass);
    }

    if (scrollPosition > 0 && scrollPosition < maxScrollPosition) {
      parent.parentNode.classList.add(startClass, endClass);
    }

    if (scrollPosition >= parseInt(maxScrollPosition, 10)) {
      parent.parentNode.classList.add(startClass);
      parent.parentNode.classList.remove(endClass);
    }

    return;
  }

  level2.classList.remove(startClass, endClass);
};

const Component = (props) => {
  const container = useRef(null);
  const level1 = useRef(null);
  const level2 = useRef(null);
  const hoverArea = useRef(null);
  const verticalScrollContainer =
    level2.current &&
    level2.current.querySelector('.vertical-scroll-container');
  const verticalScrollChild =
    level2.current &&
    level2.current.querySelector('.vertical-scroll-container > div');
  const horizontalScrollContainer =
    level1.current &&
    level1.current.querySelector('.horizontal-scroll-container');
  const horizontalScrollChild =
    horizontalScrollContainer && horizontalScrollContainer.querySelector('ul');

  const setupNavigation = () => {
    // Initialize fades
    addFades(
      horizontalScrollContainer,
      horizontalScrollChild,
      level2.current,
      true
    );
    addFades(
      verticalScrollContainer,
      verticalScrollChild,
      level2.current,
      false
    );

    const mainLinks = level1.current.querySelectorAll('.navlink');
    const activeMainLink = level1.current.querySelector('.navlink.active');
    const secondLevelLinks = level2.current.querySelectorAll(
      '.main-navigation-links-level-2'
    );

    let activeLevel1Link;
    let activeLevel2Link;
    let firstHover = true;

    mainLinks.forEach((mainLink) => {
      // show subnavigation on hover (with a small delay to prevent accidental hovers)
      let timerId;

      mainLink.addEventListener('mouseover', () => {
        if (!isTouchScreen() && mainLink !== activeLevel1Link) {
          timerId = setTimeout(() => {
            let targetSecondLevel;

            mainLinks.forEach((_mainLink) => {
              _mainLink.classList.remove('active');
            });

            secondLevelLinks.forEach((secondLevelLink) => {
              secondLevelLink.classList.remove('active');

              if (
                secondLevelLink.dataset.menuIndex === mainLink.dataset.menuIndex
              ) {
                targetSecondLevel = secondLevelLink;
              }
            });

            mainLink.classList.add('active');
            targetSecondLevel.classList.add('active');

            if (firstHover) {
              disableScroll(container.current);
              firstHover = false;
            }

            if (activeLevel2Link) {
              activeLevel2Link = targetSecondLevel;
            }
            activeLevel1Link = mainLink;

            // Scroll to top of menu
            verticalScrollContainer.scrollTop = 0;

            // Initialize fade effect
            addFades(
              verticalScrollContainer,
              verticalScrollChild,
              level2.current,
              false
            );

            container.current.classList.add('active');
          }, 100);
        }
      });

      mainLink.addEventListener('mouseout', () => {
        clearTimeout(timerId);
      });
    });

    hoverArea.current.addEventListener('mouseleave', () => {
      if (container.current.classList.contains('active')) {
        if (activeLevel1Link) {
          activeLevel1Link.classList.remove('active');
        }

        if (activeMainLink) {
          activeMainLink.classList.add('active');
        }

        activeLevel1Link = null;
        activeLevel2Link = null;
        container.current.classList.remove('active');
        clearScrollLocks();
        firstHover = true;

        // wait until opacity transition is finished before continuing
        const animationDuration = getComputedStyle(
          document.documentElement
        ).getPropertyValue('--animation-duration-l');

        setTimeout(() => {
          secondLevelLinks.forEach((secondLevelLink) => {
            secondLevelLink.classList.remove('active');
          });
        }, animationDuration.replace('ms', '').replace('s', ''));
      }
    });
  };

  if (level1.current) {
    if (horizontalScrollContainer) {
      horizontalScrollContainer.addEventListener('scroll', () => {
        addFades(
          horizontalScrollContainer,
          horizontalScrollChild,
          level2.current,
          true
        );
      });
    }
  }

  if (level2.current) {
    verticalScrollContainer.addEventListener('scroll', () => {
      addFades(
        verticalScrollContainer,
        verticalScrollChild,
        level2.current,
        false
      );
    });
  }

  if (level1.current && level2.current) {
    setupNavigation();
  }

  return (
    <nav className="main-navigation-bar" role="navigation" ref={container}>
      <div className="overlay-background"></div>
      <div className="main-navigation-hover-area" ref={hoverArea}>
        <div className="main-navigation-links-level-1" ref={level1}>
          <div className="horizontal-scroll-container">
            <ul>
              {props.menuItems.map((menuItem, index) => {
                if (menuItem.children) {
                  const isFirst = index === 0 ? ' active' : '';
                  return (
                    <li key={menuItem.href}>
                      <a
                        href={menuItem.href}
                        className={`navlink${isFirst}`}
                        data-menu-index={index}>
                        {menuItem.label}
                      </a>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
        <div className="container-level-2" ref={level2}>
          <div className="vertical-scroll-container">
            <div>
              {props.menuItems.map((menuItem, index) => {
                if (menuItem.children) {
                  return (
                    <ul
                      key={index}
                      className="main-navigation-links-level-2"
                      data-menu-index={index}>
                      {menuItem.children.map((child) => {
                        const grandchildren = child.children ? (
                          <ul className="main-navigation-links-level-3">
                            {child.children.map((grandchild) => (
                              <li
                                key={grandchild.href}
                                className="main-navigation-link">
                                <a href={grandchild.href} className="navlink">
                                  {grandchild.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null;
                        return (
                          <li key={child.href} className="main-navigation-link">
                            <a href={child.href} className="navlink">
                              {child.label}
                            </a>
                            {grandchildren}
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Component.propTypes = {
  menuItems: PropTypes.array,
};

export default Component;

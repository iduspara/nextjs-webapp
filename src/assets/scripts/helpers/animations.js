// taken from https://stackoverflow.com/a/26798337
export function scrollToY(
  scrollTargetY = 0,
  speed = 2000,
  easing = 'easeInOutQuint'
) {
  // scrollTargetY: the target scrollY property of the window
  // speed: time in pixels per second
  // easing: easing equation to use

  const { scrollY } = window;
  let currentTime = 0;

  // min time .1, max time .8 seconds
  const time = Math.max(
    0.1,
    Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
  );

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  const easingEquations = {
    easeOutSine(pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine(pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1);
    },
    easeInOutQuint(pos) {
      // eslint-disable-next-line no-cond-assign, no-param-reassign
      if ((pos /= 0.5) < 1) {
        return 0.5 * pos ** 5;
      }
      return 0.5 * ((pos - 2) ** 5 + 2);
    },
  };

  // add animation loop
  function tick() {
    currentTime += 1 / 60;

    const p = currentTime / time;
    const t = easingEquations[easing](p);

    if (p < 1) {
      window.requestAnimationFrame(tick);

      window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
    } else {
      window.scrollTo(0, scrollTargetY);
    }
  }

  // call it once to get started
  tick();
}

export function scrollToElement($elem, duration = 200, extraOffsetY = 0) {
  const header = document.querySelector('.header');
  const headerHeight = header ? header.scrollHeight : 80;
  const scrollTarget =
    $elem.getBoundingClientRect().top +
    window.pageYOffset -
    headerHeight +
    extraOffsetY;
  scrollToY(scrollTarget, duration);
}

/**
 * collapse / uncollapse animation, inspired by the jQuery equivalent
 *
 * @param {DOMElement} $elem the dom element to collapse / uncollapse
 * @param {Number} duration the duration of the animation in milliseconds
 */
export function slideToggle(
  $elem,
  duration = getComputedStyle(document.documentElement)
    .getPropertyValue('--animation-duration-l')
    .slice(0, -2),
  extraHeight = 0
) {
  const element = $elem;
  // set some mandatory stylings for the animation
  // $elem.style.transition = `max-height ${duration}ms ease`;
  element.style.transition = `max-height ${duration}ms`;
  element.style.minHeight = '0px';

  const minimized =
    element.classList.contains('hidden') ||
    element.classList.contains('invisible') ||
    element.style.maxHeight === '0px';

  // chose the best timing function for the animation
  element.style.transitionTimingFunction = minimized ? 'ease-in' : 'ease-out';

  // uncollapse
  if (minimized) {
    element.classList.add('overflow-hidden');

    // set 0 height explicitely, in case we start from a hidden state and this is the first time to toggle
    element.style.maxHeight = '0px';

    // make visible
    element.classList.remove('hidden', 'invisible');

    const maxHeight = element.scrollHeight + extraHeight;
    // use scroll height to set the max height for the animation
    element.style.maxHeight = `${maxHeight}px`;

    setTimeout(() => {
      element.classList.remove('overflow-hidden');
    }, 300);
  }

  // collapse
  else {
    element.classList.add('overflow-hidden');
    element.style.maxHeight = '0px';
  }
}

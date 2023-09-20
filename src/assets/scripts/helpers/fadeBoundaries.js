const removeScrollClasses = (content) => {
  content.classList.remove('scroll-top', 'scroll-bottom');
};

const removeScrollClassesFromNLModal = (content) => {
  const prevSibling = content.previousSibling;
  const { nextSibling } = content;

  if (prevSibling.classList && nextSibling.classList) {
    content.previousSibling.classList.remove('scroll-top');
    if (content.nextSibling) {
      content.nextSibling.classList.remove('scroll-bottom');
    }
  }
};

const normal = (content) => {
  const contentHeight = content.offsetHeight;
  const scrollableContent = content.firstChild;
  const { scrollTop } = scrollableContent;
  const { scrollHeight } = scrollableContent;

  if (contentHeight < scrollHeight) {
    if (scrollTop === 0) {
      content.classList.add('scroll-bottom');
      content.classList.remove('scroll-top');
    }

    if (scrollTop > 0 && scrollTop < scrollHeight) {
      content.classList.add('scroll-top', 'scroll-bottom');
    }

    if (scrollTop + contentHeight >= parseInt(scrollHeight, 10)) {
      content.classList.add('scroll-top');
      content.classList.remove('scroll-bottom');
    }

    return;
  }
  removeScrollClasses(content);
};

const modal = (content) => {
  const contentHeight = content.offsetHeight;
  const { scrollHeight } = content;
  const { scrollTop } = content;
  const prevSibling = content.previousElementSibling;
  const nextSibling = content.nextElementSibling;

  if (
    contentHeight < scrollHeight &&
    prevSibling !== null &&
    prevSibling.classList &&
    nextSibling !== null &&
    nextSibling.classList
  ) {
    if (scrollTop === 0) {
      nextSibling.classList.add('scroll-bottom');
      prevSibling.classList.remove('scroll-top');
    }

    if (scrollTop > 0 && scrollTop < scrollHeight) {
      nextSibling.classList.add('scroll-bottom');
      prevSibling.classList.add('scroll-top');
    }

    if (scrollTop + contentHeight >= parseInt(scrollHeight, 10)) {
      nextSibling.classList.remove('scroll-bottom');
      prevSibling.classList.add('scroll-top');
    }

    return;
  }

  removeScrollClassesFromNLModal(content);
};

export default (content, isModal) => {
  if (isModal) {
    modal(content);

    window.addEventListener('resize', () => {
      modal(content);
    });

    return;
  }

  normal(content);
};

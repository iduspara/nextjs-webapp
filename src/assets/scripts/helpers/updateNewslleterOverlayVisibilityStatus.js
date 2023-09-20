export default () => {
  const updateOverlayVisibilityStatus = (status) => {
    window.finanztip = {
      ...window.finanztip,
      newsletter: {
        ...window.finanztip.newsletter,
        isOverlayVisibilityBlocked: status,
      },
    };
  };

  window.finanztip = {
    ...window.finanztip,
    newsletter: {
      ...window.finanztip?.newsletter,
      updateOverlayVisibilityStatus,
    },
  };
};

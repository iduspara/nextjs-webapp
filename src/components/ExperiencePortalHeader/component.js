import React from 'react';
import DefaultHeader from './components/DefaultHeader/component';
import OverviewHeader from './components/OverviewHeader/component';

const Component = (props) => {
  const headerContent =
    props.type === 'overview' ? (
      <OverviewHeader {...props} />
    ) : (
      <DefaultHeader {...props} />
    );
  return headerContent;
};

export default Component;

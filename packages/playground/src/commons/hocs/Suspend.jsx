import React, { lazy, Suspense } from 'react';

const Loader = () => <div>loading..</div>;

const suspend = ({ componentLoader, fallback = <Loader /> }) => {
  const LazyComponent = lazy(componentLoader);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
};

export default suspend;

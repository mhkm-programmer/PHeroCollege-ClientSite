import React, { Suspense } from 'react';


const MyLazyComponent = lazy(() => import("./OtherComponent"));
const MyComponent  = () => {
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      <MyLazyComponent />
    </Suspense>
  </div>
    // return <div>This is my lazy loaded component!</div>;
};

export default MyComponent ;
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
          <Suspense fallback={null}>{children}</Suspense>
      </main>
      {/* <Footer/>  */}
    </>
  );
};

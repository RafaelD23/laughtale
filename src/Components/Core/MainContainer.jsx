import React from 'react';

const MainContainer = ({ children }) => {
  return (
    <main
      className='relative flex h-screen w-full items-center justify-center overflow-hidden bg-default-bg p-4 pt-24'
      style={{
        background:
          '#2c2c33 radial-gradient(circle at center, rgba(63,63,80,0) 34%, #00000010 71%)',
      }}
    >
      <section className='md:w-7xl h-full w-full overflow-hidden'>
        {children}
      </section>
    </main>
  );
};

export default MainContainer;

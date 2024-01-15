import { NextPage } from 'next';
import { memo } from 'react';
import { HomeContent } from './components';

const HomePage: NextPage = memo(() => {

  return (
      <HomeContent />
  );
});

HomePage.displayName = Object.keys({ HomePage }).join();

export default HomePage;
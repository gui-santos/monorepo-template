import { NextPage } from 'next';
import { Button } from '@monorepo/ui-lib';

interface UserAgent {
  userAgent: string;
}

const Home: NextPage<UserAgent> = ({ userAgent }) => {
  const handleClick: VoidFunction = () => console.log('clicked!');

  return (
    <>
      <h1>Hello world! - user agent: {userAgent}</h1>
      <Button onClick={handleClick}>Test</Button>
    </>
  );
};

Home.getInitialProps = async ({ req }): Promise<UserAgent> => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;

import { NextPage } from 'next';

const signIn: NextPage = (props): JSX.Element => {
  return (
    <div>
      <form>
        <input type="email" placeholder="example@example.com" />
        <input type="password" placeholder="password" />
        <input type="submit" value={'login'} />
      </form>
    </div>
  );
};

export default signIn;

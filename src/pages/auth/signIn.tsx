import { NextPage } from 'next';

const signIn: NextPage = (props): JSX.Element => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form className="w-[600px] h-[600px] flex flex-col">
        <input type="text" placeholder="login" />
        <input type="password" placeholder="password" />
        <input type="submit" value={'login'} />
      </form>
    </div>
  );
};

export default signIn;

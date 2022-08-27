interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className='m-auto flex min-h-screen w-full max-w-2xl flex-col py-6 px-4'>
      <header className='flex flex-col items-center justify-center pb-8'>
        <h1 className='text-3xl font-bold pb-4'>🦑 SplitSquid</h1>
        <p>Split bills with friends!</p>
      </header>
      <main className='flex flex-1 flex-col items-stretch gap-6'>
        {children}
      </main>
    </div>
  );
};

export default Layout
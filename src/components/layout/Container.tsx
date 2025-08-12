type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-100 to-indigo-200'>
      <div className='max-w-screen-lg mx-auto p-8'>{children}</div>
    </div>
  );
}

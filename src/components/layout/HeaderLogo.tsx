import Link from 'next/link';

export function HeaderLogo() {
  return (
    <div className='flex items-center gap-3'>
      <div className='text-4xl'>🎯</div>
      <div>
        <h1 className='text-3xl/normal font-extrabold text-gray-800'>
          <Link href='/' className='hover:text-blue-600 transition-colors'>
            Construtor de Palavras
          </Link>
        </h1>
      </div>
    </div>
  );
}

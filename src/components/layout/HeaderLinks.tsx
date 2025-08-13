import Link from 'next/link';

export function HeaderLinks() {
  return (
    <nav className='hidden sm:flex items-center gap-4 text-lg'>
      <Link
        href='/'
        className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
      >
        🏠 JOGAR
      </Link>
      <Link
        href='/help'
        className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
      >
        ❓ COMO JOGAR
      </Link>
    </nav>
  );
}

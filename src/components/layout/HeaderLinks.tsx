import Link from 'next/link';

export function HeaderLinks() {
  return (
    <nav className='hidden sm:flex items-center gap-4'>
      <Link
        href='/'
        className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
      >
        🏠 Jogar
      </Link>
      <Link
        href='/help'
        className='text-gray-600 hover:text-blue-600 transition-colors font-medium'
      >
        ❓ Como Jogar
      </Link>
    </nav>
  );
}

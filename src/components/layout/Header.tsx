import { HeaderLinks } from '@/components/layout/HeaderLinks';
import { HeaderLogo } from './HeaderLogo';

export function Header() {
  return (
    <header className='bg-white shadow-sm border-b border-blue-100'>
      <div className='max-w-screen-lg mx-auto px-8 py-3'>
        <div className='flex items-center justify-between'>
          <HeaderLogo />
          <HeaderLinks />
        </div>
      </div>
    </header>
  );
}

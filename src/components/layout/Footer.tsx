import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-white border-t border-gray-200'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        {/* Seção principal */}
        <div className='text-center mb-6'>
          <div className='flex items-center justify-center gap-2 mb-3'>
            <span className='text-3xl'>🎓</span>
            <h3 className='text-xl font-semibold text-gray-800'>
              Aprendendo com Diversão
            </h3>
          </div>
          <p className='text-gray-600 max-w-md mx-auto'>
            Um jogo educativo para ajudar crianças a formar palavras através do
            método silábico de alfabetização.
          </p>
        </div>

        {/* Links úteis */}
        <div className='flex flex-wrap justify-center gap-6 text-sm mb-6'>
          <Link
            href='/sobre'
            className='text-gray-500 hover:text-blue-600 transition-colors'
          >
            📖 Sobre o Projeto
          </Link>
          <Link
            href='/dicas'
            className='text-gray-500 hover:text-blue-600 transition-colors'
          >
            💡 Dicas para Pais
          </Link>
          <Link
            href='/contato'
            className='text-gray-500 hover:text-blue-600 transition-colors'
          >
            📧 Contato
          </Link>
        </div>

        {/* Copyright */}
        <div className='text-center pt-4 border-t border-gray-100'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Construtor de Palavras.
            <span className='block sm:inline'>
              {' '}
              Feito com 💝 para educação infantil.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

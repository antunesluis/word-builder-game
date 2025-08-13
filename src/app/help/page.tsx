import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function HowToPlayPage() {
  return (
    <>
      <div className='py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4 uppercase'>
            COMO JOGAR O WORD BUILDER
          </h1>
          <p className='text-xl text-gray-600 uppercase'>
            APRENDA A FORMAR PALAVRAS E SE DIVERTIR COM AS SÍLABAS!
          </p>
        </div>

        <div className='bg-white rounded-2xl shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 uppercase'>
            <span className='text-blue-500'>🎯</span> OBJETIVO DO JOGO
          </h2>
          <p className='text-gray-700 mb-4 uppercase'>
            O OBJETIVO DO WORD BUILDER É FORMAR PALAVRAS CORRETAMENTE A PARTIR
            DAS SÍLABAS DISPONÍVEIS, SEGUINDO AS DICAS FORNECIDAS.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='bg-white rounded-2xl shadow-lg p-8'>
            <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 uppercase'>
              <span className='text-green-500'>🧩</span> PASSO 1: ENTENDA AS
              DICAS
            </h3>
            <ul className='space-y-3 text-gray-700'>
              <li className='flex items-start gap-2 uppercase'>
                <span className='text-2xl'>🔤</span>
                <span>LEIA A DICA TEXTUAL SOBRE A PALAVRA</span>
              </li>
              <li className='flex items-start gap-2 uppercase'>
                <span className='text-2xl'>😊</span>
                <span>OBSERVE O EMOJI QUE REPRESENTA A PALAVRA</span>
              </li>
              <li className='flex items-start gap-2 uppercase'>
                <span className='text-2xl'>📝</span>
                <span>VEJA QUANTAS SÍLABAS A PALAVRA TEM</span>
              </li>
            </ul>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-8'>
            <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 uppercase'>
              <span className='text-blue-500'>✋</span> PASSO 2: ARRASTE AS
              SÍLABAS
            </h3>
            <ul className='space-y-3 text-gray-700'>
              <li className='flex items-start gap-2 uppercase'>
                <span className='text-2xl'>👆</span>
                <span>
                  CLIQUE E ARRASTE AS SÍLABAS DO BANCO PARA A ÁREA DE CONSTRUÇÃO
                </span>
              </li>
              <li className='flex items-start gap-2 uppercase'>
                <span className='text-2xl'>🔄</span>
                <span>
                  VOCÊ PODE REORGANIZAR AS SÍLABAS NA ÁREA DE CONSTRUÇÃO
                </span>
              </li>
              <li className='flex items-start gap-2 uppercase'>
                <span className='text-2xl'>↩️</span>
                <span>ARRASTE DE VOLTA PARA O BANCO SE ERRAR</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='bg-white rounded-2xl shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 uppercase'>
            <span className='text-purple-500'>🏆</span> SISTEMA DE PONTUAÇÃO
          </h2>
          <div className='grid sm:grid-cols-3 gap-4'>
            <div className='bg-blue-50 p-4 rounded-lg'>
              <h3 className='font-bold text-blue-600 mb-2 uppercase'>
                NÍVEL FÁCIL
              </h3>
              <p className='text-gray-700 uppercase'>10 PONTOS POR PALAVRA</p>
            </div>
            <div className='bg-yellow-50 p-4 rounded-lg'>
              <h3 className='font-bold text-yellow-600 mb-2 uppercase'>
                NÍVEL MÉDIO
              </h3>
              <p className='text-gray-700 uppercase'>20 PONTOS POR PALAVRA</p>
            </div>
            <div className='bg-red-50 p-4 rounded-lg'>
              <h3 className='font-bold text-red-600 mb-2 uppercase'>
                NÍVEL DIFÍCIL
              </h3>
              <p className='text-gray-700 uppercase'>30 PONTOS POR PALAVRA</p>
            </div>
          </div>
          <p className='mt-4 text-gray-600 text-sm uppercase'>
            * BÔNUS DE 10 PONTOS POR ACERTO NA PRIMEIRA TENTATIVA
          </p>
        </div>

        <div className='text-center mt-12'>
          <Link href='/'>
            <Button variant='primary' size='lg' className='uppercase'>
              <span className='mr-2'>🎮</span> COMEÇAR A JOGAR!
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

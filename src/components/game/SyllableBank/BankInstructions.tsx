interface BankInstructionsProps {
  show: boolean;
}

export function BankInstructions({ show }: BankInstructionsProps) {
  if (!show) return null;

  return (
    <p className='text-md text-gray-500 mt-3 text-center'>
      💡 ARRASTE AS SÍLABAS PARA FORMAR A PALAVRA
    </p>
  );
}

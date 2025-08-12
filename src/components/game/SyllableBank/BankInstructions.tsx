interface BankInstructionsProps {
  show: boolean;
}

export function BankInstructions({ show }: BankInstructionsProps) {
  if (!show) return null;

  return (
    <p className='text-sm text-gray-500 mt-3 text-center'>
      💡 Arraste as sílabas para formar a palavra
    </p>
  );
}

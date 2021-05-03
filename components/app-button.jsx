export default function AppButton({ type, id, onClick, children }) {
  const buttonProps = {
    type,
    ...(id && { id }),
    ...(onClick && { onClick }),
  };

  return (
    <button
      {...buttonProps}
      className="px-2 py-2 text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
    >
      {children}
    </button>
  );
}

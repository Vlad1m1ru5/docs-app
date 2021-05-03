export default function FormContaoiner({ action, children }) {
  return (
    <form action={action} className="flex flex-row w-full space-x-2">
      {children}
    </form>
  );
}

export default function FormContainer({ action, children }) {
  return (
    <form action={action} className="flex flex-row w-full space-x-2">
      {children}
    </form>
  );
}

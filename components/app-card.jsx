export default function AppCard({ children }) {
  return (
    <article className="flex flex-col items-center space-y-2 mt-8 p-4 rounded bg-white">
      {children}
    </article>
  );
}

export default function AppLoader({ isLoading, error, children }) {
  return (
    (isLoading && <p>Loading...</p>) ||
    (error && <p>{error}</p>) || <>{children}</>
  );
}

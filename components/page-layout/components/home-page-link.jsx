import AppLink from "@components/app-link";

export default function HomePageLink({ children }) {
  return (
    <AppLink href="/" className="outline-none focus:underline">
      {children}
    </AppLink>
  );
}

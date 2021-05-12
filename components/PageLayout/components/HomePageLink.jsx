import AppLink from "@components/AppLink";

export default function HomePageLink({ children }) {
  return (
    <AppLink href="/" className="outline-none focus:underline">
      {children}
    </AppLink>
  );
}

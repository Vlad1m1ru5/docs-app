import AppLink from "@components/app-link";

export default function WelcomeToSpan() {
  return (
    <span className="text-2xl">
      Welcome to{" "}
      <AppLink
        href="https://nextjs.org"
        className="outline-none focus:underline"
      >
        Next.js!
      </AppLink>
    </span>
  );
}

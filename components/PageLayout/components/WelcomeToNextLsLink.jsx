import AppLink from "@components/AppLink";

export default function WelcomeToNextJsLink() {
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

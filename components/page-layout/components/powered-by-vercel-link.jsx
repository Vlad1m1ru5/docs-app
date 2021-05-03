import AppLink from "@components/app-link";

export default function PoweredByLink() {
  return (
    <AppLink
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-2xl outline-none focus:underline"
    >
      Powered by{" "}
      <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
    </AppLink>
  );
}

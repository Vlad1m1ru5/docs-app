import AppContainer from "./app-container";
import AppHead from "./app-head";
import AppLink from "./app-link";
import AppMain from "./app-main";
import AppPage from "./app-page";

export default function AppLayout({ children }) {
  return (
    <AppPage>
      <AppHead />
      <header className="py-4 bg-white">
        <AppContainer>
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="text-4xl font-bold">
              <AppLink href="/" className="outline-none focus:underline">
                Docs App
              </AppLink>
            </h1>
          </div>
        </AppContainer>
      </header>
      <hr />
      <AppMain>
        <AppContainer>
          <div className="flex flex-col items-center space-y-2 mt-8">
            {children}
          </div>
        </AppContainer>
      </AppMain>
      <hr />
      <footer className="py-4 bg-white">
        <AppContainer>
          <div className="flex flex-wrap justify-around">
            <span className="text-2xl">
              Welcome to{" "}
              <AppLink
                href="https://nextjs.org"
                className="outline-none focus:underline"
              >
                Next.js!
              </AppLink>
            </span>
            <AppLink
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl outline-none focus:underline"
            >
              Powered by{" "}
              <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
            </AppLink>
          </div>
        </AppContainer>
      </footer>
    </AppPage>
  );
}

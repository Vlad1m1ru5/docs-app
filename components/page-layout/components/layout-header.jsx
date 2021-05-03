import AppContainer from "@components/app-container";

export default function LayoutHeader({ children }) {
  return (
    <>
      <header className="py-4 bg-white">
        <AppContainer>
          <div className="flex flex-wrap items-center justify-between">
            {children}
          </div>
        </AppContainer>
      </header>
      <hr />
    </>
  );
}

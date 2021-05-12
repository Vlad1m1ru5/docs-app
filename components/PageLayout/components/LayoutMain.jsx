import AppContainer from "@components/AppContainer";
import AppMain from "@components/AppMain";

export default function LayoutMain({ children }) {
  return (
    <AppMain>
      <AppContainer>
        <div className="flex flex-col items-center space-y-2 mt-8">
          {children}
        </div>
      </AppContainer>
    </AppMain>
  );
}

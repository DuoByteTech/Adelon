import "./App.css";
import { AppButton } from "./components/ui/AppButton";
import { AppCard } from "./components/ui/AppCard";
import { AppContainer } from "./components/ui/AppContainer";
import { AppText } from "./components/ui/AppText";

function App() {
  return (
    <AppContainer>
      <AppText variant="h1">Bilişim Teknolojileri</AppText>

      <AppCard hoverable>
        <AppText variant="cardTitle">Ders Konuları</AppText>

        <AppText variant="muted">Konuları incele ve öğrenmeye başla.</AppText>

        <AppButton>Derse Başla</AppButton>
      </AppCard>
    </AppContainer>
  );
}

export default App;

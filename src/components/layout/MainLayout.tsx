import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { AppContainer } from "@/components/ui/AppContainer";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <AppContainer>
          <Outlet />
        </AppContainer>
      </main>
    </div>
  );
}

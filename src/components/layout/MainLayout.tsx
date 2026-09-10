import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { AppContainer } from "@/components/ui/AppContainer";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-base-100">
      <Header />

      <main className="flex-1">
        <AppContainer>
          <Outlet />
        </AppContainer>
      </main>

      <Footer />
    </div>
  );
}

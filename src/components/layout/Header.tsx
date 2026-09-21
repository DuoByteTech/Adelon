import { AppContainer } from "@/components/ui/AppContainer";
import { AppLink } from "@/components/ui/AppLink";

export function Header() {
  const navItems = [
    { label: "Ana Sayfa", path: "/" },
    { label: "Dersler", path: "/dersler" },
    { label: "Oyunlar", path: "/oyunlar" },
    { label: "Notlar", path: "/notlar" },
    { label: "Quiz", path: "/quiz" },
  ];

  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <AppContainer className="flex h-20 items-center justify-between">
        <AppLink to="/" variant="brand">
          Adelon
        </AppLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <AppLink
              key={item.path}
              to={item.path}
              variant="nav"
              end={item.path === "/"}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <AppLink to="/giris" variant="outlineButton">
            Giriş Yap
          </AppLink>

          <AppLink to="/kayit" variant="primaryButton">
            Kayıt Ol
          </AppLink>
        </div>
      </AppContainer>
    </header>
  );
}

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
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <AppLink to="/">
          <span className="text-3xl font-extrabold tracking-tight text-violet-600">
            Adelon
          </span>
        </AppLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <AppLink key={item.path} to={item.path} variant="nav">
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
      </div>
    </header>
  );
}

import { Camera, Play, Users } from "lucide-react";

import { AppContainer } from "@/components/ui/AppContainer";
import { AppIconLink } from "@/components/ui/AppIconLink";
import { AppLink } from "@/components/ui/AppLink";
import { AppText } from "@/components/ui/AppText";

const footerLinks = [
  {
    label: "Hakkımızda",
    path: "/hakkimizda",
  },
  {
    label: "İletişim",
    path: "/iletisim",
  },
  {
    label: "Gizlilik Politikası",
    path: "/gizlilik-politikasi",
  },
  {
    label: "Kullanım Şartları",
    path: "/kullanim-sartlari",
  },
] as const;

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-white">
      <AppContainer className="py-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div>
            <AppLink to="/" variant="footerBrand">
              <span className="text-2xl font-extrabold tracking-tight">
                Adelon
              </span>

              <span className="mt-0.5 text-xs font-medium text-text-muted">
                Öğren, Keşfet, Başar!
              </span>
            </AppLink>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {footerLinks.map((item) => (
              <AppLink key={item.path} to={item.path} variant="footer">
                {item.label}
              </AppLink>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex items-center gap-1">
              <AppIconLink
                href="https://www.youtube.com/"
                ariaLabel="YouTube"
                variant="plain"
              >
                <Play size={17} strokeWidth={2} />
              </AppIconLink>

              <AppIconLink
                href="https://www.instagram.com/"
                ariaLabel="Instagram"
                variant="plain"
              >
                <Camera size={17} strokeWidth={2} />
              </AppIconLink>

              <AppIconLink
                href="https://www.facebook.com/"
                ariaLabel="Facebook"
                variant="plain"
              >
                <Users size={17} strokeWidth={2} />
              </AppIconLink>
            </div>

            <AppText
              variant="small"
              className="text-center text-xs md:text-right"
            >
              © {new Date().getFullYear()} Adelon. Tüm hakları saklıdır.
            </AppText>
          </div>
        </div>
      </AppContainer>
    </footer>
  );
}

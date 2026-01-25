"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Calendar, BarChart3, Settings } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "Hoy" },
  { href: "/lectura", icon: BookOpen, label: "Lectura" },
  { href: "/calendario", icon: Calendar, label: "Calendario" },
  { href: "/estadisticas", icon: BarChart3, label: "Progreso" },
  { href: "/configuracion", icon: Settings, label: "Ajustes" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${isActive ? "active" : ""}`}
          >
            <Icon
              size={22}
              strokeWidth={isActive ? 2.5 : 1.5}
              className="transition-all duration-200"
            />
            <span style={{ fontFamily: 'var(--font-cormorant)' }}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

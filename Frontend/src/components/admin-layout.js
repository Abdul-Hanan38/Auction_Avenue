"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { HouseLogo } from "./house-logo"
import { DashboardIcon, HomeIcon, UsersIcon, ChartIcon, SettingsIcon, LogoutIcon } from "./icons"

export function AdminLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    router.push("/login")
  }

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: DashboardIcon },
    { name: "Properties", href: "/admin/properties", icon: HomeIcon },
    { name: "Users", href: "/admin/users", icon: UsersIcon },
    { name: "Analytics", href: "/admin/analytics", icon: ChartIcon },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-border">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
              <HouseLogo size={20} />
            </div>
            <div>
              <h1 className="font-bold text-foreground">Auction Avenue</h1>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="mb-2">
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Main</p>
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>

          <div className="pt-2 border-t border-border">
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Account</p>
            <Link
              href="/admin/settings"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/admin/settings"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              }`}
            >
              <SettingsIcon size={18} />
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </div>
        </nav>

        {/* Logout - Fixed at bottom */}
        <div className="p-3 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogoutIcon size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}

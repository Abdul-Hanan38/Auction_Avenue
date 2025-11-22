"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { HouseLogo } from "./house-logo"
import {
  DashboardIcon,
  PlusIcon,
  ListIcon,
  ClockIcon,
  DollarIcon,
  ChartIcon,
  InspectionIcon,
  SettingsIcon,
  LogoutIcon,
} from "./icons"

export function SellerLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    router.push("/login")
  }

  const menuItems = [
    { name: "Dashboard", href: "/seller/dashboard", icon: DashboardIcon },
    { name: "Create Listing", href: "/seller/create", icon: PlusIcon },
    { name: "My Listings", href: "/seller/listings", icon: ListIcon },
    { name: "Active Auctions", href: "/seller/auctions", icon: ClockIcon },
    { name: "Earnings", href: "/seller/earnings", icon: DollarIcon },
    { name: "Analytics", href: "/seller/analytics", icon: ChartIcon },
    { name: "Inspections", href: "/seller/inspections", icon: InspectionIcon },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-border">
          <Link href="/seller/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
              <HouseLogo size={20} />
            </div>
            <div>
              <h1 className="font-bold text-foreground">Auction Avenue</h1>
              <p className="text-xs text-muted-foreground">Seller Portal</p>
            </div>
          </Link>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="mb-2">
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Main</p>
            {menuItems.slice(0, 4).map((item) => {
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
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Business</p>
            {menuItems.slice(4).map((item) => {
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
              href="/seller/settings"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/seller/settings"
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
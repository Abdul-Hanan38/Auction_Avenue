"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { HouseLogo } from "./house-logo"
import {
  HomeIcon,
  HeartIcon,
  ClockIcon,
  TrophyIcon,
  SearchIcon,
  BellIcon,
  MessageIcon,
  FileIcon,
  CompareIcon,
  InspectionIcon,
  SettingsIcon,
  LogoutIcon,
} from "./icons"

export function BuyerLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    router.push("/login")
  }

  const menuItems = [
    { name: "Browse Properties", href: "/buyer/properties", icon: HomeIcon },
    { name: "Watchlist", href: "/buyer/watchlist", icon: HeartIcon },
    { name: "My Bids", href: "/buyer/my-bids", icon: ClockIcon },
    { name: "Won Auctions", href: "/buyer/won", icon: TrophyIcon },
    { name: "Saved Searches", href: "/buyer/saved-searches", icon: SearchIcon },
    { name: "Compare", href: "/buyer/compare", icon: CompareIcon },
    { name: "Inspections", href: "/buyer/inspections", icon: InspectionIcon },
    { name: "My Inspections", href: "/buyer/my-inspections", icon: InspectionIcon },
    { name: "Notifications", href: "/buyer/notifications", icon: BellIcon },
    { name: "Messages", href: "/buyer/messages", icon: MessageIcon },
    { name: "Documents", href: "/buyer/documents", icon: FileIcon },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-border">
          <Link href="/buyer/properties" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
              <HouseLogo size={20} />
            </div>
            <div>
              <h1 className="font-bold text-foreground">Auction Avenue</h1>
              <p className="text-xs text-muted-foreground">Buyer Portal</p>
            </div>
          </Link>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="mb-2">
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Properties</p>
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
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tools</p>
            {menuItems.slice(4, 8).map((item) => {
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
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Communication
            </p>
            {menuItems.slice(8, 11).map((item) => {
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
              href="/buyer/settings"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/buyer/settings"
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
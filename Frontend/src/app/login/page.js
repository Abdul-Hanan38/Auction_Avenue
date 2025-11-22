'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { HouseLogo } from '@/components/house-logo'
import { MailIcon, LockIcon, UserIcon, ArrowRightIcon, ShieldIcon } from '@/components/icons'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('buyer')

  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('userRole', role)
    localStorage.setItem('userEmail', email)
    
    if (role === 'admin') router.push('/admin/dashboard')
    else if (role === 'seller') router.push('/seller/dashboard')
    else router.push('/buyer/properties')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding & Features */}
        <div className="hidden md:block space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                <HouseLogo size={32} className="text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Auction Avenue</h1>
                <p className="text-muted-foreground">Premium House Bidding</p>
              </div>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Join the most trusted platform for luxury property auctions. Buy and sell premium properties with confidence.
            </p>
          </div>
          
          {/* Feature highlights */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldIcon size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Secure Transactions</h3>
                <p className="text-sm text-muted-foreground">Bank-level security for all your bids</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <HomeIcon size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Premium Properties</h3>
                <p className="text-sm text-muted-foreground">Exclusive listings from verified sellers</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <UsersIcon size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Trusted Community</h3>
                <p className="text-sm text-muted-foreground">45,000+ verified buyers and sellers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <Card className="shadow-2xl border-border/50 backdrop-blur">
          <CardHeader className="space-y-4 pb-8">
            <div className="flex justify-center md:hidden mb-2">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                <HouseLogo size={32} className="text-accent-foreground" />
              </div>
            </div>
            <div className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
              <CardDescription className="text-base">Sign in to continue your journey</CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="pb-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <UserIcon size={16} className="text-accent" />
                  Account Type
                </label>
                <select 
                  value={role} 
                  onChange={(e) => setRole(e.target.value)} 
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                >
                  <option value="buyer">Buyer - Browse & Bid</option>
                  <option value="seller">Seller - List Properties</option>
                  <option value="admin">Admin - Manage Platform</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MailIcon size={16} className="text-accent" />
                  Email Address
                </label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="pl-11 py-3 rounded-xl border-border focus:ring-2 focus:ring-accent focus:border-accent transition-all" 
                    required 
                  />
                  <MailIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <LockIcon size={16} className="text-accent" />
                    Password
                  </label>
                  <Link href="#" className="text-sm text-accent hover:text-accent/80 transition-colors">
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <Input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="pl-11 py-3 rounded-xl border-border focus:ring-2 focus:ring-accent focus:border-accent transition-all" 
                    required 
                  />
                  <LockIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 rounded-xl text-base font-semibold shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 group">
                Sign In
                <ArrowRightIcon size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link href="/signup" className="text-accent font-semibold hover:text-accent/80 transition-colors">
                  Create one now
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function HomeIcon({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function UsersIcon({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
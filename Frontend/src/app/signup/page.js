'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { HouseLogo } from '@/components/house-logo'
import { MailIcon, LockIcon, UserIcon, ArrowRightIcon, CheckCircleIcon, ShieldIcon } from '@/components/icons'

export default function Signup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
  })
  const [agreed, setAgreed] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSignup = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    if (!agreed) {
      alert('Please agree to terms and conditions')
      return
    }

    localStorage.setItem('userRole', formData.role)
    localStorage.setItem('userEmail', formData.email)
    localStorage.setItem('userName', formData.fullName)
    
    if (formData.role === 'admin') {
      router.push('/admin/dashboard')
    } else if (formData.role === 'seller') {
      router.push('/seller/dashboard')
    } else {
      router.push('/buyer/properties')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Signup form */}
        <Card className="shadow-2xl border-border/50 backdrop-blur md:order-2">
          <CardHeader className="space-y-4 pb-8">
            <div className="flex justify-center md:hidden mb-2">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                <HouseLogo size={32} className="text-accent-foreground" />
              </div>
            </div>
            <div className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
              <CardDescription className="text-base">Start your property journey today</CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="pb-8">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <UserIcon size={16} className="text-accent" />
                  Full Name
                </label>
                <div className="relative">
                  <Input
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="pl-11 py-3 rounded-xl border-border focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    required
                  />
                  <UserIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <ShieldIcon size={16} className="text-accent" />
                  Account Type
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                >
                  <option value="buyer">Buyer - Browse & Bid on Properties</option>
                  <option value="seller">Seller - List & Sell Properties</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MailIcon size={16} className="text-accent" />
                  Email Address
                </label>
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-11 py-3 rounded-xl border-border focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    required
                  />
                  <MailIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <LockIcon size={16} className="text-accent" />
                  Password
                </label>
                <div className="relative">
                  <Input
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-11 py-3 rounded-xl border-border focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    required
                  />
                  <LockIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <LockIcon size={16} className="text-accent" />
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-11 py-3 rounded-xl border-border focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    required
                  />
                  <LockIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <label className="flex items-start gap-3 pt-2 cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-5 h-5 rounded border-border text-accent focus:ring-2 focus:ring-accent transition-all cursor-pointer"
                  />
                  {agreed && <CheckCircleIcon size={20} className="absolute text-accent pointer-events-none" />}
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                  I agree to the{' '}
                  <Link href="#" className="text-accent hover:text-accent/80 font-medium">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="text-accent hover:text-accent/80 font-medium">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 rounded-xl text-base font-semibold shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 group mt-6">
                Create Account
                <ArrowRightIcon size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="text-accent font-semibold hover:text-accent/80 transition-colors">
                  Sign in instead
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Right side - Branding & Benefits */}
        <div className="hidden md:block space-y-8 md:order-1">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                <HouseLogo size={32} className="text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Join Auction Avenue</h1>
                <p className="text-muted-foreground">Your Property Dreams Start Here</p>
              </div>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Experience seamless property auctions with our trusted platform. Join thousands of satisfied buyers and sellers.
            </p>
          </div>
          
          {/* Benefits list */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Why choose us?</h3>
            
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircleIcon size={20} className="text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Instant Access</h4>
                <p className="text-sm text-muted-foreground">Start browsing premium properties immediately</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldIcon size={20} className="text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Safe & Secure</h4>
                <p className="text-sm text-muted-foreground">Advanced encryption protects your data</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <HomeIcon size={20} className="text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Quality Listings</h4>
                <p className="text-sm text-muted-foreground">Only verified premium properties</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur rounded-xl border border-border/50">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <UsersIcon size={20} className="text-purple-500" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Expert Support</h4>
                <p className="text-sm text-muted-foreground">24/7 assistance from our team</p>
              </div>
            </div>
          </div>
        </div>
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
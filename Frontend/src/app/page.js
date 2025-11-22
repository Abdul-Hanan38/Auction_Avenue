"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HouseLogo } from '@/components/house-logo'
import { useRouter } from 'next/navigation'
import { SearchIcon, TrophyIcon, ClockIcon, HomeIcon } from '@/components/icons'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('all')

  const featuredProperties = [
    { 
      id: 1, 
      title: 'Luxury Waterfront Estate', 
      location: 'Miami, FL', 
      currentBid: '$2.5M', 
      bids: 24,
      timeLeft: '2h 30m',
      image: '/waterfront-estate.jpg',
      bedrooms: 5,
      bathrooms: 4,
      sqft: 8500
    },
    { 
      id: 2, 
      title: 'Modern Downtown Penthouse', 
      location: 'New York, NY', 
      currentBid: '$1.8M', 
      bids: 18,
      timeLeft: '5h 15m',
      image: '/penthouse-modern.jpg',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 6200
    },
    { 
      id: 3, 
      title: 'Historic Victorian Manor', 
      location: 'Boston, MA', 
      currentBid: '$950K', 
      bids: 12,
      timeLeft: '12h 45m',
      image: '/victorian-mansion.jpg',
      bedrooms: 6,
      bathrooms: 4,
      sqft: 7800
    },
  ]

  const features = [
    {
      icon: <TrophyIcon size={24} />,
      title: 'Verified Properties',
      description: 'All properties are verified and inspected by our expert team'
    },
    {
      icon: <ClockIcon size={24} />,
      title: 'Real-Time Bidding',
      description: 'Track bids and property values updated in real-time'
    },
    {
      icon: <HomeIcon size={24} />,
      title: 'Premium Listings',
      description: 'Exclusive access to luxury properties nationwide'
    }
  ]

  const stats = [
    { value: '1,234+', label: 'Properties Listed', icon: <HomeIcon size={28} /> },
    { value: '45K+', label: 'Active Bidders', icon: <TrophyIcon size={28} /> },
    { value: '$2.4B', label: 'Total Sales', icon: <ClockIcon size={28} /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-accent-foreground shadow-lg">
                <HouseLogo size={24} className="stroke-current" />
              </div>
              <span className="text-2xl font-bold text-foreground">Auction Avenue</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#featured" className="text-foreground/70 hover:text-accent transition-colors font-medium">Featured</a>
              <a href="#how-it-works" className="text-foreground/70 hover:text-accent transition-colors font-medium">How It Works</a>
              <a href="#stats" className="text-foreground/70 hover:text-accent transition-colors font-medium">About</a>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => router.push('/login')} className="font-semibold ">Login</Button>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg" onClick={() => router.push('/signup')}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(218,109,31,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center fade-in max-w-4xl mx-auto">
            <Badge className="mb-6 px-6 py-2 text-sm font-semibold bg-accent/10 text-accent border-accent/20">
              <TrophyIcon size={16} className="inline mr-2" />
              Trusted by 45,000+ Active Bidders
            </Badge>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance leading-tight">
              Discover Your Dream Home Through{' '}
              <span className="text-accent">Premium Auctions</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
              Access exclusive properties, transparent bidding, and expert support. Start your journey to homeownership today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all" onClick={() => router.push('/signup')}>
                <TrophyIcon size={20} className="mr-2" />
                Start Bidding Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 font-semibold" onClick={() => router.push('/buyer/properties')}>
                <SearchIcon size={20} className="mr-2" />
                Browse Properties
              </Button>
            </div>
          </div>

          <div id="stats" className="mt-32 grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-shadow slide-up" style={{animationDelay: `${i * 100}ms`}}>
                <div className="flex justify-center mb-4 text-accent">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                <p className="text-foreground/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-accent/10 text-accent border-accent/20">
              <ClockIcon size={16} className="inline mr-2" />
              Live Auctions
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Featured Properties</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover premium properties with verified listings and transparent bidding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((property, i) => (
              <Card 
                key={property.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer slide-up border-2 hover:border-accent/50" 
                style={{animationDelay: `${i * 100}ms`}}
                onClick={() => router.push('/buyer/properties')}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image || "/placeholder.svg"} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-semibold shadow-lg">
                    <ClockIcon size={14} className="inline mr-1" />
                    {property.timeLeft}
                  </Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium opacity-90 flex items-center gap-1">
                      <HomeIcon size={14} />
                      {property.location}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition">{property.title}</h3>
                  
                  <div className="flex items-center gap-4 mb-5 text-sm text-foreground/60">
                    <span>{property.bedrooms} beds</span>
                    <span>•</span>
                    <span>{property.bathrooms} baths</span>
                    <span>•</span>
                    <span>{(property.sqft / 1000).toFixed(1)}k sqft</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-foreground/50 mb-1 font-medium">Current Bid</p>
                      <p className="text-3xl font-bold text-accent">{property.currentBid}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-foreground/50 mb-1 font-medium">{property.bids} Bids</p>
                      <Button size="sm" className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground font-semibold">
                        Place Bid →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 font-semibold" onClick={() => router.push('/buyer/properties')}>
              View All Properties →
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Why Choose Auction Avenue</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Experience the future of property acquisition with our premium platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="p-8 hover:shadow-xl transition-all border-2 hover:border-accent/50 slide-up" style={{animationDelay: `${i * 100}ms`}}>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto text-balance">
            Join thousands of successful bidders and start your property journey today
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-12 py-7 shadow-2xl hover:shadow-accent/20 transition-all" onClick={() => router.push('/signup')}>
            <TrophyIcon size={20} className="mr-2" />
            Create Your Free Account
          </Button>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <HouseLogo size={24} className="stroke-current text-accent-foreground" />
                </div>
                <span className="text-2xl font-bold">Auction Avenue</span>
              </div>
              <p className="text-primary-foreground/70 text-lg mb-6 max-w-md">
                Your trusted platform for premium property auctions. Discover, bid, and win your dream home.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">For Buyers</h4>
              <ul className="space-y-3 text-primary-foreground/70">
                <li className="hover:text-primary-foreground transition cursor-pointer">Browse Properties</li>
                <li className="hover:text-primary-foreground transition cursor-pointer">How It Works</li>
                <li className="hover:text-primary-foreground transition cursor-pointer">My Bids</li>
                <li className="hover:text-primary-foreground transition cursor-pointer">Inspection Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-primary-foreground/70">
                <li className="hover:text-primary-foreground transition cursor-pointer">About Us</li>
                <li className="hover:text-primary-foreground transition cursor-pointer">Contact</li>
                <li className="hover:text-primary-foreground transition cursor-pointer">Careers</li>
                <li className="hover:text-primary-foreground transition cursor-pointer">Legal</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/70">&copy; 2025 Auction Avenue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
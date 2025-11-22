'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

export default function PropertyDetail({ params }) {
  const [bidAmount, setBidAmount] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const property = {
    id: params.id,
    title: 'Luxury Waterfront Estate',
    location: 'Miami, FL',
    images: ['/placeholder.svg?key=water1', '/placeholder.svg?key=water2', '/placeholder.svg?key=water3'],
    currentBid: '$2.5M',
    highestBidder: 'Anonymous',
    totalBids: 24,
    startingPrice: '$2M',
    timeLeft: '2h 30m',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 8500,
    description: 'Stunning waterfront estate with breathtaking ocean views, private beach access, and luxury amenities throughout. This exceptional property features a state-of-the-art kitchen, infinity pool, and guest house.',
    features: ['Ocean front location', 'Private beach access', 'Infinity pool with ocean views', 'Smart home automation', 'Guest house', 'Private dock'],
    bidHistory: [
      { bidder: 'User A', amount: '$2.5M', time: '5 min ago' },
      { bidder: 'User B', amount: '$2.48M', time: '12 min ago' },
      { bidder: 'User C', amount: '$2.45M', time: '25 min ago' },
    ],
  }

  const handleBid = () => {
    console.log('Placing bid:', bidAmount)
  }

  return (
    <BuyerLayout>
      <div className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg group">
              <img src={property.images[currentImageIndex] || "/placeholder.svg"} alt={property.title} className="w-full h-full object-cover" />
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-background/80 hover:bg-background rounded-full">
                ❤️
              </Button>
              {property.timeLeft && (
                <Badge className="absolute bottom-4 left-4 bg-accent text-accent-foreground text-sm">
                  ⏱️ {property.timeLeft}
                </Badge>
              )}
            </div>

            <div className="flex gap-4">
              {property.images.map((img, index) => (
                <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${currentImageIndex === index ? 'border-accent' : 'border-border'}`}>
                  <img src={img || "/placeholder.svg"} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <Card className="h-fit sticky top-24">
            <CardHeader>
              <CardTitle>Place Your Bid</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-4 rounded-lg border border-border">
                <p className="text-sm text-foreground/60 mb-1">Current Bid</p>
                <p className="text-4xl font-bold text-accent">{property.currentBid}</p>
                <p className="text-xs text-foreground/50 mt-2">{property.totalBids} bids placed</p>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Your Bid Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">💰</span>
                  <Input type="number" placeholder="2500000" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} className="pl-10" />
                </div>
                <p className="text-xs text-foreground/60">Minimum bid: $2.51M</p>
              </div>

              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg h-12" onClick={handleBid}>
                ⚡ Place Bid
              </Button>

              <div className="space-y-3 border-t border-border pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Beds</span>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Baths</span>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Sq Ft</span>
                  <span className="font-semibold">{property.sqft.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Starting Price</span>
                  <span className="font-semibold">{property.startingPrice}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-3">{property.title}</h1>
              <div className="flex items-center gap-2 text-lg text-foreground/70 mb-4">
                📍 {property.location}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">About This Property</h2>
              <p className="text-foreground/70 leading-relaxed">{property.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Features & Amenities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Bid History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {property.bidHistory.map((bid, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div>
                        <p className="font-medium flex items-center gap-2">
                          👤 {bid.bidder}
                        </p>
                        <p className="text-sm text-foreground/50">{bid.time}</p>
                      </div>
                      <p className="text-lg font-bold text-accent">{bid.amount}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Auction Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Highest Bidder</p>
                  <p className="font-semibold">{property.highestBidder}</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-foreground/60 mb-1">Total Bids</p>
                  <p className="text-2xl font-bold">📈 {property.totalBids}</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-foreground/60 mb-1">Time Remaining</p>
                  <p className="text-2xl font-bold text-accent">{property.timeLeft}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Auction Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground/70">
                <p>Set your maximum bid amount to avoid overpaying.</p>
                <p>Watch the auction closely in the final minutes for last-minute bidding.</p>
                <p>Verify all property details before placing your bid.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </BuyerLayout>
  )
}
'use client'

import { SellerLayout } from '@/components/seller-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function SellerDashboard() {
  const stats = [
    { title: 'Active Listings', value: '12', change: '+3', icon: '🏠', color: 'bg-blue-500/20' },
    { title: 'Total Sales', value: '$450K', change: '+$125K', icon: '💰', color: 'bg-green-500/20' },
    { title: 'Total Views', value: '2,340', change: '+340', icon: '📈', color: 'bg-purple-500/20' },
    { title: 'Pending Listings', value: '3', change: 'Review needed', icon: '⏱️', color: 'bg-orange-500/20' },
  ]

  const recentListings = [
    { name: 'Waterfront Estate', bids: 24, price: '$2.5M', status: 'active' },
    { name: 'Modern Villa', bids: 18, price: '$1.8M', status: 'active' },
    { name: 'Historic Manor', bids: 12, price: '$950K', status: 'active' },
  ]

  return (
    <SellerLayout>
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-2">📈 {stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color} text-xl`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentListings.map((listing, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between py-4 border-b border-border last:border-0 hover:bg-muted/30 px-3 rounded transition"
                  >
                    <div>
                      <p className="font-medium">{listing.name}</p>
                      <p className="text-sm text-foreground/60">
                        {listing.bids} bids • {listing.price}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {listing.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/seller/create">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  ➕ Create New Listing
                </Button>
              </Link>
              <Button variant="outline" className="w-full">
                View All Listings
              </Button>
              <Button variant="outline" className="w-full">
                Check Pending Approvals
              </Button>
              <Button variant="outline" className="w-full">
                Download Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </SellerLayout>
  )
}
'use client'

import { SellerLayout } from '@/components/seller-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const listings = [
  { id: 1, title: 'Luxury Waterfront Estate', location: 'Miami, FL', price: '$2.5M', status: 'active', views: 324, bids: 24 },
  { id: 2, title: 'Modern Downtown Penthouse', location: 'New York, NY', price: '$1.8M', status: 'active', views: 198, bids: 18 },
  { id: 3, title: 'Historic Victorian Manor', location: 'Boston, MA', price: '$950K', status: 'ending-soon', views: 156, bids: 12 },
  { id: 4, title: 'Contemporary Villa', location: 'Los Angeles, CA', price: '$1.2M', status: 'pending', views: 87, bids: 0 },
]

export default function SellerListings() {
  const getBadgeVariant = (status) => {
    if (status === 'active') return 'default'
    if (status === 'pending') return 'secondary'
    return 'outline'
  }

  return (
    <SellerLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">My Listings</h2>
          <Link href="/seller/create">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              ➕ New Listing
            </Button>
          </Link>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Property</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Location</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Starting Price</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Views</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Bids</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr key={listing.id} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="py-4 px-4 font-medium">{listing.title}</td>
                      <td className="py-4 px-4 text-foreground/70">{listing.location}</td>
                      <td className="py-4 px-4 font-semibold">{listing.price}</td>
                      <td className="py-4 px-4">{listing.views}</td>
                      <td className="py-4 px-4 font-semibold">{listing.bids}</td>
                      <td className="py-4 px-4">
                        <Badge variant={getBadgeVariant(listing.status)}>
                          {listing.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-500/10">
                            👁
                          </Button>
                          <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10">
                            ✎
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">
                            🗑
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </SellerLayout>
  )
}
'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const myBids = [
  { id: 1, property: 'Waterfront Estate', location: 'Miami, FL', myBid: '$2.4M', currentBid: '$2.5M', status: 'losing', bidsCount: 24 },
  { id: 2, property: 'Downtown Penthouse', location: 'New York, NY', myBid: '$1.9M', currentBid: '$1.8M', status: 'winning', bidsCount: 18 },
  { id: 3, property: 'Victorian Manor', location: 'Boston, MA', myBid: '$925K', currentBid: '$925K', status: 'winning', bidsCount: 12 },
]

export default function MyBids() {
  return (
    <BuyerLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">My Bids</h2>

        <div className="space-y-4">
          {myBids.map((bid) => (
            <Card key={bid.id}>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{bid.property}</h3>
                    <div className="flex items-center gap-1 text-sm text-foreground/60 mb-4">
                      📍 {bid.location}
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-foreground/60">My Bid</span>
                        <span className="font-semibold text-accent">{bid.myBid}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Current Bid</span>
                        <span className="font-semibold">{bid.currentBid}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Total Bids</span>
                        <span className="font-semibold">📈 {bid.bidsCount}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <Badge variant={bid.status === 'winning' ? 'default' : 'secondary'} className="w-fit">
                      {bid.status === 'winning' ? '✓ You are winning' : '✗ You are being outbid'}
                    </Badge>
                    <div className="text-right text-sm text-foreground/60">
                      Status updated just now
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </BuyerLayout>
  )
}
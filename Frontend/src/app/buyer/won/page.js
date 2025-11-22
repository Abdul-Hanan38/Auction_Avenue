'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const wonAuctions = [
  { id: 1, property: 'Beachfront Condo', location: 'Miami, FL', winningBid: '$750K', wonDate: '2024-01-10', status: 'completed' },
  { id: 2, property: 'Urban Townhouse', location: 'Chicago, IL', winningBid: '$350K', wonDate: '2024-01-05', status: 'payment-pending' },
]

export default function WonAuctions() {
  return (
    <BuyerLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Won Auctions</h2>

        <div className="space-y-4">
          {wonAuctions.map((auction) => (
            <Card key={auction.id}>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-2xl">✅</span>
                      <div>
                        <h3 className="text-lg font-bold">{auction.property}</h3>
                        <div className="flex items-center gap-1 text-sm text-foreground/60">
                          📍 {auction.location}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Winning Bid</span>
                        <span className="font-semibold text-green-600">{auction.winningBid}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground/60">📅 Won on</span>
                        <span className="font-semibold">{auction.wonDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <Badge variant={auction.status === 'completed' ? 'default' : 'secondary'} className="w-fit">
                      {auction.status === 'completed' ? 'Completed' : 'Payment Pending'}
                    </Badge>
                    <div className="space-y-2">
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        View Details
                      </Button>
                      {auction.status === 'payment-pending' && (
                        <Button variant="outline" className="w-full">
                          Complete Payment
                        </Button>
                      )}
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
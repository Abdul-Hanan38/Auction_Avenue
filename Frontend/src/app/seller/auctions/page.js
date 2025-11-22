'use client'
//Added Successfuly
import { SellerLayout } from '@/components/seller-layout'
import { Card, CardContent } from '@/components/ui/card'

const auctions = [
  { id: 1, title: 'Waterfront Estate', currentBid: '$2.5M', bids: 24, timeLeft: '2h 30m', highestBidder: 'John D.' },
  { id: 2, title: 'Downtown Penthouse', currentBid: '$1.75M', bids: 18, timeLeft: '5h 15m', highestBidder: 'Jane S.' },
  { id: 3, title: 'Victorian Manor', currentBid: '$925K', bids: 12, timeLeft: '12h 45m', highestBidder: 'Robert M.' },
]

export default function ActiveAuctions() {
  return (
    <SellerLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Active Auctions</h2>

        <div className="grid gap-6">
          {auctions.map((auction) => (
            <Card key={auction.id}>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">{auction.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Current Bid</p>
                        <p className="text-3xl font-bold text-accent">{auction.currentBid}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-foreground/60 mb-1">Total Bids</p>
                          <p className="text-lg font-semibold">📈 {auction.bids}</p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/60 mb-1">Highest Bidder</p>
                          <p className="text-lg font-semibold">{auction.highestBidder}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                      <p className="text-sm text-foreground/60 mb-2">⏱️ Time Remaining</p>
                      <p className="text-2xl font-bold text-accent">{auction.timeLeft}</p>
                    </div>
                    <p className="text-center text-sm text-foreground/60 mt-4">Live monitoring active</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SellerLayout>
  )
}
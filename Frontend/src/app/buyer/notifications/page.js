'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BellIcon, HomeIcon, TrophyIcon, MessageIcon, ClockIcon } from '@/components/icons'

export default function BuyerNotifications() {
  const notifications = [
    {
      id: 1,
      type: 'bid',
      icon: <HomeIcon size={20} />,
      title: 'You have been outbid!',
      message: 'Someone placed a higher bid on Luxury Beachfront Villa',
      time: '5 minutes ago',
      read: false,
      action: 'Place Higher Bid'
    },
    {
      id: 2,
      type: 'won',
      icon: <TrophyIcon size={20} />,
      title: 'Congratulations! You won an auction',
      message: 'You won the auction for Modern Downtown Condo',
      time: '1 hour ago',
      read: false,
      action: 'View Details'
    },
    {
      id: 3,
      type: 'message',
      icon: <MessageIcon size={20} />,
      title: 'New message from seller',
      message: 'John Smith replied to your inquiry about Urban Townhouse',
      time: '2 hours ago',
      read: false,
      action: 'Read Message'
    },
    {
      id: 4,
      type: 'ending',
      icon: <ClockIcon size={20} />,
      title: 'Auction ending soon',
      message: 'Waterfront Estate auction ends in 30 minutes',
      time: '3 hours ago',
      read: true,
      action: 'View Property'
    },
    {
      id: 5,
      type: 'inspection',
      icon: <HomeIcon size={20} />,
      title: 'Inspection scheduled',
      message: 'Your inspection for Modern Loft is confirmed for tomorrow at 2 PM',
      time: '5 hours ago',
      read: true,
      action: 'View Details'
    }
  ]

  return (
    <BuyerLayout>
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <BellIcon size={24} />
              </div>
              <h1 className="text-4xl font-bold">Notifications</h1>
            </div>
            <p className="text-foreground/60">Stay updated with your auction activities</p>
          </div>
          <Button variant="outline" className="font-semibold">Mark all as read</Button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`p-6 hover:shadow-lg transition-all ${
                !notification.read
                  ? 'border-l-4 border-l-accent bg-accent/5'
                  : 'border-2'
              }`}
            >
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  !notification.read
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {notification.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg flex items-center gap-2 flex-wrap">
                        {notification.title}
                        {!notification.read && (
                          <Badge variant="default" className="bg-accent text-accent-foreground">
                            New
                          </Badge>
                        )}
                      </h3>
                      <p className="text-foreground/70 mt-1 leading-relaxed">{notification.message}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 gap-4">
                    <span className="text-sm text-foreground/60 font-medium">{notification.time}</span>
                    <Button 
                      variant={!notification.read ? 'default' : 'outline'} 
                      size="sm" 
                      className={!notification.read ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}
                    >
                      {notification.action}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </BuyerLayout>
  )
}

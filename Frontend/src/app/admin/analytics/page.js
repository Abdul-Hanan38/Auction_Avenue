'use client'

import { AdminLayout } from '@/components/admin-layout'
import { Card } from '@/components/ui/card'
import { ChartIcon } from '@/components/icons'

export default function AdminAnalytics() {
  const platformStats = [
    { label: 'Total Revenue', value: '$12.4M', change: '+18.2%' },
    { label: 'Active Auctions', value: '342', change: '+12.5%' },
    { label: 'New Users', value: '1,234', change: '+24.3%' },
    { label: 'Completion Rate', value: '94.2%', change: '+2.1%' }
  ]

  return (
    <AdminLayout>
      <div className="max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <ChartIcon size={32} />
            Platform Analytics
          </h1>
          <p className="text-muted-foreground">Monitor platform performance and growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {platformStats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-green-500">{stat.change} vs last month</div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Revenue Trend</h2>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 78, 82, 90, 75, 88, 95, 85, 92, 88, 95, 100].map((height, idx) => (
                <div key={idx} className="flex-1 bg-accent rounded-t" style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-muted-foreground">
              <span>Jan</span>
              <span>Jun</span>
              <span>Dec</span>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">User Growth</h2>
            <div className="space-y-6">
              {[
                { type: 'Buyers', count: 5678, percentage: 62 },
                { type: 'Sellers', count: 2341, percentage: 26 },
                { type: 'Admins', count: 89, percentage: 12 }
              ].map((item) => (
                <div key={item.type}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.type}</span>
                    <span className="text-accent">{item.count}</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
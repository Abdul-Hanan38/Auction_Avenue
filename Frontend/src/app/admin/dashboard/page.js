'use client'

import { AdminLayout } from '@/components/admin-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HomeIcon, UsersIcon, DollarIcon, ChartIcon } from '@/components/icons'

const stats = [
  { title: 'Total Properties', value: '1,234', change: '+12%', icon: <HomeIcon size={24} />, color: 'bg-blue-500/10 text-blue-600' },
  { title: 'Active Users', value: '5,678', change: '+8%', icon: <UsersIcon size={24} />, color: 'bg-purple-500/10 text-purple-600' },
  { title: 'Total Revenue', value: '$2.4M', change: '+24%', icon: <DollarIcon size={24} />, color: 'bg-green-500/10 text-green-600' },
  { title: 'Active Auctions', value: '342', change: '+5%', icon: <ChartIcon size={24} />, color: 'bg-orange-500/10 text-orange-600' },
]

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow border-2">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-foreground/60 mb-2 font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold mb-2">{stat.value}</p>
                    <p className="text-xs text-green-600 flex items-center gap-1">
                      <ChartIcon size={12} />
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color}`}>
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
              <CardTitle>Recent Auctions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <p className="font-medium">Luxury Estate #{i}</p>
                      <p className="text-sm text-foreground/60">$500K - {15 + i} bids</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-accent">Active</p>
                      <p className="text-xs text-foreground/60">2h left</p>
                    </div>
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
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Approve Property</Button>
              <Button variant="outline" className="w-full">Review Reports</Button>
              <Button variant="outline" className="w-full">Send Notifications</Button>
              <Button variant="outline" className="w-full">Download Report</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
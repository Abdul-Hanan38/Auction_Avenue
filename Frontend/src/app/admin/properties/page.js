'use client'

import { AdminLayout } from '@/components/admin-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const properties = [
  { id: 1, title: 'Waterfront Estate', location: 'Miami, FL', price: '$2.5M', status: 'active', bids: 24 },
  { id: 2, title: 'Downtown Penthouse', location: 'New York, NY', price: '$1.8M', status: 'pending', bids: 18 },
  { id: 3, title: 'Victorian Manor', location: 'Boston, MA', price: '$950K', status: 'active', bids: 12 },
  { id: 4, title: 'Modern Villa', location: 'Los Angeles, CA', price: '$1.2M', status: 'rejected', bids: 0 },
]

export default function AdminProperties() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Properties Management</h2>
          <Button className="bg-accent text-accent-foreground">Add Property</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Title</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Location</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Price</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Bids</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((prop) => (
                    <tr key={prop.id} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="py-4 px-4">{prop.title}</td>
                      <td className="py-4 px-4 text-foreground/70">{prop.location}</td>
                      <td className="py-4 px-4 font-semibold">{prop.price}</td>
                      <td className="py-4 px-4">
                        <Badge variant={prop.status === 'active' ? 'default' : prop.status === 'pending' ? 'secondary' : 'destructive'}>
                          {prop.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">{prop.bids}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-500/10">👁</Button>
                          <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-500/10">✓</Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-500/10">✕</Button>
                          <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10">✎</Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">🗑</Button>
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
    </AdminLayout>
  )
}
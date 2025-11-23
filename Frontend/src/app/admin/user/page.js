'use client'

import { AdminLayout } from '@/components/admin-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const users = [
  { id: 1, name: 'John Buyer', email: 'john@example.com', type: 'Buyer', status: 'active', joined: '2024-01-15' },
  { id: 2, name: 'Jane Seller', email: 'jane@example.com', type: 'Seller', status: 'active', joined: '2024-02-20' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', type: 'Buyer', status: 'suspended', joined: '2024-03-10' },
]

export default function AdminUsers() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Users Management</h2>
          <Button className="bg-accent text-accent-foreground">Add User</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Type</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Joined</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/70">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="py-4 px-4 font-medium">{user.name}</td>
                      <td className="py-4 px-4 text-foreground/70">{user.email}</td>
                      <td className="py-4 px-4">
                        <Badge variant="outline">{user.type}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-foreground/70">{user.joined}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-500/10">🔒</Button>
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
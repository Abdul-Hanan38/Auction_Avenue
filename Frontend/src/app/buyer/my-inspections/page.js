'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

export default function MyInspectionsPage() {
  const router = useRouter()

  const inspections = [
    {
      id: 1,
      property: 'Luxury Waterfront Estate',
      location: 'Miami, FL',
      service: 'Premium Home Inspectors',
      date: '2024-02-15',
      time: '10:00 AM',
      status: 'scheduled',
      price: 475,
      inspector: 'John Anderson',
      phone: '+1 (555) 123-4567',
      reportAvailable: false
    },
    {
      id: 2,
      property: 'Modern Downtown Penthouse',
      location: 'New York, NY',
      service: 'Elite Property Inspection',
      date: '2024-02-10',
      time: '2:00 PM',
      status: 'completed',
      price: 405,
      inspector: 'Sarah Mitchell',
      phone: '+1 (555) 987-6543',
      reportAvailable: true
    },
    {
      id: 3,
      property: 'Historic Victorian Manor',
      location: 'Boston, MA',
      service: 'TrustGuard Inspections',
      date: '2024-02-20',
      time: '11:00 AM',
      status: 'pending',
      price: 445,
      inspector: 'TBD',
      phone: '-',
      reportAvailable: false
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case 'scheduled':
        return <Badge className="bg-accent text-accent-foreground">Scheduled</Badge>
      case 'completed':
        return <Badge className="bg-green-500 text-white">Completed</Badge>
      case 'pending':
        return <Badge variant="outline">Pending Confirmation</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <BuyerLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Inspections</h1>
            <p className="text-foreground/60">Track all your scheduled and completed property inspections</p>
          </div>
          <Button 
            onClick={() => router.push('/buyer/inspections')}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Book New Inspection
          </Button>
        </div>

        <div className="grid gap-4">
          {inspections.map((inspection) => (
            <Card key={inspection.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{inspection.property}</CardTitle>
                    <p className="text-foreground/60 text-sm mt-1">{inspection.location}</p>
                  </div>
                  {getStatusBadge(inspection.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-foreground/60 mb-1">Service Provider</div>
                    <div className="font-semibold">{inspection.service}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/60 mb-1">Inspection Date</div>
                    <div className="font-semibold">{inspection.date}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/60 mb-1">Time</div>
                    <div className="font-semibold">{inspection.time}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/60 mb-1">Total Cost</div>
                    <div className="font-semibold text-accent">${inspection.price}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted rounded-lg mb-4">
                  <div>
                    <div className="text-xs text-foreground/60 mb-1">Inspector</div>
                    <div className="font-semibold">{inspection.inspector}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/60 mb-1">Contact</div>
                    <div className="font-semibold">{inspection.phone}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm">View Details</Button>
                  {inspection.reportAvailable && (
                    <Button 
                      size="sm" 
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Download Report
                    </Button>
                  )}
                  {inspection.status === 'scheduled' && (
                    <Button variant="outline" size="sm" className="text-destructive">
                      Cancel Inspection
                    </Button>
                  )}
                  {inspection.status === 'pending' && (
                    <Button variant="outline" size="sm">
                      Contact Support
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {inspections.length === 0 && (
          <Card className="p-12 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-semibold text-xl mb-2">No inspections yet</h3>
            <p className="text-foreground/60 mb-6">Book your first property inspection to get started</p>
            <Button 
              onClick={() => router.push('/buyer/inspections')}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Browse Inspection Services
            </Button>
          </Card>
        )}
      </div>
    </BuyerLayout>
  )
}
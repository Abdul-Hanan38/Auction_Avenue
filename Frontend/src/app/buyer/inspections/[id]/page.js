'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ScheduleInspectionPage() {
  const router = useRouter()
  const [selectedProperty, setSelectedProperty] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const myProperties = [
    { id: 1, title: 'Luxury Waterfront Estate', location: 'Miami, FL' },
    { id: 2, title: 'Modern Downtown Penthouse', location: 'New York, NY' },
    { id: 3, title: 'Historic Victorian Manor', location: 'Boston, MA' },
  ]

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  const handleSchedule = () => {
    if (selectedProperty && selectedDate && selectedTime) {
      alert('Inspection scheduled successfully!')
      router.push('/buyer/my-inspections')
    }
  }

  return (
    <BuyerLayout>
      <div className="max-w-3xl space-y-6">
        <div>
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            ← Back to Services
          </Button>
          <h1 className="text-3xl font-bold mb-2">Schedule Inspection</h1>
          <p className="text-foreground/60">Book your professional home inspection</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Inspection Service Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
              <div>
                <div className="text-sm text-foreground/60">Service Provider</div>
                <div className="font-semibold">Premium Home Inspectors</div>
              </div>
              <div>
                <div className="text-sm text-foreground/60">Price</div>
                <div className="font-semibold text-accent">$450</div>
              </div>
              <div>
                <div className="text-sm text-foreground/60">Rating</div>
                <div className="font-semibold">★ 4.9 (342 reviews)</div>
              </div>
              <div>
                <div className="text-sm text-foreground/60">Response Time</div>
                <div className="font-semibold">2 hours</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Property Selection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="property">Select Property</Label>
              <select 
                id="property"
                className="w-full mt-2 p-2 border border-border rounded-lg bg-background"
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
              >
                <option value="">Choose a property...</option>
                {myProperties.map((prop) => (
                  <option key={prop.id} value={prop.id}>
                    {prop.title} - {prop.location}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Inspection Date</Label>
                <Input 
                  id="date"
                  type="date"
                  className="mt-2"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <Label htmlFor="time">Preferred Time</Label>
                <select 
                  id="time"
                  className="w-full mt-2 p-2 border border-border rounded-lg bg-background"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Select time...</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="address">Property Address</Label>
              <Input 
                id="address"
                placeholder="Enter full property address"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="notes">Special Instructions (Optional)</Label>
              <Textarea 
                id="notes"
                placeholder="Any specific areas of concern or special requests..."
                className="mt-2"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="contact">Contact Phone Number</Label>
              <Input 
                id="contact"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="mt-2"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-foreground/60">Inspection Fee</span>
                <span className="font-semibold">$450.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Service Fee</span>
                <span className="font-semibold">$25.00</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-accent text-xl">$475.00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={() => router.back()}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSchedule}
            className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
            disabled={!selectedProperty || !selectedDate || !selectedTime}
          >
            Confirm & Pay $475
          </Button>
        </div>
      </div>
    </BuyerLayout>
  )
}
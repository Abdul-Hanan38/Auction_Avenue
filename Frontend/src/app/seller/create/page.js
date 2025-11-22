'use client'

import { SellerLayout } from '@/components/seller-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function CreateListing() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    startingPrice: '',
    auctionEndTime: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Listing created:', formData)
  }

  return (
    <SellerLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Create New Listing</h2>

        <Card>
          <CardHeader>
            <CardTitle>Property Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Property Title</label>
                <Input 
                  name="title" 
                  placeholder="e.g., Luxury Waterfront Estate" 
                  value={formData.title} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <textarea 
                  name="description" 
                  placeholder="Describe the property, features, and amenities..." 
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-accent" 
                  rows={5} 
                  value={formData.description} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">📍 Location</label>
                <Input 
                  name="location" 
                  placeholder="City, State" 
                  value={formData.location} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Bedrooms</label>
                  <Input 
                    name="bedrooms" 
                    type="number" 
                    placeholder="4" 
                    value={formData.bedrooms} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Bathrooms</label>
                  <Input 
                    name="bathrooms" 
                    type="number" 
                    placeholder="3" 
                    value={formData.bathrooms} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Square Feet</label>
                  <Input 
                    name="sqft" 
                    type="number" 
                    placeholder="5,000" 
                    value={formData.sqft} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Starting Price</label>
                  <Input 
                    name="startingPrice" 
                    type="number" 
                    placeholder="$500,000" 
                    value={formData.startingPrice} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Auction End Time</label>
                  <Input 
                    name="auctionEndTime" 
                    type="datetime-local" 
                    value={formData.auctionEndTime} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Property Images</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-muted/50 transition cursor-pointer">
                  <p className="text-2xl mb-2">📸</p>
                  <p className="text-foreground/70">Drag and drop images or click to upload</p>
                  <p className="text-xs text-foreground/50 mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 flex-1">
                  Create Listing
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </SellerLayout>
  )
}
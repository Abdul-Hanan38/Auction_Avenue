'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SearchIcon, BellIcon } from '@/components/icons'

export default function SavedSearches() {
  const searches = [
    {
      id: 1,
      name: 'Beachfront Properties',
      criteria: 'Location: Coastal Areas | Price: $1M - $3M | Bedrooms: 3+',
      results: 12,
      notifications: true,
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'Downtown Condos',
      criteria: 'Location: Downtown | Price: $500K - $1M | Type: Condo',
      results: 8,
      notifications: true,
      lastUpdated: '1 day ago'
    },
    {
      id: 3,
      name: 'Historic Homes',
      criteria: 'Year Built: Before 1950 | Price: $2M+ | Bedrooms: 4+',
      results: 5,
      notifications: false,
      lastUpdated: '3 days ago'
    },
    {
      id: 4,
      name: 'Modern Luxury',
      criteria: 'Year Built: After 2020 | Features: Smart Home, Pool | Price: $2M+',
      results: 15,
      notifications: true,
      lastUpdated: '5 hours ago'
    }
  ]

  return (
    <BuyerLayout>
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Saved Searches</h1>
            <p className="text-muted-foreground">Get notified when new properties match your criteria</p>
          </div>
          <Button>
            <SearchIcon className="mr-2" />
            Create New Search
          </Button>
        </div>

        <div className="grid gap-4">
          {searches.map((search) => (
            <Card key={search.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{search.name}</h3>
                    {search.notifications && (
                      <Badge className="bg-accent">
                        <BellIcon size={12} className="mr-1" />
                        Active
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{search.criteria}</p>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">New Results: </span>
                      <span className="font-semibold text-accent">{search.results}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Last Updated: </span>
                      <span className="font-semibold">{search.lastUpdated}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View Results</Button>
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Delete</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </BuyerLayout>
  )
}
'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileIcon } from '@/components/icons'

export default function BuyerDocuments() {
  const documents = [
    {
      id: 1,
      name: 'Purchase Agreement - Beachfront Villa.pdf',
      property: 'Luxury Beachfront Villa',
      type: 'Contract',
      size: '2.4 MB',
      uploadedAt: 'Jan 15, 2024',
      status: 'Signed'
    },
    {
      id: 2,
      name: 'Inspection Report - Downtown Condo.pdf',
      property: 'Modern Downtown Condo',
      type: 'Inspection',
      size: '4.8 MB',
      uploadedAt: 'Jan 12, 2024',
      status: 'Complete'
    },
    {
      id: 3,
      name: 'Financing Pre-Approval Letter.pdf',
      property: 'All Properties',
      type: 'Financial',
      size: '156 KB',
      uploadedAt: 'Jan 5, 2024',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Title Report - Victorian Mansion.pdf',
      property: 'Victorian Mansion',
      type: 'Title',
      size: '1.2 MB',
      uploadedAt: 'Jan 8, 2024',
      status: 'Pending'
    },
    {
      id: 5,
      name: 'Proof of Funds.pdf',
      property: 'All Properties',
      type: 'Financial',
      size: '234 KB',
      uploadedAt: 'Jan 3, 2024',
      status: 'Verified'
    }
  ]

  const statusColors = {
    'Signed': 'bg-green-500',
    'Complete': 'bg-green-500',
    'Active': 'bg-blue-500',
    'Pending': 'bg-yellow-500',
    'Verified': 'bg-green-500'
  }

  return (
    <BuyerLayout>
      <div className="max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Documents</h1>
            <p className="text-muted-foreground">Manage all your property-related documents</p>
          </div>
          <Button>
            <FileIcon className="mr-2" />
            Upload Document
          </Button>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="p-4 font-semibold">Document</th>
                  <th className="p-4 font-semibold">Property</th>
                  <th className="p-4 font-semibold">Type</th>
                  <th className="p-4 font-semibold">Size</th>
                  <th className="p-4 font-semibold">Uploaded</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b border-border hover:bg-accent/5">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <FileIcon size={20} className="text-accent" />
                        </div>
                        <span className="font-medium">{doc.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{doc.property}</td>
                    <td className="p-4">
                      <Badge variant="outline">{doc.type}</Badge>
                    </td>
                    <td className="p-4 text-muted-foreground">{doc.size}</td>
                    <td className="p-4 text-muted-foreground">{doc.uploadedAt}</td>
                    <td className="p-4">
                      <Badge className={statusColors[doc.status]}>{doc.status}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button variant="ghost" size="sm">Download</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </BuyerLayout>
  )
}
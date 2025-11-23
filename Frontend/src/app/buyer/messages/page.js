'use client'

import { BuyerLayout } from '@/components/buyer-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { MessageIcon, SearchIcon } from '@/components/icons'

export default function BuyerMessages() {
  const [selectedChat, setSelectedChat] = useState(1)

  const conversations = [
    {
      id: 1,
      name: 'John Smith',
      avatar: 'JS',
      lastMessage: 'The property is available for viewing this weekend',
      time: '10 min ago',
      unread: 2,
      property: 'Luxury Beachfront Villa'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      lastMessage: 'Let me check the inspection reports',
      time: '1 hour ago',
      unread: 0,
      property: 'Modern Downtown Condo'
    },
    {
      id: 3,
      name: 'Michael Brown',
      avatar: 'MB',
      lastMessage: 'The auction closes in 24 hours',
      time: '3 hours ago',
      unread: 1,
      property: 'Urban Townhouse'
    }
  ]

  const messages = [
    { id: 1, sender: 'other', text: 'Hello! Are you interested in viewing the property?', time: '2:30 PM' },
    { id: 2, sender: 'me', text: 'Yes, I would love to schedule a viewing', time: '2:32 PM' },
    { id: 3, sender: 'other', text: 'Great! When would be convenient for you?', time: '2:35 PM' },
    { id: 4, sender: 'me', text: 'How about this Saturday at 2 PM?', time: '2:40 PM' },
    { id: 5, sender: 'other', text: 'The property is available for viewing this weekend', time: '2:45 PM' }
  ]

  return (
    <BuyerLayout>
      <Card className="flex h-[calc(100vh-12rem)] overflow-hidden">
        <div className="w-80 border-r border-border flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="text-xl font-bold mb-3">Messages</h2>
            <div className="relative">
              <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-9" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`p-4 border-b border-border cursor-pointer hover:bg-accent/10 transition ${selectedChat === conv.id ? 'bg-accent/20' : ''}`}
              >
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {conv.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold truncate">{conv.name}</h3>
                      <span className="text-xs text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="text-sm text-accent/80 mb-1">{conv.property}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <span className="ml-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                JS
              </div>
              <div>
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-sm text-muted-foreground">Luxury Beachfront Villa</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md ${msg.sender === 'me' ? 'bg-accent text-accent-foreground' : 'bg-muted'} rounded-2xl px-4 py-2`}>
                  <p>{msg.text}</p>
                  <span className={`text-xs mt-1 block ${msg.sender === 'me' ? 'text-accent-foreground/70' : 'text-muted-foreground'}`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button>
                <MessageIcon className="mr-2" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </BuyerLayout>
  )
}
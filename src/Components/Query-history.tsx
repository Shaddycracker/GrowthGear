"use client"

import { useState } from "react"
// import { useToast } from "../hooks/use-toast.ts"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Clock, Save, Trash } from "lucide-react"
import { formatDistanceToNow } from "..//lib/utils"

// In a real app, this would come from Redux
const mockHistoryItems = [
    {
        id: "1",
        query: "Show me monthly sales for the past year",
        timestamp: "2023-03-28T10:30:00Z",
        saved: true,
    },
    {
        id: "2",
        query: "What are our top 5 products by revenue?",
        timestamp: "2023-03-27T15:45:00Z",
        saved: false,
    },
    {
        id: "3",
        query: "Compare customer acquisition by region",
        timestamp: "2023-03-26T09:15:00Z",
        saved: true,
    },
    {
        id: "4",
        query: "What's our customer retention rate?",
        timestamp: "2023-03-25T14:20:00Z",
        saved: false,
    },
    {
        id: "5",
        query: "Show me website traffic by source",
        timestamp: "2023-03-24T11:10:00Z",
        saved: false,
    },
]

export function QueryHistory() {
    // const { toast } = useToast()
    const [historyItems, setHistoryItems] = useState(mockHistoryItems)

    const handleSaveQuery = (id: string) => {
        setHistoryItems(historyItems.map((item) => (item.id === id ? { ...item, saved: true } : item)))

        // toast({
        //     title: "Query saved",
        //     description: "You can access this query from your saved queries.",
        // })
    }

    const handleDeleteQuery = (id: string) => {
        setHistoryItems(historyItems.filter((item) => item.id !== id))

        // toast({
        //     title: "Query deleted",
        //     description: "The query has been removed from your history.",
        // })
    }

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Query History</h1>
                <p className="text-muted-foreground">View and manage your recent queries.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Queries</CardTitle>
                    <CardDescription>Your {historyItems.length} most recent queries</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Query</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead className="w-[100px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {historyItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.query}</TableCell>
                                    <TableCell className="flex items-center gap-1 text-muted-foreground">
                                        <Clock className="h-3 w-3" />
                                        <span>{formatDistanceToNow(new Date(item.timestamp))}</span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-1">
                                            {!item.saved && (
                                                <Button variant="ghost" size="icon" onClick={() => handleSaveQuery(item.id)}>
                                                    <Save className="h-4 w-4" />
                                                    <span className="sr-only">Save query</span>
                                                </Button>
                                            )}
                                            <Button variant="ghost" size="icon" onClick={() => handleDeleteQuery(item.id)}>
                                                <Trash className="h-4 w-4" />
                                                <span className="sr-only">Delete query</span>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {historyItems.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                                        No query history found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}


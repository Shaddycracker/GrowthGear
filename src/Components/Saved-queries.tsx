import { useState } from "react"
// import { useToast } from "../hooks/use-toast.ts"
import { Button } from "./ui/button.tsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Clock, Play, Trash } from "lucide-react"
import { formatDistanceToNow } from "../lib/utils.ts"

// In a real app, this would come from Redux
const mockSavedQueries = [
    {
        id: "1",
        query: "Show me monthly sales for the past year",
        timestamp: "2023-03-28T10:30:00Z",
    },
    {
        id: "3",
        query: "Compare customer acquisition by region",
        timestamp: "2023-03-26T09:15:00Z",
    },
]

export function SavedQueries() {
    // const { toast } = useToast()
    const [savedQueries, setSavedQueries] = useState(mockSavedQueries)

    const handleRunQuery = (query: string) => {
        // In a real app with Redux:
        // dispatch(setCurrentQuery(query));
        console.log("Running query:", query);
        // router.push('/');

        // toast({
        //     title: "Query loaded",
        //     description: "The query has been loaded to the dashboard.",
        // })
    }

    const handleDeleteQuery = (id: string) => {
        setSavedQueries(savedQueries.filter((item) => item.id !== id))

        // toast({
        //     title: "Query deleted",
        //     description: "The query has been removed from your saved queries.",
        // })
    }

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Saved Queries</h1>
                <p className="text-muted-foreground">Access and manage your saved queries.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Saved Queries</CardTitle>
                    <CardDescription>Your {savedQueries.length} saved queries</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Query</TableHead>
                                <TableHead>Saved</TableHead>
                                <TableHead className="w-[100px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {savedQueries.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.query}</TableCell>
                                    <TableCell className="flex items-center gap-1 text-muted-foreground">
                                        <Clock className="h-3 w-3" />
                                        <span>{formatDistanceToNow(new Date(item.timestamp))}</span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-1">
                                            <Button variant="ghost" size="icon" onClick={() => handleRunQuery(item.query)}>
                                                <Play className="h-4 w-4" />
                                                <span className="sr-only">Run query</span>
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={() => handleDeleteQuery(item.id)}>
                                                <Trash className="h-4 w-4" />
                                                <span className="sr-only">Delete query</span>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {savedQueries.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                                        No saved queries found.
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


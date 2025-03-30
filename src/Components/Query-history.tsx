// import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Clock, Save, Trash } from "lucide-react"
import { formatDistanceToNow } from "..//lib/utils"

import { useAppDispatch } from '../hooks/useAppDispatch.ts';
import { useAppSelector } from '../hooks/useAppSelector';
import { saveQuery, deleteQuery } from '../store/Slices/historySlice.ts'

export function QueryHistory() {

    const dispatch = useAppDispatch();
    const historyItems = useAppSelector(state => state.history.items);
    const handleSaveQuery = (id: string) => {
        dispatch(saveQuery(id));
    }

    const handleDeleteQuery = (id: string) => {
        dispatch(deleteQuery(id));
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


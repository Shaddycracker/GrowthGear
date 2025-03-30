"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/Input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import QueryResults  from "./Query-results.tsx"
import { QuerySuggestions } from "./Query-suggestions.tsx"
import { Loader2, Save, Send } from "lucide-react"
import { mockQueries } from "../lib/Mock-data.ts"
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {addQueryToHistory, saveQuery} from "../store/Slices/historySlice.ts";
import {toast} from "react-toastify";

export function QueryDashboard() {
    const [query, setQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState<any | null>(null)
    const [activeTab, setActiveTab] = useState("results")
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!query.trim()) {
           toast("Please enter a query",{type:"error"});
            return
        }

        setIsLoading(true)
        setActiveTab("results")

        // Simulate API call
        setTimeout(() => {
            // Find a mock query that matches or use default
            const matchedQuery = mockQueries.find((q) => q.query.toLowerCase() === query.toLowerCase())

            if (matchedQuery) {
                setResults(matchedQuery.results)
            } else {
                // Default results if no match
                setResults(mockQueries[0].results)
            }



            // Add to history (in a real app, this would be handled by Redux)
            const newQuery = {
                id: Date.now().toString(),
                query,
                timestamp: new Date().toISOString(),
                saved: false,
            }
            dispatch(addQueryToHistory(newQuery));
            setIsLoading(false)
            setQuery("")
            toast("Query submitted",{type:"success"});
        }, 1500)
    }

    const handleSaveQuery = (id:string) => {
        if (!query.trim()) return
        dispatch(saveQuery(id))
        toast("Query saved",{type:"success"});


    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight">Data Query Dashboard</h1>
            <p className="text-muted-foreground">
                Ask questions about your data in natural language and get instant insights.
            </p>

            <Card>
                <CardHeader className="pb-3">
                    <CardTitle>New Query</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="relative">
                                <Input
                                    placeholder="Ask a question about your data..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="pr-24"
                                />
                                <div className="absolute right-1 top-1 flex gap-1">
                                    <Button
                                        type="button"
                                        size="sm"
                                        variant="ghost"
                                        onClick={()=>{handleSaveQuery(Date.now().toString())}}
                                        disabled={isLoading || !query.trim()}
                                    >
                                        <Save className="h-4 w-4" />
                                        <span className="sr-only">Save query</span>
                                    </Button>
                                    <Button type="submit" size="sm" disabled={isLoading || !query.trim()}>
                                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                                        <span className="sr-only">Submit query</span>
                                    </Button>
                                </div>
                            </div>
                            <QuerySuggestions onSelectSuggestion={setQuery} />
                        </div>
                    </form>
                </CardContent>
            </Card>

            {(isLoading || results) && (
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList>
                        <TabsTrigger value="results">Results</TabsTrigger>
                        <TabsTrigger value="sql">SQL Query</TabsTrigger>
                        <TabsTrigger value="data">Raw Data</TabsTrigger>
                    </TabsList>
                    <TabsContent value="results" className="mt-4">
                        {isLoading ? (
                            <Card className="flex h-64 items-center justify-center">
                                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                            </Card>
                        ) : (
                            <QueryResults results={results} />
                        )}
                    </TabsContent>
                    <TabsContent value="sql" className="mt-4">
                        <Card className="p-4">
              <pre className="overflow-auto rounded bg-muted p-4 text-sm">
                {isLoading ? "Generating SQL query..." : results?.sql || "No SQL query available"}
              </pre>
                        </Card>
                    </TabsContent>
                    <TabsContent value="data" className="mt-4">
                        <Card className="p-4">
              <pre className="overflow-auto rounded bg-muted p-4 text-sm">
                {isLoading ? "Loading data..." : JSON.stringify(results?.data || {}, null, 2)}
              </pre>
                        </Card>
                    </TabsContent>
                </Tabs>
            )}
        </div>
    )
}


"use client"

import { Button } from "./ui/button.tsx"

interface QuerySuggestionsProps {
    onSelectSuggestion: (suggestion: string) => void
}

export function QuerySuggestions({ onSelectSuggestion }: QuerySuggestionsProps) {
    const suggestions = [
        "Show me monthly sales for the past year",
        "What are our top 5 products by revenue?",
        "Compare customer acquisition by region",
        "What's our customer retention rate?",
        "Show me website traffic by source",
    ]

    return (
        <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
                <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => onSelectSuggestion(suggestion)}
                    className="text-xs"
                >
                    {suggestion}
                </Button>
            ))}
        </div>
    )
}


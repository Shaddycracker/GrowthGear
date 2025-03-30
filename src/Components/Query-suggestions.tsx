"use client"

import { Button } from "./ui/button.tsx"

interface QuerySuggestionsProps {
    onSelectSuggestion: (suggestion: string) => void
}
import {useAppSelector} from "../hooks/useAppSelector.ts";

export function QuerySuggestions({ onSelectSuggestion }: QuerySuggestionsProps) {
    const suggestions = useAppSelector(state => state.history.items);

    return (
        <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
                <Button
                    key={suggestion.id}
                    variant="outline"
                    size="sm"
                    onClick={() => onSelectSuggestion(suggestion.query)}
                    className="text-xs"
                >
                    {suggestion.query}
                </Button>
            ))}
        </div>
    )
}


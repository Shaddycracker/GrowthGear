import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HistoryItem {
    id: string;
    query: string;
    timestamp: string;
    saved: boolean;
}

interface HistoryState {
    items: HistoryItem[];
}

const initialState: HistoryState = {
    items: [
        {
            id: "1",
            query: "Show me monthly sales for the past year",
            timestamp: "2025-03-28T10:30:00Z",
            saved: true,
        },
        {
            id: "2",
            query: "What are our top 5 products by revenue?",
            timestamp: "2025-03-27T15:45:00Z",
            saved: false,
        },
        {
            id: "3",
            query: "Compare customer acquisition by region",
            timestamp: "2025-03-26T09:15:00Z",
            saved: true,
        }
    ],
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addQueryToHistory: (state, action: PayloadAction<HistoryItem>) => {
            state.items.unshift(action.payload);
        },
        saveQuery: (state, action: PayloadAction<string>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.saved = true;
            }
        },
        unSaveQuery: (state, action: PayloadAction<string>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.saved = false;
            }
        },
        deleteQuery: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearHistory: (state) => {
            state.items = [];
        },
    },
});

export const { addQueryToHistory, saveQuery, deleteQuery,unSaveQuery,clearHistory } = historySlice.actions;
export default historySlice.reducer;
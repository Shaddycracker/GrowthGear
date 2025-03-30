import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { mockQueries } from '../../lib/Mock-data.ts';

export interface QueryState {
    currentQuery: string;
    isLoading: boolean;
    results: any | null;
    error: string | null;
}

const initialState: QueryState = {
    currentQuery: '',
    isLoading: false,
    results: null,
    error: null,
};
export const processQuery = createAsyncThunk(
    'query/process',
    async (query: string, { rejectWithValue }) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Find a mock query that matches or use default
            const matchedQuery = mockQueries.find(
                (q) => q.query.toLowerCase() === query.toLowerCase()
            );

            if (matchedQuery) {
                return matchedQuery.results;
            } else {
                return mockQueries[0].results;
            }
        } catch (error) {
            return rejectWithValue('Failed to process query');
        }
    }
);

const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        setCurrentQuery: (state, action: PayloadAction<string>) => {
            state.currentQuery = action.payload;
        },
        clearResults: (state) => {
            state.results = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(processQuery.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(processQuery.fulfilled, (state, action) => {
                state.isLoading = false;
                state.results = action.payload;
            })
            .addCase(processQuery.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setCurrentQuery, clearResults } = querySlice.actions;
export default querySlice.reducer;
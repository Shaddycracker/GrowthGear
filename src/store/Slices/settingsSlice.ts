import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
    apiKey: string;
    model: string;
    historyLimit: string;
    darkMode: boolean;
    notifications: boolean;
}
//  ignore this for now
const initialState: SettingsState = {
    apiKey: "sk-••••••••••••••••••••••••",
    model: "gpt-4o",
    historyLimit: "50",
    darkMode: true,
    notifications: true,
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateSettings: (state, action: PayloadAction<Partial<SettingsState>>) => {
            return { ...state, ...action.payload };
        },
        resetSettings: () => initialState,
    },
});

export const { updateSettings, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
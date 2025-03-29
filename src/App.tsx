import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Components/theme-provider.tsx';
import { SidebarProvider } from './Components/ui/sidebar.tsx';
import { DashboardShell } from './Components/Dashboard-shell.tsx';
import { QueryDashboard } from './Components/Query-dashboard.tsx';
import { QueryHistory } from './Components/Query-history';
import { SavedQueries } from './Components/Saved-queries';
import { Settings } from './Components/Settings';

function App() {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <Routes>
                    <Route path="/" element={
                        <DashboardShell>
                            <QueryDashboard />
                        </DashboardShell>
                    } />
                    <Route path="/history" element={
                        <DashboardShell>
                            <QueryHistory />
                        </DashboardShell>
                    } />
                    <Route path="/saved" element={
                        <DashboardShell>
                            <SavedQueries />
                        </DashboardShell>
                    } />
                    <Route path="/settings" element={
                        <DashboardShell>
                            <Settings />
                        </DashboardShell>
                    } />
                </Routes>
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
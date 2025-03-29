import {ThemeProvider} from "../Components/theme-provider"
import {SidebarProvider} from "../Components/ui/sidebar"
import {Outlet} from 'react-router-dom'

function RootLayout() {
    return (
        <html lang="en">
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <SidebarProvider>
                <Outlet/>
            </SidebarProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}

export default RootLayout


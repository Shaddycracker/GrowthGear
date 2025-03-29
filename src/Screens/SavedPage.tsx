import { DashboardShell } from "../Components/dashboard-shell"
import { SavedQueries } from "../Components/saved-queries"

export default function SavedPage() {
    return (
        <DashboardShell>
            <SavedQueries />
        </DashboardShell>
    )
}


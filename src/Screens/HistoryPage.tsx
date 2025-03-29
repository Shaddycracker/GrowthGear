import { DashboardShell } from "../Components/dashboard-shell"
import { QueryHistory } from "../Components/query-history"

export default function HistoryPage() {
    return (
        <DashboardShell>
            <QueryHistory />
        </DashboardShell>
    )
}


import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx"
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "./ui/Chart.tsx"

interface QueryResultsProps {
    results: {
        type: string
        title: string
        description: string
        data: any
        sql?: string
    }
}

function QueryResults({ results }: QueryResultsProps) {
    if (!results) return null

    const renderChart = () => {
        switch (results.type) {
            case "bar":
                return (
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={results.data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#3b82f6" />
                        </BarChart>
                    </ResponsiveContainer>
                )
            case "line":
                return (
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={results.data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#3b82f6" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                )
            case "pie":
                const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]
                return (
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={results.data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >
                                {results.data.map((index: number) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                )
            default:
                return (
                    <div className="flex h-64 items-center justify-center text-muted-foreground">
                        No visualization available for this query type.
                    </div>
                )
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{results.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{results.description}</p>
            </CardHeader>
            <CardContent>{renderChart()}</CardContent>
        </Card>
    )
}

export default QueryResults

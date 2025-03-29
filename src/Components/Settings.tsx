import { useState } from "react"
// import { useToast } from "../hooks/use-toast.ts"
import { Button } from "./ui/button.tsx"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/Input.tsx"
import { Label } from "./ui/label.tsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.tsx"
import { Switch } from "./ui/switch.tsx"

export function Settings() {
    // const { toast } = useToast()
    const [settings, setSettings] = useState({
        apiKey: "sk-••••••••••••••••••••••••",
        model: "gpt-4o",
        historyLimit: "50",
        darkMode: true,
        notifications: true,
    })

    const handleSaveSettings = () => {
        // In a real app with Redux:
        // dispatch(updateSettings(settings));

        // toast({
        //     title: "Settings saved",
        //     description: "Your settings have been updated successfully.",
        // })
    }

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your application preferences.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>API Configuration</CardTitle>
                    <CardDescription>Configure your AI model and API settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="api-key">API Key</Label>
                        <Input
                            id="api-key"
                            type="password"
                            value={settings.apiKey}
                            onChange={(e) => setSettings({ ...settings, apiKey: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="model">AI Model</Label>
                        <Select value={settings.model} onValueChange={(value) => setSettings({ ...settings, model: value })}>
                            <SelectTrigger id="model">
                                <SelectValue placeholder="Select model" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                                <SelectItem value="gpt-4">GPT-4</SelectItem>
                                <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Application Settings</CardTitle>
                    <CardDescription>Configure general application settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="history-limit">Query History Limit</Label>
                        <Select
                            value={settings.historyLimit}
                            onValueChange={(value) => setSettings({ ...settings, historyLimit: value })}
                        >
                            <SelectTrigger id="history-limit">
                                <SelectValue placeholder="Select limit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10">10 queries</SelectItem>
                                <SelectItem value="25">25 queries</SelectItem>
                                <SelectItem value="50">50 queries</SelectItem>
                                <SelectItem value="100">100 queries</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                        <Switch
                            id="dark-mode"
                            checked={settings.darkMode}
                            onCheckedChange={(checked) => setSettings({ ...settings, darkMode: checked })}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="notifications">Notifications</Label>
                        <Switch
                            id="notifications"
                            checked={settings.notifications}
                            onCheckedChange={(checked) => setSettings({ ...settings, notifications: checked })}
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSaveSettings}>Save Settings</Button>
                </CardFooter>
            </Card>
        </div>
    )
}


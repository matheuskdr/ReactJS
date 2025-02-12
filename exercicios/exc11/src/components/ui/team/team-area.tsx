import { members } from "@/data/members";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";
import { TeamItem } from "./team-item";

export const TeamArea = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>Invite your team members to collaborate.</CardDescription>
                </CardHeader>
                <CardContent>
                    {members.map(item => (
                        <TeamItem key={item.id} data={item} />
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
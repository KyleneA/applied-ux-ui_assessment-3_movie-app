import { Grid, Stack, Typography, Divider } from "@mui/material";
import mockUserActivityData from "./data/mockUserActivityData.json"
import AdminListItem from "./components/AdminListItem";

export default function UserActivity() {
    return(
        <>
            <Stack
                divider={<Divider flexItem />}
                spacing={2}
            >
                {mockUserActivityData.map((activity) => (
                    <AdminListItem 
                        id={activity.id}
                        type={activity.type}
                        timestamp={activity.timestamp}
                        user={activity.user}
                        desc={activity.desc}
                    />
                ))}
            </Stack>
        </>
    );
}
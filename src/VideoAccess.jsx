import { Grid, Stack, Typography, Divider } from "@mui/material";
import mockVideoAccessData from "./data/mockVideoAccessData.json"
import AdminListItem from "./components/AdminListItem";

export default function VideoAccess() {
    return(
        <>
            <Stack
                divider={<Divider flexItem />}
                spacing={2}
            >
                {mockVideoAccessData.map((activity) => (
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
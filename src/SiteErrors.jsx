import { Grid, Stack, Typography, Divider } from "@mui/material";
import mockSiteErrorsData from "./data/mockSiteErrorsData.json"
import AdminListItem from "./components/AdminListItem";

export default function SiteErrors() {
    return(
        <>
            <Stack
                divider={<Divider flexItem />}
                spacing={2}
            >
                {mockSiteErrorsData.map((activity) => (
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
import { Grid, Stack, Typography, Divider } from "@mui/material";
import getIcon from "./GetIcon";

export default function AdminListItem(props) {
    return (
        <Grid 
            container 
            key={props.id}
            spacing={1}
            sx={{
                
                textAlign: 'right',
                mx: '3',
                my: '8',
                width: '100%',

            }}
        >
            <Grid 
                size={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {getIcon(props.type)}
                <Typography
                    variant="caption"
                    sx={{
                        textTransform: 'capitalize',
                        textAlign: 'center'
                    }}
                >
                    {props.type.replace("_", " ")}
                </Typography>
            </Grid>
            <Grid size={10}>
                <Grid 
                    container
                    spacing={1}
                >
                    <Grid size={6} sx={{textAlign: 'left'}}>
                        <Typography
                            variant="overline"
                        >
                            id: {props.id}
                        </Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography
                            variant="overline"
                        >
                            {props.timestamp}
                        </Typography>
                    </Grid>
                    <Grid
                        size={12}
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Stack>
                            <Typography
                                variant="body1"
                            >
                                {props.user}:
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography
                                variant="body1"
                                sx={{
                                    textWrap: 'pretty'
                                }}
                            >
                                {props.desc}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
} 
import { createTheme } from '@mui/material/styles';

const white = '#ffffff';
const black = '#010101'
const darkNavy = '#0f1232';
const darkNavy20 = '#0f123233';
const denim = '#3b66ac';
const lightDenim = '#f7f9fd';
const eminence = '#612677';
const darkEminence = '#431a53';
const lightEminence = '#805192';
const skyMagenta = '#c073af';

const error = '#d32f45';
const warning = '#e8bc4a';
const success = '#2e7d64';

const theme = createTheme({   
    palette: {
        primary: {
            main: denim, // Blue 
            contrastText: white, // White
        },
        secondary: {
            main: eminence, // Dark Purple
            light: lightEminence,
            contrastText: white
        },
        background: {
            default: lightDenim, 
            paper: white
        },
        mode: 'light',
        text: {
            primary: black,
            secondary: darkNavy
        },
        error: {
            main: error
        },
        warning: {
            main: warning,
            contrastText: darkNavy
        },
        info: {
            main: skyMagenta,
            contrastText: black
        }, 
        success: {
            main: success
        },
        divider: darkNavy20
    },
    typography: {
        h1: {
            fontFamily: 'Blinker',
        },
        fontFamily: 'Golos Text',
        main: {
            fontSize: 12,
        },
        sectionHeader: {
            fontFamily: 'Blinker',
            fontSize: 18,
            fontWeight: "bold",
            color: darkNavy 
        },
        contentHeaderText: {
            fontFamily: 'Blinker',
            color: darkNavy            
        },
        contentText: {
            color: black 
        },
    },
    components: {
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    backgroundColor: eminence,
                    color: white,
                    
                    '&:hover': {
                        backgroundColor: lightEminence,
                        color: white
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: 'primary.main', // Primary text color
                    fontWeight: 500,  // Optional styling
                },
                secondary: {
                    color: "#9c27b0", // Secondary text color
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    backgroundColor: '#ffffff', // Blue background
                    color: '#00000',              // White text
                    fontWeight: 'bold',
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: 'theme.palette.secondary.main',
                    textTransform: "none",
                    fontWeight: 500,    
                    fontSize: "1rem",
                    "&.Mui-selected": {
                        color: "#708090", // Selected text color
                    },
                },
            },
        },
        MuiTableContainer: {
            styleOverrides: {
                primary: {
                    color: '#708090', // Primary text color
                    fontWeight: 900,  // Optional styling
                },
                root: {
                    color: '#708090',
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #ccc",
                    borderRadius: 8,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained', // Default variant for all buttons
                disableElevation: true, // Remove shadow
            },
            styleOverrides: {
                root: {
                    backgroundColor: 'theme.palette.primary.main',
                    borderRadius: 8, // Rounded corners
                    textTransform: 'none', // Keep normal case text
                    fontWeight:"bold",
                    padding: '8px 20px',
                },
            },

        }
    }
});

export default theme;


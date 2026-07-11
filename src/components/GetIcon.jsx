// User Activity Icons
import RateReviewIcon from '@mui/icons-material/RateReview';
import HotelClassIcon from '@mui/icons-material/HotelClass';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// Video Accesss Icons
import MovieIcon from '@mui/icons-material/Movie';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MovieEditIcon from '@mui/icons-material/MovieEdit';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
// Site Errors Icons
import ErrorIcon from '@mui/icons-material/Error';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import GppBadIcon from '@mui/icons-material/GppBad';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import SignalCellularConnectedNoInternet0BarIcon from '@mui/icons-material/SignalCellularConnectedNoInternet0Bar';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import ReportIcon from '@mui/icons-material/Report';
import SecurityUpdateWarningIcon from '@mui/icons-material/SecurityUpdateWarning';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function getIcon(type){
    // User Activity
    if (type === "rating") return <HotelClassIcon fontSize="large" color="primary"/>
    else if (type === "review") return <RateReviewIcon fontSize="large" color="primary" />
    else if (type === "watchlist_add") return <BookmarkAddIcon fontSize="large" color="primary" />
    else if (type === "comment") return <InsertCommentIcon fontSize="large" color="primary" />
    else if (type === "like") return <ThumbUpIcon fontSize="large" color="primary" />
    else if (type === "watchlist_remove") return <BookmarkRemoveIcon fontSize="large" color="primary" />
    else if (type === "follow") return <PersonAddIcon fontSize="large" color="primary" />

    // Video Access
    else if (type === "trailer_view") return <MovieIcon fontSize="large" color="primary" />
    else if (type === "clip_view") return <LocalMoviesIcon fontSize="large" color="primary" />
    else if (type === "interview_view") return <MovieEditIcon fontSize="large" color="primary" />
    else if (type === "bts_view") return <MovieFilterIcon fontSize="large" color="primary" />

    // Site Errors
    else if (type === "error_404") return <ErrorIcon fontSize="large" color="primary" />
    else if (type === "timeout") return <SyncProblemIcon fontSize="large" color="primary" />
    else if (type === "auth_failure") return <GppBadIcon fontSize="large" color="primary" />
    else if (type === "error_500") return <FmdBadIcon fontSize="large" color="primary" />
    else if (type === "validation_error") return <AssignmentLateIcon fontSize="large" color="primary" />
    else if (type === "network_dropped") return <SignalCellularConnectedNoInternet0BarIcon fontSize="large" color="primary" />
    else if (type === "rate_limit") return <RunningWithErrorsIcon fontSize="large" color="primary" />
    else if (type === "cors_error") return <ReportIcon fontSize="large" color="primary" />
    else if (type === "error_403") return <SecurityUpdateWarningIcon fontSize="large" color="primary" />
    else if (type === "write_conflict") return <WarningAmberIcon fontSize="large" color="primary" />
}
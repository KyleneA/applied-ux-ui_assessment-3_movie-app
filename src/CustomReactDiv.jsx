import Paper from '@mui/material/Paper';

function CustomReactDiv () {
    return (
        <>
        <div className="custom-react-div">
          <h1>Do you like my custom react div ???</h1>
          <p>
            My react div is very nice and it is a custom component that I created to show you how to create custom components in React. It is a simple div that contains a heading and a paragraph. I hope you like it !!!
          </p>
          <Paper elevation={3}>
            <p>
                My elevated paper component causing a hydration error ! My browser tried to fix this issue and now it has caused a mismatch
            </p>
          </Paper>
        </div>       
        
        </>

        )
    }

export default CustomReactDiv

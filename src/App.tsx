import Paper from '@mui/material/Paper'
import './App.css'
import Divider from '@mui/material/Divider';
import Grid2 from '@mui/material/Grid2';

function App() {
    const innerPaperStyle = {
        height: "100%",
        width: "100%",
        backgroundColor: "red"
    }

    return (
        <div className="card-container">
            <Paper elevation={3} sx={{ height: "80vh" }} >
                <h1>Card 1</h1>
                <Divider orientation="horizontal" />
                <Grid2 container sx={{ height: "84%", margin:"2%" }} spacing={2}>
                    <Grid2 size={3}>
                        <Paper elevation={5} sx={innerPaperStyle}>

                        </Paper>
                    </Grid2>

                    <Grid2 size={6}>
                        <Paper elevation={5} sx={innerPaperStyle}>

                        </Paper>
                    </Grid2>

                    <Grid2 size={3}>
                        <Paper elevation={5} sx={innerPaperStyle}>

                        </Paper>
                    </Grid2>

                </Grid2>
            </Paper>
        </div >
    )
}

export default App

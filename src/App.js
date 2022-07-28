import { Card, CardContent, Grid } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import { BarCharts } from './components/chart/BarCharts';
import { Dougnut } from './components/chart/Dougnut';
import { LineChart } from './components/chart/LineChart';
import { PieChart } from './components/chart/PieChart';

function App() {
  return (
    <>
    <h1 style={{textAlign:"center",marginBottom:"5rem",textDecorationLine:"underline"}}>Charts Types</h1>
      <Container maxWidth="xl" >
        <Grid container spacing={3} style={{marginBottom:"2rem"}}>
          {/* bar chart box  */}
          <Grid item md={6} sm={12}>
            <div className='bar-chart'>
              <Card>
                <CardContent>
                  <BarCharts />
                </CardContent>
              </Card>
            </div>
          </Grid >
          {/* line chart box  */}
          <Grid item md={6} sm={12}>
            <div className='line-chart'>
              <Card>
                <CardContent>
                  <LineChart />
                </CardContent>
              </Card>
            </div>
          </Grid>
          {/* pi chart box  */}
          <Grid item md={6} sm={12}>
            <div className='pie-chart'>
              <Card>
                <CardContent>
                  <PieChart />
                </CardContent>
              </Card>
            </div>
          </Grid>
          {/* dognt chart box  */}
          <Grid item md={6} sm={12}>
            <div className='pie-chart'>
              <Card>
                <CardContent>
                  <Dougnut />
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;

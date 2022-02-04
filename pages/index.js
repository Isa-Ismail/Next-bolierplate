import { Card, CardContent, Grid, Typography, Button } from "@mui/material"
import Layout from "../components/Layout"

const NewsFeed = () => {
  return (
    <Layout>
        <div className = 'min-h-10rem'>
          
        </div>
        <div className = 'text-center space-x-16 py-60'>
          <Button className='bg-slate-900' variant="contained"><h3 style = {{color: 'white'}}>Signup</h3></Button>
          <Button className='bg-slate-900' variant="contained"><h3 style = {{color: 'white'}}>Check Out Plans</h3></Button>
        </div>
    </Layout>
  )
}

export default NewsFeed
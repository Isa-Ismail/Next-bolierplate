import { Card, CardContent, Grid, Typography, Button } from "@mui/material"
import Layout from "../components/Layout"

const NewsFeed = () => {
  return (
    <Layout>
        <div className = 'text-center space-x-16 py-60'>
          <Button className='bg-slate-900' variant="contained">Signup</Button>
          <Button className='bg-slate-900' variant="contained">Check Out Plans</Button>
        </div>
    </Layout>
  )
}

export default NewsFeed
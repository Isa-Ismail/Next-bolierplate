import { Card, CardContent, Grid, Typography } from "@mui/material"
import Layout from "../components/Layout"

const NewsFeed = () => {
  return (
    <Layout>
      <Grid container spacing = {3} className="!py-10">
        <Grid item md = {3}>
          <Card>
            <CardContent>
              <Typography variant="h4">Hello world</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default NewsFeed
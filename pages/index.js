import { signOut, useSession, getSession } from 'next-auth/react'
import Head from 'next/head'
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import HeaderLink from '../components/HeaderLink'
import { Card } from '@material-ui/core';
import { CardActionArea, CardContent } from '@mui/material';

const NewsFeed = () => {

  const { data: session} = useSession()
  return (
    <div>
      <Head>
        <title>NewsFeed LinkedIn Clone</title>
        <meta name="description" content="This is a Linked In clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className = 'flex items-center space-x-4 px-8 py-2'>
          <div className = 'flex flex-grow space-x-4 items-center'>
            <img className = 'w-10 h-10 rounded-full' src = { session? session.user.image :'http://surl.li/beihv'} />
            <h1>{session ? session.user.name: 'me'}</h1>
            <input className = 'bg-white w-30 h-8 px-4 py-4' placeholder = 'Search'></input>
          </div>
          <div className = 'hidden sm:flex space-x-8 px-4'>
            <HeaderLink Icon={ExploreIcon} text="Discover" feed = 'true'/>
            <HeaderLink Icon={GroupIcon} text="People" feed = 'true'/>
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" feed = 'true'/>
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed = 'true'/>
          </div>
          <button className = 'py-2 text-white bg-yellow-50 border-blue-800 px-2 rounded-md bg-emerald-300' onClick = { () => signOut() }>Sign out</button>
      </header>

      <main className = 'flex items-center space-x-3'>
        {/* left wing */}
        <div className = 'ml-8 mt-8 w-[350px]'>
          <Card>
            <CardContent>
              <h1>Hello {session && session.user.name}</h1>
            </CardContent>
          </Card>
        </div>
        {/* center mid */}
        
        {/* right wing */}
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default NewsFeed
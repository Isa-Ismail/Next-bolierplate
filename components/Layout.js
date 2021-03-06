import Head from 'next/head'
import Footer from './Footer'
import { AppBar, Typography, Toolbar, Container, createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import Navbar from './Navbar'

const Layout = ({title ,children, description}) => {

    const darkMode = false

    const theme = createTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: {
            main: '#f0c000',
          },
          secondary: {
            main: '#208080',
          },
        },
      })

    return (
        <div className="bg-cover bg-center bg-[url('https://wallpaperaccess.com/full/1356145.jpg')]">
            
            {/* head portion for seo */}
            <Head>
                <title>{title ? `${title} - project` : 'project'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            {/* head portion for seo */}

            <ThemeProvider theme={theme}>

                <CssBaseline />

                <Navbar />

                <Container className = '!min-h-[40rem] !max-w-[70rem]'>
                    {children}
                </Container>

                <Footer />
            
            </ThemeProvider>
        </div>
    )
}

export default Layout
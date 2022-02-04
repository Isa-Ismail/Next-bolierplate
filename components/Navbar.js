import { AppBar, Toolbar, Typography } from "@mui/material"
const Navbar = () => {
  return <AppBar position = 'static' className = '!bg-cyan-900 !flex !flex-row'>
            <Toolbar>
                <Typography variant="h5">Project</Typography>
            </Toolbar>
            <div className = '!flex-grow'></div>
            <Toolbar>
                <Typography variant="h5">Login</Typography>
            </Toolbar>
        </AppBar>
};

export default Navbar;

import { AppBar, Toolbar, Typography } from "@mui/material"
const Navbar = () => {
  return <AppBar position = 'static' className = '!bg-cyan-900 !flex !flex-row'>
            <Toolbar>
                {/* logo */}
                <Typography>Projects</Typography>
            </Toolbar>
            <div className = '!flex-grow'></div>
            <Toolbar>
                {/* logo */}
                <Typography>Check Offers</Typography>
            </Toolbar>
        </AppBar>
};

export default Navbar;

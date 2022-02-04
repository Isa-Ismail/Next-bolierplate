import { Face, AndroidRounded } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material"
const Navbar = () => {
  return <AppBar position = 'static' className = '!bg-cyan-900 !flex !flex-row'>
            <Toolbar className = 'flex-col py-4 items-center'>
                {/* logo */}
                <AndroidRounded />
                <Typography>Projects</Typography>
            </Toolbar>
            <Toolbar className = 'flex-col py-4 items-center'>
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

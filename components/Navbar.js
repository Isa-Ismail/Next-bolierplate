import { AndroidRounded, ShoppingBag } from "@mui/icons-material"
import { AppBar, Toolbar } from "@mui/material"

const Navbar = () => {
  return (<AppBar position = 'static' className = '!bg-emerald-300 !flex !flex-row'>
            <Toolbar className = 'flex-col py-1 items-center'>
                {/* logo */}
                <AndroidRounded />
                <h4>projects</h4>
            </Toolbar>
            <Toolbar className = 'flex-col py-1 items-center'>
                {/* logo */}
                <ShoppingBag />
                <h4>go shopping</h4>
            </Toolbar>
            <div className = '!flex-grow'></div>
            <Toolbar className = 'flex-col py-1 items-center'>
                {/* logo */}
                <AndroidRounded />
                <h4>sign up</h4>
            </Toolbar>
        </AppBar>)
};

export default Navbar

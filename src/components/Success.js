import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Updated import for ThemeProvider and added createTheme
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'; // Import Toolbar for AppBar content
import Typography from '@mui/material/Typography'; // Import Typography for text inside AppBar

export class Confirm extends Component {
    continue = e => {
        e.preventDefault(); // Corrected preventdefault to preventDefault
        // Process form //
        this.props.nextStep();
    }

    render() {
       
        const theme = createTheme(); // Create a theme instance

        return (
            <ThemeProvider theme={theme}> {/* Apply the theme */}
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">Success</Typography> {/* Use Typography for the title */}
                            
                        </Toolbar>
                    </AppBar>
                    <h1>Thank you for your submission!</h1>
                    <p>You will get an email with further instructions</p>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}


export default Confirm;

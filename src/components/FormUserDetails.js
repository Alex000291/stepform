import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Updated import for ThemeProvider and added createTheme
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar'; // Import Toolbar for AppBar content
import Typography from '@mui/material/Typography'; // Import Typography for text inside AppBar

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault(); // Corrected preventdefault to preventDefault
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props; // Added handleChange if needed for TextField
        const theme = createTheme(); // Create a theme instance

        return (
            <ThemeProvider theme={theme}> {/* Apply the theme */}
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">Enter User Details</Typography> {/* Use Typography for the title */}
                        </Toolbar>
                    </AppBar>
                    <TextField
                        placeholder="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')} // Example usage of handleChange
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your email"
                        floatingLabelText="email"
                        onChange={handleChange('email')} // Example usage of handleChange
                        defaultValue={values.email}
                    />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.continue}
                        style={styles.button} // Added inline style for button
                    >
                        Continue
                    </Button>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;

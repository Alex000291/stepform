import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Updated import for ThemeProvider and added createTheme
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar'; // Import Toolbar for AppBar content
import Typography from '@mui/material/Typography'; // Import Typography for text inside AppBar

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault(); // Corrected preventdefault to preventDefault
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault(); // Corrected preventdefault to preventDefault
        this.props.previousStep();
    }

    render() {
        const { values, handleChange } = this.props; // Added handleChange if needed for TextField
        const theme = createTheme(); // Create a theme instance

        return (
            <ThemeProvider theme={theme}> {/* Apply the theme */}
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">Enter Personal Details</Typography> {/* Use Typography for the title */}
                        </Toolbar>
                    </AppBar>
                    <TextField
                        placeholder="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')} // Example usage of handleChange
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        placeholder="Enter bio"
                        floatingLabelText="bio"
                        onChange={handleChange('bio')} // Example usage of handleChange
                        defaultValue={values.bio}
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
                    <Button
                        variant="contained"
                        onClick={this.back}
                        style={{ ...styles.button, backgroundColor: '#ffffff', color: '#000000' }} // Adjusted style for white background and black text
                    >
                        Back
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

export default FormPersonalDetails;

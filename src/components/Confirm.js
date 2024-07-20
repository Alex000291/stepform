import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Updated import for ThemeProvider and added createTheme
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar'; // Import Toolbar for AppBar content
import Typography from '@mui/material/Typography'; // Import Typography for text inside AppBar

export class Confirm extends Component {
    continue = e => {
        e.preventDefault(); // Corrected preventdefault to preventDefault
        // Process form //
        this.props.nextStep();
    }

    render() {
        const { values: { firstName, email, occupation, city, bio } } = this.props;
        const theme = createTheme(); // Create a theme instance

        return (
            <ThemeProvider theme={theme}> {/* Apply the theme */}
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">Confirm user data</Typography> {/* Use Typography for the title */}
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem>
                            <Typography variant="body1">First Name: {firstName}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">Email: {email}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">Occupation: {occupation}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">City: {city}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1">Bio: {bio}</Typography>
                        </ListItem>
                    </List>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.continue}
                        style={styles.button} // Added inline style for button
                    >
                        Confirm & Continue
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

export default Confirm;

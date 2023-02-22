import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';


function BookingPage() {

  const [booking, setBooking] = useState({
    date: '',
    time: '',
    numPeople: '',
    table: '',
  });

  const [formErrors, setFormErrors] = useState({
    date: '',
    time: '',
    numPeople: '',
    table: '',
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setBooking({
      ...booking,
      [name]: value,
    });

    // clear the error message for the updated field
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleContinue = (event) => {
    event.preventDefault();

    // Perform validation
    const errors = {};

    if (!booking.date) {
      errors.date = 'Please select a date';
    }

    if (!booking.time) {
      errors.time = 'Please select a time';
    }

    if (!booking.numPeople) {
      errors.numPeople = 'Please select the number of people';
    }

    if (!booking.table) {
      errors.table = 'Please select a table';
    }

    // Check that all required fields are present
    const hasErrors = Object.keys(errors).length > 0;
    const hasAllValues =
      !!booking.date && !!booking.time && !!booking.numPeople && !!booking.table;

    if (hasErrors || !hasAllValues) {
      setFormErrors(errors);
    } else {
      setStep(2);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: '#FFEBCD' }} p={2}
    >
    <div>
      <h1>Make a booking with us now!</h1>
      {step === 1 && (
        <form onSubmit={handleContinue}>
          <TextField
            label="Date"
            type="date"
            name="date"
            value={booking.date}
            onChange={handleInputChange}
            variant="outlined"
            error={!!formErrors.date}
            helperText={formErrors.date}
          />
          <TextField
            label="Time"
            type="time"
            name="time"
            value={booking.time}
            onChange={handleInputChange}
            variant="outlined"
            error={!!formErrors.time}
            helperText={formErrors.time}
          />
          <TextField
            label="Number of people"
            type="number"
            name="numPeople"
            value={booking.numPeople}
            onChange={handleInputChange}
            variant="outlined"
            error={!!formErrors.numPeople}
            helperText={formErrors.numPeople}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={Object.values(formErrors).some((error) => error !== '')}
            >
            Continue
          </Button>
        </form>
      )}
    </div>
    </Box>
  );
}

export default BookingPage;

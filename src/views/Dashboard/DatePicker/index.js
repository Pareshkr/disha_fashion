import { React, useState, useEffect } from 'react';

// materia-ui imports
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DatePickerComp({ SetSelectedDate }) {
  const [calender, setCalender] = useState(new Date());
  const handlechange = (date) => {
    setCalender(date);
  };
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-');
  }
  useEffect(() => {
    SetSelectedDate(formatDate(calender));
    // eslint-disable-next-line
  }, [calender]);
  console.log('Calender', calender.toLocaleDateString('en-GB'));
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          className=" cursor-pointer"
          sx={{
            backgroundColor: 'white',
            '& .MuiInputBase-root': {
              height: '40px' // Adjust the height as needed
            }
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              backgroundColor: 'white'
              // readOnly: true,
              // onClick: () => setOpen(true),
            }
          }}
          format="dd/MM/yyyy"
          id="date-picker-inline"
          label="Date Selected"
          value={calender}
          onChange={handlechange}
          minDate={new Date(2023, 12, 28)}
          maxDate={new Date()}
          closeOnSelect={false}
        />
      </LocalizationProvider>
    </div>
  );
}

export default DatePickerComp;

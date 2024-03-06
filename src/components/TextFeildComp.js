import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'
import {useDispatch} from 'react-redux';
import {handleAmountChange} from '../redux/actions';

const TextFeildComp = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        e.preventDefault();
        dispatch(handleAmountChange(e.target.value));
    };

  return (
    <Box mt={3} width="100%">
        <FormControl fullWidth size="small">
            <TextField 
                onChange={handleChange}
                variant="outlined"
                label="Number of Questions"
                type="number"
                size="small"
            />
        </FormControl>
    </Box>
  )
}

export default TextFeildComp
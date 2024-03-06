import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {handleScoreChange, handleAmountChange} from '../redux/actions.js';

const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score, number_of_questions } = useSelector(state => state);

  useEffect(() => {
    if(score === -1){
      navigate('/');
    }
  });

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate('/');
  };

  const style = {
    boxWrapper: {
      margin: "7rem 20% 0",
      textAlign: "center",
      backgroundColor: "#9AE66E",
      color: "#2C272E"
    },
    btn: {

      backgroundColor: "#2C272E",
      color: '#fff',
      marginTop: '2rem'
    }
  };

  return (
    <Box style={{textAlign: "center"}}>
        <Box p={3} style={style.boxWrapper}>
          <Typography variant="h4">Final Score</Typography>
          <Typography variant="h3" mt={5}>{score} / {number_of_questions}</Typography>
        </Box>
        <Button onClick={handleBackToSettings} size="large" style={style.btn}>Go to Settings</Button>
    </Box>
  )
}

export default Results
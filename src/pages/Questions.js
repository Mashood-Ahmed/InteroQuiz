import { Box, Typography, Button, CircularProgress} from '@mui/material';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAxios from '../hooks/useAxios.js';
import { useNavigate } from 'react-router-dom';
import {handleScoreChange} from '../redux/actions.js';
import { decode } from 'html-entities';


const Questions = () => {

  const style = {
    boxWrapper: {
      margin: "5rem 20% 0", 
      textAlign: "center"
    },
    optionWrapper: {
      backgroundColor: "#9AE66E",
      color: "#2C272E", 
      textTransform: "capitalize"
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const {
    question_category,
    question_difficulty,
    question_type,
    number_of_questions,
    score
  } = useSelector(state => state)


  let apiUrl = `/api.php?amount=${number_of_questions}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading} =  useAxios({url: apiUrl})
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  console.log(response);

  useEffect(() => {
    if(response?.results.length){
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      
      setOptions(answers);
    }
  }, [ response, questionIndex]);

  if(loading){
    return(
        <Box mt={20} style={{padding: "0 50%"}}>
          <CircularProgress style={{color: '#2C272E'}}/>
        </Box> 
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if(e.target.textContent === question.correct_answer){
      dispatch(handleScoreChange(score + 1));
    }

    if(questionIndex + 1 < response.results.length){
      setQuestionIndex(questionIndex + 1);
    }else{
      navigate('/results');
    }
  };

  return (
      <Box style={style.boxWrapper}>
        <Typography variant="h4">Question {questionIndex + 1}</Typography>
        <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
            {options.map((data, id) => (
              <Box mt={2} key={id}>
                  <Button 
                  variant="contained"
                  size='large'
                  onClick={handleClickAnswer}
                  style={style.optionWrapper}>
                    {decode(data)}
                  </Button>
                </Box>
            ))}
        <Box mt={5}>  {questionIndex + 1} / {response.results.length} </Box>
      </Box>
  );
};

export default Questions
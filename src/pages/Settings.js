import { Box, Button, CircularProgress} from '@mui/material';
import React from 'react'
import SelectFeild from '../components/SelectFeild.js';
import TextFeildComp from '../components/TextFeildComp.js';
import useAxios from '../hooks/useAxios.js';
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const navigate = useNavigate();
  const { response, error, loading } = useAxios({url: "/api_category.php" });

  if(loading){
    return(
        <Box mt={20} style={{padding: "0 50%"}}>
          <CircularProgress style={{color: '#2C272E'}}/>
        </Box>
    );
  }

  if(error){
    return(
      <Box mt={20} style={{padding: "0 50%"}}>
        <CircularProgress style={{color: '#2C272E'}}/>
      </Box>
    );
  }

  const difficultyOptions = [
    {id: "easy", name: "Easy"},
    {id: "medium", name: "Medium"},
    {id: "hard", name: "Hard"} 
  ]

  const typeOptions = [
    {id: "multiple", name: "Multiple Choice Questions"},
    {id: "boolean", name: "True/False"}
  ]

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/questions');
  };

  return (
      <form style={{margin: "7rem 20% 0", textAlign: "center"}} onSubmit={handleSubmit}>
        <SelectFeild options={response.trivia_categories} label="Category"/>
        <SelectFeild options={difficultyOptions} label="Difficulty"/>
        <SelectFeild options={typeOptions} label="Type"/>
        <TextFeildComp/>
        <Box mt={3} width="100%">
          <Button style={{backgroundColor: "#2C272E"}} size="large" variant="contained" type="submit">
            Start Quiz
          </Button>
        </Box>
      </form>
  )
}

export default Settings
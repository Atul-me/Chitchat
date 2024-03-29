import React from 'react'
import '../App.css'
import { Container, Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from '../Components/Auth/Login'
import SignUp from '../Components/Auth/SignUp'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Homepage = () => {
  const navigate = useNavigate();
    useEffect(() =>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if(!userInfo){
            navigate('/chat');
        }
    },[navigate]);
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent='center'
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius='lg'
        borderWidth='1px'
        >
        <Text fontSize="4xl" fontFamily='Work sans' color='black'>Chit-Chat</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color='black' borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme='green'>
          <TabList mb="1em">
            <Tab width='50%'>Login</Tab>
            <Tab width='50%'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><Login/></TabPanel>
            <TabPanel><SignUp/></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage
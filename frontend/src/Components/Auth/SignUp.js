import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [show, setShow] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();


    const handleClick = () => setShow(!show);

    const uploadPic = (pic) =>{
        setLoading(true);
        if(pic === undefined){
            toast({
                title:"Please select an image",
                status: 'warning',
                duration:5000,
                isClosable: true,
                position: 'bottom'
            });
            return;
        }

        if(pic.type==='image/jpeg' || pic.type === 'image/png'){
            const data = new FormData();
            data.append("file", pic);
            data.append("upload_preset", "chat_app");
            data.append("cloud_name", 'dsvgtprgh');
            fetch('https://api.cloudinary.com/v1_1/dsvgtprgh/image/upload', {
                method:'post',
                body:data,
            })
            .then((res) =>res.json())
            .then((data) => {
                setPic(data.url.toString());
                setLoading(false);
            })
        }
    };
    
    const submitHandler = async(req,res) =>{
        setLoading(true);
        if(!name || !email || !password || ! confirmpassword){
            toast({
                title:"Please fill all the fields",
                status: 'warning',
                duration:5000,
                isClosable: true,
                position: 'bottom'
            });
            setLoading(false);
            return;
        }
        if(password !== confirmpassword){
            toast({
                title:"Password didn't Match",
                status: 'warning',
                duration:5000,
                isClosable: true,
                position: 'bottom'
            });
            return;
        }

        try{
            const config ={
                headers : {
                    "Content-Type" : "application/json",
                },
            };

            const {data} = await axios.post(
            '/api/user', 
                {name, email, password, pic},
                config
            );
            toast({
                title:"Registration Successful",
                status:"success",
                duration:5000,
                isClosable:true,
                position:"bottom"
            });

            localStorage.setItem("userInfo", JSON.stringify(data));
            
            setLoading(false);
            navigate('/chats');
            
        }catch(error){
            toast({
                title:"Error",
                status: 'error.response.data.message',
                duration:5000,
                isClosable: true,
                position: 'bottom'
            });
            setLoading(false);
        }
    };
  return (
    <VStack spacing='5px'>
        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input
                placeholder='Enter Your Name'
                onChange={(e) => setName(e.target.value)}
            />
        </FormControl>
        <FormControl id='email' isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input
                placeholder='Enter E-mail'
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input
                type={show ? "text" : "password" }
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup size='md'>
            <Input
                type={show ? "text" : "password" }
                placeholder='Confirm Password'
                onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id='pic' >
            <FormLabel>Upload Your Picture</FormLabel>
            <Input
                type='file'
                p={1.5}
                accept='image/*'
                onChange={(e) => uploadPic(e.target.value[0])}
            />
        </FormControl>

        <Button
            colorScheme='green'
            width='100%'
            style={{marginTop: 15}}
            onClick={submitHandler}
            loading= {loading}
            >
                SignUp
            </Button>
    </VStack>
  )
}

export default SignUp
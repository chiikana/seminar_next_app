import React, { useState } from "react"
import { Button ,Card, CardHeader, CardBody, CardFooter,Heading,Stack,StackDivider,Box,Text, } from '@chakra-ui/react'

const AccountPage = (props) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const CA = () => {
      alert("アラート表示")
    }
    
    return (    
    <>
<Card left="10px" width="800px" border= "3mm ridge rgba(211, 220, 50, .6)" >

  <CardHeader>
  
    <Heading size='md'>  アカウント情報 </Heading>

  </CardHeader>
  <CardBody >
    <Stack divider={<StackDivider />} spacing='4'>
      <Box> 
        <Heading size='xs' textTransform='uppercase' >
        名前
        </Heading>
        <Text pt='2' fontSize='sm'>
        ああああ    
        <div align="right">  
          <Button id="aaaa"  onClick={()=>CA() }>
          編集
         </Button>
         </div>
        </Text> 
        

      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          学科
        </Heading>
        <Text pt='2' fontSize='sm' >
        ああああ
        <div align="right">
          <Button id="aaaa"  onClick={()=>CA() } >
          編集
        </Button>
        </div>
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          出席番号
        </Heading>
        <Text pt='2' fontSize='sm'>
          ああああ
          <div align="right">  
          <Button id="aaaa"  onClick={()=>CA() }>
          編集
        </Button>
        </div>
        </Text>
      </Box>
      <Box>
        
        <Heading size='xs' textTransform='uppercase'>
          生年月日
        </Heading>
        <Text pt='2' fontSize='sm' >
          ああああ
          <div align="right">  
          <Button id="aaaa" onClick={()=>CA() }>
          編集
        </Button>
        </div>
        </Text>
      </Box> 
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        メアド
        </Heading>
        <Text pt='2' fontSize='sm'>
          ああああ
          <div align="right">  
          <Button id="aaaa" onClick={()=>CA() }>
          編集
        </Button>
        </div>
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        </Heading>
        <Text pt='2' fontSize='sm'>
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
    </>
  )
      
}
export default AccountPage
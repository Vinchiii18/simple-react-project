import { useEffect, useState } from 'react'
import { Heading, Text, Button, Container, Center, Highlight } from '@chakra-ui/react'

function App() {

  const storageKeyName = 'count'
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0);
  const [count, setCount] = useState(retrieveCountValue);
  const addCount = (count) => setCount(Number(count + 1));

  const obj1 = { 'name': 'Alvin'}

  const [firstName, lastName ] = ['Alvin', 'Pogi'];

  if (count > 10) {
    setCount(0)
  } else {
    useEffect(() => { 
      localStorage.setItem('count', count)
      localStorage.setItem('myData', JSON.stringify(obj1))
      console.log(JSON.parse(localStorage.getItem('myData')))

      }, [count])

      // console.log('firstName-->', firstName);
      // console.log('lastName-->', lastName);
  }

  return (
    <>
      <Container maxW={['full', 'container.lg', 'container.xl']} mt={4} mb={4}>
        <Center>
          <Heading>
            <Highlight query='Stranger' styles={{ px: '1', py: '1', rounded: 'full', bg: 'red.100' }}>
              Welcome Stranger ! 🎉
            </Highlight> 
          </Heading>
        </Center>
        <Center>
          <Text fontSize='lg' fontStyle="italic">This is my sample React webapp!</Text>
        </Center>
        <Center mt={6}>
          <Text fontSize='sm'color='tomato' fontWeight="bold">Click The Button Below to Count!</Text>
        </Center>        
        <Center>
          <Button colorScheme='yellow' variant='solid' border='2px'
                  borderColor='green.500'onClick={() => addCount(count)}>
            count is: {count}
          </Button>
        </Center>
      </Container>
    </>
  )
}

export default App

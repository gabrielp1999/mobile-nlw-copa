import { VStack, Heading } from 'native-base';

import { Header } from '../Components/Header';
import { Button } from '../Components/Button';
import { Input } from '../Components/Input';



export const Find = () => {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title='Buscar por código'/>

    <VStack mt={8} mx={5} alignItems="center">
        <Heading fontFamily="heading" color="#eee" fontSize="xl" mb={8} textAlign="center">
        Encontre um bolão atravês de {'\n'}
        seu código único
        e compartilhe entre amigos!
      </Heading> 
    </VStack>

      <Input mb={2} placeholder='Qual é o código do bolão?'/>


      <Button title='BUSCAR BOLÃO'/>

    </VStack>
  )
}
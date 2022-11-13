import { VStack, Heading , Text} from 'native-base';
import Logo from '../assets/logo.svg';

import { Header } from '../Components/Header';
import { Button } from '../Components/Button';
import { Input } from '../Components/Input';



export const New = () => {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title='Criar novo bolão'/>

      <VStack mt={8} mx={5} alignItems="center">
        <Logo />
      </VStack>

      <Heading fontFamily="heading" color="#eee" fontSize="xl" my={8} textAlign="center">
        Crie seu propio bolão da copa {'\n'}
        e compartilhe entre amigos!
      </Heading>

      <Input mb={2} placeholder='Qual é o nome do seu bolão?'/>


      <Button title='CRIAR O MEU BOLÃO'/>

      <Text 
        color="gray.200"
        fontSize="sm"
        textAlign="center"
        px={10}
        mt={5}
      >
        Após criar o seu bolão, você receberá um código único
         que poderá usar para convidar outras pessoas.
      </Text>
    </VStack>
  )
}
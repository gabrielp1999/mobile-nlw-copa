import {Text, Center, Icon } from "native-base";
import Logo from '../assets/logo.svg';
import { Button } from "../Components/Button";
import { Fontisto } from '@expo/vector-icons';

const Signin = () => {
  return(
    <Center flex={1} bgColor="gray.900" p={7}> 
      <Logo width={212}  height={40}/>
      <Button 
        title="ENTRAR COM O GOOGLE"
        leftIcon={<Icon as={Fontisto} name="google" color="#eee"size="md"/>}
        type="SECONDARY"
        mt={12}
      />

      <Text color="#eee" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {'\n'}
        do seu e-mail com o google para criação da sua conta.
      </Text>

    </Center>
  )
}

export default Signin;
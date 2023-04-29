import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from 'services/authHook';
import { Flex, Text } from '@chakra-ui/react';


const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex minWidth='max-content' alignItems='center' gap='10' >
      <Text
        fontSize={22} color={'#572470'}>
        <NavLink to="/">Головна</NavLink>
      </Text>
      <Text
        fontSize={22} color={'#572470'}>
        {isLoggedIn && <NavLink to="/contacts">Контакти</NavLink>}
      </Text>
    </Flex>
  );
};

export default Navigation;
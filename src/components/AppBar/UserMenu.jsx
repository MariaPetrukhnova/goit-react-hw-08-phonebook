import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "redux/authorization";
import authSelectors from "redux/authorization/authSelectors";
import { Text, Button, Flex } from "@chakra-ui/react";
import { UnlockIcon } from '@chakra-ui/icons';


export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    return (
        <>
        <Flex minWidth='max-content' alignItems='center' gap='10'>
            <Text
                fontSize={22}
                color='#572470'>
                Вітаємо, {name}
            </Text>
            <Button leftIcon={<UnlockIcon />} colorScheme='pink' variant='solid'
                type="button"
                onClick={() => dispatch(authOperations.logOut())} >
                Вийти
            </Button>
        </Flex>
        </>
    );
}
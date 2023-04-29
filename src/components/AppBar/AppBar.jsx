import Navigation from "components/Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import useAuth from 'services/authHook';
import { Flex, Spacer } from '@chakra-ui/react';

export default function AppBar() {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <header>
                <Flex minWidth='max-content' alignItems='center' gap='4' pt={3} pb={3} borderBottom='1px' borderColor='gray.200' p={1}>
                    <Navigation />
                    <Spacer/>
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Flex>
            </header>
    </>
    );
} 
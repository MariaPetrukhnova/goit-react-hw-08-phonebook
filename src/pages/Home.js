import { Text, Box, Image } from "@chakra-ui/react";
import ContactsImg from '../img/7358859.jpg';


export default function Home() {
    return (
        <>
            <Text
                fontSize={62}
                textAlign={'center'}
                color={'#572470'}
                mt={5}
            >
                Мій довідник контактів
            </Text>
            <Box>
                <Image src={ContactsImg} alt='contacts' ml='auto' mr='auto' width={800} />
            </Box>
        </>
    )
};
import React from 'react';
import { Input, Box, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'

const SearchBox = () => {
    return (
        <Box w={'100%'}>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>Enter email for retrieving customer data</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default SearchBox
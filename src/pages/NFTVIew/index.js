import React from 'react';
import {useParams} from 'react-router-dom'
import {Box, Text, Flex, Link} from '@chakra-ui/react'
import {Link as ReactLink, Routes, Route, useLocation} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import ListedTokens from "./components/ListedTokens";
import TokenHolders from "./components/TokenHolders";
import AllTokens from "./components/AllTokens";
import FloorInsights from "./components/FloorInsights";
import Rarities from "./components/Rarities";
import useViewModel from "./methods";

const NFTView = () => {
    const {slug} = useParams();
    const vm = useViewModel(slug);
    const {pathname} = useLocation();

    const MenuItem = ({path, txt}) => {
        return <Link as={ReactLink} fontSize={18} color={pathname.includes(path) ? 'green.400' : 'black'} to={`./${path}`} _hover={{color: 'green.300'}} mr={5}>{txt}</Link>
    }
    return <Box w={'80%'} m={'auto'}>
        <Text fontSize={'4xl'} fontFamily={'PlayFairDisplay'} mt={10} align={'left'}>{slug} - Dashboard</Text>
        <Flex mt={5} bg={'gray.100'} rounded={'xl'} p={2}>
            <MenuItem path={'dashboard'} txt={'Dashboard'}/>
            <MenuItem path={'listed'} txt={'Listed Tokens'}/>
            <MenuItem path={'all-owners'} txt={'Token Holders'}/>
            <MenuItem path={'all-tokens'} txt={'All Tokens'}/>
            <MenuItem path={'floor-insights'} txt={'Floor INSIGHTS'}/>
            <MenuItem path={'rarities'} txt={'Rarities'}/>
        </Flex>
        <Routes>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='listed' element={<ListedTokens attributes={vm.attributes} columns={vm.columnsData} data={vm.listedTokens}/>}/>
            <Route path='all-owners' element={<TokenHolders/>}/>
            <Route path='all-tokens' element={<AllTokens/>}/>
            <Route path='floor-insights' element={<FloorInsights/>}/>
            <Route path='rarities' element={<Rarities/>}/>
        </Routes>

    </Box>
};

export default NFTView
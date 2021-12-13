import React from 'react';
import {Stack, Box, SimpleGrid, Text, Flex, Spacer} from '@chakra-ui/react'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

const pdata = [
    {
        name: 'MongoDb',
        student: 11,
        fees: 120
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 5
    },
    {
        name: 'C#',
        student: 9,
        fees: 4
    },
    {
        name: 'C++',
        student: 10,
        fees: 8
    },
];

const Dashboard = () => {
    return <Stack>
        Dashboard
        <SimpleGrid columns={2} spacing={10} mt={12}>
            <Box bg={'white'} p={4} rounded={'3xl'} ring="2px" ringColor="gray.400" ringOffset="3px"
                 ringOffsetColor="white">
                <Flex px={16}>
                    <Text color={'green'} textAlign={'left'}>NUMBER OF TOKENS LISTED</Text>
                    <Spacer/>
                    <Flex>
                        <Text as={"u"} ml={2}>1D</Text>
                        <Text as={"u"} ml={2}>1W</Text>
                        <Text as={"u"} ml={2}>1M</Text>
                    </Flex>
                </Flex>
                <Flex ml={16} mb={4} mt={1}>
                    <Text fontSize={24}>Current: </Text>
                    <Text fontSize={24} fontWeight={'bold'}>370/5000</Text>
                    <Text fontSize={24}>(7%)</Text>
                </Flex>
                <ResponsiveContainer aspect={3}>
                    <LineChart data={pdata} margin={{right: 50}}>
                        <CartesianGrid/>
                        <XAxis dataKey="name"
                               interval={'preserveStartEnd'}/>
                        <YAxis></YAxis>
                        <Legend/>
                        <Tooltip/>
                        <Line dataKey="student"
                              stroke="black" activeDot={{r: 8}}/>
                        <Line dataKey="fees"
                              stroke="red" activeDot={{r: 8}}/>
                    </LineChart>
                </ResponsiveContainer>
            </Box>
            <Box bg={'white'} p={4} rounded={'3xl'} ring="2px" ringColor="gray.400" ringOffset="3px"
                 ringOffsetColor="white">
                <Flex px={16}>
                    <Text color={'green'} textAlign={'left'}>NUMBER OF TOKENS LISTED</Text>
                    <Spacer/>
                    <Flex>
                        <Text as={"u"} ml={2}>1D</Text>
                        <Text as={"u"} ml={2}>1W</Text>
                        <Text as={"u"} ml={2}>1M</Text>
                    </Flex>
                </Flex>
                <Flex ml={16} mb={4} mt={1}>
                    <Text fontSize={24}>Current: </Text>
                    <Text fontSize={24} fontWeight={'bold'}>370/5000</Text>
                    <Text fontSize={24}>(7%)</Text>
                </Flex>
                <ResponsiveContainer aspect={3}>
                    <LineChart data={pdata} margin={{right: 50}}>
                        <CartesianGrid/>
                        <XAxis dataKey="name"
                               interval={'preserveStartEnd'}/>
                        <YAxis></YAxis>
                        <Legend/>
                        <Tooltip/>
                        <Line dataKey="student"
                              stroke="black" activeDot={{r: 8}}/>
                        <Line dataKey="fees"
                              stroke="red" activeDot={{r: 8}}/>
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </SimpleGrid>

    </Stack>
};

export default Dashboard
import React, {useEffect, useState} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import {GetAllDocs} from '../services/service';

import Expenses from "../screens/Expenses";
import Expense from "../screens/Expense";
import {getPreSorter, getDateSorted} from '../helpers'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const Root = () => {
    const[data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await GetAllDocs({
                    endpoint: `expenses`,
                    token: "fake token",
                });

                setData(getDateSorted(getPreSorter(res.data.data)));
            } catch (error) {
                console.log("FETCH ERROR: ", error)
            }
        }
        fetchData();
    }, []);


    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Expenses'}
            >
                <Stack.Screen name="Expenses">
                    {(props) => (<Expenses {...props} datas={data} />)}
                </Stack.Screen>
                <Stack.Screen name="Expense">
                    {(props) => (<Expense {...props} />)}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Root;
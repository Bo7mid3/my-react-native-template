import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { ReactElement, useEffect, useState } from 'react';
import Home from "@pages/home";
import Login from '@pages/login';
import Splash from '@pages/splash';
import { AuthVal } from '@constants/enums';
import { checkAuth } from '@services/authentification';

import { HEADER_LESS_SCREEN } from "@constants/navigation";
import Register from '@pages/register';
import ResetPassword from '@pages/reset-password';
import { connect, RootStateOrAny } from 'react-redux';

function Index({auth} : {auth: AuthVal}) {
    const setScreens = (): ReactElement[] => {
        switch (auth) {
            case AuthVal.Loading:
                return [
                    <Stack.Screen key={0} name="Splash" component={Splash} options={{ ...HEADER_LESS_SCREEN }} />
                ]
            case AuthVal.LoggedOut:
                return [
                    <Stack.Screen key={0} name="Login" component={Login} options={{ ...HEADER_LESS_SCREEN }} />,
                    <Stack.Screen key={1} name="Register" component={Register} options={{ ...HEADER_LESS_SCREEN }} />,
                    <Stack.Screen key={2} name="ResetPassword" component={ResetPassword} options={{ ...HEADER_LESS_SCREEN }} />,
                ]
            case AuthVal.LoggedIn:
                return [
                    <Stack.Screen key={0} name="Home" component={Home} />
                ]
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);


    return <NavigationContainer>
        <Stack.Navigator>
            {setScreens()}
        </Stack.Navigator>
    </NavigationContainer>
}

export default connect((state: RootStateOrAny) => ({auth: state.auth}),() => new Object())(Index)
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/src/app/pages/home';
import Historico from '@/src/app/pages/historico';
import Financeiro from '@/src/app/pages/financeiro';
import SegundaViaBoleto from '@/src/app/pages/segunda-via-boleto';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Historico" component={Historico} />
      <Stack.Screen name="Financeiro" component={Financeiro} />
      <Stack.Screen name="SegundaViaBoleto" component={SegundaViaBoleto} />
    </Stack.Navigator>
  );
}

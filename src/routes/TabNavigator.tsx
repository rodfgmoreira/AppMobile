import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icones from '@/src/components/icones/icones';
import colors from '@/src/components/theme/cores';

import Home from '@/src/app/pages/home';
import Historico from '@/src/app/pages/historico';
import Financeiro from '@/src/app/pages/financeiro';
import SegundaViaBoleto from '@/src/app/pages/segunda-via-boleto';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AjustesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AjustesMain" component={Financeiro} />
      <Stack.Screen name="SegundaViaBoleto" component={SegundaViaBoleto} />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.icones.active,
        tabBarInactiveTintColor: colors.icones.inactive,
        tabBarStyle: { backgroundColor: colors.background },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: <Icones.HomeIcone color={color} size={size} />,
            Historico: <Icones.HistoricoIcone color={color} size={size} />,
            Perfil: <Icones.PerfilIcone color={color} size={size} />,
            Ajustes: <Icones.AjustesIcone color={color} size={size} />,
          };
          return icons[route.name as keyof typeof icons];
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Historico" component={Historico} />
      <Tab.Screen name="Perfil" component={Financeiro} />
      <Tab.Screen name="Ajustes" component={AjustesStack} />
    </Tab.Navigator>
  );
}

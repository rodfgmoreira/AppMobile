import { View, Text, TouchableOpacity, TextInput, Switch } from "react-native";
import BarraDeStatus from "@/src/components/barra-de-status";
import Header from "@/src/components/header";
import colors from "@/src/components/theme/cores";
import AppView from "@/src/components/app-view";
import Content from "@/src/components/content";
import { styles } from "@/src/components/styles/styles";
import Icones from "@/src/components/icones/icones";
import BoxDefault from "@/src/components/box/box-default";
import { useState } from "react";

type Props = {
  onNavigate: (tab: 'Home' | 'Historico' | 'Perfil' | 'Matricula' | 'SegundaViaBoleto' | 'PesquisaSatisfacao' | 'Ajustes') => void;
};

export default function Ajustes({ onNavigate }: Props) {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <AppView>
      <BarraDeStatus />
      <Header>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 16, gap: 16, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => onNavigate('Home')}>
            <Icones.SetaEsquerdaIcone size={20} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.HeaderTitle}>Ajustes</Text>
        </View>
      </Header>
      <Content>
        <View style={{ padding: 16, gap: 20 }}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? colors.primary : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </Content>
    </AppView>
  )
}
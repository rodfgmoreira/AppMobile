import { View, Text, TouchableOpacity, TextInput } from "react-native";
import BarraDeStatus from "@/src/components/barra-de-status";
import colors from "@/src/components/theme/cores";
import AppView from "@/src/components/app-view";
import Content from "@/src/components/content";
import { styles } from "@/src/components/styles/styles";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  onNavigate: (tab: 'Home' | 'Historico' | 'Perfil' | 'Matricula' | 'SegundaViaBoleto' | 'PesquisaSatisfacao' | 'Login' | 'Ajustes') => void;
  permitirAcesso: (permitido: boolean) => void;
};

export default function Login({ onNavigate, permitirAcesso }: Props) {
  const [cpf, setCpf] = useState('');
  const [cpfValidado, setCpfValidado] = useState(false);

  const validarCpf = async () => {
    if (cpf.trim().length === 11) {
      await AsyncStorage.setItem('cpf', cpf);
      setCpfValidado(true);
      permitirAcesso(true);
      onNavigate('Home');
    } else {
      alert("CPF inválido. Digite 11 números.");
    }
  };  

  // const salvarCpf = async (cpf: string) => {
  //   await AsyncStorage.setItem('cpf', cpf);
  // };

  return (
    <AppView>
      <BarraDeStatus />
      <Content>
        <View style={{ padding: 16, gap: 20, top: '50%' }}>
          <View style={{ gap: 20 }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.Title}>Bem-vindo!</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.BoldText}>Digite seu CPF para continuar</Text>
            </View>
            <TextInput
              placeholder="Digite seu CPF"
              keyboardType="numeric"
              maxLength={11}
              value={cpf}
              onChangeText={setCpf}
              style={{
                borderColor: colors.primary,
                borderWidth: 1,
                padding: 12,
                borderRadius: 8,
                fontSize: 16
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                padding: 12,
                borderRadius: 8,
                alignItems: 'center'
              }}
              onPress={validarCpf}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirmar CPF</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onNavigate('Matricula')}>
              <Text style={{ color: colors.primary, textAlign: 'center', marginTop: 12 }}>
                Fazer nova matrícula
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </AppView>
  );
}

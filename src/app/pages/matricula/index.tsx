import { View, Text, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import BoxAlternativa from "@/src/components/box/box-alternativa";
import BarraDeStatus from "@/src/components/barra-de-status";
import Header from "@/src/components/header";
import colors from "@/src/components/theme/cores";
import AppView from "@/src/components/app-view";
import Content from "@/src/components/content";
import { styles } from "@/src/components/styles/styles";
import Icones from "@/src/components/icones/icones";
import BoxParcelas from "@/src/components/box/box-parcelas";

type Props = {
  onNavigate: (tab: 'Home' | 'Historico' | 'Perfil' | 'Matricula' | 'SegundaViaBoleto' | 'Ajustes') => void;
};

type ProgressBarProps = {
  step: number;
  totalSteps: number;
  title: string;
};

export default function Matricula({ onNavigate }: Props) {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('@/src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@/src/assets/fonts/Poppins-Bold.ttf'),
  });

  const handleButtonClick = () => {
    onNavigate('Historico');
  };

  const step = 2;
  const totalSteps = 3;

  const percentage = (step / totalSteps) * 100;

  return (
    <AppView>
      <BarraDeStatus />
      <Header>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => onNavigate('Home')}>
              <Icones.SetaEsquerdaIcone size={20} color={colors.title} />
            </TouchableOpacity>
            <Text style={styles.HeaderTitle}>Nova Matrícula</Text>
          </View>
          <Icones.InfoIcone size={20} color={colors.primary} />
        </View>
      </Header>
      <Content>
        <View style={{ padding: 16, gap: 20 }}>
          <View>
            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: 'row' }}>
              <Text style={[styles.AlternativeText, { fontSize: 14 }]}>Etapa 2 de 3</Text>
              <Text style={[styles.Text, { fontSize: 14 }]}>Pagamento</Text>
            </View>
            <View
              style={{
                height: 8,
                width: '100%',
                backgroundColor: colors.border,
                borderRadius: 9999,
                overflow: 'hidden'
              }}
            >
              <View
                style={{
                  height: '100%',
                  width: '66%',
                  backgroundColor: colors.primary,
                  borderRadius: 9999
                }}
              />
            </View>
          </View>
          <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 16, justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={styles.BoldText}>Taxa de Matrícula</Text>
            </View>
          </View>
        </View>
      </Content>
    </AppView>
  )
}
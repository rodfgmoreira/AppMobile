import { View, Text, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import BarraDeStatus from "@/src/components/barra-de-status";
import Header from "@/src/components/header";
import colors from "@/src/components/theme/cores";
import AppView from "@/src/components/app-view";
import Content from "@/src/components/content";
import { styles } from "@/src/components/styles/styles";
import Icones from "@/src/components/icones/icones";
import BoxHome from "@/src/components/box/box-home";
import BoxAlternativaHome from "@/src/components/box/box-alternativa-home";

type Props = {
  onNavigate: (tab: 'Home' | 'Historico' | 'Perfil' | 'Matricula' | 'SegundaViaBoleto' | 'Ajustes') => void;
};

export default function Home({ onNavigate }: Props) {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('@/src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@/src/assets/fonts/Poppins-Bold.ttf'),
  });

  const handleButtonClick = () => {
    onNavigate('Historico');
  };

  return (
    <AppView>
      <BarraDeStatus />
      <Header>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.HeaderTitle}>Autoatendimento</Text>
          <Icones.AjudaIcone size={20} color={colors.primary} />
        </View>
      </Header>
      <Content>
        <View style={{ padding: 16, gap: 20 }}>
          <View>
            <Text style={styles.Title}>Bem-vindo!</Text>
            <Text style={styles.Text}>Selecione uma opção para começar:</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            <BoxHome>
              <TouchableOpacity onPress={() => onNavigate('Home')}>
                <Icones.MensalidadeIcone size={20} color={colors.primary} />
                <Text style={[styles.Title, { fontSize: 16 }]}>Mensalidades</Text>
                <Text style={[styles.Text, { fontSize: 14 }]}>Consulte parcelas e saldo</Text>
              </TouchableOpacity>
            </BoxHome>
            <BoxHome>
              <TouchableOpacity onPress={() => onNavigate('SegundaViaBoleto')}>
                <Icones.BoletoIcone size={20} color={colors.primary} />
                <Text style={[styles.Title, { fontSize: 16 }]}>2ª Via Boleto</Text>
                <Text style={[styles.Text, { fontSize: 14 }]}>Gere seus boletos</Text>
              </TouchableOpacity>
            </BoxHome>
            <BoxHome>
              <TouchableOpacity onPress={() => onNavigate('Historico')}>
                <Icones.HistoricoIcone size={20} color={colors.primary} />
                <Text style={[styles.Title, { fontSize: 16 }]}>Histórico</Text>
                <Text style={[styles.Text, { fontSize: 14 }]}>Pagamentos realizados</Text>
              </TouchableOpacity>
            </BoxHome>
            <BoxHome>
              <TouchableOpacity onPress={() => onNavigate('Matricula')}>
                <Icones.MatriculaIcone size={20} color={colors.primary} />
                <Text style={[styles.Title, { fontSize: 16 }]}>Matrícula</Text>
                <Text style={[styles.Text, { fontSize: 14 }]}>Nova matrícula</Text>
              </TouchableOpacity>
            </BoxHome>
          </View>
          <BoxAlternativaHome>
            <View>
              <Text style={[styles.Title, { fontSize: 16 }]}>Pesquisa de Satisfação</Text>
              <Text style={[styles.Text, { fontSize: 14 }]}>Sua opinião é importante!</Text>
            </View>
            <Icones.EstrelaIcone size={20} color={colors.primary} />
          </BoxAlternativaHome>
        </View>
      </Content>
    </AppView>
  )
}
import { View, Text, TouchableOpacity } from "react-native";
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
  onNavigate: (tab: 'Home' | 'Historico' | 'Perfil' | 'Matricula' | 'SegundaViaBoleto' | 'PesquisaSatisfacao' | 'Ajustes') => void;
};

export default function PesquisaSatisfacao({ onNavigate }: Props) {

  const handleButtonClick = () => {
    onNavigate('Historico');
  };

  return (
    <AppView>
      <BarraDeStatus />
      <Header>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 16, gap: 16, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => onNavigate('Home')}>
            <Icones.SetaEsquerdaIcone size={20} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.HeaderTitle}>Pesquisa de Satisfação</Text>
        </View>
      </Header>
      <Content>
        <View style={{ padding: 16, gap: 20 }}>
          <View>
            <View style={{ display: 'flex', marginBottom: 16 }}>
              <Text style={styles.Title}>Sua opinião é importante!</Text>
              <Text style={[styles.Text, { fontSize: 16 }]}>Avalie nosso atendimento e ajude-nos a melhorar.</Text>
            </View>
          </View>
        </View>
      </Content>
    </AppView>
  )
}
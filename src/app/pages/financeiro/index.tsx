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
import BoxSaldo from "@/src/components/box/box-saldo";
import BoxParcelas from "@/src/components/box/box-parcelas";
import Status from "@/src/components/status/status";

type Props = {
  onNavigate: (tab: 'Home' | 'Historico' | 'Perfil' | 'SegundaViaBoleto' | 'Ajustes') => void;
};

export default function Financeiro({ onNavigate }: Props) {

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
        <View style={{ display: 'flex', flexDirection: 'row', padding: 16, gap: 16, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => onNavigate('Home')}>
            <Icones.SetaEsquerdaIcone size={20} />
          </TouchableOpacity>
          <Text style={styles.HeaderTitle}>Financeiro</Text>
        </View>
      </Header>
      <Content>
        <View style={{ padding: 16, gap: 20 }}>
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: -16
          }}>
            <BoxSaldo>
              <Text style={[styles.Text, { fontSize: 14 }]}>Saldo Devedor Total</Text>
              <Text style={[styles.Title, { fontSize: 30 }]}>R$ 2.450,00</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.Text, { fontSize: 14 }]}>Próximo vencimento:</Text>
                <Text style={[styles.Title, { fontSize: 14 }]}>15/03/2025</Text>
              </View>
            </BoxSaldo>
          </View>
          <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 16, justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={styles.BoldText}>Parcelas</Text>
              <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                <Text style={[styles.AlternativeText, { fontSize: 14 }]}>Ver todas</Text>
              </View>
            </View>
            <BoxParcelas>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={[styles.Title, { fontSize: 16 }]}>Março 2025</Text>
                  <Text style={[styles.Text, { fontSize: 14 }]}>Vencimento: 15/03/2025</Text>
                </View>
                <View>
                  <Text style={[styles.Title, { fontSize: 16 }]}>R$ 350,00</Text>
                  <Status type="aberto">Em aberto</Status>
                </View>
              </View>
              <TouchableOpacity style={styles.Button} onPress={() => alert('Gerando boleto...')}>
                <Text style={[styles.BoldText, { color: colors.primary, fontSize: 14 }]}>Gerar Boleto</Text>
              </TouchableOpacity>
            </BoxParcelas>
            <BoxParcelas>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={[styles.Title, { fontSize: 16 }]}>Abril 2025</Text>
                  <Text style={[styles.Text, { fontSize: 14 }]}>Vencimento: 15/04/2025</Text>
                </View>
                <View>
                  <Text style={[styles.Title, { fontSize: 16 }]}>R$ 350,00</Text>
                  <Status type="vencer">A vencer</Status>
                </View>
              </View>
              <TouchableOpacity style={styles.Button} onPress={() => alert('Gerando boleto...')}>
                <Text style={[styles.BoldText, { color: colors.primary, fontSize: 14 }]}>Gerar Boleto</Text>
              </TouchableOpacity>
            </BoxParcelas>
          </View>
          <BoxAlternativa>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={[styles.Title, { fontSize: 16 }]}>Outras Opções</Text>
              <Icones.DotsIcone size={16} color={colors.primary} />
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
              <TouchableOpacity style={{
                display: "flex", flexDirection: "row", alignItems: "center",
                gap: 12, padding: 16, width: 157, maxWidth: 157,
                borderRadius: 8,
                backgroundColor: colors.background
              }}>
                <Icones.QrcodeIcone size={18} color={colors.primary} />
                <Text style={[styles.Text, { fontSize: 14, color: colors.title }]}>Pagar com Pix</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                display: "flex", flexDirection: "row", alignItems: "center",
                gap: 12, padding: 16, width: 157, maxWidth: 157,
                borderRadius: 8,
                backgroundColor: colors.background
              }}>
                <Icones.CartaoIcone size={18} color={colors.primary} />
                <Text style={[styles.Text, { fontSize: 14, color: colors.title }]}>Cartão</Text>
              </TouchableOpacity>
            </View>
          </BoxAlternativa>
        </View>
      </Content>
    </AppView>
  )
}
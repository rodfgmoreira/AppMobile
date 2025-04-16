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
import { useNavigation } from '@react-navigation/native';

export default function SegundaViaBoleto() {

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('@/src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@/src/assets/fonts/Poppins-Bold.ttf'),
  });

  return (
    <AppView>
      <BarraDeStatus />
      <Header>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 16, gap: 16, alignItems: 'center' }}>
          <TouchableOpacity>
            <Icones.SetaEsquerdaIcone size={20} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.HeaderTitle}>2ª Via de Boletos</Text>
        </View>
      </Header>
      <Content>
        <View style={{ padding: 16, gap: 20 }}>
          <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 16, justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={styles.BoldText}>Mensalidades Pendentes</Text>
            </View>
            <BoxParcelas>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={[styles.Title, { fontSize: 16 }]}>Mensalidade Janeiro/2025</Text>
                  <Text style={[styles.Text, { fontSize: 14 }]}>Vencimento: 05/01/2025</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <Text style={[styles.Title, { fontSize: 16, color: colors.danger }]}>R$ 799,90</Text>
                  <Text style={[styles.Text, { fontSize: 14, color: colors.danger }]}>Atrasado</Text>
                </View>
              </View>
              <TouchableOpacity style={[styles.AlternativeButton]} onPress={() => alert('Gerando boleto...')}>
                <Text style={[styles.Text, { color: colors.background, fontSize: 16 }]}>
                  Gerar Boleto
                </Text>
              </TouchableOpacity>
            </BoxParcelas>
            <BoxParcelas>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={[styles.Title, { fontSize: 16 }]}>Mensalidade Fevereiro/2025</Text>
                  <Text style={[styles.Text, { fontSize: 14 }]}>Vencimento: 05/02/2025</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <Text style={[styles.Title, { fontSize: 16, color: colors.title }]}>R$ 799,90</Text>
                  <Text style={[styles.Text, { fontSize: 14, color: colors.primary }]}>Em aberto</Text>
                </View>
              </View>
              <TouchableOpacity style={[styles.AlternativeButton]} onPress={() => alert('Gerando boleto...')}>
                <Text style={[styles.Text, { color: colors.background, fontSize: 16 }]}>
                  Gerar Boleto
                </Text>
              </TouchableOpacity>
            </BoxParcelas>
          </View>
          <BoxAlternativa>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={[styles.Title, { fontSize: 16 }]}>Outras Opções de Pagamento</Text>
              <Icones.DotsIcone size={16} color={colors.primary} />
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
              <TouchableOpacity style={{
                display: "flex", flexDirection: "row", alignItems: "center",
                gap: 12, padding: 16, width: 157, maxWidth: 157,
                borderRadius: 8,
                backgroundColor: colors.background
              }}>
                <Icones.PixIcone size={18} color={colors.primary} />
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
          <View style={{
            display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center',
            padding: 16,
            borderRadius: 12,
            backgroundColor: colors.alternative
          }}>
            <Icones.InfoIcone size={20} color={colors.primary} />
            <View>
              <Text style={[styles.Title, { fontSize: 16 }]}>Precisa de ajuda?</Text>
              <Text style={[styles.Text, { fontSize: 14 }]}>Entre em contato com nossa secretaria</Text>
            </View>
          </View>
        </View>
      </Content>
    </AppView>
  )
}
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';
import BarraDeNavegacao from '@/src/components/barra-de-navegacao'
import BarraDeStatus from "@/src/components/barra-de-status";
import Header from "@/src/components/header";
import colors from "@/src/components/theme/cores";
import AppView from "@/src/components/app-view";
import Content from "@/src/components/content";
import { styles } from "@/src/components/styles/styles";
import Icones from "@/src/components/icones/icones";
import BoxHistorico from "@/src/components/box/box-historico";

export default function Historico() {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('@/src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@/src/assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <AppView>
      <BarraDeStatus />
      <Header>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 16, gap: 16, alignItems: 'center' }}>
          <Icones.SetaEsquerdaIcone size={20} color={colors.primary} />
          <Text style={styles.HeaderTitle}>Histórico Financeiro</Text>
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
            <BoxHistorico>
              <Text style={[styles.Title, { fontSize: 16 }]}>Resumo do Ano</Text>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.Text, { fontSize: 14 }]}>Total Pago (2025)</Text>
                <Text style={[styles.Title, { fontSize: 16 }]}>R$ 12.450,00</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.Text, { fontSize: 14 }]}>Comprovantes Emitidos</Text>
                <Text style={[styles.Title, { fontSize: 16 }]}>12</Text>
              </View>
            </BoxHistorico>
          </View>
          <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 16, justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={styles.SubTitle}>Pagamentos Realizados</Text>
              <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                <Icones.FiltroIcone size={16} color={colors.primary} />
                <Text style={[styles.AlternativeText, { fontSize: 14 }]}>Filtrar</Text>
              </View>
            </View>
            <BoxHistorico>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={[styles.Title, { fontSize: 16 }]}>Mensalidade Janeiro</Text>
                  <Text style={[styles.Text, { fontSize: 14 }]}>Vencimento: 05/01/2025</Text>
                </View>
                <View>
                  <Text style={[styles.SaldoPositivo, { fontSize: 16 }]}>R$ 1.250,00</Text>
                </View>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[styles.Text, { fontSize: 12 }]}>Pago em 03/01/2025</Text>
                <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                  <Icones.DownloadIcone size={14} color={colors.primary} />
                  <Text style={[styles.AlternativeText, { fontSize: 14 }]}>Comprovante</Text>
                </View>
              </View>
            </BoxHistorico>
            <BoxHistorico>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={[styles.Title, { fontSize: 16 }]}>Mensalidade Janeiro</Text>
                  <Text style={[styles.Text, { fontSize: 14 }]}>Vencimento: 05/02/2025</Text>
                </View>
                <View>
                  <Text style={[styles.SaldoPositivo, { fontSize: 16 }]}>R$ 1.250,00</Text>
                </View>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[styles.Text, { fontSize: 12 }]}>Pago em 04/02/2025</Text>
                <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                  <Icones.DownloadIcone size={14} color={colors.primary} />
                  <Text style={[styles.AlternativeText, { fontSize: 14 }]}>Comprovante</Text>
                </View>
              </View>
            </BoxHistorico>
            <BoxHistorico>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={[styles.Title, { fontSize: 16 }]}>Mensalidade Janeiro</Text>
                  <Text style={[styles.Text, { fontSize: 14 }]}>Vencimento: 05/03/2025</Text>
                </View>
                <View>
                  <Text style={[styles.SaldoPositivo, { fontSize: 16 }]}>R$ 1.250,00</Text>
                </View>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[styles.Text, { fontSize: 12 }]}>Pago em 03/03/2025</Text>
                <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                  <Icones.DownloadIcone size={14} color={colors.primary} />
                  <Text style={[styles.AlternativeText, { fontSize: 14 }]}>Comprovante</Text>
                </View>
              </View>
            </BoxHistorico>
          </View>
        </View>
      </Content>
      <BarraDeNavegacao />
    </AppView>
  )
}
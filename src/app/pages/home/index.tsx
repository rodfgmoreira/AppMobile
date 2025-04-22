import { View, Text, TouchableOpacity, Modal, Button } from "react-native";
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
import { useState } from "react";

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

  const [visivel, setVisivel] = useState(false);

  return (
    <AppView>
      <BarraDeStatus />
      <Header>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.HeaderTitle}>Autoatendimento</Text>
          <TouchableOpacity onPress={() => setVisivel(true)}>
            <Icones.AjudaIcone size={20} color={colors.primary} />
          </TouchableOpacity>
          <Modal
            visible={visivel}
            transparent
            animationType="slide"
            onRequestClose={() => setVisivel(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>
                  Guia Rápido do Autoatendimento
                </Text>

                <View style={{ marginBottom: 8 }}>
                  <Text style={styles.BoldText}>Mensalidades</Text>
                  <Text style={{ color: colors.description }}>
                    Consulte parcelas em aberto, veja seu saldo atual e organize seus pagamentos.
                  </Text>
                </View>

                <View style={{ marginBottom: 8 }}>
                  <Text style={styles.BoldText}>2ª Via Boleto</Text>
                  <Text style={{ color: colors.description }}>
                    Gere rapidamente a segunda via dos seus boletos de pagamento.
                  </Text>
                </View>

                <View style={{ marginBottom: 8 }}>
                  <Text style={styles.BoldText}>Histórico</Text>
                  <Text style={{ color: colors.description }}>
                    Acompanhe todos os pagamentos que já foram realizados por você.
                  </Text>
                </View>

                <View style={{ marginBottom: 8 }}>
                  <Text style={styles.BoldText}>Matrícula</Text>
                  <Text style={{ color: colors.description }}>
                    Faça uma nova matrícula de forma simples e rápida, direto pelo app.
                  </Text>
                </View>

                <View style={{ marginBottom: 16 }}>
                  <Text style={styles.BoldText}>Pesquisa de Satisfação</Text>
                  <Text style={{ color: colors.description }}>
                    Dê sua opinião e ajude a melhorar nossos serviços. Sua resposta é muito importante!
                  </Text>
                </View>

                <Button title="Fechar" onPress={() => setVisivel(false)} />
              </View>
            </View>
          </Modal>
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
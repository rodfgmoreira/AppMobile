import { View, Text, TouchableOpacity, Modal, Button } from "react-native";
import { useFonts } from 'expo-font';
import BarraDeStatus from "@/src/components/barra-de-status";
import Header from "@/src/components/header";
import colors from "@/src/components/theme/cores";
import AppView from "@/src/components/app-view";
import Content from "@/src/components/content";
import { styles } from "@/src/components/styles/styles";
import Icones from "@/src/components/icones/icones";
import BoxHistorico from "@/src/components/box/box-historico";
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  onNavigate: (tab: 'Home' | 'Historico' | 'Perfil' | 'Matricula' | 'SegundaViaBoleto' | 'Ajustes') => void;
};

type ProgressBarProps = {
  step: number;
  totalSteps: number;
  title: string;
};

const pagamentos = [
  { id: 'boleto', label: 'Boleto Bancário', icon: <Icones.CodigoBarraIcone size={20} color={colors.primary} /> },
  { id: 'pix', label: 'PIX', icon: <Icones.PixIcone size={20} color={colors.primary} /> },
  { id: 'cartao', label: 'Cartão de Crédito', icon: <Icones.CartaoIcone size={20} color={colors.primary} /> }
];

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

  const [selecionado, setSelecionado] = useState('boleto');
  const [checked, setChecked] = useState(false);
  const [visivel, setVisivel] = useState(false);

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
          <TouchableOpacity onPress={() => setVisivel(true)}>
            <Icones.InfoIcone size={20} color={colors.primary} />
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
                  Guia Rápido de Pagamento da Matrícula
                </Text>

                <View style={{ marginBottom: 8 }}>
                  <Text style={styles.BoldText}>Etapa 2 de 3</Text>
                  <Text style={{ color: colors.description }}>
                    Acompanhe seu progresso no processo de matrícula. Esta é a etapa de pagamento.
                  </Text>
                </View>

                <View style={{ marginBottom: 8 }}>
                  <Text style={styles.BoldText}>Taxa de Matrícula</Text>
                  <Text style={{ color: colors.description }}>
                    Mostra o valor da taxa necessária para efetivar sua matrícula e o prazo para pagamento.
                  </Text>
                </View>

                <View style={{ marginBottom: 8 }}>
                  <Text style={styles.BoldText}>Forma de Pagamento</Text>
                  <Text style={{ color: colors.description }}>
                    Escolha entre Boleto Bancário, PIX ou Cartão de Crédito para realizar o pagamento da matrícula.
                  </Text>
                </View>

                <View style={{ marginBottom: 8 }}>
                  <Text style={styles.BoldText}>Termos de Matrícula</Text>
                  <Text style={{ color: colors.description }}>
                    Marque a caixa para aceitar os termos e políticas da instituição, etapa obrigatória para continuar.
                  </Text>
                </View>

                <View style={{ marginBottom: 16 }}>
                  <Text style={styles.BoldText}>Botões de Ação</Text>
                  <Text style={{ color: colors.description }}>
                    Use "Voltar" para revisar informações anteriores ou "Continuar" para seguir com a matrícula.
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
            <View style={{ marginBottom: 16 }}>
              <Text style={styles.BoldText}>Taxa de Matrícula</Text>
            </View>
            <BoxHistorico>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.Text, { fontSize: 16, color: colors.description }]}>Valor da taxa</Text>
                <Text style={[styles.Title, { fontSize: 16 }]}>R$ 250,00</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.Text, { fontSize: 14 }]}>Vencimento: 7 dias após confirmação</Text>
              </View>
            </BoxHistorico>
            <BoxHistorico>
              <View style={{ justifyContent: 'space-between' }}>
                <View>
                  <Text style={[styles.Title, { fontSize: 16 }]}>Forma de Pagamento</Text>
                </View>
                <View style={{ gap: 12 }}>
                  {pagamentos.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => setSelecionado(item.id)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 12,
                        borderWidth: 1,
                        borderColor: colors.border,
                        borderRadius: 12,
                        gap: 12
                      }}
                    >
                      <View
                        style={{
                          height: 20,
                          width: 20,
                          borderRadius: 10,
                          borderWidth: 1.5,
                          borderColor: '#000',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {selecionado === item.id && (
                          <View
                            style={{
                              height: 10,
                              width: 10,
                              borderRadius: 5,
                              backgroundColor: '#000'
                            }}
                          />
                        )}
                      </View>
                      {item.icon}
                      <Text style={{ fontSize: 16, color: colors.description }}>{item.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </BoxHistorico>
            <View style={{
              flexDirection: "row", alignItems: "center", justifyContent: "center",
              paddingHorizontal: 16, gap: 8, maxWidth: 358, marginBottom: 16
            }}>
              <TouchableOpacity
                onPress={() => setChecked(!checked)}
                style={{
                  width: 16, height: 16,
                  borderRadius: 4, borderWidth: 2, borderColor: colors.primary,
                  alignItems: 'center', justifyContent: 'center'
                }}
              >
                {checked && (
                  <FontAwesome name="square" size={10} color={colors.primary} />)}
              </TouchableOpacity>
              <Text style={{ fontSize: 14, color: colors.description }}>Li e aceito os termos de matrícula e política de pagamento da instituição</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 16 }}>
              <TouchableOpacity style={[styles.BackButton]}>
                <Text style={[styles.Text, { fontSize: 16, color: colors.text }]}>Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.NextButton]}>
                <Text style={[styles.Text, { fontSize: 16, color: colors.background }]}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </AppView>
  )
}
import { View, Text, TouchableOpacity, Switch, Modal, Button, ScrollView } from "react-native";
import BarraDeStatus from "@/src/components/barra-de-status";
import Header from "@/src/components/header";
import colors from "@/src/components/theme/cores";
import AppView from "@/src/components/app-view";
import Content from "@/src/components/content";
import { styles } from "@/src/components/styles/styles";
import Icones from "@/src/components/icones/icones";
import { useState } from "react";

type Props = {
  onNavigate: (tab: 'Home' | 'Historico' | 'Perfil' | 'Matricula' | 'SegundaViaBoleto' | 'PesquisaSatisfacao' | 'Ajustes') => void;
};

export default function Ajustes({ onNavigate }: Props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [modalVisible, setModalVisible] = useState<string | null>(null);

  const renderModal = (title: string, description: string) => (
    <Modal
      visible={modalVisible === title}
      transparent
      animationType="slide"
      onRequestClose={() => setModalVisible(null)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>{title}</Text>
          <ScrollView>
            <Text style={{ color: colors.description, marginBottom: 20 }}>{description}</Text>
          </ScrollView>
          <Button title="Fechar" onPress={() => setModalVisible(null)} />
        </View>
      </View>
    </Modal>
  );

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
        <View style={{ padding: 16, gap: 24 }}>

        </View>
      </Content>
    </AppView>
  );
}

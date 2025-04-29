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

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={[styles.Title, { fontSize: 16 }]}>Notificações</Text>
              <Text style={[styles.Text, { fontSize: 14 }]}>Ativar ou desativar as notificações do aplicativo</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? colors.primary : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          {[
            { title: "Termos de Uso", description: "Leia os termos e condições de uso do aplicativo." },
            { title: "Política de Privacidade", description: "Entenda como seus dados são utilizados e protegidos." },
            { title: "Central de Suporte", description: "Encontre respostas para as dúvidas mais frequentes." },
            { title: "Fale Conosco", description: "Entre em contato com nossa equipe pelo WhatsApp, e-mail ou telefone." },
            { title: "Versão do App", description: "Você está utilizando a versão mais recente do nosso aplicativo." },
            { title: "Novidades e Atualizações", description: "Confira o que há de novo no app, com melhorias e funcionalidades." }
          ].map((item) => (
            <TouchableOpacity key={item.title} onPress={() => setModalVisible(item.title)}>
              <View>
                <Text style={[styles.Title, { fontSize: 16 }]}>{item.title}</Text>
                <Text style={[styles.Text, { fontSize: 14 }]}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          ))}

        </View>
      </Content>
      {renderModal("Termos de Uso",
        "Declaro que li e concordo com os termos e condições de uso deste aplicativo. Ao utilizar este app de finanças, comprometo-me a utilizar seus recursos de forma responsável, não realizar atividades ilícitas, respeitar os direitos de outros usuários e manter minhas informações atualizadas e verdadeiras. O uso contínuo do aplicativo implica aceitação plena das condições aqui apresentadas, que podem ser atualizadas periodicamente."
      )}
      {renderModal("Política de Privacidade",
        "Este aplicativo valoriza a sua privacidade. Os dados fornecidos por você são coletados apenas com a finalidade de oferecer uma experiência personalizada e segura. Todas as informações são armazenadas com criptografia e não são compartilhadas com terceiros sem o seu consentimento. Ao utilizar o app, você concorda com nossa coleta, armazenamento e tratamento de dados conforme descrito nesta política."
      )}
      {renderModal("Central de Suporte",
        "Bem-vindo à Central de Suporte! Aqui você encontra respostas para as perguntas mais frequentes, tutoriais sobre como usar as funcionalidades do app, e orientações sobre segurança financeira. Caso não encontre o que procura, você pode acessar o canal (Fale Conosco) para atendimento personalizado."
      )}
      {renderModal("Fale Conosco",
        "Precisa de ajuda ou quer enviar uma sugestão? Entre em contato com nossa equipe de atendimento pelo WhatsApp, e-mail ou telefone. Nosso suporte está disponível em dias úteis, das 9h às 18h. Estamos aqui para ouvir você!"
      )}
      {renderModal("Versão do App",
        "Você está utilizando a versão mais recente do nosso aplicativo de finanças. Mantenha o app sempre atualizado para garantir acesso às novas funcionalidades, melhorias de desempenho e segurança."
      )}
      {renderModal("Novidades e Atualizações",
        "Fique por dentro das últimas novidades! A cada atualização, buscamos tornar sua experiência mais prática, rápida e segura. Confira as novas funcionalidades, melhorias de interface e recursos pensados para facilitar o controle da sua vida financeira."
      )}
    </AppView>
  );
}

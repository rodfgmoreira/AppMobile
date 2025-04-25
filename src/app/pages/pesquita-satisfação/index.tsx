import { View, Text, TouchableOpacity, TextInput } from "react-native";
import BarraDeStatus from "@/src/components/barra-de-status";
import Header from "@/src/components/header";
import colors from "@/src/components/theme/cores";
import AppView from "@/src/components/app-view";
import Content from "@/src/components/content";
import { styles } from "@/src/components/styles/styles";
import Icones from "@/src/components/icones/icones";
import BoxDefault from "@/src/components/box/box-default";
import { useState } from "react";

type Props = {
  onNavigate: (tab: 'Home' | 'Historico' | 'Perfil' | 'Matricula' | 'SegundaViaBoleto' | 'PesquisaSatisfacao' | 'Ajustes') => void;
};

export default function PesquisaSatisfacao({ onNavigate }: Props) {

  const [nota, setNota] = useState(0);

  const opcoesAvaliacao = [
    { icone: Icones.RaioIcone, texto: 'Rápido' },
    { icone: Icones.GosteiIcone, texto: 'Útil' },
    { icone: Icones.CorretoIcone, texto: 'Fácil de usar' },
    { icone: Icones.CorretoBgIcone, texto: 'Completo' },
  ];

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
          <BoxDefault>
            <View style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Text style={[styles.Title, { fontSize: 16 }]}>
                Como você avalia nosso atendimento?
              </Text>
              <View style={{ flexDirection: 'row', gap: 16 }}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <TouchableOpacity key={num} onPress={() => setNota(num)}>
                    {num <= nota ? (
                      <Icones.FullStartIcone size={30} color={colors.primary} />
                    ) : (
                      <Icones.StartIcone size={30} color={colors.text} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
              <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={[styles.Text, { fontSize: 14 }]}>Muito ruim</Text>
                <Text style={[styles.Text, { fontSize: 14 }]}>Excelente</Text>
              </View>
            </View>
          </BoxDefault>
          <Text style={[styles.Title, { fontSize: 16 }]}>O que você achou do nosso serviço?</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {[0, 1].map(coluna => (
              <View key={coluna} style={{ gap: 10 }}>
                {opcoesAvaliacao.slice(coluna * 2, coluna * 2 + 2).map((opcaoAvaliacao, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: "center",
                      gap: 12,
                      padding: 16,
                      width: 173,
                      maxWidth: 173,
                      borderRadius: 8,
                      backgroundColor: colors.background
                    }}
                  >
                    <opcaoAvaliacao.icone size={18} color={colors.primary} />
                    <Text style={[styles.Text, { fontSize: 16, color: colors.title }]}>{opcaoAvaliacao.texto}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
          <Text style={[styles.Title, { fontSize: 16 }]}>O que você achou do nosso serviço?</Text>
          <TextInput
            style={{
              width: '100%', height: 'auto', minHeight: 178,
              backgroundColor: colors.background,
              padding: 16,
              borderRadius: 12, borderColor: colors.border, borderWidth: 1,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 2,
              elevation: 1,
              textAlignVertical: 'top'
            }}
            placeholder="Conte-nos como podemos melhorar..."
            multiline
            numberOfLines={4}
            textBreakStrategy="simple"
            autoCorrect={true}
          />
          <TouchableOpacity style={[styles.AlternativeButton, { height: 58 }]}>
            <Text style={[styles.Text, { color: colors.background, fontSize: 16 }]}>
              Enviar Avaliação
            </Text>
          </TouchableOpacity>
        </View>
      </Content>
    </AppView>
  )
}
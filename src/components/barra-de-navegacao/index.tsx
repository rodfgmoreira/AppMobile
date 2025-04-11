import React from 'react';
import { View, Text } from 'react-native';
import Icones from '../icones/icones';
import colors from '../theme/cores';
import { styles } from '../styles/styles';

export default function BarraDeNavegacao() {
  return (
    <View style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 70,
    }}>
      <View style={{
        display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center',
        paddingVertical: 13, paddingHorizontal: 16,
        borderStyle: 'solid', borderTopWidth: 1, borderColor: colors.border,
        position: 'absolute', width: '100%'
      }}>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Icones.HomeIcone size={32} color={colors.icones.inactive} />
          <Text style={styles.NavText}>Início</Text>
        </View>

        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Icones.HistoricoIcone size={32} color={colors.icones.inactive} />
          <Text style={styles.NavText}>Histórico</Text>
        </View>

        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Icones.PerfilIcone size={32} color={colors.icones.inactive} />
          <Text style={styles.NavText}>Perfil</Text>
        </View>

        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Icones.AjustesIcone size={32} color={colors.icones.inactive} />
          <Text style={styles.NavText}>Perfil</Text>
        </View>
      </View>
    </View>
  );
}
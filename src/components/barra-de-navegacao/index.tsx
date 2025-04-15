import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icones from '../icones/icones';
import colors from '../theme/cores';
import { styles } from '../styles/styles';

type Props = {
  activeTab: 'Home' | 'Historico' | 'Perfil' | 'Ajustes';
  onTabChange: (tab: 'Home' | 'Historico' | 'Perfil' | 'Ajustes') => void;
};

export default function BarraDeNavegacao({ activeTab, onTabChange }: Props) {
  const isActive = (tab: Props['activeTab']) => activeTab === tab;

  return (
    <View style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 70,
    }}>
      <View style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 16,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderColor: colors.border,
        width: '100%',
      }}>
        <TouchableOpacity onPress={() => onTabChange('Home')} style={{ alignItems: 'center' }}>
          <Icones.HomeIcone size={28} color={isActive('Home') ? colors.icones.active : colors.icones.inactive} />
          <Text style={{ color: isActive('Home') ? colors.icones.active : colors.icones.inactive }}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTabChange('Historico')} style={{ alignItems: 'center' }}>
          <Icones.HistoricoIcone size={28} color={isActive('Historico') ? colors.icones.active : colors.icones.inactive} />
          <Text style={{ color: isActive('Historico') ? colors.icones.active : colors.icones.inactive }}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTabChange('Perfil')} style={{ alignItems: 'center' }}>
          <Icones.PerfilIcone size={28} color={isActive('Perfil') ? colors.icones.active : colors.icones.inactive} />
          <Text style={{ color: isActive('Perfil') ? colors.icones.active : colors.icones.inactive }}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTabChange('Ajustes')} style={{ alignItems: 'center' }}>
          <Icones.AjustesIcone size={28} color={isActive('Ajustes') ? colors.icones.active : colors.icones.inactive} />
          <Text style={{ color: isActive('Ajustes') ? colors.icones.active : colors.icones.inactive }}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { ReactNode } from 'react';
import { View } from 'react-native';
import colors from "../../theme/cores";

type BoxHistoricoProps = {
  children: ReactNode;
};

export default function BoxHistorico({ children }: BoxHistoricoProps) {
  return (
    <View style={{
      width: '100%', height: 'auto',
      backgroundColor: colors.background,
      padding: 16, marginBottom: 16,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    }}>
      {children}
    </View>
  );
}

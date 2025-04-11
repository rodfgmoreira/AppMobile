import { ReactNode } from 'react';
import { View } from 'react-native';
import colors from "../theme/cores";

type BoxHomeProps = {
  children: ReactNode;
};

export default function BoxHome({ children }: BoxHomeProps) {
  return (
    <View style={{
      width: 171, height: 124,
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

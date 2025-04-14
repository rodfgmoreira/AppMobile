import { ReactNode } from 'react';
import { View } from 'react-native';
import colors from "../theme/cores";

type BoxAlternativaProps = {
  children: ReactNode;
};

export default function BoxAlternativa({ children }: BoxAlternativaProps) {
  return (
    <View style={{
      padding: 16, gap: 16,
      borderRadius: 12,
      backgroundColor: colors.alternative
    }}>
      {children}
    </View>
  );
}
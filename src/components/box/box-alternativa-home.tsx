import { ReactNode } from 'react';
import { View } from 'react-native';
import colors from "../theme/cores";

type BoxAlternativaHomeProps = {
  children: ReactNode;
};

export default function BoxAlternativaHome({ children }: BoxAlternativaHomeProps) {
  return (
    <View style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
      padding: 16,
      borderRadius: 12,
      backgroundColor: colors.alternative
    }}>
      {children}
    </View>
  );
}
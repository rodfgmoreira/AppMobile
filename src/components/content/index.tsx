import { ReactNode } from 'react';
import { View } from 'react-native';
import colors from "../theme/cores";

type ContentProps = {
  children: ReactNode;
};

export default function Content({ children }: ContentProps) {
  return (
    <View style={{ flex: 1, paddingBottom: 70, backgroundColor: colors.secundaryBg }}>
      {children}
    </View>
  );
}

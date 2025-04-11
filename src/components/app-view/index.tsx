import { ReactNode } from 'react';
import { View } from 'react-native';
import colors from "../theme/cores";

type AppViewProps = {
  children: ReactNode;
};

export default function AppView({ children }: AppViewProps) {
  return (
    <View style={{ flex: 1, borderStyle: 'solid', borderWidth: 2, borderTopWidth: 0, borderColor: colors.border }}>
      {children}
    </View>
  );
}

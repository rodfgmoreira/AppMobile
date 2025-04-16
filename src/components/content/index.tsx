import { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import colors from "../theme/cores";

type ContentProps = {
  children: ReactNode;
};

export default function Content({ children }: ContentProps) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.secundaryBg }}
      contentContainerStyle={{ paddingBottom: 70 }}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

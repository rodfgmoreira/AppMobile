import { Children } from "react"
import { View } from "react-native"
import { ReactNode } from "react";
import colors from "../theme/cores";

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <View style={{
      width: '100%',
      height: 60,
      backgroundColor: colors.background,
      borderStyle: 'solid', borderWidth: 0, borderBottomWidth: 1, borderColor: colors.border,
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
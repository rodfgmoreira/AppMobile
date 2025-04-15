import { View, Text } from 'react-native';
import colors from "../theme/cores";
import { ReactNode } from 'react';

type StatusType = 'aberto' | 'vencer';

type StatusProps = {
  children: ReactNode;
  type?: StatusType;
};

export default function Status({ children, type = 'vencer' }: StatusProps) {
  const styleMap = {
    aberto: {
      backgroundColor: colors.dangerBg,
      textColor: colors.danger,
    },
    vencer: {
      backgroundColor: colors.secundaryBg,
      textColor: colors.text,
    },
  };

  const { backgroundColor, textColor } = styleMap[type];

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor,
        borderRadius: 9999,
        alignSelf: 'flex-start',
        width: 75
      }}
    >
      <Text style={{ color: textColor, fontFamily: 'Poppins-Regular', fontSize: 12 }}>
        {children}
      </Text>
    </View>
  );
}

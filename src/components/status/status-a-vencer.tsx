import { View, Text } from 'react-native';
import colors from "../theme/cores";

export default function StatusVencer() {
  return (
    <View style={{
      justifyContent: 'center', alignItems: 'center',
      paddingHorizontal: 8, paddingVertical: 4,
      backgroundColor: colors.secundaryBg,
      borderRadius: 9999
    }}>
      <Text style={{
        color: colors.text, fontSize: 12
      }}>
        A vencer
      </Text>
    </View>
  );
}

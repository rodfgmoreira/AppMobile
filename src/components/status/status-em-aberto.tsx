import { View, Text } from 'react-native';
import colors from "../theme/cores";

export default function StatusAberto() {
  return (
    <View style={{
      justifyContent: 'center', alignItems: 'center',
      paddingHorizontal: 8, paddingVertical: 4,
      backgroundColor: colors.dangerBg,
      borderRadius: 9999
    }}>
      <Text style={{
        color: colors.danger, fontSize: 12
      }}>
        Em aberto
      </Text>
    </View>
  );
}

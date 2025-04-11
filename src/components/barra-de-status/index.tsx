import { StatusBar } from 'react-native';
import colors from '@/src/components/theme/cores';

export default function BarraDeStatus() {
  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor={colors.primary}
      translucent={false}
    />
  );
}

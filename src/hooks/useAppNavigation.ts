import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/types/types';

type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function useAppNavigation() {
  return useNavigation<AppNavigationProp>();
}

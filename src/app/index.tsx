import { useFonts } from 'expo-font';
import Home from '@/src/app/pages/home'
import Historico from './pages/historico';
import Financeiro from './pages/financeiro';
import BarraDeNavegacao from '../components/barra-de-navegacao';
import SegundaViaBoleto from './pages/segunda-via-boleto';

export default function Index() {

   const [fontsLoaded] = useFonts({
      'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
   });

   return (
      <>
         <SegundaViaBoleto />
         <BarraDeNavegacao />
      </>
   )
}
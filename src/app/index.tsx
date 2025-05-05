import React, { useEffect } from 'react';
import Home from '@/src/app/pages/home';
import Historico from './pages/historico';
import Financeiro from './pages/financeiro';
import SegundaViaBoleto from './pages/segunda-via-boleto';
import BarraDeNavegacao from '../components/barra-de-navegacao';
import Matricula from './pages/matricula';
import PesquisaSatisfacao from './pages/pesquita-satisfação';
import Ajustes from './pages/ajustes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './pages/login';

export default function Index() {
  const [activeTab, setActiveTab] = React.useState<'Home' | 'Historico' | 'Perfil' | 'Matricula' | 'SegundaViaBoleto' | 'PesquisaSatisfacao' | 'Login' | 'Ajustes'>('Home');
  const [mostrarBarra, setMostrarBarra] = React.useState(false);

  // Buscar CPF salvo ao iniciar o app
  useEffect(() => {
    const verificarCpfSalvo = async () => {
      const cpfSalvo = await AsyncStorage.getItem('cpf');
      if (cpfSalvo) {
        setMostrarBarra(true);
      }
    };
    verificarCpfSalvo();
  }, []);

  const deslogar = async () => {
    await AsyncStorage.removeItem('cpf');
    setMostrarBarra(false);
    setActiveTab('Home'); // opcional: volta pra Home ao deslogar
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <Home onNavigate={setActiveTab} permitirAcesso={setMostrarBarra} />;
      case 'Historico':
        return <Historico onNavigate={setActiveTab} />;
      case 'Perfil':
        return <Financeiro onNavigate={setActiveTab} />;
      case 'Ajustes':
        return <Ajustes onNavigate={setActiveTab} />;
      case 'SegundaViaBoleto':
        return <SegundaViaBoleto onNavigate={setActiveTab} />;
      case 'Matricula':
        return <Matricula onNavigate={setActiveTab} />;
      case 'PesquisaSatisfacao':
        return <PesquisaSatisfacao onNavigate={setActiveTab} />;
      case 'Login':
        return <Login onNavigate={setActiveTab} />;
      default:
        return <Home onNavigate={setActiveTab} permitirAcesso={setMostrarBarra} />;
    }
  };

  return (
    <>
      {renderScreen()}
      {mostrarBarra && (
        <BarraDeNavegacao
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}
    </>
  );
}

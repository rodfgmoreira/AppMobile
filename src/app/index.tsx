import React from 'react';
import Home from '@/src/app/pages/home';
import Historico from './pages/historico';
import Financeiro from './pages/financeiro';
import SegundaViaBoleto from './pages/segunda-via-boleto';
import BarraDeNavegacao from '../components/barra-de-navegacao';
import Matricula from './pages/matricula';
import PesquisaSatisfacao from './pages/pesquita-satisfação';
import Ajustes from './pages/ajustes';

export default function Index() {
  const [activeTab, setActiveTab] = React.useState<'Home' | 'Historico' | 'Perfil' | 'Matricula' | 'SegundaViaBoleto' | 'PesquisaSatisfacao' | 'Ajustes'>('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <Home onNavigate={setActiveTab} />;
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
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <>
      {renderScreen()}
      <BarraDeNavegacao activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
}

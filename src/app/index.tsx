import React from 'react';
import Home from '@/src/app/pages/home';
import Historico from './pages/historico';
import Financeiro from './pages/financeiro';
import SegundaViaBoleto from './pages/segunda-via-boleto';
import BarraDeNavegacao from '../components/barra-de-navegacao';

export default function Index() {
  const [activeTab, setActiveTab] = React.useState<'Home' | 'Historico' | 'Perfil' | 'Ajustes'>('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'Historico':
        return <Historico />;
      case 'Perfil':
        return <Financeiro />;
      case 'Ajustes':
        return <SegundaViaBoleto />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {renderScreen()}
      <BarraDeNavegacao activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
}

import React from 'react';
import { ConfigProvider } from 'antd';

import { themeObject } from "./styles/themes/themeVariables";

import { AppRouter } from './components/router/AppRouter';
import { useLanguage } from './hooks/useLanguage';
import { useAppSelector } from './hooks/reduxHooks';

import GlobalStyle from './styles/GlobalStyle';

import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';

import "typeface-montserrat";
import "typeface-lato";

const App = () => {

    const { language } = useLanguage();
    const theme = useAppSelector((state) => state.theme.theme);

    return (
        <>
            <meta name="theme-color" content={themeObject[theme].primary} />
            <GlobalStyle />
            <ConfigProvider locale={language === 'en' ? enUS : deDe}>
                <AppRouter />
            </ConfigProvider>
        </>
    );
}

export default App;

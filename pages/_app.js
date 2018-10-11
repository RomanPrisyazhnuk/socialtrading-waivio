import 'bootstrap/scss/bootstrap.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import en from 'react-intl/locale-data/en';
import locales from 'locales';
import withReduxSaga from 'next-redux-saga';
import configureStore from 'redux/store';
import { addLocaleData, IntlProvider } from 'react-intl';
import NProgress from 'nprogress';
import routerEvents from 'next-router-events';

addLocaleData([...en]);

routerEvents.on('routeChangeStart', NProgress.start);
routerEvents.on('routeChangeComplete', NProgress.done);
routerEvents.on('routeChangeError', NProgress.done);

export class ExampleApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render() {
        const {
            Component, pageProps, store,
        } = this.props;
        //const locale = getLocaleState(store.getState());
        const locale = 'en';
        return (
            <Container>
                <Provider store={store}>
                    <IntlProvider locale={locale} messages={locales[locale].messages}>
                        <Component {...pageProps} />
                    </IntlProvider>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(configureStore)(withReduxSaga(ExampleApp));

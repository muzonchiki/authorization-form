import React, { PureComponent } from 'react';
import './Layout.css';
import SectionTitle from '../SectionTitle';


class Layout extends PureComponent {
    render() {
        const { header, footer, children } = this.props;
        const renderHeader = this.renderHeader;
        const renderFooter = this.renderFooter;
        return (
            <>
                {renderHeader(header)}
                <main className={`main ${header && 'main--with-header'} ${footer && 'main--with-footer'}`}>
                    <SectionTitle className='main__title' children='Main' />
                    {children}
                </main>
                {renderFooter(footer)}
            </>
        );
    }

    renderHeader(HeaderChild) {
        if(HeaderChild) {
            return (
                <header className='header'>
                    <SectionTitle className='header__title'>header</SectionTitle>
                    <HeaderChild />
                </header>
            );
        }
    }

    renderFooter(FooterChild) {
        if(FooterChild) {
            return (
                <footer className='footer'>
                    <SectionTitle className='footer__title'>footer</SectionTitle>
                    <FooterChild />
                </footer>
            );
        }
    }
}

export default Layout;
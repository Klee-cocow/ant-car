'use client';

import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, ConfigProvider, Layout, Menu, Dropdown, Carousel, Image, Row, Col } from 'antd';
import { HomeOutlined, GlobalOutlined } from '@ant-design/icons';
import theme from '../../theme/themeConfig';
import zhCN from 'antd/es/locale/zh_CN'; // 导入中文资源
import enUS from 'antd/es/locale/en_US'; // 导入英语资源
import ptBR from 'antd/es/locale/pt_BR'; // 导入葡萄牙语资源
import frFR from 'antd/es/locale/fr_FR'; // 导入法语资源
import {  useTranslation } from 'react-i18next'; // 导入 react-i18next
import { Content, Footer, Header } from 'antd/es/layout/layout';
import './css/page.css'
import image1 from '../../public/img/1.jpg';
import image2 from '../../public/img/2.jpg';
import image3 from '../../public/img/3.jpg';
import image4 from '../../public/img/5.jpg';
import HomeFooter from './HomeFooter';

const HomePage = () => {
  const { t, i18n } = useTranslation(); // 初始化 i18n
  const [locale, setLocale] = useState('en'); // 默认中文语言
  const [isScrolled, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  const handleLocaleChange = (newLocale) => {
    setLocale(newLocale);
    console.log(newLocale);
    i18n.changeLanguage(newLocale);
  };


  const lngs = {
    en: { nativeName: 'English' },
    zh: { nativeName: '中文' },
    pt: { nativeName: 'Português' },
    ft: { nativeName: 'Français' },
  };
  const localeMenu = (
    <Menu>
      {Object.keys(lngs).map((lng) => (
        <Menu.Item
          key={lng}
          onClick={() => handleLocaleChange(lng)}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
        >
          {lngs[lng].nativeName}
        </Menu.Item>
      ))}
    </Menu>
  );

  let antdLocale;
  if (locale === 'zh') {
    antdLocale = zhCN;
  } else if (locale === 'en') {
    antdLocale = enUS;
  } else if (locale === 'pt') {
    antdLocale = ptBR;
  } else if (locale === 'fr') {
    antdLocale = frFR;
  }
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);


  return (
    <ConfigProvider theme={theme} locale={antdLocale}>

      <div className="App">
        <Layout className="layout">
          <Header
            style={{
              position: 'fixed',
              zIndex: 3,
              minWidth: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: isScrolled ? '#ffffff' : 'transparent',
              boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none',
            }}
          >
            <h2>LOGO</h2>
            <Menu
              theme="light"
              mode="horizontal"
              style={{ background: 'transparent', borderBottom: 'none', fontWeight: 'bold', fontSize: 16, alignContent: 'center', width: '90%' }}
              defaultSelectedKeys={['home']} // 默认选中首页
            >
              <Menu.Item key="home" icon={<HomeOutlined />}>
                {t('Home')} {/* 使用 t 函数来获取翻译文本 */}
              </Menu.Item>
              <Menu.Item key="app">{t('Vehicle')}</Menu.Item>
              <Menu.Item key="Contact">{t('Contact')}</Menu.Item>
              <Menu.Item key="Blogs">{t('Blogs')}</Menu.Item>
            </Menu>
            <Dropdown overlay={localeMenu}>
              <Button
                style={{
                  background: isScrolled ? '#ffffff' : 'transparent',
                  boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none',
                }}
              >
                <GlobalOutlined />
              </Button>
            </Dropdown>
          </Header>

          <Content>
            <Carousel className='home-pageImg' autoplay >
              <div>
                <Image src={image1.src} preview={false} alt='' />
              </div>
              <div>
                <Image src={image2.src} preview={false} alt='' />
              </div>
              <div>
                <Image src={image3.src} preview={false} alt='' />
              </div>
              <div>
                <Image src={image4.src} preview={false} alt='' />
              </div>
            </Carousel>

            <div className="site-layout-content">
              <h2
                style={{
                  color: 'rgb(50, 2, 40)',
                  textShadow: 'rgba(0, 0.5, 0, 0.1) 0px 0px 5px',
                  fontSize: 36,
                  textAlign: 'center'
                }}
              >
                {t('ProductOverview')}
              </h2>
              <div className='product-image'>

                <div className='product-row'>
                  <div className='product-container'>
                    <Image className='product-img' src={image4.src} alt="" preview={false} />

                    <div className='product-btn-container'>
                      <Button ghost>{t('readmore')}</Button>
                    </div>
                  </div>

                  <div className='product-container'>
                    <Image className='product-img' src={image4.src} alt="" preview={false} />

                    <div className='product-btn-container'>
                      <Button ghost>{t('readmore')}</Button>
                    </div>
                  </div>

                  <div className='product-container'>
                    <Image className='product-img' src={image4.src} alt="" preview={false} />

                    <div className='product-btn-container'>
                      <Button ghost>{t('readmore')}</Button>
                    </div>
                  </div>
                </div>
                <div className='product-row'>
                  <div className='product-container'>
                    <Image className='product-img' src={image4.src} alt="" preview={false} />

                    <div className='product-btn-container'>
                      <Button ghost>{t('readmore')}</Button>
                    </div>
                  </div>

                  <div className='product-container'>
                    <Image className='product-img' src={image4.src} alt="" preview={false} />

                    <div className='product-btn-container'>
                      <Button ghost>{t('readmore')}</Button>
                    </div>
                  </div>

                  <div className='product-container'>
                    <Image className='product-img' src={image4.src} alt="" preview={false} />

                    <div className='product-btn-container'>
                      <Button ghost>{t('readmore')}</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div >

            <div className='introduce'>
              <Image src={image1.src} alt='' preview={false} style={{
                margin: '5%',
                minWidth: '30vw',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '1em',
              }} />
              <div style={{ marginLeft: '5%' }}>
                <h2 style={{
                  fontSize:32

                }}>{t('productTitle')}</h2>
                <br />
                <div style={{
                  marginBottom: '10%',
                  width: '80%',
                  fontSize:16,
                  
                }}>
                  {t('reason')}
                </div>
                <div style={{
                  bottom: '15%',
                }}>
                  <Button type='primary'>{t('readmore')}</Button>
                </div>
              </div>
            </div>
            <br/>
            <div className='introduce'>
              <Image src={image1.src} alt='' preview={false} style={{
                margin: '5%',
                minWidth: '30vw',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '1em',
              }} />
              <div style={{ marginLeft: '5%' }}>
                <h2 style={{
                  fontSize:32

                }}>{t('productTitle')}</h2>
                <br />
                <div style={{
                  marginBottom: '10%',
                  width: '80%',
                  fontSize:16,
                  
                }}>
                  {t('reason')}
                </div>
                <div style={{
                  bottom: '15%',
                }}>
                  <Button type='primary'>{t('readmore')}</Button>
                </div>
              </div>
            </div>

          </Content>
          <Footer style={
        {
          textAlign: 'center',
          padding: 0,
          background: '#f0f3fa',
          color: 'rgba(0, 0, 0, 0.65)',
          boxShadow: 'inset 0 106px 36px -116px rgba(0, 0, 0, 0.14)',
          position: 'relative',
          clear: 'both',
          fontSize: 14,
          lineHeight: 1.5,
          boxSizing: 'border-box'
        }
      }>
        <HomeFooter />
        </Footer>
        </Layout>
      </div>

    </ConfigProvider>
  );
};

export default HomePage;


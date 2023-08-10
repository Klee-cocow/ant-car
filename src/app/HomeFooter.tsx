import { AntCloudOutlined, ChromeOutlined, IeOutlined } from '@ant-design/icons';
import './HomeFooter.css'
import zhCN from 'antd/es/locale/zh_CN'; // 导入中文资源
import enUS from 'antd/es/locale/en_US'; // 导入英语资源
import ptBR from 'antd/es/locale/pt_BR'; // 导入葡萄牙语资源
import frFR from 'antd/es/locale/fr_FR'; // 导入法语资源
import {  useTranslation } from 'react-i18next'; // 导入 react-i18next



const HomeFooter = () => {

    const {t,i18n} = useTranslation();

    return (
        <>
            <section style={
                {
                    maxWidth: '100vw',
                    margin: 'auto',
                    padding: '80px 0 20px',
                    marginInline: 'auto',
                    paddingInline: 48,
                }
            }>
                <section style={
                    {
                        display: "flex",
                        justifyContent: "space-around",
                    }
                } className="sc-footer">
                    <div className='sc-footer-column'>
                        <h2>{t('QuickLinks')}</h2>
                        <div className='sc-footer-item'><a href='https://www.baidu.com/' target="_blank" rel="noopener noreferrer">{t('Home')}</a></div>
                        <div className='sc-footer-item'><a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">{t('Vehicle')}</a></div>
                        <div className='sc-footer-item'><a href='https://www.bing.com/' target="_blank" rel="noopener noreferrer">{t('Contact')}</a></div>
                        <div className='sc-footer-item'><a href='https://www.bing.com/' target="_blank" rel="noopener noreferrer">{t('Blogs')}</a></div>
                    </div>
                    <div className='sc-footer-column'>
                        <h2>{t('ContactUs')}</h2>
                        <div className='sc-footer-item'>{t(`Telephone`)}: +86-9090980</div>
                        <div className='sc-footer-item'>{t(`Mobilephone`)}: +86-9090980</div>
                        <div className='sc-footer-item'>{t(`Address`)}</div>
                    </div>
                    <div className='sc-footer-column'>
                        <h2>{t('Dynamic')}</h2>
                        <div className='sc-footer-item'><a target="_blank" rel="noopener noreferrer">{t(`News1`)}</a></div>
                        <div className='sc-footer-item'><a target="_blank" rel="noopener noreferrer">{t(`News2`)}</a></div>
                        <div className='sc-footer-item'><a target="_blank" rel="noopener noreferrer">{t(`News3`)}</a></div>
                    </div>
                </section>

            </section>
            <section style={
                {
                    boxShadow: 'inset 0 106px 36px -116px rgba(0, 0, 0, 0.14)'
                }
            }>
                <div style={
                    {
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '16px 0',
                        fontSize: 16,
                        lineHeight: 2,
                        textAlign: 'center',
                        borderTop: '1px solid rgba(255,255,255,.25)',
                    }
                }>
                    Copyright ©2023 <a href='https://beian.miit.gov.cn/'>ICP备xxxx号</a>
                </div>
            </section>

        </>

    )
};


export default HomeFooter;
"use client"

import React from 'react';
import { Menu } from "antd";
import {  useTranslation } from 'react-i18next'; // 导入 react-i18next
import { HomeOutlined} from '@ant-design/icons';
import Link from 'next/link';
const PageMenu = ({pageMenuKey}) =>{
    const [t] = useTranslation();
    const menuItems = [
        {key:"home", icon: <HomeOutlined/>, textKey: "Home"},
        { key: "vehicle", icon: null, textKey: "Vehicle" },
        { key: "contact", icon: null, textKey: "Contact" },
        { key: "blogs", icon: null, textKey: "Blogs" },
    ]

    return (
        <Menu
              theme="light"
              mode="horizontal"
              style={{ background: 'transparent', borderBottom: 'none', fontWeight: 'bold', fontSize: 16, alignContent: 'center', width: '90%' }}
              defaultSelectedKeys={[pageMenuKey]} // 默认选中首页
            >
             {menuItems.map((Item)=>(
                <Menu.Item key={Item.key} icon={Item.icon}>
                    <Link href={'/'+ (Item.key == "home" ? "": Item.key)}>{t(Item.textKey)}</Link>
                </Menu.Item>
             ))}
        </Menu>
    )
}

export default PageMenu;
/*
 * @Author: yuanchengyong 
 * @Date: 2020-01-09 10:00:15 
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-03-25 15:15:24
 */
import React, { useState } from 'react'
import SearchArea from "./search";
import ListArea from "./list";
import ButtonBox from "./button-box";
import "./index.less";

export default function () {
    const [listSelected, setListSelected] = useState([]);
    return <div className="list-content">
        <div className="group-area">
            <SearchArea />
        </div>
        <div className="button-area">
            <ButtonBox listSelected={listSelected} />
        </div>
        <div className="list-area">
            <ListArea setListSelected={(selectedRows) => {
                setListSelected(selectedRows);
            }} />
        </div>
    </div >
};
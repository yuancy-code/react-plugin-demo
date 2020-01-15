/*
 * @Author: yuanchengyong 
 * @Date: 2020-01-09 10:00:15 
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-14 16:17:28
 */
import React from "react";
import SearchArea from "./search";
import ListArea from "./list";
import ButtonBox from "./button-box";
import "./index.less";

class List extends React.Component {
    render() {
        return <div className="list-content">
            <div className="group-area">
                <SearchArea />
            </div>
            <div className="button-area">
                <ButtonBox />
            </div>
            <div className="list-area">
                <ListArea />
            </div>
        </div >
    }
}
export default List;
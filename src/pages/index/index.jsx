/*
 * @Author: yuanchengyong 
 * @Date: 2020-01-09 10:00:15 
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-13 17:24:11
 */
import React from "react";
import { Link } from 'react-router-dom';

function Example() {
    return (
        <div>
            <p>This is 'Index' component</p>
            <Link className="app-link"
                to="/list">List</Link>
            <br />
            <Link className="app-link"
                to="/detail">Detail</Link>
        </div >
    );
}
export default Example;
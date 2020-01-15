/*
 * @Author: yuanchengyong 
 * @Date: 2020-01-09 10:00:15 
 * @Last Modified by: zyycy_love@126.com
 * @Last Modified time: 2020-01-13 17:23:05
 */
import React from "react";
import { useState } from 'react';


function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>This is 'User' component</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div >
    );
}
export default Example;
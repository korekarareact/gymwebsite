import React from 'react'
import FilterApp from './filter/FilterApp'
export default React.createClass({
    render() {
        return <div className="content columns">
            <FilterApp data={DATA} />
        </div>
    }
})

var DATA=[
    {text:"跑步機・3300NT",icon:"http://www.sun-pro.com.tw/image/lbike.png"},
    {text:"正宗速燃型健身器 2200NT",icon:"http://hong2011.tw.rakuten-static.com/1129006.jpg"},
    {text:"跑步機 5500NT",icon:"http://tycpw.org/image_message/images/t2.jpg"},
    {text:"正宗速燃型健身器 2200NT",icon:"http://hong2011.tw.rakuten-static.com/1129006.jpg"},
    {text:"跑步機 5500NT",icon:"http://tycpw.org/image_message/images/t2.jpg"},
    {text:"跑步機・3300NT",icon:"http://www.sun-pro.com.tw/image/lbike.png"},
    {text:"正宗速燃型健身器 2200NT",icon:"http://hong2011.tw.rakuten-static.com/1129006.jpg"},
    {text:"跑步機 5500NT",icon:"http://tycpw.org/image_message/images/t2.jpg"},
    {text:"正宗速燃型健身器 2200NT",icon:"http://hong2011.tw.rakuten-static.com/1129006.jpg"},
];

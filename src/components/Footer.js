/**
 * Created by Administrator on 2017/2/9 0009.
 */
//纯显示组件,与数据流无关；FilterLink是一个逻辑组件
import FilterLink from "../container/FilterLink";
import React from 'react';
const Footer = () =>(
  <p>
    show:
    {" "}
    <FilterLink filter="SHOW_ALL">
    All
  </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      completed
    </FilterLink>
  </p>
);
export default Footer;



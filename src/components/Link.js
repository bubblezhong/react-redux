/**
 * Created by Administrator on 2017/2/10 0010.
 */
import React from 'react';
const Link = ({active,children,onClick}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick()
      }}>
      {children}
    </a>
  )
};
export default Link;

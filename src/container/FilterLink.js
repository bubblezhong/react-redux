/**
 * Created by Administrator on 2017/2/10 0010.
 */
//container组件用connect( )方法生成
import { connect } from "react-redux";
import Link from "../components/Link";
import { setVisibility } from "../actions/index";
import React from 'react';
//以下两个方法分别把state和dispatch分别转成Link组件的props;然后作用在显示组件Link上；
const mapStateToProps = (state,ownProps) =>{
  return{
    active:ownProps.filter ===state.visibilityFilter
  }
};
//dispatch怎么处理（生成）用户的输入；dispatch要实现功能：event转化为我们需要的action
const mapDispatchToProps = (dispatch,ownProps) =>{
  return {
    onClick: () =>{
      dispatch(setVisibility(ownProps.filter))
    }
  }
};
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
  export default FilterLink;
//将mapStateToProps和mapDispatchToProps生成的方法作为props给Link；Link会调用这些方法

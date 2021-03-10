import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootState} from "../Redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: RootState): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mapStateToPropsForRedirectType) {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/Login'}/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
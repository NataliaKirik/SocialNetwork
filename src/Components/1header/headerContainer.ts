import {connect} from "react-redux";
import {setAuthUserdata} from "../../Redux/auth_reducer";
import {RootState} from "../../Redux/redux-store";
import HeaderAPIContainer from "./headerAPIContainer";


const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export const HeaderContainer = connect(mapStateToProps, {setAuthUserdata})(HeaderAPIContainer)
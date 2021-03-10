import {connect} from "react-redux";
import {setAuthUserdata} from "../../Redux/auth_reducer";
import {RootState} from "../../Redux/redux-store";
import HeaderAPIContainer from "./headerAPIContainer";
import {usersApi} from "../../api/api";
import {Dispatch} from "redux";


const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const getAuthTC = () => {
    return (dispatch: Dispatch) => {
        usersApi.getAuth()
            .then(response => {
                    if (response.resultCode === 0) {
                        let {id, login, email} = response.data
                        dispatch(setAuthUserdata(id, email, login))
                    }
                }
            )
    }
}


export const HeaderContainer = connect(mapStateToProps, {getAuthTC})(HeaderAPIContainer)
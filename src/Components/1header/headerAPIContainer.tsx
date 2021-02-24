import React from "react";
import Header from "./header";
import axios from "axios";
import {RootState} from "../../Redux/redux-store";

export type HeaderAPIContainerProps = {
    setAuthUserdata: (id: number, email: string, login: string) => void
    isAuth: null | boolean
    login: null | string
}


class HeaderAPIContainer extends React.Component<HeaderAPIContainerProps, RootState> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, login, email} = response.data.data
                        this.props.setAuthUserdata(id, email, login)
                    }
                }
            )
    }

    render() {
        return <Header {...this.props}/>;
    }

}

export default HeaderAPIContainer
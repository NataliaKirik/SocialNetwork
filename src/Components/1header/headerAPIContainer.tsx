import React from "react";
import Header from "./header";
import {RootState} from "../../Redux/redux-store";

export type HeaderAPIContainerProps = {
    getAuthTC: () => void
    isAuth: null | boolean
    login: null | string
}


class HeaderAPIContainer extends React.Component<HeaderAPIContainerProps, RootState> {

    componentDidMount() {
        this.props.getAuthTC()
    }

    render() {
        return <Header {...this.props}/>;
    }

}

export default HeaderAPIContainer
import React from "react";
import Main, {MainProps} from "./main";
import {connect} from "react-redux";
import {compose} from "redux";
import {RootState} from "../../Redux/redux-store";
import {addPost, getStatus, updateNewPostText, updateStatus} from "../../Redux/main_Reducer";


const mapStateToProps = (state: RootState) => {
    return {
        dataMain: state.mainPage,
        status: state.mainPage.status
    }
}

class MainContainer extends React.Component<MainProps, RootState> {

    componentDidMount() {
        this.props.getStatus('3')
    }

    render() {
        return <Main {...this.props}/>;
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, updateNewPostText, getStatus, updateStatus})
)(MainContainer)


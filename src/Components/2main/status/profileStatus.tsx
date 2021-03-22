import React from "react";

export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
    }

    render() {
        return (
            <>
                {this.state.editMode ? <div>
                        <input value={this.props.status} autoFocus={true} onBlur={() => {
                            this.deactivateEditMode()
                        }}/>
                    </div>
                    :
                    <div>
                <span onDoubleClick={() => {
                    this.activateEditMode()
                }}>{this.props.status}</span>
                    </div>}

            </>)
    }
}






import React from "react";
import { UserInfo } from "./UserInfo";

export class UserList extends React.Component {
    render () {
        return (
            <div>
                <ul>
                {this.props.users.map( userInfo => <li><UserInfo info={userInfo} /></li>)}
                </ul>
            </div>
        )
    }
}
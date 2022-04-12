/** @format */

import axios from "axios";
import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/6481225432795d8cdf48f0f85800cf66.jpg";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users") // Запрос //
      .then((response) => {
        // Ответ //
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;

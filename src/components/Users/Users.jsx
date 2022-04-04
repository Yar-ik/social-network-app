/** @format */

import axios from "axios";
import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/6481225432795d8cdf48f0f85800cf66.jpg";
let users = [
  {
    id: 1,
    photoUrl:
      "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    followed: false,
    fullName: "Yaroslav",
    likestatus: "I am a boss",
    location: { city: "Belgorod", country: "Russia" },
  },
  {
    id: 2,
    photoUrl:
      "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    fullName: "Vasya",
    followed: true,
    likestatus: "I am a boss too",
    location: { city: "Kursk", country: "Russia" },
  },
  {
    id: 3,
    photoUrl:
      "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    followed: false,
    fullName: "Sasha",
    likestatus: "I am a boss too",
    location: { city: "Moscow", country: "Russia" },
  },
];
let Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users") // Запрос //
      .then((response) => {
        // Ответ //
        props.setUsers(response.data.items);
      });
  }
  // в пропсах сюда приходят пользователи //

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                className={styles.userPhoto}
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
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
};

export default Users;

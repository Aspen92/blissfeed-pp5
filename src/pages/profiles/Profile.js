import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../context/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";
import { useSetProfileData } from "../../context/ProfileDataContext";

// The Profile component displays a single profile.
const Profile = (props) => {
  const { profile, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  // useCurrentUser hook retrieve information about the current user
  const currentUser = useCurrentUser();
  // Checks if the current user is the owner of the profile
  const is_owner = currentUser?.username === owner;
  // useSetProfileData hook get functions for following and unfollowing a profile
  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            // If the current user is following the profile, display an Unfollow button
            <Button
              className={`${btnStyles.Button} ${btnStyles.Red}`}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleUnfollow(profile)}
            >
              Unfollow
            </Button>
          ) : (
            // If the current user is not following the profile, display a Follow button
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright}`}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleFollow(profile)}
            >
              Follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;

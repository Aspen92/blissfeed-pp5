import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../context/ProfileDataContext";
import Profile from "./Profile";

// The PopularProfiles component displays a list of popular profiles
const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3 mt-3"
      }`}
    >
      {popularProfiles.results.length ? (
        <>
          <p className="text-center">
            <strong>Top Followed Profiles</strong>
          </p>
          {mobile ? (
            // If "mobile" is true, display a smaller list of profiles
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            // If "mobile" is false, display the full list of profiles
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        // If there are no popular profiles, display a spinner.
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;

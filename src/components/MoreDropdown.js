import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";

// Component that renders three dots, with onClick event handler passed through React.forwardRef.
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

// Component that renders a dropdown menu with edit and delete options.
export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onMouseDown={(event) => event.preventDefault()}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onMouseDown={(event) => event.preventDefault()}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

// Component that renders a dropdown menu for editing profile details.
export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
      {/* Redirect to the edit page for this user's profile */}
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          onMouseDown={(event) => event.preventDefault()}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> Edit Profile
        </Dropdown.Item>
        {/* Redirect to the page for changing the username of this user's profile */}
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          onMouseDown={(event) => event.preventDefault()}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          Change Username
        </Dropdown.Item>
        {/* Redirect to the page for changing the password of this user's profile */}
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          onMouseDown={(event) => event.preventDefault()}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          Change Password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
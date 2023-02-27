import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { Button } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };
  // Handle submission of the comment form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to the server to create the new comment
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      // Update the comments list with the new comment
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      // Update the post object with the new comment count
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      // Reset the comment content state
      setContent("");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    // Form to submit a comment
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          {/* Link to the profile of the user who made the comment */}
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          {/* Input for the comment */}
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      {/* Button to submit the comment */}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Bright} d-block ml-auto `}
        disabled={!content.trim()}
        onMouseDown={(event) => event.preventDefault()}
        type="submit"
      >
        Post
      </Button>
    </Form>
  );
}

export default CommentCreateForm;

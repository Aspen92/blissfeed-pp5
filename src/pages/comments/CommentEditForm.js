import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Button } from "react-bootstrap";

function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments } = props;

  const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };
  // Event handler for submitting edited comment
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send PUT request to update comment in database
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      // Hide edit form
      setShowEditForm(false);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    // Form to edit a comment
    <Form onSubmit={handleSubmit}>
      {/* Form group for textarea */}
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        {/* Button for canceling */}
        <Button
          className={`${btnStyles.Button} ${btnStyles.Bright}`}
          onClick={() => setShowEditForm(false)}
          onMouseDown={(event) => event.preventDefault()}
          type="button"
        >
          Cancel
        </Button>
        {/* Button for submitting */}
        <Button
          className={`${btnStyles.Button} ${btnStyles.Bright}`}
          disabled={!content.trim()}
          onMouseDown={(event) => event.preventDefault()}
          type="submit"
        >
          Save
        </Button>
      </div>
    </Form>
  );
}

export default CommentEditForm;

import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";

export const Comments = () => {
  const { data: comments, isLoading } = useGetCommentsQuery();
  const { filter } = useSelector((state) => state.filter);

  const filterComents = () => {
    return comments.filter(({ author }) =>
      author.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {isLoading && <Loader />}
      {comments && (
        <Grid>
          {comments.length > 0 &&
            filterComents().map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
        </Grid>
      )}
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};

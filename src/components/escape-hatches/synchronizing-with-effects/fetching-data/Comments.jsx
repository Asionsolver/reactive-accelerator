import { useEffect, useState } from "react";
import { fetchComments } from "../../../../api/fetchComments";

// eslint-disable-next-line react/prop-types
export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;

    // fetch comments here
    async function startFetching() {
      const json = await fetchComments(postId);

      if (!ignore) {
        setComments(json);
      }
    }
    startFetching(); // async function call

    return () => {
      ignore = true;
    };
  }, [postId]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
}

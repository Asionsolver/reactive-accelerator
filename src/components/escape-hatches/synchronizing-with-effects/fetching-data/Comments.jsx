import { useEffect, useState } from "react";
import { fetchComments } from "../../../../api/fetchComments";

// eslint-disable-next-line react/prop-types
export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;

    // console.log('Effecting...')
    
    
    // fetch comments here
    async function startFetching() {
      // console.log('Fetching...')
      const json = await fetchComments(postId);

      // setComments(json);

      if (!ignore) {
        // console.log('fetching comments from if block')
        setComments(json);
      }
    }


    startFetching(); // async function call


    // console.log('fetching comments')
    // console.log('after fetching comments')

    return () => {
      ignore = true;
    };
  }, [postId]);

  return (
    <ul style={{display:'flex', flexDirection:"column", alignItems:'center', backgroundColor: 'red' }}>
      {comments.map((comment) => (
        <li style={{color:'white', backgroundColor:'black' }} key={comment.id}>{comment.name}</li>
      ))}
    
    </ul>
  );
}

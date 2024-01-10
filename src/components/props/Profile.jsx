/* eslint-disable no-undef */
import Avatar from "./Avatar";
import Info from "./Info";


// Forwarding props with the JSX spread syntax
export default function Profile(props) {
 
  return (
    <div>
      <Avatar {...props} />
      <Info age={props.age} />
    </div>
  );
}

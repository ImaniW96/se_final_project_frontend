// import "../Community/community.css";
// function Community() {
//   return (
//     <div>
//       <h1 Link to="/community" className="commuinity__header">
//         Comming soon
//       </h1>
//     </div>
//   );
// }
// export default Community;
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Community/community.css";

function Community() {
  return (
    <div>
      <Link to="/community" className="community__header">
        Coming soon
      </Link>
    </div>
  );
}

export default Community;

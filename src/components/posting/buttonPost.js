import React from "react";
import { Component } from "react";

<<<<<<< Updated upstream
export default class ButtonPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      tempTitle: "",
      setTitle: "",
=======
var titleVar = "";
var sendedVar;


export const Usernamename = () => {
  const { currentUser, logout } = useAuth()
  return <div>{currentUser.displayName}</div>
}

const handleChange = (event) => {
  titleVar = event.target.value;
}
export default function ButtonPost (){
  const [name, setName] = useState([]);
  const { currentUser, logout } = useAuth()
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("MyPosts").get();
      setName(data.docs.map(doc => (doc.data())));
>>>>>>> Stashed changes
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleVisibility() {
    this.setState((state) => {
      if (state.clicked == true) {
        return { clicked: false };
      } else {
        return { clicked: true };
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    if (this.state.clicked) {
      //visible
      return (
        <div>
          <button
            onClick={this.toggleVisibility}
            className="btn-block btn btn-primary"
          >
            post
          </button>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="defaultTitle"
              className="form-control mt-4 mb-1"
            />
            <div></div>
            <button type="submit" className="btn btn-block mt-2 btn-warning">
              set title
            </button>
          </form>
        </div>
      );
      //invisible 
    } else {
      return (
        <div>
          <button
            onClick={this.toggleVisibility}
            className="btn-block btn btn-primary"
          >
            post
          </button>
        </div>
      );
    }
  }
}

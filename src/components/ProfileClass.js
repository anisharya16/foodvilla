import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      count3: 0,
      userInfo: [],
    };
    console.log("Child - constructor " + this.props.name);
  }

  async componentDidMount() {
    console.log("Child - componentDidMount " + this.props.name);
    const data = await fetch("https://api.github.com/users/anisharya16");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);

    // Why we need to do cleanup/ Why we need to unmount things
    this.timer = setInterval(() => {
      console.log("Anish Arya");
    }, 1000);
  }

  // Check Profile component for functional component equivalent code implementation
  // Obj: If we want to make an api call which would depend on every count and count2 states change.
  componentDidUpdate(prevState, prevProps) {
    console.log("Component did update");
    if (
      this.state.count !== prevState.count &&
      this.state.count2 !== prevState.count2
    ) {
      // code
      // do something
    }

    // If we want to make another api call which depends of another state
    if (this.state.count3 !== prevState.count3) {
      // do something
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    // We have to cleanup our mess
    clearInterval(this.timer);
  }

  // another output of consoel.log statements
  // because of async statements, there will be a delay
  // async componentDidMount() {
  //   const data = await fetch("https://api.github.com/users/anisharya16");
  //   const json = await data.json();
  //   this.setState({
  //     userInfo: json,
  //   });
  //   console.log(json);
  //   console.log("Child - componentDidMount " + this.props.name);
  // }

  render() {
    const { count } = this.state; // Destructured form
    console.log("Child - render " + this.props.name);
    return (
      <div className="border border-sky-500 bg-slate-100 my-2 p-2 rounded-lg">
        <h1>Profile Class Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Count: {this.state.count}</h3>
        <h3>Count: {count}</h3>
        <h3>Count2: {this.state.count2}</h3>
        <button
          className="bg-cyan-200 hover:bg-cyan-300 p-1 rounded-lg my-2"
          onClick={() => {
            // NEVER MUTATE STATE DIRECTLY
            // NEVER DO, this.state.count=something
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increment Counter
        </button>
        <div className="flex">
          <img
            src={this.state.userInfo.avatar_url}
            className="border border-cyan-300 rounded-lg"
          />
          <div className="mx-10">
            <p className="text-xl">{this.state.userInfo.name}</p>
            <p className="text-xl">{this.state.userInfo.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileClass;

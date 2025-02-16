class Test extends React.COmponent{
  constructor(props){
    super(props);
    this.state={
      name: "Test"
    }
  }
  render(){
    return(
      <div> <--- farò un tutorial per il div
         i'm {this.state.name} !
      </div>
    )
  }
}
ReactDOM.render(test/>, document.getElementById( ' container'));

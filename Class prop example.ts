class PropsExample extends React.COmpoment{
  construcotr(props){
    super(props):
  }

render(){
  reutrn(
    <h1>{this.props.messagge}</h1>
  );
 }
}

ReactDOM.render(<PropsExample messagge={"qualsiasi cosa"}/>, document.geElementByID(' container'));

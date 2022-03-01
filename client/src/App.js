
import './App.css';
import Form from './Form.js';
import Table from './Table.js';
import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      data:[],
      edit:[]
    }
  }
  create=data=>{
    if(!data.isedit)
    {
    axios.post('http://localhost:5000/info',data).then(res=>{
      this.getAll();
    })}
    else{
      axios.put('http://localhost:5000/info/update',data).then(res=>{
        this.getAll();
      })
    }
  }
  componentDidMount(){
       this.getAll();
  }
  getAll()
  {
    axios.get('http://localhost:5000/info').then(res=>{
      console.log(res.data);
      this.setState({
        data:res.data
      })
    })
  }
 update=data=>{
   console.log(data);
   this.setState({
     edit:data
   })
 }
 del=data=>{
   var ops=window.confirm(`Are u sure to delete ${data.Name}`);
   if(ops){
   axios.delete(`http://localhost:5000/info/del/${data._id}`).then(res=>{
     console.log(res);
     this.getAll();
   })}
 }
  render()
  {
    return<div>
       <h1>Details</h1>
       <div className="container mt-4">
         
       <div className="row">
       <div className="col-6">
        
          <Form mydata={this.create }  setform={ this.state.edit } />
       </div>
       <div className='col-6'>
          <Table getdata={this.state.data} setdata={this.update} del={this.del}/>
       </div>
        </div>
     </div>
    </div>
  }
}
export default App;













































































































import React from 'react';
import './Form.css'

class Form extends React.Component{
  constructor()
  {
    super();
    this.state={
      _id:"",
      Name:"",
      Age:"",
      City:"",
      isedit:false
    }
  }

  infochange= (event) =>{
      const {name,value}=event.target;
      this.setState({
          [ name ]:value
      })

  }
  infosubmit=(event) =>{
      if(!this.state.isedit)
      {
      let data={
        isedit:this.state.isedit,
        Name:this.state.Name,
        Age:this.state.Age,
        City:this.state.City
      }
      this.props.mydata(data);
    }
    else{
      let data={
        isedit:this.state.isedit,
        _id:this.state._id,
        Name:this.state.Name,
        Age:this.state.Age,
        City:this.state.City
      }
      this.props.mydata(data);
    }
  }
  componentWillReceiveProps(props)
  { 
     if(props.setform._id!=null)
     { console.log(props.setform._id)
       
      this.setState({
        isedit:true,
        _id:props.setform._id,
        Name:props.setform.Name,
        Age:props.setform.Age,
        City:props.setform.City
        })
     }
  }
 
  render()
  {
    return<div>
       <form onSubmit={this.infosubmit} autoComplete='off' >
  <div className="form-row align-items-center">
    <div className="col-auto">
      <label className="sr-only" for="inlineFormInput">Name</label>
      <input type="text" className="form-control mb-2" placeholder="Name"
       onChange={this.infochange}
       name='Name'
       
       
      />
    </div>
    <div className="col-auto">
      <label className="sr-only" >Age</label>
      <input type="text" className="form-control mb-2" placeholder="Age"
        onChange={this.infochange}
        name='Age'
       
        
      />
    </div>
    <div className="col-auto">
      <label className="sr-only" >City</label>
      <input type="text" className="form-control mb-2" placeholder="City"
        onChange={this.infochange}
        name='City'
        
      />
    </div>
  
  
    <div className="addtask  col-auto">
      <button type="submit" className="btn btn-primary mb-2" >{this.state.isedit?'Update':'Create'}</button>
    </div>
  </div>
</form>
    </div>
  }
}
export default Form;






































































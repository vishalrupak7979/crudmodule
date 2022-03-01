import React from 'react';

class Table extends React.Component{
  constructor()
  {
    super();
   }
 
  render()
  {
    return<div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
   {
     this.props.getdata.length> 0? ( this.props.getdata.map(e=>
       <tr key={e._id}>
       <td>{ e.Name}</td>
       <td>{ e.Age}</td>
       <td>{ e.City}</td>
       <td><button className='btn btn-primary '
       onClick={event=>{
         this.props.setdata(e)
       }}
       
       >Edit</button></td>
       <td><button className='btn btn-primary'
        onClick={event=>{
          this.props.del(e)
        }}
       
       >Delete</button></td>
      </tr> )):(
       <tr>
     <td> No data</td>
     </tr>
      )
   }
  </tbody>
</table>
    </div>
  }
}
export default Table;



































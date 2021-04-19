import React from 'react';

const OrderListTable = (props) => {
    let {displayName,email,title,_id}=props.order;
    console.log(_id)

let handleUpdate=(id,event)=>{

let value=event.target.value
let data={
    id:id,
    status:value
}
fetch("http://localhost:5000/update",{
    method:'PATCH',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(data)

}

)
.then(response =>response.json())
.then(data =>console.log(data))


}
    return (
        <>
            <tr>
     
      <td>{displayName}</td>
      <td>{email}</td>
      <td>{title}</td>
      <td>Credit Card</td>
      <select onChange={(event)=>handleUpdate(_id,event)} class="form-select" aria-label="Default select example">
  <option selected>Status</option>
  <option value="Pending"  > Pending </option>
  <option value="On Going"  >On Going</option>
  <option value="Done"  > Done</option>
</select>
    </tr>
    
        </>
    );
};

export default OrderListTable;
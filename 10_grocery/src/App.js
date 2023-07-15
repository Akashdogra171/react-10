import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { isValidElement } from "react";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){  //id name is emoty
      //Alert display
      // setAlert({
      //   show: true, msg: "Please Enter the value", type: "danger"
      // })

      showAlerat(true,'Please enter the value','danger')
    }else if(name && isEdit){
        //  deal with edit
        setList(list.map(item=>{
          if(item.id===editId){
            return {...item,title:name}
          }
          return item
        }))
        setName('');
        setEditId(null);
        showAlerat(true,'successfully edit','success');
        setIsEdit(false);
    }else{
      //show alert
      showAlerat(true,"Successfuly Added","success")
      //add item to list
      const newItem = {id:new Date().getTime().toString(),title:name};
      setList([...list,newItem]);
      setName('');

    }
  };


  const showAlerat= (show=false,msg="",type="")=>{
    setAlert({show,type,msg})
  }

  const removeItem =(id)=>{
    showAlerat(true,'item deleted successfully','danger')
    setList(list.filter(item=>item.id!== id))
  }

  const editItem=(id)=>{
    const specificItem = list.find(item=>item.id===id)
    setIsEdit(true);
    setEditId(id);
    setName(specificItem.title)
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert = {showAlerat}/>}
        <h3>Grocery list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g onion"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <button className="submit-btn" type="submit">
            {isEdit ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
        <List items={list} removeItem = {removeItem} editItem= {editItem}/>
        <button className="clear-btn" onClick={()=>{setList([])}}>Clear items</button>
      </div>
      )}
      
    </section>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state= {
    newItem:'',
    list:[]
  }

  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem(){
    //create item with unique ID
    const newItem = {
      id: 1+ Math.random(),
      value: this.state.newItem.slice()
    };

    //copy current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:''
    });
  }

  deleteItem(id){
    //copy current list of item
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render() {
    return(
      <div className='main-container'>
        <h1>My plans</h1>
        <div className='container'>
          <h2>Add a plan</h2>
          <input type='text'
            placeholder='Type here...'
            value={this.state.newItem}
            onChange={e => this.updateInput('newItem', e.target.value)} />
          <button className='btn-add' onClick={() => this.addItem()}
          >Add to list
          </button>
          <br/>
          <ul className='lists'>
            { this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button
                    className='btn-dlt'
                    onClick={() => this.deleteItem(item.id)}>
                  X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {

const [blnNos,setBlnNos]=useState(false);
const [blnChars,setBlnChars]=useState(false);
const [charLen,setCharLen]=useState(10);
const [pass,setPass]=useState('');

const genPass= useCallback(()=>{
  var str='abcdefghijklmnopqrstuvwxyz';
  if(blnChars){
    str+='!@#$%^&*()';
  }
  if(blnNos){
    str+='1234567890';
  }
  let strPass=""
  for(var i=0; i<charLen; i++){
    let ch=Math.floor(Math.random()*str.length +1);
    strPass+=str.charAt(ch);
  }
  setPass(strPass);
},[blnNos,blnChars,charLen])
useEffect(()=>{
  genPass();
},[blnNos,blnChars,charLen])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Random Password Generator
        </p>
      <label>Password</label><input type="text" value={pass}></input>
      <div className='footnote'>
        <div className="cb"><input type="checkbox" label="Include Numbers" defaultChecked={blnNos} onChange={(event)=>{
            setBlnNos(event.target.checked)
          }}></input>Include Numbers?</div>
        <div className="cb"><input type="checkbox" label="Include Char" defaultChecked={blnChars} onChange={(event)=>{
          setBlnChars(event.target.checked) 
          }}></input>Include Chars?</div>
        <div className="cb"><input type="range" max="30" min="1" label="Include Char" value={charLen} onChange={(event)=>{setCharLen(event.target.value)}}></input>Length {charLen}</div>
      
      </div>
      </header>
    </div>
  );
}

export default App;

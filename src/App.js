import logo from './logo.svg';
import './App.css';

function App() {
    return (

        <form class = " new ">
            
        <div  class="background form-group">
          <label for=" exampleInputEmail1"   class = "class"   > Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
     </div>
        <div class=" js form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check">
          <input type="checkbox" class=" form1 form-check-input" id="exampleCheck1"/>
          <label class=" form2 form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class=" btn btn-primary">Submit</button>
      </form>
    );
}


export default App;
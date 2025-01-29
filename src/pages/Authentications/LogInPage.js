import React, { Fragment } from 'react'
import "./loginStyle.css";

function LogInPage() {
  return (
    <div style={{minHeight:'300px'}}>
    <div class="login" >
	<h1>Login</h1>
    <form method="#">
    	<input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large">Log in</button>
    </form>
</div>
    </div>
  )
}

export default LogInPage
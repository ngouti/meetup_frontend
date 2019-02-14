import React from 'react'

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    routeTo = url => {
        this.props.history.push(url)
      }

      handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
      login = e => {
        e.preventDefault();
        // console.log(e)
        // debugger
        fetch(`http://localhost:3000/auth` , {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })
          .then(res => res.json())
          .then(res => {
            this.props.setUser(res.token, res)
            this.props.history.push(`/users/${res.id}`)
        
            })
            // debugger
        //   .then(console.log)

      }
    
    
      render() {
        return (
          <div>
            
            <form>
              <div className="form">
                <label>Username</label>
                <input onChange={this.handleChange} value={this.state.username} name="username" type="text" 
                />
              </div>
              <div className="form">
                <label>Password</label>
                <input onChange={this.handleChange} value={this.state.password} name="password" type="text"
                />
              </div>
              <button onClick={this.login}>Login</button>
            </form>
          </div>
        )
      }
    
      
}



export default Login
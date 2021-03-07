import React from 'react';


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Pass: '',
            userName: '' 
        }
    }

    onEmailChange = (event) => {
        this.setState({Email: event.target.value})
    }

    onUsernameChange = (event) => {
        this.setState({userName: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({Pass: event.target.value})
        if (event.key === 'Enter') {
            this.onSubmitReg();
        }
    }

    onSubmitReg = () => {
        fetch('https://blooming-inlet-71509.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.Email,
                name: this.state.userName,
                password: this.state.Pass,
            })
        })
            .then(response => {
                if (response.status === 204) {
                    return alert('Please, fullfill registration form!');
                } else {
                    response.json()
                    .then(user => {
                        if (user.id) {
                            this.props.loadUser(user);
                            this.props.onRouteChange('FcrApp');
                        } else { 
                            alert('Email already registerd');
                            Array.from(document.getElementsByName('password')).map(input => (input.value = ''))
                        }
                    })
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return(
            <article className='flex justify-center py-5'>       
                <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white bg-opacity-10 rounded-lg shadow-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                    <div className="self-center text-xl font-semibold text-white sm:text-2xl dark:text-white">
                        Create a new account
                    </div>
                    <span className="justify-center text-sm text-center text-gray-800 flex-items-center dark:text-gray-400">
                        Already have an account ?&#160; 
                        <button 
                        onClick={() => onRouteChange('login')} 
                        type="submit" 
                        className="text-sm font-semibold underline text-gray-200 hover:text-white">
                        Login Here
                        </button>
                    </span>
                    <div className="pt-3 px-3 mt-6">
                        <div action="#">
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input 
                                        type="email"
                                        name="email" 
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                        onChange={this.onEmailChange}
                                        placeholder="Email"/>
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input 
                                        type="text"
                                        name="username" 
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        onChange={this.onUsernameChange}
                                        placeholder="Username"/>
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input 
                                        type="password" 
                                        name="password"
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                        onChange={this.onPasswordChange}
                                        onKeyPress={this.onPasswordChange}
                                        placeholder="Password"/>
                                </div>
                            </div>
                            <div className="flex w-full my-4">
                                <button 
                                onClick={this.onSubmitReg} 
                                type="submit" 
                                className="py-2 px-4  bg-bludark hover:bg-base1 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>                                               
            </article>
        )
    }
}

export default Registration;
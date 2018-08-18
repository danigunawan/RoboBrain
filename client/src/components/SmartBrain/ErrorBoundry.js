import React from 'react';


export class ErrorBoundry extends React.Component{
    contructor(){
        super();
        this.state={
            hasError: false
        }
    }
    componentDidCatch(error, info){
        this.setState({ hasErorr: true });
    }
    render(){
            if(hasError){
                return (<h1> Oops Something Went Wrong</h1>)
            } else {
               return this.props.children;
            }
    }
   
}
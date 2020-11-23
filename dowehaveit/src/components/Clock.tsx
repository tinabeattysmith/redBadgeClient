import React, {Component} from 'react';
type AcceptedProps = {
    testProp: string,
    optionalProp?: string
};

type ClockState = {
    time: Date
}

class Clock extends Component<AcceptedProps, ClockState> {
    constructor(props: AcceptedProps){
        super(props)
            // this.setState = {
            //     time: New Date()
            // }
    }
    
    tick() {
        this.setState({
            time: new Date()
        })
    };

    componentWillMount() {
        this.tick();
    }

    componentDidMount() {
        setInterval(()=> this.tick(), 1000);
    };

    render(){
        return(
            <div>
                <h4>{this.state.time.toLocaleTimeString()}</h4>
                <p>{this.props.testProp}</p>
                <p>{this.props.optionalProp}</p>
            </div>)}};
            
export default Clock;

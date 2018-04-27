import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            labels: ["All", "Active", "Done"],
            datasets: [{
                label: "Todos",
                backgroundColor: 'grey',
                borderColor: 'green',
                data: [0, 0, 0]
            }]
        };
    }

    getTodosList = (todos) => {
        const active = [];
        const done = [];
        let all = [];

        todos.filter(todo => {
            if (todo.status === 'active') {
                active.push(todo);
            } else if (todo.status === 'done') {
                done.push(todo);
            }
        });
        all = active.concat(done);

        this.setState({
            datasets: [{
                    label: "Todos",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    data: [all.length, active.length, done.length]
                }]
        });
    }

    componentDidMount() {
        const { todos } = this.props.state.iteams;
        this.getTodosList(todos);
    }

    componentWillReceiveProps(nextProps) {
        const { todos } = nextProps.state.iteams;
        this.getTodosList(todos);
    }

    render() {
        return (
            <div className="chart__wrap">
                <div>
                    <p>See you statistic in real-time:</p>   
                </div>
                <div id="chart">
                    <Doughnut data={this.state}
                        options={{maintainAspectRatio: false}}
                        height={500}
                        width={700} />      
                </div>  
            </div>   
        )
    }
}

export default Chart;
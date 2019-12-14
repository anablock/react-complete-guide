import React from 'react'

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Anablock</h1>
                <p>Salesforce Implementation Partner</p>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            </div>
        )
    }
}
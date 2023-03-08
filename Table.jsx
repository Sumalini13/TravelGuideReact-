import axios from "axios";
import React,{Component} from "react";
import "./Place.css"

class Table extends Component{
    state = {
        data:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/getPlaces')
        .then(response =>{
            this.setState({
                data:response.data
                
            });
            console.log(response)
        })
        .catch(error =>{
            console.log(error);
        });
    }

    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>placeid</th>
                        <th>TravelSpot</th>
                        <th>Price</th>
                        <th>location</th>
                        <th>famousFood</th>
                        <th>locationid</th>
                        <th>pincode</th>
                        <th>agentno</th>
                        <th>agentName</th>
                        <th>country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user => (
                        <tr>
                            <td>{user.placeid}</td>
                            <td>{user.travelSpot}</td>
                            <td>{user.price}</td>
                            <td>{user.location}</td>
                            <td>{user.famousFood}</td>
                            <td>{user.locationid}</td>
                            <td>{user.pincode}</td>
                            <td>{user.agentno}</td>
                            <td>{user.agentName}</td>
                            <td>{user.country}</td>
                            <td>
                                <button  onClick={() => this.handleDelete(data.placeid)} > Edit </button>
                            </td>

                            <td>
                                <button onClick= {() => this.handleUpdate(data.placeid)}>
                                    Delete
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;
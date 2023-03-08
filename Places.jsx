import React,{Component} from "react";
import axios from "axios";
import "./Place.css"

class Places extends Component{
    constructor(props)
    {
        super(props);
        this.state={
             placeid:"",
             travelSpot:"",
             price:"",
            location:"",
            famousFood:"",
            locationid:"",
            pincode:"",
            agentno:"",
            agentName:"",
             country:"",
             PlaceData:[],

    };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:8080/getPlaces").then((response) => {
            this.setState({ PlaceData: response.data });
        });
    }



    handleplaceid = (event) =>{
        this.setState({  placeid: event.target.value});
    };
    handletravelSpot = (event) =>{
        this.setState({  travelSpot: event.target.value});
    };
    handleprice = (event) =>{
        this.setState({ price : event.target.value});
    };
    handlelocation = (event) =>{
        this.setState({  location : event.target.value});
    };
    handlefamousFood = (event) =>{
        this.setState({  famousFood : event.target.value});
    };
    handlelocationid = (event) =>{
        this.setState({ locationid: event.target.value});
    };
    handlepincode = (event) =>{
        this.setState({  pincode: event.target.value});
    };
    handleagentno = (event) =>{
        this.setState({  agentno: event.target.value});
    };
    handleagentName = (event) =>{
        this.setState({  agentName: event.target.value});
    };
    handlecountry = (event) =>{
        this.setState({  country: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data ={
            
            placeid:this.state.placeid,
            travelSpot: this.state.travelSpot,
            price: this.state.price,
            location: this.state.location,
             famousFood: this.state.famousFood,
            locationid: this.state.locationid,
             pincode: this.state.pincode,
             agentno: this.state.agentno,
             agentName: this.state.agentName,
             country: this.state.country,
        };
        console.log(data);
        axios.post('http://localhost:8080/addPlaces',data).then((response)=>
        {
            this.setState({
                PlaceData: [...this.state.PlaceData, response.data],
                placeid:"",
             travelSpot:"",
             price:"",
            location:"",
            famousFood:"",
            locationid:"",
            pincode:"",
            agentno:"",
            agentName:"",
             country:"",
                
            });
        });
    };
    // handleUpdate = (placeid, data) => {
    //     // Send PUT request to update fuel data with the given ID
    //     axios.put(`http://localhost:8080/update/${placeid}`, data).then((response) => {
    //         // Update the state to reflect the updated fuel data
    //         const updatedPlaceData = this.state.PlaceData.map((place) => {
    //             if (place.id === response.data.placeid) {
    //                 return response.data;
    //             } else {
    //                 return place;
    //             }
    //         });
    //         this.setState({ PlaceData: updatedPlaceData });
    //     });
    // };
    handleDelete = (placeid) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:8080/delete/${placeid}`)
        window.location.reload().then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedPlaceData = this.state.PlaceData.filter(
                (place) => place.id !== placeid
            );
            this.setState({ PlaceData: updatedPlaceData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            placeid:data.placeid,
            travelSpot: data.travelSpot,
            price: data.price,
            location: data.location,
             famousFood: data.famousFood,
            locationid: data.locationid,
             pincode: data.pincode,
             agentno: data.agentno,
             agentName: data.agentName,
             country: data.country,
            isEdit: true,
        });
        console.log(this.state.placeid);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };
    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            placeid:this.state.placeid,
            travelSpot: this.state.travelSpot,
            price: this.state.price,
            location: this.state.location,
             famousFood: this.state.famousFood,
            locationid: this.state.locationid,
             pincode: this.state.pincode,
             agentno: this.state.agentno,
             agentName: this.state.agentName,
             country: this.state.country,
        };
        const placeid = this.state.placeid;
        axios.put(`http://localhost:8080/update/${placeid}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    placeid:"",
             travelSpot:"",
             price:"",
            location:"",
            famousFood:"",
            locationid:"",            
            pincode:"",
            agentno:"",
            agentName:"",
             country:"",
                   
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };
        
    render()
    {
        return(
            <div className="ui">
                <fieldset>
                   <div className="o"> <h2><center>Tourist Guide</center></h2><br></br></div>
            <form onSubmit={this.handleSubmit} className="spot" >
               <label className="login-label">Place id</label><br></br>

               <input
               className="spot"
               type="number"
               value={this.state.placeid}
               onChange={this.handleplaceid}
               />

               <br></br><br></br>

               <label className="login-label">Travel Spot</label><br></br>

               <input
               className="spot"
               type="text"
               value={this.state.travelSpot}
               onChange={this.handletravelSpot}
               />

               <br></br><br></br>

               <label className="login-label">Price</label><br></br>
               <input
               className="spot"
               type="number"
               value={this.state.price}
               onChange={this.handleprice}
               />
                
                <br></br><br></br>

               <label className="login-label">Location</label><br></br>
               <input
               className="spot"
               type="text"
               value={this.state.location}
               onChange={this.handlelocation}
               />

<br></br><br></br>

               <label className="login-label">Famous Food</label><br></br>
               <input
               className="spot"
               type="text"
               value={this.state.famousFood}
               onChange={this.handlefamousFood}
               />

<br></br><br></br>

               <label className="login-label">Location id</label><br></br>
               <input
               className="spot"
               type="number"
               value={this.state.locationid}
               onChange={this.handlelocationid}
               />

<br></br><br></br>

               <label className="login-label">Pincode</label><br></br>
               <input
               className="spot"
               type="number"
               value={this.state.pincode}
               onChange={this.handlepincode}
               />

<br></br><br></br>
               <label className="login-label">AgentNo</label><br></br>
               <input
               className="spot"
               type="number"
               value={this.state.agentno}
               onChange={this.handleagentno}
               />

<br></br><br></br>
               <label className="login-label">AgentName</label><br></br>
               <input
               className="spot"
               type="text"
               value={this.state.agentName}
               onChange={this.handleagentName}
               />

<br></br><br></br>
               <label className="login-label">Country</label><br></br>
               <input
               className="spot"
               type="text"
               value={this.state.country}
               onChange={this.handlecountry}
               />

<br></br><br></br>

               <button className="submittt" type="submit" id="asd">
Submit
               </button>
               <br></br><br></br>
               </form>
               </fieldset>

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
          <th>Delete</th>
          <th>Edit</th>
      </tr>
  </thead>
  <tbody>
      {this.state.PlaceData.map(user => (
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
                  <button  onClick={() => this.handleDelete(user.placeid)} > Delete </button>
              </td>

              <td>
                  <button onClick= {() => this.handleEdit(user)}>
                      Edit
                  </button>
              </td>

          </tr>
      ))}
  </tbody>
</table>

<br></br><br></br><br></br><br></br>

                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="placeid" value={this.state.placeid} />
                    <label>Placeid:</label>
                    <input
                        type="number"
                        name="placeid"
                        value={this.state.placeid}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Travel Spot:</label>
                    <input
                        type="text"
                        name="travelSpot"
                        value={this.state.travelSpot}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Famous Food:</label>
                    <input
                        type="text"
                        name="famousFood"
                        value={this.state.famousFood}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Location id:</label>
                    <input
                        type="number"
                        name="locationid"
                        value={this.state.locationid}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Pincode:</label>
                    <input
                        type="number"
                        name="pincode"
                        value={this.state.pincode}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Agentno:</label>
                    <input
                        type="number"
                        name="agentno"
                        value={this.state.agentno}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Agent Name:</label>
                    <input
                        type="text"
                        name="agentName"
                        value={this.state.agentName}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Country:</label>
                    <input
                        type="text"
                        name="country"
                        value={this.state.country}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>   




</div>
);
}

               
    };

export default Places;
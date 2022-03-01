<template>
    <div class="bdetails">
    <div class="bhead">
        <h4 style="width:50%;margin:10px">Buyers</h4>
        <div style="width:50%;display:flex;flex-direction:row-reverse !important;">
            <Button  style="width:20%;margin:10px;padding:15px;" @click="addNew"><span style="color:black">Add New</span></Button>
            <i class="pi pi-filter" style=margin:20px></i>
        </div>
    </div>
    <div class="bfoot" >        
        <table id="firstTable">
  <thead>
    <tr>
       <th>ID</th> 
      <th>Name</th>
      <th>Contact Person</th>
      <th>Contact No</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Fax No</th>
      <th>Email ID</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user">
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.contactPerson}}</td>
      <td>{{user.contactno}}</td>
      <td>{{user.address}}</td>
      <td>{{user.phone}}</td>
      <td>{{user.faxno}}</td>
      <td>{{user.email}}</td>
    </tr>
  </tbody>
</table>
    </div>
    <Dialog header="Add Buyer" v-model:visible="displayaddNew" :style="{width: '60%'}" >
            <div class="bdialog">
                <div class="details">
                    <div style="display:flex;margin-bottom: 15px">
                        <div style="border: 1px solid gray;border-radius: 50%;">
                            <img src="C:\Anand\Project\myapp\sample\src\assets\clogo.png" class="logo">
                        </div>            
                    </div>
                    <div>
                        <label>Business Name</label>
                        <InputText v-model="businessname" id="businessname" placeholder="Business Name" class="btextBox"/>      
                    </div>
                    <div class="contact">
                        <div >
                            <label>Contact Person</label>
                            <InputText v-model="contactPerson" id="contactPerson" placeholder="contactPerson" class="btextBox" />      
                        </div>
                        <div>
                            <label>Contact No</label>
                            <InputText v-model="contactNo" id="contactNo" placeholder="contactNo" class="btextBox" />
                        </div>
                    </div>
                    <div >
                        <label>Address</label>                        
                        <Textarea v-model="address" id="address" placeholder="address" class="btextBox" />      
                    </div>
                    <div class="contact">
                            <div>
                            <label>Postal</label>                            
                            <InputNumber v-model="postal" id="postal" placeholder="postal" :min="0" :max="8" :useGrouping="false" class="btextBox"  />      
                            </div>
                            <div >
                            <label>Country</label>                            
                            <Dropdown v-model="selectedCountries" :options="countries" placeholder="Select a Country" class="btextBox" />      
                        </div>
                    </div>
                    <div class="contact">
                            <div>
                            <label>State</label>                            
                            <Dropdown v-model="selectedStates" :options="states" placeholder="Select a State" class="btextBox" />      
                            </div>
                            <div >
                            <label>City</label>                             
                            <Dropdown v-model="selectedcities" :options="cities" placeholder="Select a City" class="btextBox" />     
                        </div>
                    </div>
                    <div class="contact">
                            <div>
                            <label>Fax No</label>
                            <InputText v-model="faxno" id="faxno" placeholder="faxno" class="btextBox" />      
                            </div>
                            <div >
                            <label>Phone No</label>                            
                            <InputNumber v-model="phoneno" id="phoneno" placeholder="phoneno" :min="0" :max="8" :useGrouping="false" class="btextBox"  />      
                        </div>
                    </div>
                    <div class="contact">
                            <div>
                            <label>Email Id</label>
                            <InputText v-model="email" id="email" placeholder="email" class="btextBox"/>      
                            </div>
                            <div >
                            <label>Website</label>
                            <InputText v-model="website" id="website" placeholder="website" class="btextBox" />      
                        </div>
                    </div>
                
                    <span>+Add Address</span>
                

                </div>
            </div>
            <div id='footer'>
                <Button label="Submit" icon="pi pi-check" autofocus />
                <Button label="Close" icon="pi pi-times"  class="p-button-text"/>
                
            </div>
        </Dialog>
    </div>
</template>
<script>

export default {
  name: "Buyer",
  el: '#firstTable',
  data(){
      return {
          users: [
      { id:1,name: "American Eagle",contactPerson:'Wade Warren',contactno:'9876543210',address:'3452 Mariamman Kovil Street,Tirupur, 541215', phone: '+65 8954 5456', faxno: '+65 8954 5456',email:'BradSimmons@gmail.com' },
      { id:2,name: "Renuar",contactPerson:'Jacob Jones',contactno:'9876543310',address:'3452 Mariamman Kovil Street,Tirupur, 541215', phone: '+65 8954 5456', faxno: 'IT Manager',email:'BradSimmons@gmail.com' },
      { id:3,name: "Stradivarius",contactPerson:'Jenny Wilson',contactno:'9865543210',address:'3452 Mariamman Kovil Street,Tirupur, 541215', phone: '+65 8954 5456', faxno: '+65 8954 5456',email:'BradSimmons@gmail.com' },
      { id:4,name: "Zara",contactPerson:'Wade Warren',contactno:'9876543240',address:'3452 Mariamman Kovil Street,Tirupur, 541215', phone: '+65 8954 5456', faxno: '+65 8954 5456',email:'BradSimmons@gmail.com' },
      { id:5,name: "H&M",contactPerson:'Leslie Alexander',contactno:'9876543260',address:'3452 Mariamman Kovil Street,Tirupur, 541215', phone: '+65 8954 5456', faxno: '+65 8954 5456',email:'BradSimmons@gmail.com' },
      { id:6,name: "Bershka",contactPerson:'Esther Howard',contactno:'9876543710',address:'3452 Mariamman Kovil Street,Tirupur, 541215', phone: '+65 8954 5456', faxno: '+65 8954 5456',email:'BradSimmons@gmail.com' },
    ],
        selectedCountries: null,
        selectedStates: null,
        countries: ['Australia','China','India','Pakistan','United States'],
        states: ['New South Wales', 'Queensland', 'Tibet','Qinghai','Karnataka','Tamil Nadu','Balochistan'
          ,'Gilgit-Baltistan','Texas','California'],
        cities:['Sydney','Melbourne','Hong Kong','Beijing','Chennai','Coimbatore','Madurai','Karachi','Lahore','New York','Los Angeles'],
    displayaddNew: false
      }

      
    
  },
  methods: {
        addNew() {
            this.displayaddNew = true;
        },
  }  
}
</script>
<style scoped>
.bdetails{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.btextBox{

    width: 100% !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
    
}
.contact{
    display: flex;
    flex-direction: row;   
    /* align-items: flex-start; */
    align-content: flex-start;
    gap: 20px;
}
#footer{
    display: flex;
    flex-direction: row-reverse;
}
.bdialog{
    margin: 10%;
}
table {
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}
table th {
text-align: left;
  background: #F2F2F2;;
  color: black;
  padding: 8px;
  
  
}
table td {
  text-align: left;
  padding: 8px;
  /* border-right: 2px solid #7D82A8; */
  height: 100%;
}

.bhead{
    display: flex;
    flex-direction: row;   
    height:10%;
}
.bfoot{
    display: flex;
    flex-direction: row;   
    /* height: 90%; */
}
</style>

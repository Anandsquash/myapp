<template>
  <div class="container">
    <!-- <div class="frame1">
      <div class="header">
        <p>Gate Wears</p>
        <hr>
      </div>
      <div class="nav">
        <span>Dashboards</span>
        <p style="font-size: 11px;color:white">All report are seen under Analytics</p>
        <a href="#analytics">Analytics</a>        
      </div>
      <div class="nav">
        <span>Business</span>
        <p style="font-size: 11px;color:white">Other Details</p>
        <a v-on:click="$router.push('/')">Buyers</a>   
        <a href="#orders">Orders</a>  
        <a href="#subcontractors">Subcontractors</a>       
      </div>
      <div class="nav">
        <span>Inventory</span>
        <p style="font-size: 11px;color:white">Order items and find items in rack</p>
        <a href="#stores">Stores</a>   
        <a href="#item">Item</a>  
        <a href="#supplier">Suppliers</a>       
      </div>
      <div class="nav">
        <span>Global Setting</span>
        <p style="font-size: 11px;color:white">Other Details</p>
        <a href="#stores">Settings</a>  
               
      </div>
      
      
    </div> -->
    <!-- <div class="frame2">      
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText type="text" v-model="search" placeholder="Search" class="p-inputtext "/>
        </span>      
      <router-view/>
    </div> -->
    <router-view/>
  </div>
</template>

<style >
/* @import "/assets/styles/style.scss"; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
}
.p-inputtext {
    margin: 0;
    width: 100%;
}
.container{
  display: flex;
  flex-direction: row;
  /* color:white; */

}
.nav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
  
}
.nav a:hover {
  color: #f1f1f1;
  
}
.frame1{
  width:15%;
  background-color: #1B283B;;
  display:flex;
  flex-direction: column;
  padding: 15px; 
  padding-top: 2px; 

}
.frame2{
  width:85%;
  display:flex;
  flex-direction: column;
}
.header {
  text-align: left;
  font-weight: bold;
  font-family: Abhaya Libre;
  /* color: white; */
}
span{
  font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
/* line-height: 32px; */
display: flex;
align-items: center;
color: #E7F788;
width: 100%;
}
p{
  display: flex;
  align-items: center;
}
hr {
  /* border-top: 1px dashed red; */
  border: 1px dashed #FFFFFF;
  
}


</style>

<template>
    <div class="details">
        <h1>Add Your Company Details</h1>
        <div>
            <img src="C:\Anand\Project\myapp\sample\src\assets\clogo.png" id="logo">
            <span style="color:orange">Upload your company logo</span>
        </div>
        <div class="name">
            <label>Company Details </label>
            <InputText v-model="cname" id="cname" placeholder="Company Name" class="textBox" />      
        </div>
        <div >
            <label>Email id </label>
            <InputText v-model="email" id="email" placeholder="Email Id" class="textBox" />      
        </div>
        <div>
            <label>Job Title</label>
            <InputText v-model="job" id="job" placeholder="Job Title" class="textBox" />
        </div>
        <div>
            <label>Year of Experience</label>
            <InputText v-model="experience" id="experience" placeholder="Year of Experience" class="textBox" />
        </div>
        <div>
            <Checkbox id="binary" v-model="checked" :binary="true" />
            I accept the <span style="color:orange">terms and conditions</span>
        </div>
        <div>
            <Button label="Back" class="back"/>
            <Button label="Send OTP" class="otp"/>
        </div>


    </div>
</template>   
<script>
export default {
  name: "Form1",
  data(){
      return{
          selectedCountries: null,
          selectedStates: null,
          fname:'',
          countries: ['Australia','China','India','Pakistan','Russia','United States'],
          states: ['New South Wales', 'Queensland', 'Tibet','Qinghai','Karnataka','Tamil Nadu','Balochistan'
          ,'Gilgit-Baltistan','Altay','Amur','Texas','California']
      }      
  }    
};
</script>
<style scoped>
.back{
    /* width :333px;
    height:40px */
    /* height: 40px;
width: 97px;
left: 0px;
top: 0px;
border-radius: 3px;   */
/* margin-right: 20px; */
margin-top: 10px ;
width: 115px;
}
.otp{
    width :933px;
Height :40px;
Radius :3px;
margin-left: 16px;

}
#logo{
    width:80px;
    height:80px;
}

</style>


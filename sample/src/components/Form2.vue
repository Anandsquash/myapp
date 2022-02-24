<template>
    
    <div class="details">
        <h1>Add Your Company Details</h1>
        <div style="display:flex;margin-bottom: 15px">
            <div style="border: 1px solid gray;border-radius: 50%;">
                <img src="C:\Anand\Project\myapp\sample\src\assets\clogo.png" class="logo">
            </div>
            <span style="color:orange;margin:30px">Upload your company logo</span>
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
        <div style="margin-bottom:20px">
            <Checkbox id="binary" v-model="checked" :binary="true" />
            I accept the <span style="color:orange">terms and conditions</span>
        </div>
        <div class="footer">
            <Button label="Back" class="back" v-on:click="$router.push('/form1')"/>

            <Button label="Send OTP" class="otp" v-on:click="$router.push('/form3')"/>
        </div>


    </div>
</template>   
<script>
// import '../assets/styles/style.scss';
export default {
  name: "Form2",
  data(){

  }    
};
</script>
<style >

.footer{
display:flex;
/* display: inline-flex; */
gap:3%;
}
.back{
width:17% !important;
}
.otp{
width:80% !important;

}
.logo{
    width:80px;
    height:80px;
    object-fit: cover;
}

</style>


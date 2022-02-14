<template>
    <div class="details">
        <h1>Enter your OTP</h1>
        <p>For your security, we need to verify your identity. We sent a 5-digit <br>
        code to <strong>name@domain.com.</strong>Please enter it below.</p>
        <div class="name">
            <label>Enter your code</label>
            <div class="userinput">
                <!-- <InputNumber id="minmax" v-model="value4" mode="decimal" :min="0" :max="1" /> -->
                <InputText v-model="ip1" id="ip1" class="input" />
                <InputText v-model="ip2" id="ip2" class="input"/>
                <InputText v-model="ip3" id="ip3" class="input"/>
                <InputText v-model="ip4" id="ip4" class="input"/>
                <InputText v-model="ip5" id="ip5" class="input"/>
            </div>                        
        </div>
        <div class="footer">
            <Button label="Back" class="back"/>
            <Button label="Verify OTP" class="otp"/>
        </div>
        <div>
            <p>Didn't receive the email? Check your spam filter for an email <br>
            from <span style="color:orange">name@domain.com</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
  name: "Form3",
  data(){
            
  }    
};
</script>
<style scoped>
.input{
    margin: 15px;
    margin-top: 10px ;
    margin-bottom: 20px ;
    height: 60px;
    width: 60px;
    text-align: center;
    border: 1px solid #CECECE;
    box-sizing: border-box;
    border-radius: 3px;
}

</style>



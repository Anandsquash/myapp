<template>
    <div style="display:flex;flex-direction:row">
        <h4 style="width:50%;padding:10px">Buyers</h4>
        <div style="width:50%;display:flex;flex-direction:row-reverse !important;">
            <Button label="Add New" style="width:20%;margin:15px;"/>
        </div>
    </div>
    <div></div>
</template>
<script>

export default {
  name: "Buyer",
  data(){

  }    
}
</script>
<style scoped>
.bdetails{
    display: flex;
    flex-direction: column;
}
.bhead{
    display: flex;
    flex-direction: row;   
    width: 10%;
}
.bfoot{
    display: flex;
    flex-direction: row;   
    width: 90%;
}
.iconsStyle{
    display: flex;
    flex-direction: row-reverse !important;    
}
</style>

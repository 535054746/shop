<template>
    <div>
        <div v-for="(item,index) in cartList" :key="index">
            <div v-show="cart">
               {{productDictList[item.id].name}}
            </div> 
        </div>
    </div>
</template>
<script>
import product_data from '../product.js'
export default {
        data(){
            return{
                productList:product_data,
            }
        },
        computed:{
             cartList () {
                return this.$store.state.cartList;
            },
            productDictList () {
                const dict = {};
                this.productList.forEach(item => {
                    dict[item.id] = item;
                });
                return dict;
            }
        },
        methods:{
        
        }  
}   
</script>

<style>
    

</style>

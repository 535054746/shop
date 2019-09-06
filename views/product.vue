<template>
    <div v-if="product">
        <div class="productList">
            <div class="product-image">
                <img :src="product.image">
            </div>
        
        <div class="product-info">
            <h1 class="product-name">{{product.name}}</h1>
            <div class="product-cost">￥{{product.cost}}</div>
            <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
        </div>
        </div>
        <div class="product-desc">
            <h2>产品介绍</h2>
            <img  :src="'https://img30.360buyimg.com/jgsq-productsoa/jfs/t1/31459/8/3634/45855/5c7738c9E919ef0fd/a227ab1db401cae9.jpg'">
        </div>
    </div>
</template>

<script>
import product_data from '../product.js'
// import { parse } from 'url';
// import product from '../product.js';
// import { setTimeout } from 'timers';
export default {
    data(){
        return{
            //获取路由中的参数
            id:parseInt(this.$route.params.id),
            product:null
        }
    },methods:{
          getProduct () {
            // 真实环境通过 ajax 获取，这里用异步模拟
          setTimeout(()=>{
              this.product=product_data.find(item=>item.id===this.id);
          },500)
        },
        //加入购物车
        handleAddToCart(){
            this.$store.commit('addCart',this.id)
        }
    },
    mounted(){
        //初始化，请求数据
        this.getProduct();
    }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
.productList{
    margin: 32px;
    padding: 32px;
    background: #ffffff;
    border: 1px solid #dddee1;
    border-radius: 10px;
    overflow: hidden;
}
.product-image{
    width: 50%;
    height: 550px;
    float: left;
    text-align: center
}
.product-image img{
    height: 100%;
}
.product-info{
    width: 50%;
    float: left;
    padding: 150px 0 250px;
    height: 150px;
    text-align: center
}
.product-cost{
    color: #f2352e;
    margin: 8px 0
}
.product-add-cart{
    display: inline-block;
    padding: 8px 64px;
    margin: 8px 0;
    background: #2d8cf0;
    color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
}
.product-desc{
    background: #ffffff;
    margin: 32px;
    padding: 32px;
    border: 1px solid #dddee1;
    border-radius: 10px;
    text-align: center
}
.product-desc img{
    width:70%;
    display: block;
    margin: 32px auto;
    padding: 32px;
    border-bottom: 1px solid #dddee1
}
</style>

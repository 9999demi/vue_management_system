<template>

        <el-container class="home_container">
            <el-header>
                <div>
                    <span>
                        management system
                    </span>
                </div>
                <el-button type="info" plain @click="logout">Quit</el-button></el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                    background-color="#333744"
                    text-color="#fff"
                    active-text-color="#409eff">
                        <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.authName}}</span>
                            </template>


                            <el-menu-item :index="subItem.id+''" v-for="subItem in item.childrem" :key="subItem.id">
                                <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>{{subItem.authName}}</span>
                                </template>
                            </el-menu-item>
                        </el-submenu>
                        
                    </el-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>

</template>
<script>
export default {
    data(){
        return{
            menulist:[
                {id:1, authName:'User Management', path:'users', order:'1', childrem:[{id:101, authName:'User List', path:'users', order:'1'}]},
                {id:2, authName:'Rights Management', path:'rights', order:'1', childrem:[{id:201, authName:'Role List', path:'users', order:'1'},{id:202, authName:'Rights List', path:'users', order:'1'}]},
                {id:3, authName:'Item Management', path:'goods', order:'1',childrem:[{id:301, authName:'Item List', path:'users', order:'1'},{id:302, authName:'Classfication Params', path:'users', order:'1'},{id:303, authName:'Item Classfication', path:'users', order:'1'}]},
                {id:4, authName:'Order Management', path:'orders', order:'1', childrem:{}},
                {id:5, authName:'Data Reports', path:'reports', order:'1', childrem:{}}
                
            ],
            
        }

    },
    // created(){
    //     this.getMenuList()
    // },
    methods:{
        logout(){
            window.sessionStorage.clear();
            this.$router.push("/login")
        },
        async getMenuList(){
            const { data: res} = await this.$http.get("menus")
            if(res.meta.status != 200) return this.$message.console.error();
            this.menulist = res.data
            console.log(res)
        }
    }
}
</script>
<style Lang="less" scoped>
.home_container{
    height: 100%;
}
.el-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #373d41;
    color: white;
    font-size: 20px;
    
}
.el-header > div{
    display: flex;
    align-items: center;
}
.el-header>div span{
    margin-left: 15px;
}
.el-aside{
    background-color:  #333744;
}

.el-main{
    background-color: #eaedf1 ;
}

</style>
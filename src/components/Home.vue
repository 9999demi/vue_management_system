<template>

        <el-container class="home_container">
            <el-header>
                <div>
                    <span>
                        management system
                    </span>
                </div>
                <el-button type="info" plain @click="logout">Quit</el-button>
            </el-header>
            <el-container>
                <el-aside :width="isCollapase? '64px':'200px'">
                    <div class="toggle_btn" @click="toggleCollapse">|||</div>
                    <el-menu
                    background-color="#333744"
                    text-color="#fff"
                    active-text-color="#409eff"
                    unique-opened
                    :collapse="isCollapase"
                    :collapse-transition="false"
                    router
                    :default-active="activePath">
                        <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.authName}}</span>
                            </template>


                            <el-menu-item :index="'/'+ subItem.path" v-for="subItem in item.childrem" :key="subItem.id" @click="saveNavState('/'+subItem.path)">
                                <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>{{subItem.authName}}</span>
                                </template>
                            </el-menu-item>
                        </el-submenu>
                        
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view>

                    </router-view>
                </el-main>
            </el-container>
        </el-container>

</template>
<script>
export default {
    data(){
        return{
            menulist:[
                {id:1, authName:'User Management', path:'users', order:'1', childrem:[{id:101, authName:'User List', path:'users', order:'1'}]},
                {id:2, authName:'Rights Management', path:'rights', order:'1', childrem:[{id:201, authName:'Role List', path:'role', order:'1'},{id:202, authName:'Rights List', path:'rights', order:'1'}]},
                {id:3, authName:'Item Management', path:'goods', order:'1',childrem:[{id:301, authName:'Item List', path:'item', order:'1'},{id:302, authName:'Classfication Params', path:'classfication', order:'1'},{id:303, authName:'Item Classfication', path:'users', order:'1'}]},
                {id:4, authName:'Order Management', path:'orders', order:'1', childrem:{}},
                {id:5, authName:'Data Reports', path:'reports', order:'1', childrem:{}}
                
            ],
            isCollapase: false,
            activePath:''

            
        }

    },
    created(){
        //this.getMenuList()
        this.activePath=window.sessionStorage.getItem('activePath')
    },
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
        },
        toggleCollapse(){
             this.isCollapase=!this.isCollapase
        },
        saveNavState(activePath){
            window.sessionStorage.setItem('activePath',activePath)
            this.activePath=activePath
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
.el-menu{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: none;
    }
.el-main{
    background-color: #eaedf1 ;
}
.toggle_btn{
    background-color: #4a5064;
    font-size: 10pt;
    line-height: 24px;
    color: white;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}

</style>
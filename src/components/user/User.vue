<template>
    <div>
        <h3>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">index</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">user management</a></el-breadcrumb-item>
                <el-breadcrumb-item>user list</el-breadcrumb-item>
            </el-breadcrumb>
            <el-card>

                <el-row :gutter="20">
                    <el-col :span="7">
                        <el-input placeholder="请输入内容">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="primary"> add </el-button>
                    </el-col>
                </el-row>
                <el-table :data="userlist" border stripe>
                    <el-table-column type="index">

                    </el-table-column>
                    <el-table-column label="name" prop="username"> 
                        
                    </el-table-column>
                    <el-table-column label="email" prop="email"> 
                        
                    </el-table-column>
                    <el-table-column label="mobile" prop="mobile"> 
                        
                    </el-table-column>
                    <el-table-column label="role_name" prop="role_name"> 
                        
                    </el-table-column>
                    <el-table-column label="status"> 
                        <template slot-scope="scope">
                            <!-- {{scope.row.mg_status}} -->
                            <el-switch v-model="scope.row.mg_status">
                            </el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="operation" width="180px"> 
                        <template>
                            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
                            
                                <el-tooltip effect="dark" content="role assign" placement="top" :enterable="false">
                                    <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
                                </el-tooltip>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
 
                    :current-page="queryInfo.pagenum"
                    :page-sizes="[1,2,5,10]"
                    :page-size="queryInfo.pagesize"
                    layout="total, sizes, prev, pager, next"
                    :total="total">
                </el-pagination>
            </el-card>
        </h3>
    </div>
</template>

<script>

export default({
    data(){
        return{
            userlist:[
                {id:500, role_name:"super admin", username:"admin", email:"abcd@qq.com", mobile:"1233445", mg_status:"true"},
                {id:502, role_name:"test", username:"linken", email:"bad@gmail.com", mobile:"124002", mg_status:"false"}
            ], 
            total:2,
            queryInfo:{
                query:'',
                pagenum:1,
                pagesize:2,
            }
        }
    },
    created(){
        // this.getUserList()
    },
    method:{
        async getUserList(){
            const { data:res } = await this.$http.get('users',{ params: this.queryInfo})
            if(res.meta.status !==200){
                return this.$message.error('failed')
            }
            this.userlist=res.data.users
            this.total=res.data.total
            console.log(res)
        },
        handleSizeChange(newSize){
            console.log(newSize)
            this.queryInfo.pagesize=newSize
            // this.getUserList
        },
        handleCurrentChange(newPage){
            console.log(newPage)
        }
    }
})
</script>

<style Lang="less" scoped>

</style>
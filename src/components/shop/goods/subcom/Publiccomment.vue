<template>
   
                        <div class="comment-box">


                            <!-- 新增评论的表单 -->
                            <form id="commentForm" name="commentForm" class="form-box" @submit.prevent="sendComments">
                                <div class="avatar-box">
                                    <i class="iconfont icon-user-full"></i>
                                </div>
                                <div class="conn-box">
                                    <div class="editor">
                                        <textarea id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"  v-model="commenttxt.commenttxt"></textarea>
                                        <span class="Validform_checktip"></span>
                                    </div>
                                    <div class="subcon">
                                        <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                                        <span class="Validform_checktip"></span>
                                    </div>
                                </div>
                            </form>



                            <!-- 查看评论的部分 -->
                            <ul id="commentList" class="list-box">
                                <p v-if="comment.length==0" style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
                                <li v-for="(item,i) in comment" :key="i">
                                    <div class="avatar-box">
                                        <i class="iconfont icon-user-full"></i>
                                    </div>
                                    <div class="inner-box">
                                        <div class="info">
                                            <span>{{item.user_name}}</span>
                                            <span>{{item.add_time}}</span>
                                        </div>
                                        <h3>{{item.content}}</h3>
                                    </div>
                                </li>
                            </ul>




                            <!-- 放置页码 -->
                            <div class="page-box" style="margin:5px 0 0 62px">
                                <div id="pagination" class="digg">
                                    <span class="disabled">« 上一页</span>
                                    <span class="current">1</span>
                                    <span class="disabled">下一页 »</span>
                                </div>
                            </div>
                        </div>
                 
</template>



<script>
export default {
    props:['id'],
    data(){
        return{
            comment:[],
            commenttxt:{
                commenttxt:""
            }

        }
    },
    methods:{
        getComment(){
            let url = `${this.$api.commentList}goods/${this.id}?pageIndex=1&pageSize=10`
            this.$http.get(url).then(res=>{
            if(res.data.status==0){
               
                // console.log(res.data.message)
                this.comment = res.data.message;
            }
            })
        },
       sendComments(){
            let url1 = `${this.$api.comment}goods/${this.id}`
            this.$http.post(url1,this.commenttxt).then(res=>{
                // console.log(res.data.message)
                 this.getComment()
            })
        }
    },
    created(){
        this.getComment()
    },
    watch:{
        id(){
            this.getComment() 
        }
    }
};
</script>

<style scoped>
  .wrapper{
      height: 2000px;
  }
</style>
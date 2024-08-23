import{model,Schema} from 'mongoose';
const blogSchema =new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
    },
    vidUrl:{
        type:String,
       
     
    },
    date:{
        type:Date,
        default:Date.now
    }

},{
    timestamps:true
})
const Blog = model('Blog',blogSchema);
export default Blog;

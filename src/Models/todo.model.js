import mongoose ,{Schema} from "mongoose";

const todoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{timestamps:true});

todoSchema.methods.setIsCompletedTrue = function(){
    return true
}
todoSchema.methods.setIsCompletedFalse = function(){
    return false
}

export const Todo = mongoose.model('todo', todoSchema)
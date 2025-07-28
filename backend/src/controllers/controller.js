const aiservice=require('../services/ai.services')// reuire ai services
module.exports.getreview=async (req,res)=>{
    // prompt
    const code=req.body.code;// take prompt from ai
    if(!code){
        return res.status(400).send("Prompt is required");
    }
    const response=await aiservice(code);// pass ai service in prompt
    res.status(200).send(response);
}
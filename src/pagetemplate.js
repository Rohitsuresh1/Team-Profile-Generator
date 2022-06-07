var html="";

const returnHtml=data=>{
    for(i=0;i<data.length;i++){
        if(data[i].getRole()==='Manager'){
            html+='Manager';
        } else if (data[i].getRole()==='Engineer') {
            html+='Engineer';
        } else {
            html+='Intern';
        }
    }
 return html;
}

module.exports= data=>{
    return `${returnHtml(data)}`;
};
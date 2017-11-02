p=(r="")=>{
d=(j,f,k)=>{for(var i=0;i<j;i++)f(i);for(var i=k||j;i>=0;i--)f(i)}
d(10,(l)=>{d(l,(i)=>r+=i);r+="\n"},10-1-1)
return r.trim()
}

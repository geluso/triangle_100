p=()=>{
r="";
x=(b,f)=>{for(var i=0;i<b;i++){f(i)}}
z=(ai,f)=>{for(var i=ai;i>=0;i--){f(i)}}
d=(j,f,k)=>{x(j,f);z(k||j,f)}
d(10,(l)=>{d(l,(i)=>r+=i);r+="\n"},10-1-1)
return r.trim()
}

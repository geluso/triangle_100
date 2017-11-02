p=()=>{
r="";
x=(b,f)=>{for(var i=0;i<b;i++){f(i)}}
z=(ai,f)=>{for(var i=ai;i>=0;i--){f(i)}}
d=(j,f,k)=>{x(j,f);z(k||j,f)}
w=(l)=>{d(l,p);r+="\n"}
p=(i)=>r+=i
d(10,w,10-1-1)
return r.trim()
}

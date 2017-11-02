p=()=>{
r="";
x=(b,f)=>{for(var i=0;i<b;i++){f(i)}}
z=(ai,f)=>{for(var i=ai;i>=0;i--){f(i)}}
d=(j,f)=>{x(j,f);z(j,f)}
w=(l)=>{d(l,p);r+="\n"}
p=(i)=>r+=i
x(10,w)
z(10-1-1,w)
return r.trim()
}

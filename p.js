p=()=>{
r="";
a=(zi,f)=>{for(var i=0;i<zi;i++){f(i)}}
z=(ai,f)=>{for(var i=ai;i>=0;i--){f(i)}}
d=(j,f)=>{a(j,f);z(j,f)}
w=(l)=>{d(l,p);r+="\n"}
p=(i)=>r+=i
a(10,w)
z(10-1-1,w)
return r.trim()
}

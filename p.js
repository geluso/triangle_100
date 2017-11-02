p=()=>{
r="";
x=(a,b,d,f)=>{for(var i=a;i<b;i+=d){f(i)}}
z=(ai,f)=>{for(var i=ai;i>=0;i--){f(i)}}
d=(j,f)=>{x(0,j,1,f);z(j,f)}
w=(l)=>{d(l,p);r+="\n"}
p=(i)=>r+=i
x(0,10,1,w)
z(10-1-1,w)
return r.trim()
}

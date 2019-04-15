f="";d=1;
debugger
for(var r=0;r!=-1;r+=d){
  r2=""
  for(var c=0;c<=r;c++){
    console.log(r,c)
    r2+=c+(c==r?"":c)
  }
  f+=r2+"\n";
  d=r>9?-1:1
}

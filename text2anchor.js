function t2a(inp){

  var pattern = new RegExp('^(https?:\\/\\/)?'+'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+'((\\d{1,3}\\.){3}\\d{1,3}))'+'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+'(\\?[;&a-z\\d%_.~+=-]*)?'+'(\\#[-a-z\\d_]*)?$','i');

  if(typeof(inp) == "string"){

    out = inp.split(" ").map(addTags).map((_t)=>{
      return decodeURI(encodeURI(_t).split("%0A").map(addTags).join("%0A"));
    }).join(" ");

    console.log(out);

    return out;

  }else if(inp.nodeType){
    inp.innerHTML = t2a(inp.innerHTML);
    return true;
  }

  function addTags(_s){
    console.log(_s);
    //_s =  decodeURI(_s);
    if(pattern.test(_s)){
      console.log(1);
      return (`<a href="${_s}">${_s}</a>`);
    }else{
      console.log(2);
      return _s;
    }
  }

}

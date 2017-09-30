import superagent from "superagent"

// let ajax = superagent

var params = {
  header: {}
};
var formdata;
var obj = {
  send: function(data){
    params.data = data;
    return obj
  },
  get: url => {
    params.url = url;
    params.type = 'get';
    return obj;
  },
  post: (url) => {
    params.url = url;
    params.type = 'post';
    return obj;
  },
  set: (key, value) => {
    //string
    if(typeof key === 'string'){
      params.header[key] = value;
    }
    //object{}
    if(key instanceof Object){
      // params.header = { ...params.header, ...key}
    }
  },
  ok: function(){
    return obj
  },
  upload: url => {
    params.url = url;
    params.type = 'upload'
    return obj;
  },
  attach: (key,file) => {
    // if(!formdata){
    //   formdata = new FormData();
    // }
    // formdata.append(key, file);
    params.files = [{key,file}]
    return obj;
  },
  end: (fn) => {
    let { url = false, data, type, header, files, } = params;
    if(!url){
      console.error("ｕｒｌ字符串为空");
      return false;
    }
    if(type === 'upload'){
      superagent
      .post(url)
      .set(header)
      .attach(files[0].key, files[0].file)
      .end( (err, res) => {
        fn(res.text, res);
      })
    }else{
      superagent
      .post(url)
      .set(header)
      .send(data)
      .end( (err, res) => {
  
        fn(res.text, res);
      })
    }

  },
  error: () => {
    return obj;
  }
}
export function post(url){
  return obj.post(url)
}
export function upload(url){
  return obj.upload(url)
}
// export default ajax
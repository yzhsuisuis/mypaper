
const BASE_URL = 'https://tea.qingnian8.com/api/bizhi';

export function request(config={}){	
	let {
		url,
		method="GET",
		header={}
	} = config
	
	url = BASE_URL+url
	header['access-key'] = "xxm123321@#"
	
	
	return new Promise((resolve,reject)=>{		
		uni.request({
			url,
			method,
			header,
			success:res=>{
				if(res.data.errCode===0){
					resolve(res)
				}else if(res.data.errCode === 400){
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data)
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
					reject(res.data)
				}				
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}

const SYSTEM_INFO = uni.getSystemInfoSync();

export const getStatusBarHeight = ()=> SYSTEM_INFO.statusBarHeight || 15;

export const getTitleBarHeight = ()=>{
	if(uni.getMenuButtonBoundingClientRect){
		// 如果胶囊按钮存在的话
		let {top,height} = uni.getMenuButtonBoundingClientRect();
		return height + (top - getStatusBarHeight())*2		
	}else{
		return 40;
	}
}
// 获取导航栏的高度
export const  getNavBarHeight = ()=> getStatusBarHeight()+getTitleBarHeight();

export const getLeftIconLeft = ()=> {
	// #ifdef MP-TOUTIAO
		let {leftIcon:{left,width}}  = tt.getCustomButtonBoundingClientRect();
		return left+ parseInt(width);
	// #endif
	
	// #ifndef MP-TOUTIAO
		return 0
	// #endif	
}
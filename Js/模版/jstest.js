var rule={
    title:'金曼影视',
    host:'https://www.jinmantv.com',
    // homeUrl:'/',
	url: '/index.php/vod/show/fyfilter/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:1,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    //class_parse:'.navbar-items li:gt(2):lt(8);a&&Text;a&&href;.*/(.*?).html',
    class_name:'电影&电视剧&综艺&动漫&纪录片&电影解说',
    class_url:'1&2&3&4&5&20',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'body .main;.module-poster-item.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'a.module-poster-item.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;.module-info-tag&&Text","img":".lazy.lazyload&&data-original","desc":".module-info-item:eq(-1)&&Text;.module-info-item:eq(-2)&&Text;.module-info-item:eq(-3)&&Text;.module-info-item:eq(3)&&.module-info-item-content&&Text;.module-info-item:eq(1)&&.module-info-item-content&&Text","content":".module-info-introduction&&Text","tabs":".module-tab-item.tab-item","lists":".module-list:eq(#id)&&.module-play-list a"},
    搜索:'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
    filter_url:'area/{{fl.地区}}/by/{{fl.排序}}/class/{{fl.剧情}}',
	filter:{
'1':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'动作','v':'动作'},{'n':'爱情','v':'爱情'},{'n':'体育赛事','v':'体育赛事'},{'n':'网络电影','v':'网络电影'},{'n':'古装','v':'古装'},{'n':'历史','v':'历史'},{'n':'儿童','v':'儿童'},{'n':'运动','v':'运动'},{'n':'文艺','v':'文艺'},{'n':'经典','v':'经典'},{'n':'冒险','v':'冒险'},{'n':'科幻','v':'科幻'},{'n':'动画','v':'动画'},{'n':'喜剧','v':'喜剧'},{'n':'武侠','v':'武侠'},{'n':'奇幻','v':'奇幻'},{'n':'犯罪','v':'犯罪'},{'n':'青春','v':'青春'},{'n':'农村','v':'农村'},{'n':'战争','v':'战争'},{'n':'悬疑','v':'悬疑'},{'n':'微电影','v':'微电影'}]},{'key':'地区','name':'按地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'大陆'},{'n':'韩国','v':'韩国'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'美国','v':'美国'},{'n':'英国','v':'英国',{'n':'泰国','v':'泰国'},{'n':'日本','v':'日本'},{'n':'其他','v':'其他'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
'2':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'偶像','v':'偶像'},{'n':'爱情','v':'爱情'},{'n':'同性','v':'同性'},{'n':'言情','v':'言情'},{'n':'古装','v':'古装'},{'n':'历史','v':'历史'},{'n':'古装','v':'古装'},{'n':'玄幻','v':'玄幻'},{'n':'谍战','v':'谍战'},{'n':'历险','v':'历险'},{'n':'都市','v':'都市'},{'n':'科幻','v':'科幻'},{'n':'军旅','v':'军旅'},{'n':'喜剧','v':'喜剧'},{'n':'武侠','v':'武侠'},{'n':'江湖','v':'江湖'},{'n':'罪案','v':'罪案'},{'n':'青春','v':'青春'},{'n':'家庭','v':'家庭'},{'n':'战争','v':'战争'},{'n':'悬疑','v':'悬疑'},{'n':'商战','v':'商战'}]},{'key':'地区','name':'按地区','value':[{'n':'全部','v':''},{'n':'内地','v':'内地'},{'n':'韩国','v':'韩国'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'美国','v':'美国'},{'n':'英国','v':'英国',{'n':'泰国','v':'泰国'},{'n':'日本','v':'日本'},{'n':'其他','v':'其他'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
'3':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'番剧','v':'番剧'},{'n':'国创','v':'国创'},{'n':'格斗','v':'格斗'},{'n':'科幻','v':'科幻'},{'n':'热血','v':'热血'},{'n':'推理','v':'推理'},{'n':'耽美','v':'耽美'},{'n':'冒险','v':'冒险'},{'n':'竞技','v':'竞技'},{'n':'校园','v':'校园'},{'n':'动画','v':'动画'},{'n':'机战','v':'机战'},{'n':'治愈','v':'治愈'},{'n':'电影','v':'电影'},{'n':'恋爱','v':'恋爱'},{'n':'少女','v':'少女'},{'n':'爆笑','v':'爆笑'},{'n':'泡面','v':'泡面'},{'n':'穿越','v':'穿越'},{'n':'灵异','v':'灵异'},{'n':'其他','v':'其他'}]},{'key':'地区','name':'按地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'大陆'},{'n':'日本','v':'日本'},{'n':'美国','v':'美国'},{'n':'法国','v':'法国'},{'n':'其他','v':'其他'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],
'4':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'真人秀','v':'真人秀'},{'n':'选秀','v':'选秀'},{'n':'综艺','v':'综艺'},{'n':'财经','v':'财经'},{'n':'求职','v':'求职'},{'n':'脱口秀','v':'脱口秀'},{'n':'情感','v':'情感'},{'n':'访谈','v':'访谈'},{'n':'播报','v':'播报'},{'n':'旅游','v':'旅游'},{'n':'音乐','v':'音乐'},{'n':'美食','v':'美食'},{'n':'纪实','v':'纪实'},{'n':'曲艺','v':'曲艺'},{'n':'生活','v':'生活'},{'n':'游戏互动','v':'游戏互动'}]},{'key':'地区','name':'按地区','value':[{'n':'全部','v':''},{'n':'内地','v':'内地'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'韩国','v':'韩国'},{'n':'美国','v':'美国'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}]
	},
}

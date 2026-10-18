var rule = {
    title: '蝴蝶影视(云端)',
    host: 'https://mt.puipui.ggff.net', // 换成你自己的 Cloudflare 域名
    url: '/api/category?tid=fyclass&pg=fypage&cat=fyrank',
    searchUrl: '/api/search?key=wd&pg=fypage',
    class_parse: 'js:(()=>{let res=request(input+"/api/home");let obj=JSON.parse(res);input=obj.class;})();',
    lazy: '',
    limit: 6,
    recommend: 'list',
    double: true,
    hey: '1',
    一级: '.list',
    二级: '*',
    搜索: '*'
};

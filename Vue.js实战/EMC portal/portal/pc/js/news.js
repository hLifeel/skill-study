function gup(name) {
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null )
		return "";
	else
		return results[1];
}
		
var M = gup("M");
var reg = gup("reg_src");
var regold = gup("reg");

//会议回顾
var newsList=[
    {img:"images/2017-emc-guangdian.jpg",imghref:"#",category:"",title:"2017 EMC 广电行业研讨会",info:"",url:"#",date:"2017年6月6日",
        video:[
            {title:"广电行业现代化数据中心支撑IT转型",description:null,url:"https://emcinformation.com/492501/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-flv331"},
            {title:"全球媒体行业发展趋势",description:null,url:"https://emcinformation.com/492301/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-flv329"},
            {title:"SMG融媒体技术应用实践",description:null,url:"https://emcinformation.com/492601/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-flv332"},
            {title:"CCTV云战略案例分享",description:null,url:"https://emcinformation.com/492602/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-flv333"},
            {title:"广电行业IT转型推动媒体云建设",description:null,url:"https://emcinformation.com/492302/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-flv330"},
            {title:"EMC ISILON 媒体与娱乐存储解决方案",description:null,url:"https://emcinformation.com/492603/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-flv334"}
        ],
        speech:[
            {title:"广电行业现代化数据中心支撑IT转型",description:null,url:"https://emcinformation.com/490903/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-pdf323"},
            {title:"全球媒体行业发展趋势",description:null,url:"https://emcinformation.com/490901/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-pdf322"},
            {title:"SMG融媒体技术应用实践",description:null,url:"https://emcinformation.com/490904/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-pdf324"},
            {title:"CCTV云战略案例分享",description:null,url:"https://emcinformation.com/490301/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-pdf319"},
            {title:"广电行业IT转型推动媒体云建设",description:null,url:"https://emcinformation.com/490701/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-pdf321"},
            {title:"EMC ISILON 媒体与娱乐存储解决方案",description:null,url:"https://emcinformation.com/491001/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017-guangdian-pdf327"}
        ],
        data:[
            
        ]
    },
        {img:"images/2017Q1-Vxrail.jpg",imghref:"http://emc-china.com/emc-campaign/2017Q1-HCI/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2017Q1-HCI",category:"",title:"现代 IT 基础架构之超融合 VxRail 在线研讨会",info:"",url:"http://emc-china.com/emc-campaign/2017Q1-HCI/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2017Q1-HCI",date:"2017年4月20日",
        video:[
            {title:"现代 IT 基础架构之超融合 VxRail 在线研讨会",description:null,url:"https://emcinformation.com/489401/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017Q1-HCI-flv309"}
        ],
        speech:[
            {title:"超融合之路由 vSAN 开始",description:null,url:"https://emcinformation.com/489501/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017Q1-HCI-pdf311"},
            {title:"超融合架构新标杆--EMC VxRail的非凡优势",description:null,url:"https://emcinformation.com/489701/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017Q1-HCI-pdf312"},
            {title:"客户经验谈：华泰资产管理与超融合架构",description:null,url:"https://emcinformation.com/489702/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017Q1-HCI-pdf313"}
        ],
        data:[
            {title:"业界领导者: Gartner融合系统魔力象限报告",description:null,url:"https://emcinformation.com/489802/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017Q1-HCI-top3-pdf",type:"pdf"},   
            {title:"Edison报告: 超融合VxRail与BYO的成本和维护对比分析",description:null,url:"https://emcinformation.com/489803/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017Q1-HCI-top3-pdf",type:"pdf"},   
            {title:"傻瓜书系列: 超融合基础架构自学者的选择",description:null,url:"https://emcinformation.com/490001/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017Q1-HCI-top3-pdf",type:"pdf"},
            {title:"华泰资产：VxRail超融合, 提高虚拟环境业务连续性,实现业务创新",description:null,url:"https://emcinformation.com/490101/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017Q1-HCI-top3-pdf",type:"pdf"},
            {title:"中通快递: 专业的人做专业的事, VxRail助ZTO业务创新驶上“快车道”",description:null,url:"https://emcinformation.com/490102/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2017Q1-HCI-top3-pdf",type:"pdf"}
        ]
    },
		{img:"images/pr-2016Q4-allflash.jpg",imghref:"http://www.emc-china.com/emc-campaign/2016Q4-Allflash/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2016Q4AllFlash",category:"闪存",title:"2016 年 12 月 EMC 全闪存家族最新线上发布研讨会",info:"享全新 TCO，获数字化转型先机与优势，EMC全闪存联盟最新发布！",url:"http://www.emc-china.com/emc-campaign/2016Q4-Allflash/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2016Q4AllFlash",date:"2016年12月21日",
        video:[
            {title:"现代化数据中心与全闪存阵列 - 韩冰，EMC 中国区全闪存产品资深顾问",description:null,url:"https://emcinformation.com/480201/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q4Allflash-flv297"},
			{title:"全闪存助力数字化转型 - 王磊，高级经理，宜信金融技术部系统部",description:null,url:"https://emcinformation.com/480102/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q4Allflash-flv298"},
			{title:"EMC 全闪存家族最新发布 - 杜宇, EMC 资深行业顾问",description:null,url:"https://emcinformation.com/480002/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q4Allflash-flv299"},
			{title:"智能存储软件 AppSync 特别应用演示 - 王剑，EMC 资深解决方案专家",description:null,url:"https://emcinformation.com/480301/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q4Allflash-flv300"},
			{title:"Q & A，和问卷填写 - 全体 EMC 讲师",description:null,url:"https://emcinformation.com/480103/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q4Allflash-flv301"}
        ],
        speech:[
            {title:"现代化数据中心与全闪存阵列 - 韩冰，EMC 中国区全闪存产品资深顾问",description:null,url:"https://emcinformation.com/479101/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q4AllFlash-pdf291"},
			{title:"EMC 全闪存家族最新发布 - 杜宇, EMC 资深行业顾问",description:null,url:"https://emcinformation.com/479301/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q4AllFlash-pdf292"}
        ],
        data:[
            {title:"方案优势：利用 EMC 全闪存实现现代化",description:null,url:"https://emcinformation.com/479102/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q4AllFlash-top3-pdf",type:"pdf"},
			{title:"EMC VMAX 全闪存存储阵列详述",description:null,url:"https://emcinformation.com/479501/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q4AllFlash-top3-pdf",type:"pdf"},
			{title:"产品资料：EMC XtremIO iCDM集成拷贝数据管理变您的业务流程与基础架构",description:null,url:"https://emcinformation.com/479602/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q4AllFlash-top3-pdf",type:"pdf"}
        ]
    },
		{img:"images/pr-2016-it2020.jpg",imghref:"http://www.it2020.net/cn/?reg_src=" + reg + "&M=" + M + "-portal-2016it2020",category:"云计算,大数据",title:"2016年 IT2020 高端论坛",info:"IT 2020高端论坛于2013年由中国工程院、EMC公司和VMware公司共同发起并主办的国家级的世界范围的IT技术高端论坛。今年IT 2020高端论坛将聚焦中国正在实施的十三五规划（2016-2020年）、2025中国制造以及互联网+等战略目标。",url:"http://www.it2020.net/cn/?reg_src=" + reg + "&M=" + M + "-portal-2016it2020",date:"2016年10月10日 - 21日",
        video:[
            {title:"领航数字化转型之旅－全球高级副总裁兼EMC大中华区总裁 叶成辉 ",description:null,url:"https://emcinformation.com/474503/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-flv284"},
			{title:"CIO的当务之急－DELL EMC信息基础架构解决方案集团客户与市场部总裁 Frank Hauck",description:null,url:"https://emcinformation.com/474604/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-flv285"},
			{title:"IT2020和数字化转型－全球副总裁EMC中国卓越研发集团总经理 刘伟博士",description:null,url:"https://emcinformation.com/474701/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-flv286"},
			{title:"数字经济，经济发展的新动能－中关村大数据产业联盟副理事长，信息社会50人论坛成员 郭昕",description:null,url:"https://emcinformation.com/474605/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-flv287"},
			{title:"应对数字化变革的创新战略－国际创新咨询公司Imagination Bridge总裁及innovationexcellence.com网站联合创始人,被《福布斯》杂志赋予“创新先生”和“创新大师”及“商业创新领域最知名思想领袖之一”,著名作家,战略顾问 Rowan Gibson",description:null,url:"https://emcinformation.com/481601/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-flv288"},
			{title:"高峰对话",description:null,url:"https://emcinformation.com/474606/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-flv289"},
			{title:"数字化转型和现代数据中心－EMC公司大中华区售前及系统工程部总经理 梁放",description:null,url:"https://emcinformation.com/474703/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-flv290"}
        ],
        speech:[
            {title:"领航数字化转型之旅 叶成辉",description:null,url:"https://emcinformation.com/474101/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-pdf278"},
			{title:"CIO的当务之急 Frank Hauck",description:null,url:"https://emcinformation.com/474201/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-pdf279"},
			{title:"IT2020和数字化转型 刘伟博士",description:null,url:"https://emcinformation.com/474401/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-pdf280"},
			{title:"数字经济，经济发展的新动能 郭昕",description:null,url:"https://emcinformation.com/474402/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-pdf281"},
			{title:"应对数字化变革的创新战略 Rowan Gibson",description:null,url:"https://emcinformation.com/474403/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-pdf282"},
			{title:"数字化转型和现代数据中心 梁放",description:null,url:"https://emcinformation.com/474603/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016it2020-pdf283"}
        ],
        data:null
    },
		{img:"images/pr-2016Q3-VxRail.jpg",imghref:"http://china.emc.com/microsites/2016Q3-VxRail/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2016Q3VxRail",category:"融合基础架构",title:"现代数据中心之超融合 VxRail 在线研讨会",info:"里约让“安全”变成了奥运新标准，而超融合EMC VxRail始终给您企业级的数据安全服务",url:"http://china.emc.com/microsites/2016Q3-VxRail/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2016Q3VxRail",date:"2016年9月13日",
        video:[
            {title:"现代数据中心之超融合 VxRail 在线研讨会",description:null,url:"https://emcinformation.com/463801/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q3VxRail-flv275"}
        ],
        speech:[
            {title:"现代数据中心之超融合 VxRail",description:null,url:"https://emcinformation.com/463702/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q3VxRail-pdf273"},
			{title:"软件定义数据中心之 VSAN 的体系结构",description:null,url:"https://emcinformation.com/463703/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q3VxRail-pdf274"}
        ],
        data:[
            {title:"客户经验谈:中通快递与超融合架构",description:null,url:"https://emcinformation.com/463601/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q3VxRail-top3-pdf",type:"pdf"}
        ]
    },
		{img:"images/2016-Q1-unity.jpg",imghref:"http://china.emc.com/microsites/2016Q1-Unity/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2016Q1Unity",category:"闪存",title:"EMC 全闪存中端存储新品 EMC Unity 线上发布与介绍会",info:"专为最充分地利用全闪存介质的能力而设计，提供经济实惠的文件存储和数据块存储，并提供云一样的简便性。",url:"http://china.emc.com/microsites/2016Q1-Unity/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2016Q1Unity",date:"2016年7月26日",
        video:[
            {title:"EMC Unity 全闪存中端存储新品",description:null,url:"https://emcinformation.com/444704/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1Unity-flv1"}
        ],
        speech:[
            {title:"全新 EMC Unity 闪存阵列与方案介绍",description:null,url:"https://emcinformation.com/444705/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1Unity-pdf2"},
			{title:"全闪存数据中心愿景",description:null,url:"https://emcinformation.com/444802/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1Unity-pdf3"}
        ],
        data:[
            {title:"白皮书：EMC UNITY 平台介绍",description:null,url:"https://emcinformation.com/444505/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1Unity-top3-pdf",type:"pdf"},
            {title:"白皮书：EMC Unity 最佳做法指南",description:null,url:"https://emcinformation.com/444902/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1Unity-top3-pdf",type:"pdf"},
			{title:"白皮书：EMC Unity 复制技术",description:null,url:"https://emcinformation.com/445101/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1Unity-top3-pdf",type:"pdf"},
			{title:"simulator 下载链接",description:null,url:"https://emcinformation.com/445002/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1Unity-top3-pdf",type:"pdf"}
        ]
    },
		{img:"images/2016q2_roadshow.jpg",imghref:"http://china.emc.com/microsites/2016Q2roadshow/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2016Q2roadshow",category:"云计算,大数据,闪存,统一存储,数据保护,应用程序,服务,融合基础架构,年度新产品发布",title:"迈向现代化 2016EMC全国巡展",info:"2016 EMC全国巡展是针对企业及合作伙伴的半天免费高端论坛，论坛聚焦当今及未来影响企业发展的数据中心、云计算、大数据、闪存、融合基础架构、数据保护、横向扩展技术和新兴IT趋势...",url:"http://china.emc.com/microsites/2016Q2roadshow/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2016Q2roadshow",date:"2016年5月31日",
        video:[
            {title:"主题演讲：构建现代数据中心",description:null,url:"https://emcinformation.com/433303/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-flv239"},
			{title:"现代数据中心四大支柱之云赋能和软件定义",description:null,url:"https://emcinformation.com/433304/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-flv240"},
			{title:"现代数据中心四大支柱之闪存",description:null,url:"https://emcinformation.com/433108/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-flv241"},
			{title:"现代数据中心四大支柱之横向扩展",description:null,url:"https://emcinformation.com/433402/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-flv242"},
			{title:"高峰对话/互动问答",description:null,url:"https://emcinformation.com/433109/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-flv243"},
			{title:"现代数据中心融合基础架构",description:null,url:"https://emcinformation.com/433305/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-flv244"},
			{title:"现代数据中心数据保护",description:null,url:"https://emcinformation.com/433110/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-flv245"},
			{title:"云科演讲",description:null,url:"https://emcinformation.com/433306/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-flv246"}
        ],
        speech:[
            {title:"主题演讲：构建现代数据中心",description:null,url:"https://emcinformation.com/433601/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-pdf247"},
			{title:"现代数据中心四大支柱之云赋能和软件定义",description:null,url:"https://emcinformation.com/433602/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-pdf248"},
			{title:"现代数据中心四大支柱之闪存",description:null,url:"https://emcinformation.com/433603/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-pdf249"},
			{title:"现代数据中心四大支柱之横向扩展",description:null,url:"https://emcinformation.com/433502/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-pdf250"},
			{title:"高峰对话介绍",description:null,url:"https://emcinformation.com/433604/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-pdf251"},
			{title:"现代数据中心融合基础架构",description:null,url:"https://emcinformation.com/433701/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-pdf252"},
			{title:"现代数据中心数据保护",description:null,url:"https://emcinformation.com/433605/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-pdf253"},
			{title:"神州云科_超融合解决方案",description:null,url:"https://emcinformation.com/433503/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-pdf254"}
        ],
        data:[
            {title:"EMC Unity 全闪存",description:null,url:"https://emcinformation.com/433801/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-top3-pdf",type:"pdf"},
            {title:"EMC 混合云解决方案",description:null,url:"https://emcinformation.com/433802/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-top3-pdf",type:"pdf"},
            {title:"利用大数据获得竞争优势 - 分析带来改变游戏规则的商机",description:null,url:"https://emcinformation.com/433803/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q2roadshow-top3-pdf",type:"pdf"},
			{title:"更多资料下载",description:null,url:"http://www.emc-china.com/emc/resources/index.php" + "?reg_src=" + reg + "&M=" +M + "-portal-2016Q2roadshow",type:"pdf"}
        ]
    },
		{img:"images/2016q1_allflash.jpg",imghref:"http://china.emc.com/microsites/2016Q1-AllFlash-Digital/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2016Q1-AllFlash",category:"闪存",title:"开启闪存技术新纪元，迈向全闪存数据中心。",info:"释放全闪存解决方案的巨大潜力，您能以更快的速度分析更多的数据，向客户交付更高水平的服务，由此获得竞争优势和深刻洞察，全力推动您的业务向前发展...",url:"http://china.emc.com/microsites/2016Q1-AllFlash-Digital/index.htm?reg_src=" + reg + "&M=" + M + "-portal-2016Q1-AllFlash",date:"2016年5月20日",
        video:[
            {title:"EMC “开启闪存技术新纪元，迈向全闪存数据中心”视频回顾",description:null,url:"https://emcinformation.com/428701/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1-AllFlash-flv232"}
        ],
        speech:[
            {title:"现代数据中心",description:null,url:"https://emcinformation.com/428801/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1-AllFlash-pdf233"},
			{title:"用闪存理念构建你的现代数据中心",description:null,url:"https://emcinformation.com/428805/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1-AllFlash-pdf234"},
			{title:"现代数据中心的核心支柱-全闪存存储",description:null,url:"https://emcinformation.com/428904/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1-AllFlash-pdf235"}
        ],
        data:[
            {title:"经过专门设计的 VMAX 全闪存阵列，旨在解决当今 CIO 面临的主要挑战",description:null,url:"https://emcinformation.com/428707/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1-AllFlash-top3-pdf",type:"pdf"},
            {title:"DSSD D5 机架级闪存应用装置，为当前和未来应用程序提供改变游戏规则的性能",description:null,url:"https://emcinformation.com/428604/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1-AllFlash-top3-pdf",type:"pdf"},
            {title:"采取世界排名第一的全闪存阵列XtremIO，实现敏捷数据中心",description:null,url:"https://emcinformation.com/428709/SI/" + M + ".ashx?reg_src=" + reg + "-portal-2016Q1-AllFlash-top3-pdf",type:"pdf"}
        ]
    },
		{img:"images/2016_VxRail_portal_banner.jpg",imghref:"http://china.emc.com/microsites/2016Q1-VxRail/index.htm?reg_src=" + reg + "&M=" + M + "_portal_2016Q1_VxRail",category:"融合基础架构",title:"全新VxRail重新定义超融合架构，让IT简捷到无法想像！",info:"超融合架构是继云计算、大数据、社交和移动商务之后全球IT市场又一核心焦点，其优点是简化和加快基础架构部署，减轻日常运营管理负担，降低成本，并提高 IT 速度和敏捷性。",url:"http://china.emc.com/microsites/2016Q1-VxRail/index.htm?reg_src=" + reg + "&M=" + M + "_portal_2016Q1_VxRail",date:"2016年4月28日",
        video:[
            {title:"超融合架构的发展趋势以vSAN的技术实践",description:null,url:"https://emcinformation.com/426503/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_VxRail_flv230"},
			{title:"现代数据中心超融合架VxRail应用装置介绍及演示",description:null,url:"https://emcinformation.com/426603/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_VxRail_flv229"},
			{title:"问与答",description:null,url:"https://emcinformation.com/426604/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_VxRail_flv231"}
        ],
        speech:[
            {title:"超融合架构的发展趋势以vSAN的技术实践",description:null,url:"https://emcinformation.com/426201/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_VxRail_pdf225"},
			{title:"现代数据中心超融合架VxRail应用装置介绍及演示",description:null,url:"https://emcinformation.com/426001/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_VxRail_pdf224"}
        ],
        data:[
            {title:"简化分布式企业IT",description:null,url:"https://emcinformation.com/426103/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_VxRail_top3_pdf",type:"pdf"},
            {title:"快速实现 VDI 构想",description:null,url:"https://emcinformation.com/426501/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_VxRail_top3_pdf",type:"pdf"},
            {title:"解决联邦政府机构的虚拟化难题",description:null,url:"https://emcinformation.com/426502/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_VxRail_top3_pdf",type:"pdf"}
        ]
    },
        {img:"images/2016q1_dps_pr.jpg",imghref:"http://china.emc.com/microsites/2016Q1-data-protection-suite/index.htm?reg_src=" + reg + "&M=" + M + "_portal_2016Q1_data_protection_suite",category:"数据保护",title:"EMC Data Protection Sutie 备份归档管理软件包，提供VMware环境下轻松的数据保护",info:"当前数据呈指数级增长，企业级虚拟环境数据保护的重要性也日益凸显，然而对众多IT人员而言，“虚机备份”却等同于一个大写的麻烦，因为传统虚机备份需要许多基础架构的配合，还要投入额外的服务器和硬件，并且占据大量CPU及网络流量，操作人员还要花费时间学习产品使用...",url:"http://china.emc.com/microsites/2016Q1-data-protection-suite/index.htm?reg_src=" + reg + "&M=" + M + "_portal_2016Q1_data_protection_suite",date:"2016年3月24日",
        video:[
            {title:"EMC备份归档管理软件包——提供VMware环境下轻松的数据保护",description:null,url:"https://emcinformation.com/413103/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_data_protection_suite_flv213"}
        ],
        speech:[
            {title:"轻松驾驭VMWARE数据保护",description:null,url:"https://emcinformation.com/413401/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_data_protection_suite_pdf214"}
        ],
        data:[
            {title:"EMC面向VMware的数据保护",description:null,url:"https://emcinformation.com/413105/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_data_protection_suite_top3_pdf",type:"pdf"},
            {title:"客户选择集成式EMC数据保护解决方案的十大理由",description:null,url:"https://emcinformation.com/413303/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_data_protection_suite_top3_pdf",type:"pdf"},
            {title:"选择 EMC Data Protection Suite 2015 的五大主要理由",description:null,url:"https://emcinformation.com/413403/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_data_protection_suite_top3_pdf",type:"pdf"}
        ]
    },
		{img:"images/quantum-lead.jpg",imghref:"http://www.qunzhibo.com/room/3046b5ee12b64257b6b15ef45b88cb99/?reg_src=" + reg + "&M=" + M + "_portal_Quantum_Lead",category:"年度新产品发布",title:"EMC 2016重磅新品暨技术战略发布会",info:"Quantum Leap  数据中心大跨越，企业级IT圈两位传奇人物：EMC全球高级副总裁、大中华区总裁叶成辉，VMware全球副总裁、大中华区总裁郭尊华领衔出席，与技术专家一起，详细介绍EMC最新现代化数据中心技术战略及产品。",url:"http://www.qunzhibo.com/room/3046b5ee12b64257b6b15ef45b88cb99/?reg_src=" + reg + "&M=" + M + "_portal_Quantum_Lead",date:"2016年3月9日",
        video:[
            // {title:"EMC 2016重磅新品暨技术战略发布会",description:null,url:"http://www.qunzhibo.com/room/3046b5ee12b64257b6b15ef45b88cb99/" + M + "?reg_src=" + reg + "_portal_Quantum_Lead_flv218"}
        ],
        speech:[
            {title:"量子飞跃EMC新产品发布媒体研讨会",description:null,url:"https://emcinformation.com/413305/SI/" + M + ".ashx?reg_src=" + reg + "_portal_Quantum_Lead_pdf219"},
            {title:"数据中心大跨越EMC 2016重磅新品暨技术战略发布会",description:null,url:"https://emcinformation.com/413106/SI/" + M + ".ashx?reg_src=" + reg + "_portal_Quantum_Lead_pdf220"}
        ],
        data:[
            {title:"EMC和VMware联合推出独家超级融合基础架构",description:null,url:"https://emcinformation.com/413107/SI/" + M + ".ashx?reg_src=" + reg + "_portal_Quantum_Lead_top3_pdf",type:"pdf"},
            {title:"全闪存,现代数据中心之必需",description:null,url:"https://emcinformation.com/413405/SI/" + M + ".ashx?reg_src=" + reg + "_portal_Quantum_Lead_top3_pdf",type:"pdf"},
            {title:"DSSD D5机架级闪存存储实现大跨越",description:null,url:"https://emcinformation.com/413306/SI/" + M + ".ashx?reg_src=" + reg + "_portal_Quantum_Lead_top3_pdf",type:"pdf"}
        ]
    },
	{img:"images/2015q3flash_pr.jpg",imghref:"http://china.emc.com/microsites/2016Q1-XtremIO-Data-Copy/index.htm?reg_src=" + reg + "&M=" + M + "_portal_2016Q1-XtremIO-Data-Copy",category:"闪存",title:"简单快捷获取数据副本EMC XtremIO 提升您的数据价值",info:"在现今环境下，保持竞争力需要拥有真正的敏捷性，比如实时的分析和开发/测试创新。另外还必须具备灵活、按需提供且可扩展的存储。",url:"http://china.emc.com/microsites/2016Q1-XtremIO-Data-Copy/index.htm?reg_src=" + reg + "&M=" + M + "_portal_2016Q1-XtremIO-Data-Copy",date:"2016年3月3日",
        video:[
            {title:"简单快捷获取数据副本，EMC XtremIO 提升您的数据价值",description:null,url:"https://emcinformation.com/412901/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_flv201"},
			{title:"问与答：《简单快捷获取数据副本，EMC XtremIO 提升您的数据价值》",description:null,url:"https://emcinformation.com/412802/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_flv202"},
			{title:"对Oracle数据副本的快速使用及AppSync演示的架构拓扑图",description:null,url:"https://emcinformation.com/412902/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_flv203"},
			{title:"技术演示：对Oracle数据副本的快速使用及AppSync演示",description:null,url:"https://emcinformation.com/412803/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_flv204"},
			{title:"问与答：《对Oracle数据副本的快速使用及AppSync演示》",description:null,url:"https://emcinformation.com/412703/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_flv205"}
        ],
        speech:[
			{title:"XtremIO iCDM 利用副本数据，提升数据价值",description:null,url:"https://emcinformation.com/413001/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_pdf206"},
			{title:"对Oracle数据副本的快速使用及AppSync演示",description:null,url:"https://emcinformation.com/412704/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_pdf207"},
            {title:"产品介绍：了解AppSync iCDM Starter数据拷贝管理软件",description:null,url:"https://emcinformation.com/413002/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_pdf208"},
            {title:"敏捷数据中心,采用全闪存阵列，实现转型",description:null,url:"https://emcinformation.com/412705/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_pdf209"},
			{title:"获取 IDC白皮书： EMC XtremIO 快照技术简介",description:null,url:"https://emcinformation.com/413101/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_pdf210"}
        ],
        data:[
            {title:"案例分析：在线教育领军企业如何应对数据快速增长的局面",description:null,url:"https://emcinformation.com/413201/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_top3_pdf",type:"pdf"},
            {title:"温州人本集团",description:null,url:"https://emcinformation.com/413302/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2016Q1_XtremIO_Data_Copy_top3_pdf",type:"pdf"}
        ]
    },
    {img:"images/2015Q4_VNX_Software_Pack_pr.jpg",imghref:"http://china.emc.com/microsites/2015q4vnx_software_pack/index.htm?reg_src=" + reg + "&M=" + M + "_portal_2015q4vnx_software_pack",category:"数据保护",title:"创新 VNX 及软件——重新定义 VMware 虚机连续数据保护在线研讨会",info:"优秀的数据存储不只容量与效率，安全数据保护和业务连续性才是关键指标。特别针对越来越多的虚拟化环境，全新创新VNX软件包, 可确保客户拥有保护和管理其信息的所有必须功能...",url:"http://china.emc.com/microsites/2015q4vnx_software_pack/index.htm?reg_src=" + reg + "&M=" + M + "_portal_2015q4vnx_software_pack",date:"2016年1月19日",
        video:[
            {title:"创新VNX及软件——重新定义VMware虚机连续数据保护",description:null,url:"https://emcinformation.com/412501/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q4vnx_software_pack_flv195"}
        ],
        speech:[
            {title:"尽如所愿,VNX 统一混合闪存阵列介绍",description:null,url:"https://emcinformation.com/412601/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q4vnx_software_pack_pdf196"},
            {title:"物超所值,全新的VNX 功能软件包介绍",description:null,url:"https://emcinformation.com/412602/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q4vnx_software_pack_pdf197"}
        ],
        data:[
            {title:"EMC RecoverPoint重新定义了VMware虚机的数据保护",description:null,url:"https://emcinformation.com/412404/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q4vnx_software_pack_top3_pdf",type:"pdf"},
            {title:"白皮书: VNX系列 复制技术",description:null,url:"https://emcinformation.com/412303/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q4vnx_software_pack_top3_pdf",type:"pdf"},
            {title:"信息图: 借助VNX 随处访问",description:null,url:"https://emcinformation.com/412702/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q4vnx_software_pack_top3_pdf",type:"pdf"}
        ]
    },
	{img:"images/Q4-IT2020.jpg",imghref:"http://www.it2020.net/cn/?reg_src=" + reg + "&M=" + M + "_portal_2015it2020",category:"闪存",title:"IT 2020高端论坛",info:"IT 2020高端论坛是一场由中国工程院、EMC公司和VMware公司共同发起并主办的国家级的世界范围的IT技术高端论坛。 IT 2020高端论坛的主旨是加强中国、美国以及其他发达国家之间关于云计算和大数据的技术交流...",url:"http://www.it2020.net/cn/?reg_src=" + reg + "&M=" + M + "_portal_2015it2020",date:"2015年9月17-24日", 
        video:[
            {title:"EMC公司董事会副主席Bill Teuber欢迎致辞—青岛站",description:null,url:"https://emcinformation.com/411601/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv175"},
			{title:"青岛市副市长王广正欢迎致辞—青岛站",description:null,url:"https://emcinformation.com/411705/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv176"},
			{title:"中国与美国：引领IT和互联网的未来—青岛站 ",description:null,url:"https://emcinformation.com/411706/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv177"},
			{title:"工业互联网革命已经开始—青岛站",description:null,url:"https://emcinformation.com/411807/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv178"},
			{title:"以互联网+为动力，促进中国制造业转型升级—青岛站",description:null,url:"https://emcinformation.com/411901/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv179"},
			{title:"高峰对话—青岛站",description:null,url:"https://emcinformation.com/411902/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv180"},
			{title:"EMC公司全球高级副总裁兼大中华区总裁叶成辉结束致辞—青岛站",description:null,url:"https://emcinformation.com/411903/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv181"},
			// {title:"EMC公司全球高级副总裁兼大中华区总裁叶成辉欢迎致辞—武汉站",description:null,url:"https://emcinformation.com/412001/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv182"},
			{title:"武汉市副市长刘立勇欢迎致辞—武汉站",description:null,url:"https://emcinformation.com/412101/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv183"},
			{title:"中国与美国：引领IT和互联网的未来—武汉站",description:null,url:"https://emcinformation.com/412102/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv184"},
			// {title:"产业互联网促进制造业转型升级—武汉站",description:null,url:"https://emcinformation.com/411904/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv185"},
			{title:"工业互联网革命已经开始—武汉站",description:null,url:"https://emcinformation.com/412002/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv186"},
			{title:"高峰对话—武汉站",description:null,url:"https://emcinformation.com/412201/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv187"},
			{title:"EMC公司全球高级副总裁兼大中华区总裁叶成辉结束致辞—武汉站",description:null,url:"https://emcinformation.com/412203/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_flv188"}
        ],
        speech:[
			{title:"2015未来，重新定义+ ",description:null,url:"https://emcinformation.com/412104/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_pdf189"},
			{title:"产业互联网促进制造业转型",description:null,url:"https://emcinformation.com/412004/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_pdf190"},
			{title:"互联网+下的传统产业转型 升级的新机遇与新挑战",description:null,url:"https://emcinformation.com/411906/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_pdf191"},
			{title:"中国与美国：“互联网+”时代的 IT",description:null,url:"https://emcinformation.com/412301/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_pdf192"}
        ],
        data:[
			{title:"了解工作负荷至为重要 制定高效的企业混合云战略",description:null,url:"https://emcinformation.com/412401/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_top3_pdf",type:"pdf"},
			{title:"CIO利用企业数据湖需要知道的事实 ",description:null,url:"https://emcinformation.com/412402/SI/" + M + ".ashx?reg_src=" + reg + "_portal_IT2020_top3_pdf",type:"pdf"}
		]
    },
	{img:"images/2015q2isilon_datalake.jpg",imghref:"http://china.emc.com/microsites/2015q2isilon/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"大数据",title:"“EMC Isilon 从存储数据到创造价值”在线研讨会",info:"当数字宇宙的急速增长考验着数据存储的“肚量”，非结构化数据的急速扩张则还考验着数据存储的“智商”。预计2017年80%的存储将是非结构化数据，如何对这样蕴含巨大价值却又难以被分析利用的数据下手，成为企业实现转型所必须解决的难题。",url:"http://china.emc.com/microsites/2015q2isilon/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2015年6月24日", 
        video:[
            {title:"EMC技术专家手把手教你利用Isilon构建企业数据湖",description:"非结构化数据的急速扩张考验着企业数据存储的“智商”。如何有效实现企业非结构化数据的集中管理与扩展？如何快速构建一个成本低、利用率高、易管理的数据平台？如何实现大数据的实时分析？EMC“技术达人”深入浅出讲解，助您高效迈进企业数据湖平台！ ",url:"https://emcinformation.com/346801/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q2isilon_flv163"},
			{title:"视频演示：Isilon构建数据实践",description:"一边是大数据时代激增的数据存储需求，一边又要满足利用数据深挖商业价值助力业务目标。此时的您要怎样进行数据存储、分析处理，才能应对挑战？答案尽在EMC Isilon数据湖平台，144节点横向扩展、50PB单季群存储、Hadoop大数据实时分析，Isilon数据湖以卓越能力实现数据的有效构建。",url:"https://emcinformation.com/346901/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q2isilon_flv164"},
			{title:"最走心的会议Q&A：看EMC Isilon如何创造价值",description:null,url:"https://emcinformation.com/346602/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q2isilon_flv166"}
        ],
        speech:[
            {title:"“看EMC Isilon如何创造价值”演讲PPT",description:null,url:"https://emcinformation.com/346904/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q2isilon_pdf165"}
        ],
        data:[
			{title:"白皮书：CIO 利用企业数据湖需要知道的几件事",description:null,url:"https://emcinformation.com/347001/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q2isilon_top3_pdf",type:"pdf"},
			{title:"白皮书：EMC Isilon 与HADOOP的强者联盟宣言",description:null,url:"https://emcinformation.com/346802/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q2isilon_top3_pdf",type:"pdf"},
			{title:"白皮书：360°解析EMC Isilon 横向扩展数据湖解决方案",description:null,url:"https://emcinformation.com/346903/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q2isilon_top3_pdf",type:"pdf"}
		]
    },
	{img:"images/2015q3flash_pr.jpg",imghref:"http://china.emc.com/microsites/2015q3flash/index.htm?reg_src=" + reg + "&M=" + M + "_portal_2015q3flash",category:"闪存",title:"“CIO与专家联袂解读2015全闪存阵列的行业应用” 在线访谈",info:"据Gartner预测，全闪存阵列市场的整体规模将以年均37%的复合增长率持续拓展。虽然目前尚无哪座数据中心单纯利用全闪存阵列存储主数据，但到2020年这一比例将增长至25%。可见全闪存阵列必将成为未来数据中心的核心存储无疑，属于闪存的大时代已经来临！",url:"http://china.emc.com/microsites/2015q3flash/index.htm?reg_src=" + reg + "&M=" + M + "_portal_2015q3flash",date:"2015年5月30日", 
        video:[
            {title:"“CIO与专家联袂解读 2015全闪存阵列的行业应用” 在线访谈",description:null,url:"https://emcinformation.com/411302/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q3flash_flv170"}
        ],
        speech:[
            {title:"CIO 与专家联袂 解读2015 闪存的行业应用",description:null,url:"https://emcinformation.com/411203/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q3flash_pdf171"}
        ],
        data:[
			{title:"至关重要：20个影响您数据中心部署的简单问题",description:null,url:"https://emcinformation.com/411305/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q3flash_top3_pdf",type:"pdf"},
			{title:"EMC VDI——性能更优的闪存技术",description:null,url:"https://emcinformation.com/411401/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q3flash_top3_pdf",type:"pdf"},
			{title:"解决方案介绍：数据库解决方案概述－XtremIO助力数据库基础架构高效转型",description:null,url:"https://emcinformation.com/411501/SI/" + M + ".ashx?reg_src=" + reg + "_portal_2015q3flash_top3_pdf",type:"pdf"}
		]
    },
	{img:"images/2015q1vnxe3200.jpg",imghref:"http://china.emc.com/microsites/2014q4vnxe3200/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"统一存储",title:"“存储杂症专家会诊”在线答疑",info:"N种需求，1步到位！10万元起即可拥有，EMC“FAST闪存优化”的新一代统一存储VNXe3200",url:"http://china.emc.com/microsites/2014q4vnxe3200/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2015年4月2日", 
        video:[
            {title:"分析师告诉您，存储的投资回报应该怎么算？",description:null,url:"https://emcinformation.com/311502/SI/" + M + ".ashx?reg_src=" + reg + "_2015q1vnxe3200_flv1"},
			{title:"VNXe3200，为何能帮助企业存储“一步到位”？",description:null,url:"https://emcinformation.com/332801/SI/" + M + ".ashx?reg_src=" + reg + "_2015q1vnxe3200_flv2"}
			// {title:"“存储杂症专家会诊” 在线答疑会议实录",description:null,url:"https://emcinformation.com/332901/SI/" + M + ".ashx?reg_src=" + reg + "_2015q1vnxe3200_flv3"}		
        ],
        speech:[
            {title:"图表分析：新一代统一存储 性能提高达10倍，TCO降低达70%",description:null,url:"https://emcinformation.com/332802/SI/" + M + ".ashx?reg_src=" + reg + "_2015q1vnxe3200_pdf1"},
			{title:"ESG白皮书：企业级功能，入门级简单性就在VNXe3200",description:null,url:"https://emcinformation.com/333001/SI/" + M + ".ashx?reg_src=" + reg + "_2015q1vnxe3200_pdf2"},
			{title:"产品介绍：10万元级最佳中端存储VNXe3200",description:null,url:"https://emcinformation.com/333302/SI/" + M + ".ashx?reg_src=" + reg + "_2015q1vnxe3200_pdf3"}
        ],
        data:[
			{title:"漫画：【都是时间惹的祸】 服务器虚拟化存储",description:null,url:"https://emcinformation.com/333501/SI/" + M + ".ashx?reg_src=" + reg + "_2015q1vnxe3200_top3_pdf",type:"pdf"},
			{title:"漫画：【排队上班太无奈】 桌面虚拟化存储",description:null,url:"https://emcinformation.com/333104/SI/" + M + ".ashx?reg_src=" + reg + "_2015q1vnxe3200_top3_pdf",type:"pdf"},
			{title:"漫画：【给老板个惊喜吧】 ERP系统存储",description:null,url:"https://emcinformation.com/333304/SI/" + M + ".ashx?reg_src=" + reg + "_2015q1vnxe3200_top3_pdf",type:"pdf"},
			{title:"漫画：【鱼和熊掌我都要】 整合文件及数据库存储",description:null,url:"https://emcinformation.com/333305/SI/" + M + ".ashx?reg_src=" + reg + "_2015q1vnxe3200_top3_pdf",type:"pdf"}
		]
    },
	{img:"images/2014q4flash.jpg",imghref:"http://china.emc.com/microsites/2014q4flash/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"年度新产品发布,闪存",title:"“EMC 重新定义可能性——闪存的典型应用场景及最佳做法”在线研讨会",info:"属于闪存的时代已经来临！EMC刚刚召开了“重新定义可能性——闪存的典型应用场景及最佳做法”在线研讨会，为您带来EMC XtremIO全闪存存储系统，提供亚毫秒级的响应速度、独有横向扩展和线内数据服务，满足您对闪存的一切期待！",url:"http://china.emc.com/microsites/2014q4flash/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2015年2月3日", 
        video:[
            {title:"EMC XtremIO 全闪存阵列与企业级应用",description:"究竟是什么样的优势，让EMC XtremIO在发布短短1年内，销量就超过所有竞争对手，成为众多世界500强的首选？EMC专家为您详细讲解全闪存的应用场景以及部署策略，更为您带来闪存7年耐用性免费保修计划。",url:"https://emcinformation.com/310803/SI/" + M + ".ashx?reg_src=" + reg + "_q4flash_flv1"},
			{title:"EMC XtremIO 全闪存阵列最佳应用场景分享",description:"EMC XtremIO的典型应用场景包括数据库、桌面虚拟化、服务器虚拟化等。通过部署XtremIO，可以在优化成本的同时，大幅提升系统的响应速度和处理能力，让您快速迈入全闪存驱动的全新时代！",url:"https://emcinformation.com/310903/SI/" + M + ".ashx?reg_src=" + reg + "_q4flash_flv2"},
			{title:"闪存的典型应用场景及最佳做法 问与答",description:null,url:"https://emcinformation.com/311002/SI/" + M + ".ashx?reg_src=" + reg + "_q4flash_flv3"}		
        ],
        speech:[
            {title:"EMC XtremIO 全闪存阵列最佳应用场景分享",description:null,url:"https://emcinformation.com/310902/SI/" + M + ".ashx?reg_src=" + reg + "_q4flash_pdf1"},
			{title:"EMC XtremIO 全闪存阵列与企业级应用",description:null,url:"https://emcinformation.com/311001/SI/" + M + ".ashx?reg_src=" + reg + "_q4flash_pdf2"}
        ],
        data:[
			{title:"市场排名第一的最佳全闪存阵列 – EMC XtremIO",description:null,url:"https://emcinformation.com/310804/SI/" + M + ".ashx?reg_src=" + reg + "_q4flash_top3_pdf",type:"pdf"},
			{title:"TechTarget 构建在全闪存存储上整合Oracle 工作负载的业务案例",description:null,url:"https://emcinformation.com/311402/SI/" + M + ".ashx?reg_src=" + reg + "_q4flash_top3_pdf",type:"pdf"},
			{title:"为SQL Server选择EMC XtremIO的五大理由",description:null,url:"https://emcinformation.com/311502/SI/" + M + ".ashx?reg_src=" + reg + "_q4flash_top3_pdf",type:"pdf"}
		]
    },
	{img:"images/Q1VSPEX.jpg",imghref:"http://china.emc.com/microsites/2015q1vspex/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"融合基础架构,云计算,闪存",title:"“携手EMC和VMware重新定义桌面云最佳做法”在线研讨会",info:"如今用户具有空前移动性，他们希望从任何位置使用任何设备获得即时、顺畅的应用程序和数据访问。这意味着IT部门正面临不断演变的终端用户应用程序、新型操作系统和新型设备所带来的冲击。",url:"http://china.emc.com/microsites/2015q1vspex/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2015年1月29日", 
        video:[
            {title:"VMware新一代终端用户计算",description:null,url:"https://emcinformation.com/309803/SI/" + M + ".ashx?reg_src=" + reg + "_q1vspex_flv1"},
			{title:"重新定义桌面云——采用EMC XtremIO的VSPEX终端用户计算",description:null,url:"https://emcinformation.com/310003/SI/" + M + ".ashx?reg_src=" + reg + "_q1vspex_flv2"},
			{title:"“携手EMC和VMware重新定义桌面云最佳做法” 问与答",description:null,url:"https://emcinformation.com/310501/SI/" + M + ".ashx?reg_src=" + reg + "_q1vspex_flv3"}
			
        ],
        speech:[
            {title:"VMware新一代终端用户计算解决方案",description:null,url:"https://emcinformation.com/310502/SI/" + M + ".ashx?reg_src=" + reg + "_q1vspex_pdf1"},
			{title:"重新定义桌面云——采用XtremIO的VSPEX终端用户计算",description:null,url:"https://emcinformation.com/310601/SI/" + M + ".ashx?reg_src=" + reg + "_q1vspex_pdf2"}
        ],
        data:[
			{title:"云桌面技术走进校园，首师大附小建成私有云",description:null,url:"https://emcinformation.com/310202/SI/" + M + ".ashx?reg_src=" + reg + "_q1vspex__top3_pdf",type:"pdf"},
			{title:"第一选择，十大理由：EMC 终端用户计算",description:null,url:"https://emcinformation.com/310602/SI/" + M + ".ashx?reg_src=" + reg + "_q1vspex_top3_pdf",type:"pdf"},
			{title:"EMC VSPEX 终端用户计算设计指南",description:null,url:"https://emcinformation.com/310203/SI/" + M + ".ashx?reg_src=" + reg + "_q1vspex_top3_pdf",type:"pdf"}
		]
    },
	{img:"images/q4_protectpoint.jpg",imghref:"http://china.emc.com/microsites/2014Q4protectpoint/webcast/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"数据保护",title:"“保护关键业务数据库—EMC创新解决方案”发布会",info:"EMC 突破传统备份局限，推出ProtectPoint全新跨界数据保护方案，让备份数据从关键数据库的“主存储”直接传送到“保护存储”，从而避免占用系统资源，让性能提升10倍，业务影响为0！",url:"http://china.emc.com/microsites/2014Q4protectpoint/webcast/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2015年1月14日", 
        video:[
            {title:"EMC ProtectPoint数据保护解决方案,如何全方位提升Oracle数据运营和保护需求",description:"最新发布ProtectPoint 数据保护解决方案，业界唯一直接从主存储到保护存储进行数据备份的方式，降低架构复杂度和成本，跨界实现“快照的性能和备份的功能”，对业务0影响，性能提升10倍！",url:"https://emcinformation.com/304806/SI/" + M + ".ashx?reg_src=" + reg + "_q4protectpoint_flv1"},
			{title:"EMC ProtectPoint数据保护解决方案,如何全方位提升Oracle数据运营和保护需求  问与答",description:null,url:"https://emcinformation.com/304604/SI/" + M + ".ashx?reg_src=" + reg + "_q4protectpoint_flv2"}
			
        ],
        speech:[
            {title:"EMC ProtectPoint数据保护解决方案,如何全方位提升Oracle数据运营和保护需求",description:null,url:"https://emcinformation.com/304805/SI/" + M + ".ashx?reg_src=" + reg + "_q4protectpoint_pdf"}
        ],
        data:[
			{title:"白皮书：ProtectPoint全攻略",description:null,url:"https://emcinformation.com/299504/SI/" + M + ".ashx?reg_src=" + reg + "_q4protectpoint_top3_pdf",type:"pdf"},
			{title:"白皮书：Oracle用户为何选择EMC备份？",description:null,url:"https://emcinformation.com/299603/SI/" + M + ".ashx?reg_src=" + reg + "_q4protectpoint_top3_pdf",type:"pdf"},
			{title:"图表解析：30秒看懂数据保护怎么做",description:null,url:"https://emcinformation.com/299604/SI/" + M + ".ashx?reg_src=" + reg + "_q4protectpoint_top3_pdf",type:"pdf"}
		]
    },
	
	{img:"images/q4_ehc.jpg",imghref:"http://china.emc.com/cloud/hybrid-cloud-computing/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"云计算",title:"2014 EMC成功迈向混合云在线研讨会",info:"EMC面向企业推出全新混合云方案，集成了来自EMC和VMware的硬件、软件与服务，融合了私有云和公有云的优势，更简单、更灵活、更可靠、更可控，可以在短短28天实现IT即服务（ITaaS）。",url:"http://china.emc.com/cloud/hybrid-cloud-computing/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2014年12月11日", 
        video:[
            {title:"EMC面向企业重新定义混合云",description:"IT已经成为企业的核心。企业如何构建一个安全、灵活、简单的云方案，同时整合公有云和私有云的优势，确保数据的安全可用，帮助企业提升竞争力？EMC混合云方案为您带来更好的选择！",url:"https://emcinformation.com/484501/SI/" + M + ".ashx?reg_src=" + reg + "_q4hybricloud_flv1"},
            {title:"VMware与EMC共同协作通过混合云解决方案加速企业扩展数据中心到云",description:"CIO在面对公有云和私有云的选择时，需要考虑很多因素。有没有一种方案能同时二者兼得？VMware和EMC强强联手，给您提供一个更灵活的混合云方案，帮您的企业快速迈向云计算。",url:"https://emcinformation.com/484601/SI/" + M + ".ashx?reg_src=" + reg + "_q4hybridcloud_flv2"},
			{title:"成功迈向混合云 问与答",description:null,url:"https://emcinformation.com/484701/SI/" + M + ".ashx?reg_src=" + reg + "_q4hybridcloud_flv3"}
			
        ],
        speech:[
            {title:"EMC面向企业重新定义混合云",description:null,url:"https://emcinformation.com/299306/SI/" + M + ".ashx?reg_src=" + reg + "_q4hybridcloud_pdf1"},
            {title:"VMware与EMC共同协作通过混合云解决方案加速企业扩展数据中心到云",description:null,url:"https://emcinformation.com/299307/SI/" + M + ".ashx?reg_src=" + reg + "_q4hybridcloud_pdf2"}
        ],
        data:[
			{title:"经济学人：混合的未来不断变化的IT服务和消费组合",description:null,url:"https://emcinformation.com/290805/SI/" + M + ".ashx?reg_src=" + reg + "_q4hybridcloud_top3_pdf1",type:"pdf"},
			{title:"EMC混合云解决方案",description:null,url:"https://emcinformation.com/290902/SI/" + M + ".ashx?reg_src=" + reg + "_q4hybridcloud_top3_pdf2",type:"pdf"},
			{title:"漫谈云计算，发现新捷径",description:null,url:"https://emcinformation.com/292401/SI/" + M + ".ashx?reg_src=" + reg + "_q4hybridcloud_top3_pdf3",type:"pdf"}
		]
    },
	
  //   {img:"images/Q4-IT2020.jpg",imghref:"http://www.it2020.net/cn?reg_src=" + reg + "&M=" + M + "_portal",category:"大数据,云计算",title:"IT 2020高端论坛",info:"IT 2020高端论坛是由中国工程院、美国国家工程院、EMC和VMware等公司共同举办的一场聚焦云计算和大数据的世界级高端论坛。今年的论坛探讨了云计算和大数据的基础架构，两者对中国IT策略、经济发展和城市可持续化发展的影响，以及大数据在中国可持续化发展进程中至关重要的三个行业中的应用：医疗、能源变革和综合交通。",url:"http://www.it2020.net/cn?reg_src=" + reg + "&M=" + M + "_portal",date:"2014年10月28日", 
  //       video:[
  //           {title:"中国与美国：引领IT和互联网的未来",description:"我们已步入一个全新的商业时代，过去看起来固定不变的商业模式正日渐移动化。在这样一个移动的世界中，商业、政府与教育等领域各个层面的变革和瓦解已无可 避免。随着中国重回世界最大经济体的迅猛发展之势，上述改革也将不可避免地产生巨大影响。机遇无限，竞争会以未知方式呈现，而政策也会不断调整 -  所有国有和私营企业、基础设施、交通项目、环境政策以及国民公共服务都概莫能外。VMware公司首席执行官帕特·基辛格将就调整过程中需要何种“IT 运作方式”的重大转变提出议题。云计算、普及应用与高价值移动设备无不一同创造出了能够深刻影响人类生活的空前机遇。具有前瞻性思维的领导者正在构建创新 实验室 - 他们不断试验和尝试新创意，并开展极具灵活性和高效率的新方法实验。与此同时，此类IT新模式尚处起步阶段，未来十年中各种新标准和商业新模式将层出不 穷，而IT新锐领导者将不断涌现。基辛格的研讨将围绕领导者必备特质展开，他们能够预见和创建未来，而非坐等观望。",url:"https://emcinformation.com/293901/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_flv1"},
  //           {title:"城市交通大数据及应用",description:"城市交通是城市经济社会活动的载体，在实现城市区域内人与物的移动过程中产生大量数据，如何建立和利用这些数据实现城市交通的安全、便捷、高效、绿色等目 标，本文以北京等城市为例，介绍中国城市交通数据资源和技术应用状况，聚焦大数据在城市交通决策、运行服务中的应用案例经验及存在的问题；结合未来新一代 信息技术发展趋势和城市交通发展需求，展望大数据在城市交通领域的应用前景和技术需求。",url:"https://emcinformation.com/293902/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_flv2"},
		// 	{title:"数据化理念对整个医疗保健行业的深远影响",description:"近年来，大数据在医疗方面迅速发展。首先，国家在政策方面加大力度支持智慧医疗的创新性发展，大力提倡医疗改革；其次，医疗系统的存在不断完善、发展的巨 大空间，也具有信息化、智能化的基础；第三，智慧医疗市场是一个蕴含千亿的新兴市场，将极大的推进社会经济的发展。",url:"https://emcinformation.com/294003/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_flv3"},
		// 	{title:"医疗大数据的思考和实践",description:"大数据是借助现代化的工具及平台搜集海量数据，对数据进行撷取、管理、处理、并整理之后，获得需要的资讯。目前，大数据已经渗透到各行各业中。大数据应用在医疗行业中，就是用“数据”来看病，即智慧医疗。大数据的应用将促使医疗模式的转变。",url:"https://emcinformation.com/295203/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_flv4"},
		// 	{title:"数据化理念对整个医疗保健行业的深远影响",description:"近年来，大数据在医疗方面迅速发展。首先，国家在政策方面加大力度支持智慧医疗的创新性发展，大力提倡医疗改革；其次，医疗系统的存在不断完善、发展的巨 大空间，也具有信息化、智能化的基础；第三，智慧医疗市场是一个蕴含千亿的新兴市场，将极大的推进社会经济的发展。",url:"https://emcinformation.com/295301/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_flv5"},
		// 	{title:"智能电网数据分析元",description:"目前国内医疗大数据还处在探索阶段，医疗系统普遍缺乏大数据思维。中南大学结合湖南省自身的特点，以中南大学多所附属医院为核心向周围辐射，联合各层级医 院，建设一个覆盖湖南省乃至跨省的基于大数据的综合健康服务平台。该平台的应用对患者而言，可以提供个性化诊疗、个人健康管理、缩短就医时间等；可以提高 医疗机构诊断的准确性、提高服务质量；在公共卫生疫情防控方面，为资源配置提供决策支持、减少医保费用；提升科研机构科研效率，促进原始创新。它的作用不 仅于此，还为卫生、工商、物价等国家行政职能部门对医疗机构的医疗工作质量、效率和运营状态，提供实时、动态的监管工具；为政府各行业，如卫生、经济、审 计、气象、公安、环境等部门提供业务数据和辅助决策数据。",url:"https://emcinformation.com/295104/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_flv6"},
		// 	{title:"电网运营大数据应用",description:"数据安全对医疗大数据建设是一个关键的工作。在大数据的建设中如何就患者个人数据的使用和保护，脱敏或再次加工后的中性数据如何使用和保护均是我们面临的 课题。保护大数据时代的信息安全是一个系统工程。采用分级隐私保护机制，完美的可溯性，数据不被任何未授权的机器解密，现代信息技术为保障信息安全提供了 良好的基础。同时，国家在政策层面，企业在社会责任感层面，个人在职业操守方面都需要展开相应的工作。",url:"https://emcinformation.com/295302/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_flv7"},
		// 	{title:"交通业转型技术",description:"未来——是大数据的时代。在医疗方面而言，智慧医疗使从业医生能够搜索、分析和引用大量科学证据来支持他们的诊断，同时还可以使医生、医疗研究人员、药物 供应商、保险公司等整个医疗生态圈的每一个群体受益。让我们拭目以待让大数据提高人们的生活水平和质量。",url:"https://emcinformation.com/295302/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_flv8"}
  //       ],
  //       speech:[
  //           {title:"中国与美国：引领IT和互联网的未来",description:null,url:"https://emcinformation.com/294001/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_pdf1"},
  //           {title:"城市交通大数据及应用",description:null,url:"https://emcinformation.com/294002/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_pdf2"},
		// 	{title:"智能电网数据分析元",description:null,url:"https://emcinformation.com/293903/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_pdf3"},
		// 	{title:"电网运营大数据应用",description:null,url:"https://emcinformation.com/294101/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_pdf4"},
		// 	{title:"医疗大数据的思考和实践",description:null,url:"https://emcinformation.com/295106/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_pdf5"},
		// 	{title:"数据化理念对整个医疗保健行业的深远影响",description:null,url:"https://emcinformation.com/295303/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_pdf6"},
		// 	{title:"交通业转型技术",description:null,url:"https://emcinformation.com/295501/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_pdf7"}
  //       ],
  //       data:[
		// 	{title:"白皮书：IDC研究与分析,EMC数字宇宙国家区域简报",description:null,url:"https://emcinformation.com/296002/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_top3_pdf1",type:"pdf"},
		// 	{title:"白皮书：人脸大数据白皮书",description:null,url:"https://emcinformation.com/295902/SI/" + M + ".ashx?reg_src=" + reg + "_q4it2020_top3_pdf2",type:"pdf"}
		// ]
  //   },
    {img:"images/Q3-VNXe3200-level-1.jpg",imghref:"http://china.emc.com/microsites/VNXe3200/index1.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"统一存储",title:"“如何确保中端存储应对IT演进中的挑战”在线研讨会",info:"存储选型的最大陷阱，在于没有从长远考虑。随着业务的极速上升和数据的迅猛爆发，对存储进行再次整合或升级势在必行。",url:"http://china.emc.com/microsites/VNXe3200/index1.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2014年9月18日",
		video:[
            {title:"企业选择中端存储需要考虑的关键因素",description:"究竟是要容量，还是要性能，您还在为如何选择中端存储而进退两难么？中桥咨询公司首席分析师将深入剖析IT基础架构演进过程中的种种挑战和应对良策，帮您避开存储选型的陷阱！",url:"https://emcinformation.com/294006/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_1_flv1"},
            {title:"企业选择中端存储需要考虑的关键因素 问与答",description:null,url:"https://emcinformation.com/294104/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_1_flv2"},
			{title:"满足当前和未来应用性能需求的EMC新一代统一存储详解",description:"如何避开“价格低又容量大”的存储选型陷阱？EMC为您提供满足当前和未来性能需求的两全之道！看新一代统一存储VNXe3200，10万元提供“Unified统一存储和FAST闪存优化”功能，提升三倍性能，现在与未来一步到位！",url:"https://emcinformation.com/294105/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_1_flv3"},
			{title:"满足当前和未来应用性能需求的EMC新一代统一存储详解 问与答",description:null,url:"https://emcinformation.com/294204/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_1_flv4"}
        ],
        speech:[
            {title:"企业选择中端存储需要考虑的关键因素",description:null,url:"https://emcinformation.com/294103/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_1_pdf1"},
            {title:"满足当前和未来应用性能需求的EMC新一代统一存储详解",description:null,url:"https://emcinformation.com/294005/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_1_pdf2"}
        ],
        data:[
            {title:"成功案例：律师事所务的“谜案”——是谁扩大5倍空间？",description:null,url:"https://emcinformation.com/294007/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_1_top3_pdf1",type:"video"},
            {title:"白板演示：如何确保中端存储能应对基础架构衍进过程中的挑战",description:null,url:"https://emcinformation.com/294106/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_1_top3_pdf2",type:"video"},
			{title:"动画演示：关于VNXe的那点事儿",description:null,url:"https://emcinformation.com/294008/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_1_top3_pdf3",type:"video"}
        ]
	},
    {img:"images/Q3-VNXe3200-level-2.jpg",imghref:"http://china.emc.com/microsites/VNXe3200/index2.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"统一存储",title:"“EMC 2014新一代统一存储产品”发布研讨会",info:"存储的性能问题，已经成为您急需征服的挑战。然而，您却面临着这样一些表面看上去似乎“不可能”完成的任务...",url:"http://china.emc.com/microsites/VNXe3200/index2.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2014年9月16日",
		video:[
            {title:"满足企业预算和高性能需求的EMC新一代统一存储详解",description:"一边是有限的IT预算，一边又要满足与日俱增的存储性能需求。此时的您要怎样进行存储选型，才能应对新应用不断上线、虚拟化应用的逐步深入对存储吞吐和响应能力带来的严峻挑战？看物超所值的方案，就在EMC最新发布的VNXe3200新一代统一存储！",url:"https://emcinformation.com/293905/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_2_flv1"},
            {title:"满足企业预算和高性能需求的EMC新一代统一存储详解 问与答",description:null,url:"https://emcinformation.com/294107/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_2_flv2"}
        ],
        speech:[
            {title:"满足企业预算和高性能需求的EMC新一代统一存储详解",description:null,url:"https://emcinformation.com/293904/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_2_pdf1"}
        ],
        data:[
            {title:"成功案例：电力公司也“来电”——10分钟设置新NAS",description:null,url:"https://emcinformation.com/293906/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_2_top3_pdf1",type:"video"},
            {title:"图表解析：新一代统一存储的超强性价比",description:null,url:"https://emcinformation.com/294108/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_2_top3_pdf1",type:"pdf"},
			{title:"产品资料：EMC VNXe3200，10万元最佳中端存储全揭秘",description:null,url:"https://emcinformation.com/294205/SI/" + M + ".ashx?reg_src=" + reg + "_q3vnxe3200_2_top3_pdf1",type:"pdf"}
        ]
	},
    {img:"images/Q3-Mega-Launch.jpg",imghref:"http://china.emc.com/microsites/2104Megalaunch/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"年度新产品发布",title:"“2014 EMC新产品网络发布”在线研讨会",info:"未来的IT将会怎样进化？竞争的格局将会怎样改写？这一切的问题，需要依靠业界的创新来探寻答案。",url:"http://china.emc.com/microsites/2104Megalaunch/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2014年9月11日",
		video:[
            {title:"主题演讲: 重新定义可能性",description:"众多行业都正在发生结构性的变革，EMC如何帮助企业保持竞争力，让IT部门重新定义可能性；以及介绍今日之EMC中国。",url:"https://emcinformation.com/296601/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv1"},
			{title:"主题演讲: 从第二平台到第三平台",description:"2014EMC发布新产品系列,如何在第三平台的强势崛起下，在关键应用云,大数据分析和闪存优化领域改变传统IT游戏规则。",url:"https://emcinformation.com/296502/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv2"},
			{title:"主题演讲: 重新定义数据中心-全球首款企业数据服务平台VMAX<sup>3</sup>发布",description:"EMC VMAX<sup>3</sup>系列——业界首款开放的企业数据平台! 提供混合云架构3倍的性能提升并降低50%的TCO。",url:"https://emcinformation.com/296802/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv3"},
			{title:"分论坛1: 重新定义存储",description:"EMC最完整的存储组合，打破传统，实现企业不同需求。在云计算和大数据环境下，如何做到软件定义存储。",url:"https://emcinformation.com/296702/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv4"},
			{title:"分论坛1: 软件定义数据中心",description:"软件定义的数据中心，可跨数据中心、云环境和移动设备快速部署，超越以硬件为中心的体系结构的局限性并促进业务的发展。",url:"https://emcinformation.com/296603/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv5"},
			{title:"分论坛2: 重新定义数据保护",description:"EMC ProtectPiont，实现直接从VMAX<sup>3</sup>到Data Domain 的备份快速恢复，对应用程序服务器几乎没有任何影响。",url:"https://emcinformation.com/296703/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv6"},
			{title:"分论坛2: 新一代业务连续性及案例分享",description:"详述新一代业务连续性双活容灾解决方案并介绍众多成功案例。",url:"https://emcinformation.com/296704/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv7"},
			{title:"分论坛3: 重新定义横向扩展NAS",description:"EMC Isilon——提供业界首个企业及的横向扩展数据湖，支持Hadoop分析、云以及移动等工作负载。性能2两倍提升。",url:"https://emcinformation.com/296806/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv8"},
			{title:"分论坛3: HADOOP环境下新一代大数据解决方案",description:"详述HADOOP环境下新一代大数据解决方案",url:"https://emcinformation.com/296504/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv9"},
			{title:"分论坛4: 重新定义全闪存存储",description:"EMC XtremIO3.0新增线内数据服务，史上增长最快的全闪存阵列。",url:"https://emcinformation.com/296604/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv10"},
			{title:"分论坛4: 全闪存存储典型应用场景",description:"市场上全闪存阵列的#1——EMC XtremIO 如何应用全闪存存储典型应用场景",url:"https://emcinformation.com/296506/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_flv11"}
        ],
        speech:[
            {title:"主题演讲: 重新定义可能性",description:null,url:"https://emcinformation.com/296501/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf1"},
			{title:"主题演讲: 从第二平台到第三平台",description:null,url:"https://emcinformation.com/296701/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf2"},
			{title:"主题演讲: 重新定义数据中心-全球首款企业数据服务平台VMAX<sup>3</sup>发布",description:null,url:"https://emcinformation.com/296801/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf3"},
			{title:"分论坛1: 重新定义存储",description:null,url:"https://emcinformation.com/296602/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf4"},
			{title:"分论坛1: 软件定义数据中心",description:null,url:"https://emcinformation.com/296503/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf5"},
			{title:"分论坛2: 重新定义数据保护",description:null,url:"https://emcinformation.com/296803/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf6"},
			{title:"分论坛2: 新一代业务连续性及案例分享",description:null,url:"https://emcinformation.com/296804/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf7"},
			{title:"分论坛3: 重新定义横向扩展NAS",description:null,url:"https://emcinformation.com/296805/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf8"},
			{title:"分论坛3: HADOOP环境下新一代大数据解决方案",description:null,url:"https://emcinformation.com/296807/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf9"},
			{title:"分论坛4: 重新定义全闪存存储",description:null,url:"https://emcinformation.com/294102/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf10"},
			{title:"分论坛4: 全闪存存储典型应用场景",description:null,url:"https://emcinformation.com/294203/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_pdf11"}
        ],
        data:[
            {title:"产品资料：EMC VMAX<sup>3</sup> 系列-业界唯一一款任务关键型云数据平台",description:null,url:"https://emcinformation.com/294201/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_top3_pdf1",type:"pdf"},
            {title:"成功案例：青岛政务云",description:null,url:"https://emcinformation.com/294202/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_top3_pdf2",type:"video"},
			{title:"EMA报告：存储的新时代",description:null,url:"https://emcinformation.com/294004/SI/" + M + ".ashx?reg_src=" + reg + "_q3megalaunch_top3_pdf3",type:"pdf"}
        ]
	},
    {img:"images/Q2-DPAD.jpg",imghref:"http://china.emc.com/microsites/2014dpad/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"数据保护",title:"“2014EMC数据保护策略和新品发布”在线研讨会",info:"云计算、移动化、社交化和大数据的蓬勃兴起，数据保护转型大势剑指'第三平台'。而今天的我们，正处于IT传统架构与第三平台共存和平滑演进的关口... ",url:"http://china.emc.com/microsites/2014dpad/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2014年7月24日",
		video:[
            {title:"ESG 关于数据保护全面体系架构的观点",description:"你真的了解“数据保护”怎么做么？“数据保护策略和体系结构”应该包含哪些方面？听听ESG分析师怎么说。",url:"https://emcinformation.com/293907/SI/" + M + ".ashx?reg_src=" + reg + "_q2dpad_flv1"},
			{title:"EMC 数据保护全面解决方案最新发布解析",description:"响应软件定义世界的新格局，EMC提出“重新定义数据保护”！看业界唯一的从业务连续性到备份归档的完整数据保护方案，如何从物理、虚拟到云和大数据环境，构建统一的跨应用、跨平台系统架构，满足当前和未来的所有SLA要求！",url:"https://emcinformation.com/294207/SI/" + M + ".ashx?reg_src=" + reg + "_q2dpad_flv2"},
			{title:"2014EMC数据保护策略和新品发布在线研讨会 问与答",description:null,url:"https://emcinformation.com/294109/SI/" + M + ".ashx?reg_src=" + reg + "_q2dpad_flv3"}	
        ],
        speech:[
            {title:"2014EMC数据保护策略和新品发布在线研讨会",description:null,url:"https://emcinformation.com/294206/SI/" + M + ".ashx?reg_src=" + reg + "_q2dpad_pdf1"}
        ],
        data:[
            {title:"白皮书：如何为您的业务重新定义数据保护",description:null,url:"https://emcinformation.com/294009/SI/" + M + ".ashx?reg_src=" + reg + "_q2dpad_top3_pdf1",type:"pdf"},
            {title:"观看动画：为何要重新定义数据保护",description:null,url:"https://emcinformation.com/294110/SI/" + M + ".ashx?reg_src=" + reg + "_q2dpad_top3_pdf2",type:"video"},
			{title:"产品信息：如何从一个完整的流程来看数据保护",description:null,url:"https://emcinformation.com/294111/SI/" + M + ".ashx?reg_src=" + reg + "_q2dpad_top3_pdf3",type:"video"}
        ]
	
	},
    {img:"images/Q2-Flash.jpg",imghref:"http://china.emc.com/microsites/2014Q2Flash/landing/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"闪存",title:"“借助EMC闪存重新定义可能性”网络研讨会",info:"对于要求苛刻的任务关键型企业数据集而言，闪存技术已成为一种具备革命性性能的可靠存储选择。",url:"http://china.emc.com/microsites/2014Q2Flash/landing/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2014年7月17日",
		video:[
            {title:"借助EMC闪存重新定义可能性网络研讨会",description:"EMC的闪存战略及产品组合， 包括混合阵列、服务器闪存及全闪存阵列，其中重点介绍了EMC全闪存阵列ExtremIO的诸多优势及典型的应用场景：数据库应用、虚拟化及虚拟桌面。",url:"https://emcinformation.com/294301/SI/" + M + ".ashx?reg_src=" + reg + "_q2flash_flv1"},
			{title:"借助EMC闪存重新定义可能性网络研讨会 问与答",description:null,url:"https://emcinformation.com/294401/SI/" + M + ".ashx?reg_src=" + reg + "_q2flash_flv2"}	
        ],
        speech:[
            {title:"借助EMC闪存重新定义可能性网络研讨会",description:null,url:"https://emcinformation.com/294501/SI/" + M + ".ashx?reg_src=" + reg + "_q2flash_pdf1"}
        ],
        data:[
            {title:"产品信息：EMC XtemeIO 执行概要",description:null,url:"https://emcinformation.com/294601/SI/" + M + ".ashx?reg_src=" + reg + "_q2flash_top3_pdf1",type:"pdf"},
            {title:"白皮书：ESG白皮书:EMC的闪存战略",description:null,url:"https://emcinformation.com/294305/SI/" + M + ".ashx?reg_src=" + reg + "_q2flash_top3_pdf2",type:"pdf"},
			{title:"产品信息：选择针对闪存的EMC Xtrem的五大理由",description:null,url:"https://emcinformation.com/294307/SI/" + M + ".ashx?reg_src=" + reg + "_q2flash_top3_pdf3",type:"pdf"}
        ]
	
	},
    {img:"images/Q2-ITaas.jpg",imghref:"http://china.emc.com/microsites/itaas/wave2/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"服务,云计算",title:"“EMC重新定义IT即服务最佳做法”在线研讨会",info:"IT的未来应该如何转型？您如何带领IT部门找到全新的定位？如何才能最大化IT的价值？所有这一切问题，在今天都显得尤为迫切。",url:"http://china.emc.com/microsites/itaas/wave2/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2014年6月19日",
		video:[
            {title:"EMC重新定义IT即服务最佳做法在线研讨会",description:"62%的商业领袖和70%的IT精英认为，IT即服务（ITaaS） 将是引领下一波浪潮的关键所在。通过部署IT即服务，将会改变传统的IT运营方式，彻底重塑IT价值。",url:"https://emcinformation.com/294502/SI/" + M + ".ashx?reg_src=" + reg + "_q2itaas_flv1"},
			{title:"EMC重新定义IT即服务最佳做法在线研讨会 问与答",description:null,url:"https://emcinformation.com/294310/SI/" + M + ".ashx?reg_src=" + reg + "_q2itaas_flv2"}	
        ],
        speech:[
            {title:"EMC重新定义IT即服务最佳做法在线研讨会",description:null,url:"https://emcinformation.com/294309/SI/" + M + ".ashx?reg_src=" + reg + "_q2itaas_pdf1"}
        ],
        data:[
            {title:"成功案例：案例：ESG审计报告－EMC IT转型蓝图",description:null,url:"https://emcinformation.com/294311/SI/" + M + ".ashx?reg_src=" + reg + "_q2itaas_top3_pdf1",type:"pdf"},
            {title:"成功案例：看莲花F1赛车公司如何通过云架构,快速响应驱动新的营收",description:null,url:"https://emcinformation.com/294406/SI/" + M + ".ashx?reg_src=" + reg + "_q2itaas_top3_pdf2",type:"video"},
			{title:"产品信息：了解ITaaS如何重塑您的业务价值?",description:null,url:"https://emcinformation.com/294605/SI/" + M + ".ashx?reg_src=" + reg + "_q2itaas_top3_pdf3",type:"video"}
        ]
	
	},
    {img:"images/Q2-Trust-IT.jpg",imghref:"http://china.emc.com/microsites/2014brsq2/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"数据保护",title:"“新时代业务连续性整体方案和经验分享”在线研讨会",info:"如您所知，数据中心灾难不只是狼来了的游戏。危险时刻存在，只有制定好“反恐应急预案”，才是保持业务连续性的根本保障。",url:"http://china.emc.com/microsites/2014brsq2/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2014年6月5日",
		video:[
            {title:"整体构架规划思路和经验分享-徐晖",description:"您知道在向虚拟化数据中心演进的过程中，“业务连续性”会遇到哪些变革与挑战么？EMC咨询服务顾问，以典型的应用场景和实际案例，为您解说如何制定全面的技术解决方案，满足不同级别的用户数据保护需求，保障业务运营无忧！",url:"https://emcinformation.com/294302/SI/" + M + ".ashx?reg_src=" + reg + "_q2brs_flv1"},
			{title:"高可用到数据保护整体方案-靳扬",description:"面向不同应用对于数据的不同SLA需求，EMC数据保护方案专家详解从持续高可用、业务连续性与远程复制，到备份恢复和归档的EMC业务连续性整体解决方案，以实现业务0中断0意外！",url:"https://emcinformation.com/294303/SI/" + M + ".ashx?reg_src=" + reg + "_q2brs_flv2"}	,
			{title:"整体构架规划思路和经验分享 问与答",description:null,url:"https://emcinformation.com/294603/SI/" + M + ".ashx?reg_src=" + reg + "_q2brs_flv3"},
			{title:"从业务高可用到数据保护整体方案 问与答",description:null,url:"https://emcinformation.com/294304/SI/" + M + ".ashx?reg_src=" + reg + "_q2brs_flv4"}	
        ],
        speech:[
            {title:"从业务高可用到数据保护整体方案",description:null,url:"https://emcinformation.com/294402/SI/" + M + ".ashx?reg_src=" + reg + "_q2brs_pdf1"},
            {title:"整体构架规划思路和经验分享",description:null,url:"https://emcinformation.com/294602/SI/" + M + ".ashx?reg_src=" + reg + "_q2brs_pdf2"}
        ],
        data:[
            {title:"成功案例：江阴农商银行成功部署私有云",description:null,url:"https://emcinformation.com/294306/SI/" + M + ".ashx?reg_src=" + reg + "_q2brs_top3_pdf1",type:"pdf"},
            {title:"白皮书：EMC连续可用性15分钟指南",description:null,url:"https://emcinformation.com/294403/SI/" + M + ".ashx?reg_src=" + reg + "_q2brs_top3_pdf2",type:"pdf"},
			{title:"白皮书：EMC关于更智能备份的15分钟指南",description:null,url:"https://emcinformation.com/294313/SI/" + M + ".ashx?reg_src=" + reg + "_q2brs_top3_pdf3",type:"pdf"}
        ]
	
	},
    {img:"images/Q2-Islion.jpg",imghref:"http://china.emc.com/microsites/2014isilon/webcast/index.htm?reg_src=" + reg + "&M=" + M + "_portal",category:"统一存储,大数据",title:"“HADOOP环境下大数据管理之道”在线研讨会",info:"如果说大数据是浩瀚澎湃的海洋，那么其中的非结构化数据就是最汹涌的巨浪。而且，它的规模与威力正在迅速扩张，可谓一浪高过一浪！",url:"http://china.emc.com/microsites/2014isilon/webcast/index.htm?reg_src=" + reg + "&M=" + M + "_portal",date:"2014年5月28日",
		video:[
            {title:"HADOOP环境下大数据管理之道在线研讨会",description:"Isilon 产品的7大优势如何帮助企业更好的应对非结构化数据的管理以及与纵向存储的对比；Isilon HFDS 的技术优势 对HADOOP更好的支持。",url:"https://emcinformation.com/294503/SI/" + M + ".ashx?reg_src=" + reg + "_q2isilon_flv1"},
			{title:"HADOOP环境下大数据管理之道在线研讨会 问与答",description:null,url:"https://emcinformation.com/294405/SI/" + M + ".ashx?reg_src=" + reg + "_q2isilon_flv2"}
        ],
        speech:[
            {title:"HADOOP环境下大数据管理之道在线研讨会",description:null,url:"https://emcinformation.com/294308/SI/" + M + ".ashx?reg_src=" + reg + "_q2isilon_pdf1"}
        ],
        data:[
            {title:"成功案例：2014 IDC数字世界研究",description:null,url:"https://emcinformation.com/294604/SI/" + M + ".ashx?reg_src=" + reg + "_q2isilon_top3_pdf1",type:"video"},
            {title:"白皮书：横向扩展存储可满足企业对大数据的要求",description:null,url:"https://emcinformation.com/294312/SI/" + M + ".ashx?reg_src=" + reg + "_q2isilon_top3_pdf2",type:"pdf"},
			{title:"成功案例：华大基因：看Isilon横向存储如何从容应对大数据高性能环境",description:null,url:"https://emcinformation.com/294504/SI/" + M + ".ashx?reg_src=" + reg + "_q2isilon_top3_pdf3",type:"pdf"}
        ]
	},
	{img:"images/Q1-ITaas.jpg",imghref:"http://china.emc.com/microsites/itaas/webcast/index.htm?reg=" + regold + "&M=" + M + "_portal",category:"服务,云计算",title:"“从互联网金融看云计算和大数据时代金融行业IT转型”在线访谈",info:"巨变当前，多数IT与业务高管一致认为，需要“像运营企业一样运营IT”。那么，业务部门究竟对您和IT部门有何期望？您要满足怎样的需求？",url:"http://china.emc.com/microsites/itaas/index.htm?reg=" + regold + "&M=" + M + "_portal",date:"2014年3月27日",
		video:[
            {title:"从互联网金融看云计算和大数据时代金融行业IT转型",description:"EMC 、e行网和新金融世界联合主办在线访谈看金融行业高管们，与您详尽探讨互联网金融在云计算和大数据时代IT转型的那些事儿。",url:"https://emcinformation.com/294407/SI/" + M + ".ashx?reg=" + regold + "_q1itaas_flv1"}
        ],
        speech:null,
        data:[
            {title:"成功案例：案例：纽约泛欧交易：建设云和大数据平台成功实现ITaaS",description:null,url:"https://emcinformation.com/294408/SI/" + M + ".ashx?reg=" + regold + "_q1itaas_top3_pdf1",type:"video"},
            {title:"白皮书：IT即服务，正在进行中",description:null,url:"https://emcinformation.com/294315/SI/" + M + ".ashx?reg=" + regold + "_q1itaas_top3_pdf2",type:"pdf"},
			{title:"产品信息：全球宏观调查对ITaaS的双重看法",description:null,url:"https://emcinformation.com/294606/SI/" + M + ".ashx?reg=" + regold + "_q1itaas_top3_pdf3",type:"pdf"}
        ]
	},
	{img:"images/Q1-Trust-IT.jpg",imghref:"http://china.emc.com/microsites/2014brsq1/index.htm?reg=" + regold + "&M=" + M + "_portal",category:"数据保护",title:"“数据中心业务连续性” 的 “反恐预案” 在线访谈",info:"精彩，总被不期而遇的意外打断。对于冬奥会，意外成为了盛会难言完美的遗憾，而对于企业而言，业务的意外中断则可能是致命的。",url:"http://china.emc.com/microsites/2014brsq1/index.htm?reg=" + regold + "&M=" + M + "_portal",date:"2014年4月10日",
		video:[
            {title:"CIO谈 '反恐预案'视频",description:"“数据中心业务连续性” 的 “反恐预案”如何做？北京电视台的新媒体发展中心副主任赵志成先生，国美在线CTO于斌平先生，以及EMC咨询服务部技术总监陈坚先生，将与您分享他们所面临的主要困境和应对策略，以及运用EMC业务连续性方案的经验和体会。",url:"https://emcinformation.com/294314/SI/" + M + ".ashx?reg=" + regold + "_q1brs_flv1"}
        ],
        speech:null,
        data:[
            {title:"Forrester调研：组织如何利用连续的 IT 可用性改善业务灵活性",description:null,url:"https://emcinformation.com/294409/SI/" + M + ".ashx?reg=" + regold + "_q1brs_top3_pdf1",type:"pdf"},
            {title:"EMC观点与策略: 新形势下如何保障企业业务连续性",description:null,url:"https://emcinformation.com/294607/SI/" + M + ".ashx?reg=" + regold + "_q1brs_top3_pdf2",type:"pdf"},
			{title:"白皮书：EMC关于更智能备份的15分钟指南",description:null,url:"https://emcinformation.com/294505/SI/" + M + ".ashx?reg=" + regold + "_q1brs_top3_pdf3",type:"pdf"}
        ]
	},
	{img:"images/Q1-DD160.jpg",imghref:"http://china.emc.com/microsites/2014dd160/webcast/index.htm?reg=" + regold + "&M=" + M + "_portal",category:"数据保护",title:"EMC企业数据保护入门大讲堂",info:"'小'方案也能HOLD住‘大’场面！可靠、简单、经济，EMC DD160让数据100%有惊无险！",url:"http://china.emc.com/microsites/2014dd160/index.htm?reg=" + regold + "&M=" + M + "_portal",date:"2014年3月26日",
		video:[
            {title:"企业数据保护入门大讲堂",description:"针对企业中常见的风险容灾规划、核心数据保护，和各个分支机构数据的日常保护，怎样才是最简单、可靠、经济的做法？EMC数据保护专家为您讲述企业入门级数据保护方案，如何保障您的数据100%安全无悬念！",url:"https://emcinformation.com/294316/SI/" + M + ".ashx?reg=" + regold + "_q1dd160_flv1"},
			{title:"企业数据保护入门大讲堂 问与答",description:null,url:"https://emcinformation.com/294507/SI/" + M + ".ashx?reg=" + regold + "_q1dd160_flv2"}
        ],
        speech:[
            {title:"企业数据保护入门大讲堂",description:null,url:"https://emcinformation.com/294506/SI/" + M + ".ashx?reg=" + regold + "_q1dd160_pdf1"}
        ],
        data:[
            {title:"白皮书：全球2013数据保护状况调查报告",description:null,url:"https://emcinformation.com/294608/SI/" + M + ".ashx?reg=" + regold + "_q1dd160_top3_pdf1",type:"pdf"},
            {title:"产品信息：EMC Data Domain DD160适合中小型企业数据中心和远程办公室的重复数据消除系统",description:null,url:"https://emcinformation.com/294609/SI/" + M + ".ashx?reg=" + regold + "_q1dd160_top3_pdf2",type:"pdf"},
			{title:"动画漫谈：数据保护幸福秘诀",description:null,url:"https://emcinformation.com/294508/SI/" + M + ".ashx?reg=" + regold + "_q1dd160_top3_pdf3",type:"pdf"}
        ]
	},
	{img:"images/Q1-VSPEX.jpg",imghref:"http://china.emc.com/microsites/2014vspex/webcast/index.htm?reg=" + regold + "&M=" + M + "_portal",category:"融合基础架构",title:"“融合基础架构时代通往私有云的最优路线- EMC VPSEX 解决方案”在线研讨会",info:"选择经验证的基础架构，成为通往私有云的最佳路线。",url:"http://china.emc.com/microsites/2014vspex/webcast/index.htm?reg=" + regold + "&M=" + M + "_portal",date:"2014年4月3日",
		video:[
            {title:"融合基础时代最佳之选：EMC VSPEX",description:"构建私有云方面所面临的各种选择的优劣，包括：选择高度融合的架构vBlock, 完全自主构建及选择经过验证的参考体系架构三种途径。并详细介绍了为什么说EMC  VSPEX 是客户通往私有云之旅的理想解决方案，简单、高效、灵活。",url:"https://emcinformation.com/294410/SI/" + M + ".ashx?reg=" + regold + "_q1vspex_flv1"},
			{title:"EMC VSPEX应用的最佳实践分享",description:"EMC VSPEX应用场景及在几个行业的成功案例应用，包括：教育、医疗、制造及金融行业。",url:"https://emcinformation.com/294318/SI/" + M + ".ashx?reg=" + regold + "_q1vspex_flv2"},
			{title:"EMC VSPEX应用的最佳实践分享 问与答",description:null,url:"https://emcinformation.com/294411/SI/" + M + ".ashx?reg=" + regold + "_q1vspex_flv3"}
        ],
        speech:[
            {title:"融合基础时代最佳之选：EMC VSPEX",description:null,url:"https://emcinformation.com/294317/SI/" + M + ".ashx?reg=" + regold + "_q1vspex_pdf1"},
            {title:"EMC VSPEX应用的最佳实践分享",description:null,url:"https://emcinformation.com/294509/SI/" + M + ".ashx?reg=" + regold + "_q1vspex_pdf2"}
        ],
        data:[
            {title:"白皮书：选择通往私有云的最优路线",description:null,url:"https://emcinformation.com/294510/SI/" + M + ".ashx?reg=" + regold + "_q1vspex_top3_pdf1",type:"pdf"},
            {title:"白皮书：集成式计算平台：基础架构筑造未来数据中心",description:null,url:"https://emcinformation.com/294610/SI/" + M + ".ashx?reg=" + regold + "_q1vspex_top3_pdf2",type:"pdf"},
			{title:"产品信息：利用EMC VSPEX经验证的基础架构加速您的云计算之旅",description:null,url:"https://emcinformation.com/294611/SI/" + M + ".ashx?reg=" + regold + "_q1vspex_top3_pdf3",type:"pdf"}
        ]
	},
	{img:"images/Q1-IB-oracle.jpg",imghref:"http://china.emc.com/microsites/2014ibq1/webcast/index.htm?reg=" + regold + "&M=" + M + "_portal",category:"应用程序,云计算",title:"“EMC和VMware引领虚拟化Oracle环境转型的最佳做法”在线研讨会",info:"一年之计在于春。作为关键业务提供数据管理和业务支撑服务的Oracle环境，其高性能、高可用、数据安全保护以及迅捷的管理，对企业至关重要。同时这也是对IT运维工作的挑战。",url:"http://china.emc.com/microsites/2014ibq1/index.htm?reg=" + regold + "&M=" + M + "_portal",date:"2014年3月19日",
		video:[
            {title:"Oracle虚拟化——让数据库自由飞翔",description:"作为Oracle环境虚拟化的第一首选——VMware如何让Oracle虚拟化，实现数据自由飞翔",url:"https://emcinformation.com/294513/SI/" + M + ".ashx?reg=" + regold + "_q1ib_flv1"},
			{title:"第一选择：针对Oracle的EMC解决方案",description:"作为Oracle环境虚拟存储的第一首选——EMC重新定义最佳Oracle环境基础架构，让您传统Oracle环境彻底转型。",url:"https://emcinformation.com/294414/SI/" + M + ".ashx?reg=" + regold + "_q1ib_flv2"},
			{title:"第一选择：针对Oracle的EMC解决方案 问与答",description:null,url:"https://emcinformation.com/294613/SI/" + M + ".ashx?reg=" + regold + "_q1ib_flv3"}
        ],
        speech:[
            {title:"Oracle虚拟化——让数据库自由飞翔",description:null,url:"https://emcinformation.com/294612/SI/" + M + ".ashx?reg=" + regold + "_q1ib_pdf1"},
            {title:"第一选择：针对Oracle的EMC解决方案",description:null,url:"https://emcinformation.com/294416/SI/" + M + ".ashx?reg=" + regold + "_q1ib_pdf2"}
        ],
        data:[
            {title:"白皮书：EMC针对ORACLE的性能解决方案",description:null,url:"https://emcinformation.com/294614/SI/" + M + ".ashx?reg=" + regold + "_q1ib_top3_pdf1",type:"pdf"},
            {title:"产品信息：EMC IT的虚拟化ORACLE部署框架",description:null,url:"https://emcinformation.com/294321/SI/" + M + ".ashx?reg=" + regold + "_q1ib_top3_pdf2",type:"pdf"},
			{title:"白皮书：利用EMC和VMware技术来提高您的Oracle投资回报",description:null,url:"https://emcinformation.com/294417/SI/" + M + ".ashx?reg=" + regold + "_q1ib_top3_pdf3",type:"pdf"}
        ]
	},
	{img:"images/Q2-big-data.jpg",imghref:"http://china.emc.com/microsites/bigdata2013W4/webcast/index.htm?reg=" + regold + "&M=" + M + "_portal",category:"大数据",title:"“EMC从容管理大数据增长”在线研讨会",info:"大数据爆炸式增长，存储架构何以抵挡多样复杂考验？EMC三大存储方案助您迈出决胜未来第一步！",url:"http://china.emc.com/microsites/bigdata2013W4/webcast/index.htm?reg=" + regold + "&M=" + M + "_portal",date:"2014年3月6日",
		video:[
            {title:"EMC大数据案例介绍",description:"至2020年，企业中的数据80%以上将是非结构化数据，如何利用和分析好这些数据对企业来说至关重要。本视频介绍了在地产行业社交媒体数据挖掘，和银行及保险行业反欺诈分析2个案例分析。",url:"https://emcinformation.com/294319/SI/" + M + ".ashx?reg=" + regold + "_q1bigdata_flv1"},
			{title:"基于第三平台的isilon行业解决方案",description:"针对第三平台的Isilon 横向可扩展存储平台，以及Isilon在媒体、娱乐、医疗，生命科学、视频监控等领域的行业应用。",url:"https://emcinformation.com/294511/SI/" + M + ".ashx?reg=" + regold + "_q1bigdata_flv2"},
			{title:"EMC大数据案例介绍 问与答",description:null,url:"https://emcinformation.com/294320/SI/" + M + ".ashx?reg=" + regold + "_q1bigdata_flv3"}
        ],
        speech:[
            {title:"EMC大数据案例介绍",description:null,url:"https://emcinformation.com/294412/SI/" + M + ".ashx?reg=" + regold + "_q1bigdata_pdf1"},
            {title:"基于第三平台的isilon行业解决方案",description:null,url:"https://emcinformation.com/294512/SI/" + M + ".ashx?reg=" + regold + "_q1bigdata_pdf2"}
        ],
        data:[
            {title:"成功案例：华大基因：看Isilon横向存储如何从容应对大数据高性能环境",description:null,url:"https://emcinformation.com/294413/SI/" + M + ".ashx?reg=" + regold + "_q1bigdata_top3_pdf1",type:"pdf"},
            {title:"成功案例：中南医院：采用VNX实现存储能力轻松扩展750倍，系统可用性全面提高，用大数据促进医疗变革",description:null,url:"https://emcinformation.com/294415/SI/" + M + ".ashx?reg=" + regold + "_q1bigdata_top3_pdf2",type:"pdf"},
			{title:"产品信息：EMC 大数据之旅3部曲",description:null,url:"https://emcinformation.com/294514/SI/" + M + ".ashx?reg=" + regold + "_q1bigdata_top3_pdf3",type:"pdf"}
        ]
	}
];
function createHtml(pos, type) {
	var pagesize = 4;
    var newsdata = newsList;
    if (type != null) {
        newsdata = new Array;
        for (var k = 0; k < newsList.length; k++) {
            if (newsList[k].category.indexOf(type) > -1)
                newsdata.push(newsList[k]);
        }
		pagesize = newsdata.length;
    }
    var i = 0;
    var array = new Array;
    array.push('<ul class="fixed_chen">');
    for (i = 0; i < newsdata.length; i++) {
        if (i % pagesize == 0) array.push('<li>');
        array.push('<div class="contentbox">');
        array.push('<div class="leftbox">');
        array.push('<a href="' + newsdata[i].imghref + '" target="_blank"><img src="' + newsdata[i].img + '" style="float:left;"></a>');
        array.push('<div class="inner_box">');
        switch(pos) {
            case 'home':
                array.push('<div class="date">' + newsdata[i].date + '</div>');
                array.push('<p class="title">' + newsdata[i].title + '</p>');
                break;
            case 'type':
                array.push('<div class="info">' + newsdata[i].info + '</div>');
				break;
            default:
                throw new Error('nopos');
                break;
        }
        array.push('</div>');
        array.push('<a href="' + newsdata[i].url + '" target="_blank" class="enter">进入活动页面 >></a>');
        array.push('</div>');
        array.push('<div class="rightbox"><a href="#flv"><img src="images/flv_btn.jpg"></a></div>');
        /*---------*/
        if (newsdata[i].video != null) {
            array.push('<div style="display:none;">');
            for (var l = 0; l < newsdata[i].video.length; l++) {
                //if (l > 0) array.push('<br><br>');
                array.push('<div class="fixed_chen" style="padding-top: 10px;"><img src="images/video_icon.jpg" style="display:block;float:left;width:21px;margin-right:8px;"><a style="display:block;float:left;width:400px;margin-top:2px;" onmouseover="showtips(this)" onmouseout="hidetips(this)" href="' + newsdata[i].video[l].url + '" target="_blank">' + newsdata[i].video[l].title + '</a>'+'</div>');
                if (newsdata[i].video[l].description != null)
                    array.push('<div style="display:none;">' + newsdata[i].video[l].description + '</div>');
            }
            array.push('</div>');
        } else {
			array.push('<div style="display:none;"><div style="color:#fff;font-size:12px;font-weight:bold;">很抱歉，没有相匹配的资料，敬请期待！</div></div>');
		}
        /*---------*/
        array.push('<div class="rightbox"><a href="#pdf"><img src="images/speech_btn.jpg"></a></div>');
        /*---------*/
        if (newsdata[i].speech != null) {
            array.push('<div style="display:none;">');
            for (var l = 0; l < newsdata[i].speech.length; l++) {
                //if (l > 0) array.push('<br><br>');
                array.push('<div class="fixed_chen" style="padding-top: 10px;"><img src="images/pdf_icon.jpg" style="display:block;float:left;width:21px;margin-right:8px;"><a style="display:block;float:left;width:400px;margin-top:2px;" onmouseover="showtips(this)" onmouseout="hidetips(this)" href="' + newsdata[i].speech[l].url + '" target="_blank">' + newsdata[i].speech[l].title + '</a>'+'</div>');
                if (newsdata[i].speech[l].description != null)
                    array.push('<div style="display:none;">' + newsdata[i].speech[l].description + '</div>');
            }
            array.push('</div>');
        } else {
			array.push('<div style="display:none;"><div style="color:#fff;font-size:12px;font-weight:bold;">很抱歉，没有相匹配的资料，敬请期待！</div></div>');
		}
        /*---------*/
        array.push('<div class="rightbox" style="border:none;"><a href="#top3"><img src="images/pdf_btn.jpg"></a></div>');
        /*---------*/
        if (newsdata[i].data != null) {
            array.push('<div style="display:none;">');
            for (var l = 0; l < newsdata[i].data.length; l++) {
                //if (l > 0) array.push('<br><br>');
                array.push('<div class="fixed_chen" style="padding-top: 10px;"><img style="display:block;float:left;width:21px;margin-right:8px;" src="images/' + newsdata[i].data[l].type + '_icon.jpg"><a style="display:block;float:left;width:400px;margin-top:2px;" onmouseover="showtips(this)" onmouseout="hidetips(this)" href="' + newsdata[i].data[l].url + '" target="_blank">' + newsdata[i].data[l].title + '</a>'+'</div>');
                if (newsdata[i].data[l].description != null)
                    array.push('<div style="display:none;">' + newsdata[i].data[l].description + '</div>');
            }
            array.push('</div>');
        } else {
			array.push('<div style="display:none;"><div style="color:#fff;font-size:12px;font-weight:bold;">很抱歉，没有相匹配的资料，敬请期待！</div></div>');
		}
        /*---------*/
        array.push('<div style="clear:both;"></div>');
        array.push('</div>');
        if (i % pagesize == 3) array.push('</li>');
    }
    if (i % pagesize > 0 || pagesize < 3) array.push('</li>');
    array.push('</ul>');
	if (type == null) {
		array.push('<div class="but">');
		for (var j = 0; j < Math.ceil(newsdata.length / pagesize); j++) {
			if (j == 0)
				array.push('<img src="images/disc_hover.jpg">');
			else
				array.push('<img src="images/disc.jpg">');
		}
		array.push('<div style="clear:both;"></div>');
		array.push('</div>');
	}
    return array.join('');
}



//大师开讲
var video_content_list=[
    {img:"images/video_poster_5.jpg",title:"EMC CMO Jeremy Burton独家解析 如何构建现代化数据中心",date:"2017年4月10日",des:"伴随数据飞速增长，传统IT应用程序无法满足需求，EMC全球市场总监Jeremy Burton，独家分享企业如何在保持传统应用程序敏捷性同时，降低成本，来构建新应用程序，成功实现IT基础架构转型。",btnid:"video-btn-Jeremy-Burton",imgid:"video-img-Jeremy-Burton",videolength:"4:14"},
    {img:"images/video_poster_5.jpg",title:"EMC CMO Jeremy Burton独家解析 如何构建现代化数据中心",date:"2017年4月10日",des:"伴随数据飞速增长，传统IT应用程序无法满足需求，EMC全球市场总监Jeremy Burton，独家分享企业如何在保持传统应用程序敏捷性同时，降低成本，来构建新应用程序，成功实现IT基础架构转型。",btnid:"video-btn-Jeremy-Burton",imgid:"video-img-Jeremy-Burton",videolength:"1:34"},
    {img:"images/video_poster_4.jpg",title:"“创新先生” Rowan Gibson 解读数字化革命下创新思维",date:"2017年2月14日",des:"数字化革命风起云涌，国际创新咨询公司Imagination Bridge总裁及innovationexcellence.com网络联合创始人Rowan Gibson，揭秘在数字化革命背景下创新者抓住机遇需要具备的创新型思维。",btnid:"video-btn-Rowan-Gibson-Low",imgid:"video-img-Rowan-Gibson-Low",videolength:"3:52"},
    {img:"images/video_poster_3.jpg",title:"案例分享：中南传媒打造全产业链信息共享平台",date:"2016年11月7日",des:"随着中国文化软实力战略的崛起，中南传媒湖南省新华书店集团有限责任公司数字运营中心主任傅振宇,揭秘如何与EMC合作从传统IT转型并打造综合性信息服务平台体系，实现全产业链的信息共享。",btnid:"video-btn-2016Q1-AllFlash",imgid:"video-img-2016Q1-AllFlash",videolength:"00:33"},
    {img:"images/video_poster_2.jpg",title:"IT转型之拥抱融合架构",date:"2016年8月29日",des:"数字宇宙时代已经来临，IDC中国副总裁兼首席分析师武连峰，从多个角度深度解析了IT基础设施如何更好地拥抱融合基础架构、积累云端运营能力以支持企业数字化转型。",btnid:"video-btn-idc-hci",imgid:"video-img-idc-hci",videolength:"5:05"},
    {img:"images/video_poster_1.jpg",title:"IT转型之现代数据中心",date:"2016年7月18日",des:"现代化数据中心帮助企业在数字化时代实现IT 运营的高效率、敏捷性与可靠性。EMC大中华区CTO Pony 马瑞禹，为您解读如何通过构建现代数据中心助力IT转型。",btnid:"video-btn-xihua",imgid:"video-img-xihua",videolength:"1:18"}
];
function createVideoTabContent(){
    var strHtml='<ul class="tab3_video_outer">';
    for(var i=0;i<video_content_list.length;i++){
        strHtml+='<li class="fixed_chen">';
        strHtml+='<a target="_blank"'+'class="tab3_video_img"';
        strHtml+='onclick="ga('+"'send',"+"'event',"+"'btn',"+"'click',"+"'"+video_content_list[i].imgid+"'"+')"';
        strHtml+='class="tab3_video_btn">';
        strHtml+="<div class='tab3_video_img_outer_1'>";
        strHtml+="<div class='tab3_video_layer'><img class='tab3_icon_gu' src='images/video_play_btn.jpg'></div>";
        strHtml+='<img src="'+video_content_list[i].img+'" class="left_gu">';
        strHtml+='<div class="video_length_box">'+video_content_list[i].videolength+'</div>';
        strHtml+='</div></a>';
        strHtml+='<div class="right_gu">';
        strHtml+='<div class="video_main_title_outer">';
        strHtml+='<span class="video_main_title">'+video_content_list[i].title+'</span>&nbsp;|&nbsp;';
        strHtml+='<span class="video_main_date">'+video_content_list[i].date+'</span></div>';
        strHtml+='<div class="video_intr_text">'+video_content_list[i].des+'</div>';
        strHtml+='<a target="_blank" onclick="ga('+"'send',"+"'event',"+"'btn',"+"'click',"+"'"+video_content_list[i].btnid+"'"+');"'+'class="tab3_video_btn">';
        strHtml+='<img src="images/video_btn_1.jpg" class="video_btn_1"></a>';
        strHtml+='</div>';
        strHtml+="</li>";
    }
    strHtml+='</ul>';
    return strHtml; 
}


//解决方案
var now_page_yunjisuan=now_page_ITzhuanxing=now_page_shancun=now_page_zhichiyun=now_page_hxkz=now_page_rjdy=now_page_rhjcjg=now_page_dashuju=now_page_sjbh=now_page_anli=now_page_ccpt=now_page_fuwu=0;

var solution_video_list=[
    {
        img:"images/solution_video_img_103.gif",
        title:"听企业谈 EMC 全闪存+超融合的实用经验",
        description:"华泰资产管理独家揭秘  EMC 如何助力企业管理运维",
        url:"https://emcinformation.com/495001/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"4:14",
        category:"ITzhuanxing,rhjcjg,anli"
    },
    {   
        img:"images/solution_video_img_102.jpg",
        title:"EMC ISILON 媒体与娱乐存储解决方案",
        description:"媒体与娱乐的IT蜕变",
        url:"https://emcinformation.com/492603/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"30:17",
        category:"ITzhuanxing,yunjisuan,anli"
    },
    {   
        img:"images/solution_video_img_101.jpg",
        title:"广电行业IT转型推动媒体云建设",
        description:"EMC混合云如何满足媒体新兴互联网对云平台的要求",
        url:"https://emcinformation.com/492302/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"37:21",
        category:"ITzhuanxing,yunjisuan,rhjcjg"
    },
    {   
        img:"images/solution_video_img_100.jpg",
        title:"CCTV云战略案例分享",
        description:"来看看CCTV未来的“云图”目标",
        url:"https://emcinformation.com/492602/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"10:26",
        category:"ITzhuanxing,yunjisuan,anli"
    },
    {   
        img:"images/solution_video_img_99.jpg",
        title:"SMG融媒体技术应用实践",
        description:"看SMG如何打造融媒体服务，实现智慧化传播",
        url:"https://emcinformation.com/492601/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"17:05",
        category:"ITzhuanxing,yunjisuan,anli"
    },
    {   
        img:"images/solution_video_img_98.jpg",
        title:"全球媒体行业发展趋势",
        description:"2017全球媒体行业发展趋势",
        url:"https://emcinformation.com/492301/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"20:20",
        category:"ITzhuanxing,yunjisuan,dashuju"
    },
    {   
        img:"images/solution_video_img_97.jpg",
        title:"广电行业现代化数据中心支撑IT转型",
        description:"如何通过基础架构转型助力融合媒体",
        url:"https://emcinformation.com/492501/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"24:49",
        category:"ITzhuanxing,yunjisuan,rhjcjg"
    },
    {   
        img:"images/solution_video_img_61.jpg",
        title:"“创新先生”Rowan Gibson解读数字化革命下创新思维",
        description:"何种思维能够应对数字化革命",
        url:"https://emcinformation.com/481601/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"56:21",
        category:"ITzhuanxing,dashuju,yunjisuan",
        isTop5:true
    },
    {   
        img:"images/solution_video_img_60.jpg",
        title:"案例分享：中南传媒打造全产业链信息共享平台",
        description:"如何与EMC合作实现全产业链的信息共享",
        url:"https://emcinformation.com/466501/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"25:07",
        category:"ITzhuanxing,anli",
        isTop5:true
    },
    {   
        img:"images/solution_video_img_59.jpg",
        title:"IT转型之拥抱融合架构",
        description:"融合基础架构如何支持数字化转型",
        url:"https://emcinformation.com/456701/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"33:23",
        category:"ITzhuanxing,rhjcjg"
    },
    {   
        img:"images/solution_video_img_18.jpg",
        title:"IT转型之现代数据中心",
        description:"如何构建现代数据中心助力IT转型",
        url:"https://emcinformation.com/428701/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"90:42",
        category:"ITzhuanxing,shancun,rhjcjg,yunjisuan,rjdy,sjbhs"
    },
    {   
        img:"images/solution_video_img_84.jpg",
        title:"现代 IT 基础架构之超融合 VxRail",
        description:"数字化IT转型困境？看超融合VxRail如何快速打造软件定义数据中心",
        url:"https://emcinformation.com/489401/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"1:10:55",
        category:"ITzhuanxing,rhjcjg"
    },
    {   
        img:"images/solution_video_img_58.jpg",
        title:"IT2020 高端论坛: 数字化转型和IT转型－EMC公司大中华区售前及系统工程部总经理 梁放",
        description:"企业如何转型应对第四次产业革命",
        url:"https://emcinformation.com/474703/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"17:59",
        category:"ITzhuanxing,shancun,rhjcjg,yunjisuan,rjdy,sjbh"
    },
    {   
        img:"images/solution_video_img_95.jpg",
        title:"IT2020 高端论坛:  应对数字化变革的创新战略",
        description:"什么是数字化变革以及如何应对",
        url:"https://emcinformation.com/474702/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"56:21",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_57.jpg",
        title:"IT2020 高端论坛:  数字经济，经济发展的新动能－中关村大数据产业联盟副理事长，信息社会50人论坛成员 郭昕",
        description:"数字经济发展的5大趋势",
        url:"https://emcinformation.com/474605/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"31:32",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_56.jpg",
        title:"IT2020 高端论坛: IT2020和数字化转型－全球副总裁EMC中国卓越研发集团总经理 刘伟博士",
        description:"数字化转型过程中的技术问题",
        url:"https://emcinformation.com/474701/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"25:17",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_55.jpg",
        title:"IT2020 高端论坛: CIO的当务之急－DELL EMC信息基础架构解决方案集团客户与市场部总裁 Frank Hauck",
        description:"Dell和EMC携手意味着什么",
        url:"https://emcinformation.com/474604/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"35:24",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_54.jpg",
        title:"IT2020 高端论坛: 领航数字化转型之旅－全球高级副总裁兼EMC大中华区总裁 叶成辉",
        description:"预测未来IT市场",
        url:"https://emcinformation.com/474503/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"8:27",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_68.jpg",
        title:"IT转型之超融合 VxRail 在线研讨会",
        description:"客户经验谈及VxRail、VSAN介绍",
        url:"https://emcinformation.com/463801/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"1:29:15",
        category:"rhjcjg,yunjisuan,ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_81.jpg",
        title:"EMC Unity 全闪存中端存储新品",
        description:"全闪存中心愿景及Unity介绍和演示",
        url:"https://emcinformation.com/444704/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"1:43:30",
        category:"ITzhuanxing,shancun"
    },
    {   
        img:"images/solution_video_img_53.jpg",
        title:"云科演讲-超融合解决方案",
        description:"Ykcloud产品介绍及应用场景",
        url:"https://emcinformation.com/433306/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"19:48",
        category:"rhjcjg"
    },
    {   
        img:"images/solution_video_img_52.jpg",
        title:"IT转型数据保护",
        description:"如何让现代化数据保护固若金汤",
        url:"https://emcinformation.com/433110/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"22:19",
        category:"ITzhuanxing,sjbh"
    },
    {   
        img:"images/solution_video_img_51.jpg",
        title:"IT转型融合基础架构",
        description:"如何搭建现代数据中心",
        url:"https://emcinformation.com/433305/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"18:39",
        category:"ITzhuanxing,rhjcjg"
    },
    {   
        img:"images/solution_video_img_80.jpg",
        title:"迈向现代化 2016EMC全国巡展：高峰对话/互动问答",
        description:"EMC产品在高校中的应用",
        url:"https://emcinformation.com/433109/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"24:20",
        category:"yunjisuan,ITzhuanxing,shancun,rhjcjg,dashuju"
    },
    {   
        img:"images/solution_video_img_17.jpg",
        title:"迈向现代化 2016EMC全国巡展：构建IT转型",
        description:"EMC的理念、荣誉、服务与转型",
        url:"https://emcinformation.com/433303/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"36:48",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_50.jpg",
        title:"IT转型四大支柱之横向扩展",
        description:"360度全方位解析Isilon数据湖",
        url:"https://emcinformation.com/433402/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"24:18",
        category:"ITzhuanxing,dashuju"
    },
    {   
        img:"images/solution_video_img_49.jpg",
        title:"IT转型四大支柱之闪存",
        description:"EMC全闪存家族介绍",
        url:"https://emcinformation.com/433108/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"36:38",
        category:"ITzhuanxing,shancun"
    },
    {   
        img:"images/solution_video_img_48.jpg",
        title:"IT转型四大支柱之云赋能和软件定义",
        description:"EMC重新定义云、大数据和可信IT",
        url:"https://emcinformation.com/433304/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"33:26",
        category:"ITzhuanxing,yunjisuan,rjdy"
    },
    {   
        img:"images/solution_video_img_70.jpg",
        title:"迈向现代化 2016EMC全国巡展：构建IT转型",
        description:"EMC的理念、荣誉、服务与转型",
        url:"https://emcinformation.com/433303/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"36:48",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_69.jpg",
        title:"EMC “开启闪存技术新纪元，迈向全闪存数据中心”视频回顾",
        description:"多位大咖畅聊全闪存数据中心并答疑答",
        url:"https://emcinformation.com/428701/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"90:42",
        category:"shancun,ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_94.jpg",
        title:"问与答：重新定义超融合架构——EMC与VMware独家VxRail新品发布在线研讨会 ",
        description:"简捷IT是一种什么体验？问与答",
        url:"https://emcinformation.com/426604/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"32:25",
        category:"ITzhuanxing,rhjcjg"
    },
    {   
        img:"images/solution_video_img_93.jpg",
        title:"IT转型超融合架VxRail应用装置介绍及演示",
        description:"超融合架构VxRail介绍，满满干货",
        url:"https://emcinformation.com/426603/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"35:35",
        category:"ITzhuanxing,rhjcjg"
    },
    {   
        img:"images/solution_video_img_16.jpg",
        title:"超融合架构的发展趋势以vSAN的技术实践",
        description:"VSAN介绍、使用场景、案例及优势",
        url:"https://emcinformation.com/426503/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"24:57",
        category:"rhjcjg"
    },
    {   
        img:"images/solution_video_img_15.jpg",
        title:"EMC备份归档管理软件包——提供VMware环境下轻松的数据保护",
        description:"轻松驾驭VMware数据保护及答疑",
        url:"https://emcinformation.com/413103/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"53:51",
        category:"ITzhuanxing,sjbh"
    },
    {   
        img:"images/solution_video_img_79.jpg",
        title:"问与答：《对Oracle数据副本的快速使用及AppSync演示》",
        description:"AppSync使用的问答时间",
        url:"https://emcinformation.com/412703/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"10:59",
        category:"shancun,ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_78.jpg",
        title:"技术演示：对Oracle数据副本的快速使用及AppSync演示",
        description:"手把手演示教授AppSync",
        url:"https://emcinformation.com/412803/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"21:02",
        category:"shancun,ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_47.jpg",
        title:"对Oracle数据副本的快速使用及AppSync演示的架构拓扑图",
        description:"如何结合XtremIO 、AppSync方便使用",
        url:"https://emcinformation.com/412902/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"11:23",
        category:"ITzhuanxing,shancun"
    },
    {   
        img:"images/solution_video_img_46.jpg",
        title:"问与答：《简单快捷获取数据副本，EMC XtremIO 提升您的数据价值》",
        description:"关于XtremIO的有问有答",
        url:"https://emcinformation.com/412802/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"19:42",
        category:"ITzhuanxing,shancun"
    },
    {   
        img:"images/solution_video_img_45.jpg",
        title:"简单快捷获取数据副本，EMC XtremIO 提升您的数据价值",
        description:"重新认识副本数据管理及Icdm介绍",
        url:"https://emcinformation.com/412901/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"52:39",
        category:"ITzhuanxing,shancun"
    },
    {   
        img:"images/solution_video_img_74.jpg",
        title:"创新VNX及软件——重新定义VMware虚机连续数据保护",
        description:"VNX统一混合闪存阵列及软件包介绍",
        url:"https://emcinformation.com/412501/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"76:30",
        category:"sjbh,ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_88.jpg",
        title:"IT2020 EMC公司全球高级副总裁兼大中华区总裁叶成辉结束致辞—武汉站",
        description:"EMC产品及服务的转型",
        url:"https://emcinformation.com/412203/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"6:57",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_91.jpg",
        title:"IT2020 高峰对话—武汉站",
        description:"行业大咖畅聊互联网技术的未来-武汉站",
        url:"https://emcinformation.com/412201/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"46:46",
        category:"ITzhuanxing,yunjisuan,dashuju"
    },
    {   
        img:"images/solution_video_img_43.jpg",
        title:"IT2020 工业互联网革命已经开始—武汉站",
        description:"如何用“无为而治”应对互联网剧变 - 武汉站",
        url:"https://emcinformation.com/412002/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"39:05",
        category:"ITzhuanxing,yunjisuan"
    },
    {   
        img:"images/solution_video_img_42.jpg",
        title:"IT2020 高端论坛: 中国与美国：引领IT和互联网的未来—武汉站",
        description:"当中国经济崛起遇到互联网崛起",
        url:"https://emcinformation.com/412102/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"32:27",
        category:"ITzhuanxing,yunjisuan"
    },
    {   
        img:"images/solution_video_img_89.jpg",
        title:"IT2020 高端论坛: 武汉市副市长刘立勇欢迎致辞—武汉站",
        description:"副市长做武汉简介并预祝论坛成功",
        url:"https://emcinformation.com/412101/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"5:33",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_92.jpg",
        title:"IT2020 高端论坛:EMC公司全球高级副总裁兼大中华区总裁叶成辉结束致辞—青岛站",
        description:"EMC产品及服务的转型",
        url:"https://emcinformation.com/411903/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"11:21",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_87.jpg",
        title:"IT2020 高端论坛:高峰对话—青岛站",
        description:"三位行业大咖畅聊互联网技术的未来",
        url:"https://emcinformation.com/411902/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"26:15",
        category:"ITzhuanxing,yunjisuan,dashuju"
    },
    {   
        img:"images/solution_video_img_44.jpg",
        title:"IT2020 高端论坛:以互联网+为动力，促进中国制造业转型升级—青岛站",
        description:"如何借助互联网实现制造业转型创新",
        url:"https://emcinformation.com/411901/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"30:17",
        category:"ITzhuanxing,yunjisuan"
    },
    {   
        img:"images/solution_video_img_43.jpg",
        title:"IT2020 高端论坛: 工业互联网革命已经开始—青岛站",
        description:"如何用“无为而治”应对互联网剧变",
        url:"https://emcinformation.com/411807/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"36:50",
        category:"ITzhuanxing,yunjisuan"
    },
    {   
        img:"images/solution_video_img_42.jpg",
        title:"IT2020 高端论坛:中国与美国：引领IT和互联网的未来—青岛站",
        description:"当中国经济崛起遇到互联网崛起",
        url:"https://emcinformation.com/411706/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"32:46",
        category:"ITzhuanxing,yunjisuan"
    },
    {   
        img:"images/solution_video_img_85.jpg",
        title:"IT2020 高端论坛: 青岛市副市长王广正欢迎致辞—青岛站",
        description:"副市长做青岛简介并预祝论坛成功",
        url:"https://emcinformation.com/411705/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"3:50",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_14.jpg",
        title:"IT 2020高端论坛:EMC公司董事会副主席Bill Teuber欢迎致辞—青岛站",
        description:"5分钟了解此次论坛主题及意义",
        url:"https://emcinformation.com/411601/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"06:06",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_77.jpg",
        title:"最走心的会议Q&A：看EMC Isilon如何创造价值",
        description:"兼容，性能，扩展……想看的在这里",
        url:"https://emcinformation.com/346602/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"22:18",
        category:"dashuju"
    },
    {   
        img:"images/solution_video_img_67.jpg",
        title:"视频演示：Isilon构建数据实践",
        description:"Isilon数据湖秒杀传统Hadoop构建",
        url:"https://emcinformation.com/346901/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"17:07",
        category:"dashuju"
    },
    {   
        img:"images/solution_video_img_13.jpg",
        title:"EMC技术专家手把手教你利用Isilon构建企业数据湖",
        description:"洗牌数据宇宙  Isilon数据湖横空出世",
        url:"https://emcinformation.com/346801/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"35:29",
        category:"dashuju"
    },
    {   
        img:"images/solution_video_img_41.jpg",
        title:"“CIO与专家联袂解读 2015全闪存阵列的行业应用” 在线访谈",
        description:"什么！业内大咖都在谈论全闪存",
        url:"https://emcinformation.com/411302/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"89:25",
        category:"shancun"
    },
    {   
        img:"images/solution_video_img_73.jpg",
        title:"VNXe3200，为何能帮助企业存储“一步到位”？",
        description:"FAST闪存优化 N种需求 1步到位",
        url:"https://emcinformation.com/332801/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"51:54",
        category:"ITzhuanxing,ccpt"
    },
    {   
        img:"images/solution_video_img_12.jpg",
        title:"分析师告诉您，存储的投资回报应该怎么算？",
        description:"IT不断演进 中端存储压力山大",
        url:"https://emcinformation.com/311502/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"42:29",
        category:"ITzhuanxing,ccpt"
    },
    {   
        img:"images/solution_video_img_40.jpg",
        title:"闪存的典型应用场景及最佳做法 问与答",
        description:"EMC XtremlO中国区负责人 走心答网友问",
        url:"https://emcinformation.com/311002/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"12:57",
        category:"shancun"
    },
    {   
        img:"images/solution_video_img_39.jpg",
        title:"EMC XtremIO 全闪存阵列最佳应用场景分享",
        description:"3大典型应用场景 揭示XtremlO销量第一的秘诀",
        url:"https://emcinformation.com/310903/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"52:51",
        category:"shancun"
    },
    {   
        img:"images/solution_video_img_2.jpg",
        title:"EMC XtremIO 全闪存阵列与企业级应用",
        description:"霸气XtremlO上线8个月 圈金超2亿美元",
        url:"https://emcinformation.com/310803/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"40:32",
        category:"shancun"
    },
    {   
        img:"images/solution_video_img_38.jpg",
        title:"EMC ProtectPoint数据保护解决方案,如何全方位提升Oracle数据运营和保护需求 问与答",
        description:"关于EMC ProtectPoint，这里有史上最详尽的问答",
        url:"https://emcinformation.com/305902/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"26:45",
        category:"sjbh"
    },
    {   
        img:"images/solution_video_img_11.jpg",
        title:"EMC ProtectPoint数据保护解决方案,如何全方位提升Oracle数据运营和保护需求",
        description:"EMC 再放大招 备份快10倍 业务0影响",
        url:"https://emcinformation.com/305805/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"30:21",
        category:"sjbh"
    },
    {   
        img:"images/solution_video_img_83.jpg",
        title:"EMC面向企业重新定义混合云",
        description:"看EMC大中华区首席技术官定义混合云",
        url:"https://emcinformation.com/484501/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"22:28",
        category:"yunjisuan"
    },
    {   
        img:"images/solution_video_img_82.jpg",
        title:"满足当前和未来应用性能需求的EMC新一代统一存储详解问与答",
        description:"关于新一代统一存储，让专家告诉你想知道的",
        url:"https://emcinformation.com/294204/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"16:17",
        category:"ITzhuanxing,ccpt"
    },
    {   
        img:"images/solution_video_img_37.jpg",
        title:"满足当前和未来应用性能需求的EMC新一代统一存储详解",
        description:"关于新产品，你想知道的都在这里",
        url:"https://emcinformation.com/294105/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"34:27",
        category:"ITzhuanxing,ccpt"
    },
    {   
        img:"images/solution_video_img_36.jpg",
        title:"企业选择中端存储需要考虑的关键因素 问与答",
        description:"美女专家智慧应答,中端存储难题",
        url:"https://emcinformation.com/294104/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"17:25",
        category:"ITzhuanxing,ccpt"
    },
    {   
        img:"images/solution_video_img_10.jpg",
        title:"企业选择中端存储需要考虑的关键因素",
        description:"中桥ICA王丛 讲解中端存储的正确打开方式",
        url:"https://emcinformation.com/294006/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"42:29",
        category:"ITzhuanxing,ccpt"
    },
    {   
        img:"images/solution_video_img_9.jpg",
        title:"满足企业预算和高性能需求的EMC新一代统一存储详解",
        description:"预算不高，只能凑合？VNXe 3200给你拒绝凑合的底气",
        url:"https://emcinformation.com/293905/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"51:54",
        category:"ITzhuanxing,ccpt"
    },
    {   
        img:"images/solution_video_img_96.jpg",
        title:"全闪存存储典型应用场景",
        description:"不懂如何用闪存？那就别错过了，EMC 来教你！",
        url:"https://emcinformation.com/296506/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"23:22",
        category:"shancun"
    },
    {   
        img:"images/solution_video_img_35.jpg",
        title:"重新定义全闪存存储",
        description:"Xtremlo强势来袭，6个月狂销1亿美金",
        url:"https://emcinformation.com/296604/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"17:58",
        category:"shancun"
    },
    {   
        img:"images/solution_video_img_34.jpg",
        title:"HADOOP环境下新一代大数据解决方案",
        description:"Word 天！原来你是像动车一样的Isilon 横向存储",
        url:"https://emcinformation.com/296504/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"20:30",
        category:"dashuju"
    },
    {   
        img:"images/solution_video_img_33.jpg",
        title:"重新定义横向扩展NAS",
        description:"必须曝光！NAS 硬件软件双升级",
        url:"https://emcinformation.com/296806/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"16:24",
        category:"dashuju"
    },
    {   
        img:"images/solution_video_img_32.jpg",
        title:"新一代业务连续性及案例分享",
        description:"新一代业务连续性及案例分享<br />高阶业务连续高可用 数据无损恢复",
        url:"https://emcinformation.com/296704/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"33:09",
        category:"sjbh"
    },
    {   
        img:"images/solution_video_img_31.jpg",
        title:"重新定义数据保护",
        description:"重新定义数据保护<br />数据连续体满足备份恢复调取归档",
        url:"https://emcinformation.com/294110/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"02:22",
        category:"sjbh"
    },
    {   
        img:"images/solution_video_img_66.jpg",
        title:"软件定义数据中心",
        description:"软件定义塑造更广阔的生态系统",
        url:"https://emcinformation.com/296603/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"39:01",
        category:"rjdy"
    },
    {   
        img:"images/solution_video_img_30.jpg",
        title:"重新定义存储",
        description:"重新定义存储<br />不同工作负载，选择不同存储产品",
        url:"https://emcinformation.com/296702/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"24:09",
        category:"shancun,rjdy"
    },
    {   
        img:"images/solution_video_img_29.jpg",
        title:"重新定义数据中心-全球首款企业数据服务平台VMAX3发布",
        description:"全球首款企业数据服务平台VMAX3发布<br />功能强大安全靠谱，新定义数据中心",
        url:"https://emcinformation.com/296802/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"24:47",
        category:"shancun"
    },
    {   
        img:"images/solution_video_img_28.jpg",
        title:"从第二平台到第三平台",
        description:"从第二平台到第三平台<br />闪存大户EMC，满足高性能需求",
        url:"https://emcinformation.com/296502/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"23:42",
        category:"ITzhuanxing"
    },
    {
        img:"images/solution_video_img_2.jpg",
        title:"重新定义可能性",
        description:"生活大变化 看EMC IT大变化",
        url:"https://emcinformation.com/294301/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"46:55",
        category:"ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_76.jpg",
        title:"2014EMC数据保护策略和新品发布在线研讨会 问与答",
        description:"网友实力捧场，问题刷到停不下来",
        url:"https://emcinformation.com/294109/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"24:01",
        category:"sjbh"
    },
    {   
        img:"images/solution_video_img_65.jpg",
        title:"EMC 数据保护全面解决方案最新发布解析",
        description:"数据保护服务化，自主操作可行化",
        url:"https://emcinformation.com/294207/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"48:33",
        category:"sjbh"
    },
    {
        img:"images/solution_video_img_1.jpg",
        title:"ESG 关于数据保护全面体系架构的观点",
        description:"数据保护多种细分产品 EMC都能提供",
        url:"https://emcinformation.com/293907/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"07:03",
        category:"sjbh"
    },
    {   
        img:"images/solution_video_img_27.jpg",
        title:"EMC重新定义IT即服务最佳做法在线研讨会 问与答",
        description:"EMC重新定义IT即服务最佳做法在线研讨会 问与答<br />具体解答IT转型下企业如何转型",
        url:"https://emcinformation.com/294310/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"33:10",
        category:"yunjisuan,fuwu"
    },
    {   
        img:"images/solution_video_img_64.jpg",
        title:"EMC重新定义IT即服务最佳做法在线研讨会",
        description:"IT转型让过程更简单，成本更低",
        url:"https://emcinformation.com/294502/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"44:51",
        category:"fuwu,yunjisuan"
    },
    {   
        img:"images/solution_video_img_63.jpg",
        title:"借助EMC闪存重新定义可能性网络研讨会 问与答",
        description:"专家直答高性价比闪存如何选",
        url:"https://emcinformation.com/294401/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"18:36",
        category:"shancun"
    },
    {   
        img:"images/solution_video_img_8.jpg",
        title:"借助EMC闪存重新定义可能性网络研讨会",
        description:"闪存无处不在，重新定义数据可能性",
        url:"https://emcinformation.com/294301/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"46:55",
        category:"shancun"
    },
    {   
        img:"images/solution_video_img_26.jpg",
        title:"高可用到数据保护整体方案-靳扬",
        description:"高可用到数据保护整体方案 数据连续体 业务高可用",
        url:"https://emcinformation.com/294303/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"47:53",
        category:"sjbh"
    },
    {   
        img:"images/solution_video_img_7.jpg",
        title:"整体构架规划思路和经验分享-徐晖",
        description:"虚拟化数据中心业务连续性解决方案<br />聚焦整体构架规划，分享解决方案",
        url:"https://emcinformation.com/294302/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"35:57",
        category:"sjbh"
    },
    {   
        img:"images/solution_video_img_62.jpg",
        title:"HADOOP环境下大数据管理之道在线研讨会 问与答",
        description:"在线回答部署瓶颈、数据迁移等问题",
        url:"https://emcinformation.com/294405/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"10:18",
        category:"dashuju"
    },
    {   
        img:"images/solution_video_img_6.jpg",
        title:"HADOOP环境下大数据管理之道在线研讨会",
        description:"分布式系统框架  处理大规模数据集",
        url:"https://emcinformation.com/294503/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"44:19",
        category:"dashuju"
    },
    {   
        img:"images/solution_video_img_72.jpg",
        title:"CIO谈 '反恐预案'视频",
        description:"虚拟化新形态，加强业务连续性",
        url:"https://emcinformation.com/294314/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"92:40",
        category:"sjbh"
    },
    {   
        img:"images/solution_video_img_25.jpg",
        title:"EMC VSPEX应用的最佳实践分享 问与答",
        description:"EMC VSPEX应用的最佳实践分享 问与答 VSPEX实际应用试用装在哪领取？",
        url:"https://emcinformation.com/294411/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"08:49",
        category:"rhjcjg"
    },
    {   
        img:"images/solution_video_img_24.jpg",
        title:"EMC VSPEX应用的最佳实践分享",
        description:"EMC VSPEX 应用的最佳实践分享 VSPEX 简化运维提升系统性能",
        url:"https://emcinformation.com/294318/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"31:18",
        category:"rhjcjg"
    },
    {
        img:"images/solution_video_img_5.jpg",
        title:"融合基础时代最佳之选：EMC VSPEX",
        description:"VSPEX 简单高效构建灵活生态环境",
        url:"https://emcinformation.com/294410/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"34:46",
        category:"rhjcjg"
    },
    {   
        img:"images/solution_video_img_71.jpg",
        title:"从互联网金融看云计算和大数据时代金融行业IT转型",
        description:"模式转型优先满足客户需求",
        url:"https://emcinformation.com/294407/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"97:50",
        category:"fuwu,yunjisuan,dashuju,ITzhuanxing"
    },
    {   
        img:"images/solution_video_img_23.jpg",
        title:"企业数据保护入门大讲堂 问与答",
        description:"企业数据保护入门大讲堂 问与答<br />专业交流 在线提问 实时互动",
        url:"https://emcinformation.com/294507/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"28:52",
        category:"sjbh"
    },
    {
        img:"images/solution_video_img_4.jpg",
        title:"企业数据保护入门大讲堂",
        description:"高可靠数据保护勇挑服务器意外故障",
        url:"https://emcinformation.com/294316/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"59:09",
        category:"sjbh"
    },
    {   
        img:"images/solution_video_img_22.jpg",
        title:"第一选择：针对Oracle的EMC解决方案 问与答",
        description:"第一选择：针对Oracle的EMC解决方案 问与答<br />在线一对一问答，解答多重疑问",
        url:"https://emcinformation.com/294613/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"14:59",
        category:"yunjisuan,fuwu"
    },
    {   
        img:"images/solution_video_img_75.jpg",
        title:"第一选择：针对Oracle的EMC解决方案",
        description:"第一选择：针对Oracle的EMC解决方案着眼数据保护，性能优化、虚拟化",
        url:"https://emcinformation.com/294414/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"23:37",
        category:"yunjisuan,fuwu"
    },
    {
        img:"images/solution_video_img_3.jpg",
        title:"Oracle虚拟化——让数据库自由飞翔",
        description:"虚拟化Oracle环境转型<br />Oracle迁移，让数据库自由飞翔",
        url:"https://emcinformation.com/294513/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"39:44",
        category:"yunjisuan,fuwu"
    },
    {   
        img:"images/solution_video_img_21.jpg",
        title:"EMC 大数据案例介绍问与答",
        description:"EMC大数据市场趋势案例 问与答<br />专业“主播”实时互动解答疑问",
        url:"https://emcinformation.com/294320/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"19:36",
        category:"dashuju"
    },
    {   
        img:"images/solution_video_img_20.jpg",
        title:"基于第三平台的Isilon行业解决方案",
        description:"基于第三平台的Isilon行业解决方案满足移动性需求，与大数据结合",
        url:"https://emcinformation.com/294511/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"45:09",
        category:"dashuju"
    },

    {   
        img:"images/solution_video_img_19.jpg",
        title:"EMC 大数据案例介绍",
        description:"EMC大数据市场趋势案例<br />实战数据挖掘，保护交易反欺诈",
        url:"https://emcinformation.com/294319/SI/" + M + ".ashx?reg_src=" + reg,
        videolength:"28:05",
        category:"dashuju,anli"
    }  
    
];

function createPage(category_value){

    var strHtml = "<div class='tab_0 tab_outer fixed_chen' style='display:block'>";
    var tab_index = 0;
    var num = 0;
    for(var i=0;i<solution_video_list.length;i++){
        if(solution_video_list[i].category.indexOf(category_value) > -1){
            num++;
            strHtml+="<div class='solution_video_box'>";
            strHtml+="<a href='"+solution_video_list[i].url+"' target='_blank'>";
            strHtml+="<div class='solution_video_img_outer'>";
            strHtml+="<div class='solution_video_layer'>";
            strHtml+="<img src='images/video_play_btn.jpg' class='solution_video_play_btn'>";
            strHtml+="</div>";
            if(solution_video_list[i].isTop5){
                strHtml+="<img src='images/top5_icon_gu.png' class='top5_icon_gu' />";
            }
            strHtml+="<img src='"+solution_video_list[i].img+"'>";
            strHtml+="</a>";
            strHtml+="<div class='solution_video_length'>"+solution_video_list[i].videolength+"</div>";
            strHtml+="</div>";
            strHtml+="<div class='solution_video_title'>";
            strHtml+="<a href="+solution_video_list[i].url+" target='_blank' style='color:#0088cb !important;'>"+solution_video_list[i].title+"</a>";
            strHtml+="</div>";
            strHtml+="<div class='solution_video_description'>";
            strHtml+="<a href='"+solution_video_list[i].url+"' target='_blank' style='color:#fff !important;'>"+solution_video_list[i].description+"</a>";
            strHtml+="</div>";
            strHtml+="</div>";
            if(num%12==0){
                tab_index++;
                //total_page=tab_index;
                strHtml+="</div><div class='tab_"+tab_index+" tab_outer fixed_chen' style='display:none'>"; 
            }
        }
    }
    strHtml+="</div>";
    return strHtml;
}

function createSplitPage(category_value){
    var strHtml="<img src='images/arrow_left.png' style='display:none;' class='prepage' onclick='doPre_"+category_value+"(this);' />";
    var tab_index=0;
    var num = 0;
    for(var i=0;i<solution_video_list.length;i++){
        if(solution_video_list[i].category.indexOf(category_value) > -1){
            num++;
        }
    }
    for(var i=0;i<Math.ceil(num/12);i++){
        //total_page=tab_index;
        strHtml+='<span onclick="dotab_'+category_value+'('+'\''+category_value+'\''+','+tab_index+',this'+');" style="padding:5px 10px;" class="'+category_value+'">'+(tab_index+1)+'</span>';
        tab_index++;
    }
    strHtml+="<img src='images/arrow_right.png' class='nextpage' onclick='doNext_"+category_value+"(this);' />";
    return strHtml;
}

    function dotab_yunjisuan(category_value,ind,obj){
        now_page_yunjisuan = ind;
        if(now_page_yunjisuan == total_page_yunjisuan-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_yunjisuan==0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else{
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show(); 
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show(); 
        }
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_'+ind).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).css('color','#fff');
    }
    function dotab_dashuju(category_value,ind,obj){
        now_page_dashuju = ind;
        if(now_page_dashuju == total_page_dashuju-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_dashuju==0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else{
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show(); 
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show(); 
        }
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_'+ind).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).css('color','#fff');
    }
    function dotab_ITzhuanxing(category_value,ind,obj){
        now_page_ITzhuanxing = ind;
        if(now_page_ITzhuanxing == total_page_ITzhuanxing-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_ITzhuanxing==0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else{
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show(); 
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show(); 
        }
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_'+ind).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).css('color','#fff');
    }
    function dotab_shancun(category_value,ind,obj){
        now_page_shancun = ind;
        if(now_page_shancun == total_page_shancun-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_shancun==0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else{
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show(); 
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show(); 
        }
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_'+ind).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).css('color','#fff');
    }
    
    function dotab_rjdy(category_value,ind,obj){
        now_page_rjdy = ind;
        if(now_page_rjdy == total_page_rjdy-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_rjdy==0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else{
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show(); 
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show(); 
        }
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_'+ind).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).css('color','#fff');
    }
    function dotab_rhjcjg(category_value,ind,obj){
        now_page_rhjcjg = ind;
        if(now_page_rhjcjg == total_page_rhjcjg-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_rhjcjg==0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else{
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show(); 
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show(); 
        }
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_'+ind).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).css('color','#fff');
    }
    function dotab_sjbh(category_value,ind,obj){
        now_page_sjbh = ind;
        if(now_page_sjbh == total_page_sjbh-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_sjbh==0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else{
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show(); 
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show(); 
        }
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_'+ind).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).css('color','#fff');
    }
    function dotab_anli(category_value,ind,obj){
        now_page_anli = ind;
        if(now_page_anli == total_page_anli-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_anli==0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else{
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show(); 
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show(); 
        }
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_'+ind).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).css('color','#fff');
    }
    function dotab_ccpt(category_value,ind,obj){
        now_page_ccpt = ind;
        if(now_page_ccpt == total_page_ccpt-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_ccpt==0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else{
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show(); 
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show(); 
        }
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_'+ind).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).css('color','#fff');
    }
    function dotab_fuwu(category_value,ind,obj){
        now_page_fuwu = ind;
        if(now_page_fuwu == total_page_fuwu-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_fuwu==0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else{
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show(); 
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show(); 
        }
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_'+ind).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).css('color','#fff');
    }


    function cacltotal(category_value){
        var count = 0;
        for(var i=0;i<solution_video_list.length;i++){
            if(solution_video_list[i].category.indexOf(category_value) > -1){
                count++;
            }
        }
        return Math.ceil(count/10);
    }
    

    function dotab2(obj,nowpagecategory){
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').hide();
        jQuery(obj).closest('.contentbox_2').find('.tab_outer').eq(nowpagecategory).show();

        jQuery(obj).closest('.contentbox_2').find('span').css('color','#0088cb');
        jQuery(obj).closest('.contentbox_2').find('span').eq(nowpagecategory).css('color','#fff');
    }

    total_page_yunjisuan=cacltotal('yunjisuan');
    function doNext_yunjisuan(obj){
        now_page_yunjisuan++;
        if(now_page_yunjisuan>=total_page_yunjisuan-2){
            now_page_yunjisuan=total_page_yunjisuan-2;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_yunjisuan>0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }
        dotab2(jQuery(obj),now_page_yunjisuan);    
    }
    function doPre_yunjisuan(obj){
        now_page_yunjisuan--;
        if(now_page_yunjisuan<=0){
            now_page_yunjisuan=0;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else if(now_page_yunjisuan<=total_page_yunjisuan-1){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }
        dotab2(jQuery(obj),now_page_yunjisuan);
        
    }

    total_page_dashuju=cacltotal('dashuju');
    function doNext_dashuju(obj){
        now_page_dashuju++;
        if(now_page_dashuju>=total_page_dashuju-2){
            now_page_dashuju=total_page_dashuju-2;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_dashuju>0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }
        dotab2(jQuery(obj),now_page_dashuju); 
    }
    function doPre_dashuju(obj){
        now_page_dashuju--;
        if(now_page_dashuju<=0){
            now_page_dashuju=0;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }else if(now_page_dashuju<=total_page_dashuju-2){
            jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        }
        dotab2(jQuery(obj),now_page_dashuju);    
    }

    total_page_ITzhuanxing=cacltotal('ITzhuanxing');
    function doNext_ITzhuanxing(obj){
        now_page_ITzhuanxing++;
        if(now_page_ITzhuanxing>=total_page_ITzhuanxing-2){
            now_page_ITzhuanxing=total_page_ITzhuanxing-2;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }else if(now_page_ITzhuanxing>0){
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }
        dotab2(jQuery(obj),now_page_ITzhuanxing); 
    }
    function doPre_ITzhuanxing(obj){
        now_page_ITzhuanxing--;
        if(now_page_ITzhuanxing<=0){
            now_page_ITzhuanxing=0;
            jQuery(obj).hide();
        }
        jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        dotab2(jQuery(obj),now_page_ITzhuanxing);    
    }

    total_page_shancun=cacltotal('shancun');
    function doNext_shancun(obj){
        now_page_shancun++;
        if(now_page_shancun>=total_page_shancun-2){
            now_page_shancun=total_page_shancun-2;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }
        dotab2(jQuery(obj),now_page_shancun); 
    }
    function doPre_shancun(obj){
        now_page_shancun--;
        if(now_page_shancun<=0){
            now_page_shancun=0;
            jQuery(obj).hide();
        }
        jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        dotab2(jQuery(obj),now_page_shancun);    
    }

    total_page_rjdy=cacltotal('rjdy');
    function doNext_rjdy(obj){
        now_page_rjdy++;
        if(now_page_rjdy>=total_page_rjdy-2){
            now_page_rjdy=total_page_rjdy-2;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }
        dotab2(jQuery(obj),now_page_rjdy); 
    }
    function doPre_rjdy(obj){
        now_page_rjdy--;
        if(now_page_rjdy<=0){
            now_page_rjdy=0;
            jQuery(obj).hide();
        }
        jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        dotab2(jQuery(obj),now_page_rjdy);    
    }

    total_page_rhjcjg=cacltotal('rhjcjg');
    function doNext_rhjcjg(obj){
        now_page_rhjcjg++;
        if(now_page_rhjcjg>=total_page_rhjcjg-2){
            now_page_rhjcjg=total_page_rhjcjg-2;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }
        dotab2(jQuery(obj),now_page_rhjcjg); 
    }
    function doPre_rhjcjg(obj){
        now_page_rhjcjg--;
        if(now_page_rhjcjg<=0){
            now_page_rhjcjg=0;
            jQuery(obj).hide();
        }
        jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        dotab2(jQuery(obj),now_page_rhjcjg);    
    }

    total_page_sjbh=cacltotal('sjbh');
    function doNext_sjbh(obj){
        now_page_sjbh++;
        if(now_page_sjbh>=total_page_sjbh-2){
            now_page_sjbh=total_page_sjbh-2;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }
        dotab2(jQuery(obj),now_page_sjbh); 
    }
    function doPre_sjbh(obj){
        now_page_sjbh--;
        if(now_page_sjbh<=0){
            now_page_sjbh=0;
            jQuery(obj).hide();
        }
        jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        dotab2(jQuery(obj),now_page_sjbh);    
    }

    total_page_anli=cacltotal('anli');
    function doNext_anli(obj){
        now_page_anli++;
        if(now_page_anli>=total_page_anli-2){
            now_page_anli=total_page_anli-2;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }
        dotab2(jQuery(obj),now_page_anli); 
    }
    function doPre_anli(obj){
        now_page_anli--;
        if(now_page_anli<=0){
            now_page_anli=0;
            jQuery(obj).hide();
        }
        jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        dotab2(jQuery(obj),now_page_anli);    
    }

    total_page_ccpt=cacltotal('ccpt');
    function doNext_ccpt(obj){
        now_page_ccpt++;
        if(now_page_ccpt>=total_page_ccpt-2){
            now_page_ccpt=total_page_ccpt-2;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }
        dotab2(jQuery(obj),now_page_ccpt); 
    }
    function doPre_ccpt(obj){
        now_page_ccpt--;
        if(now_page_ccpt<=0){
            now_page_ccpt=0;
            jQuery(obj).hide();
        }
        jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        dotab2(jQuery(obj),now_page_ccpt);    
    }

    total_page_fuwu=cacltotal('fuwu');
    function doNext_fuwu(obj){
        now_page_fuwu++;
        if(now_page_fuwu>=total_page_fuwu-2){
            now_page_fuwu=total_page_fuwu-2;
            jQuery(obj).hide();
            jQuery(obj).closest('.splitpage_outer').find('.prepage').show();
        }
        dotab2(jQuery(obj),now_page_fuwu); 
    }
    function doPre_fuwu(obj){
        now_page_fuwu--;
        if(now_page_fuwu<=0){
            now_page_fuwu=0;
            jQuery(obj).hide();
        }
        jQuery(obj).closest('.splitpage_outer').find('.nextpage').show();
        dotab2(jQuery(obj),now_page_fuwu);    
    }

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-39339300-1']);
  _gaq.push(['_trackPageview']);

  (function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


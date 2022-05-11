var store = [{
        "title": "这几天研究Url Rewrite：）",
        "excerpt":"在开发这个自己用的Blog时，决定认真研究一下以前接触过的URL Rewrite，我见过类似这样的域名： xxx.com/Archive/2008/03/21/，一直不知道怎么实现的，正好借这次机会研究一下。从前天开始就一直在努力，基本上是第一天差了大半天资料，这篇文章写得非常详细，向作者致敬！第二天终于上手做出Demo，但有Bug，第三天解决了Bug，完美运行^_^其实简单点说，个人觉得对于ASP.NET开发者实现URL Rewrite基本有3种途径：1. 修改IIS ISAPI扩展，例如把”.xx”交给aspnet_isapi.dll ISAPI 扩展，就成了这样：”xxx.htm?q=blah”，这样就是最简单直接的SEO，但由于我是虚拟主机所以我仅仅只在本地试了下，不知道精英科技的管理面板是否支持，我没有试。2. 修改WebConfig，添加自己实现的IHttpModule，根据传入的URL来Rewrite到相应的页面，比如接受到类似” Archive/2008/03/21/”的URL，则Rewrite到Archive.aspx?Year=2008&amp;Month=3&amp;Day=21，这中间是用正则来匹配的。3. 使用第三方组件如：IIS Rewrite 由于鄙人一直都希望自己实现某些东西，只要不是太复杂，所以我决定使用第二种。那么一个比Hello World还简单的实例是这样做的： 写一个class实现IHttpModule：WayneHttpModule&nbsp; IHttpModule然后：public void Init(HttpApplication context)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; context.BeginRequest&nbsp;= new EventHandler(context_BeginRequest);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; void context_BeginRequest(object sender, EventArgs e)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HttpApplication app&nbsp; sender as HttpApplication;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; app.Context.RewritePath(\"Test.aspx\");&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后在Web.config里添加：&lt;httpModules&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lt;add name=\"WayneHttpModule\" type=\"WayneBlog.Web.WayneHttpModule\"/&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lt;/httpModules&gt; 就搞定了。。。这样在当前虚拟目录下，任何以“aspx”为后缀的Url请求全部会被WayneHttpModule截获并且转向（Rwrite）到Test.aspx，需要注意的是，即使这个页面并不存在，比如IamFoo.aspx，呵呵。那么类似这样的：” Archive/2008/03/21/”，教程作者提到必须设一个主页（比如Default.aspx），并且这个主页物理存在于” /2008/03/21/”这个目录下，如果嫌麻烦那么可以仿照.Text，截获所有的Http请求并交给aspnet_isapi.dll ISAPI 扩展。我个人觉得这样对于我来说更麻烦，我选择了去建Default.aspx，每次发表一篇新的Blog，就去生成目录并写Default.Aspx文件：） ","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/%E8%BF%99%E5%87%A0%E5%A4%A9%E7%A0%94%E7%A9%B6Url-Rewrite:)",
        "teaser":null},{
        "title": "人生中那些重要的第一次 - 仁川到西雅图塔科玛",
        "excerpt":"到这边以后忙着倒时差熟悉工作和联系家人了，没空写部落格里，今天稍微闲了点，爬上来继续记录人生中最重要的第一次：）------------------正文-------------------这趟9跟小时的旅途着实辛苦，虽然无论是航空公司还是我自己都做好了各种消遣的，不可谓不完善的准备。我的装备^_^：PS2手柄还没照出来的，放脚下了，空间太小实在不可能放上面，大韩航空公司准备了一高科技玩意，我一坐上位置就研究上了（没办法，谁叫俺没出过国呢，乡巴佬一个。。），就是这玩意： 呵呵，玩游戏的手柄，这是背面，正面是另外的一些功能，有：电影（比较多，各种类别的，我看到有国家宝藏2算最近流行的），CD音乐（我基本上只认识Celine Dion，见下面一点；靠！再怎么着也得有Linkin Park吧?!)，航班情况（动态显示飞机在地图上的位置，跟上篇里的差不多），免税信息（高丽棒子赚钱用的），儿童乐园（俺是成人，不玩），等等等等，不记得了。。。飞机上一旦有广播，它就会自动显示\"Broadcasting is in process.\"，会暂停你任何进行中的游戏，电影，音乐等，让你认真听广播，直可惜。。。高丽文一窍不通，英文吧，我离广播比较远，听不清。。但是呢，发现高丽播音员的英文很烂，“嗯”“啊”很多，停顿很多，不流利的说。俺在做无聊的事情，玩弹球（也忘了这东西是不是叫弹球。。），搞笑的是，玩了一会，广播开始，游戏暂停，我也就没玩它去玩本本了，结果广播完了以后发现，这傻机器不会把游戏暂停，我眼睁睁地看着那个球从我的那横杆边上掉下去了。。 歌坛女神席琳迪翁过了几个小时，熄灯了，估计是按照韩国当日的时间该睡觉了，我一开始没管他，继续写我的Blog：），后来又过了会，有点困了，我就关了机躺着睡。结果呢，换了无数种睡姿，翻来覆去可能有1跟小时吧，可能只睡了10分钟，受不了了，还是起来吧，拿出手柄打实况，俺的阿德里亚诺已经无敌了，一场进了5个球。玩着玩着发现窗户外面的天色已经渐渐亮了，是的，在万米高空的朝霞一定很漂亮，我就这样看着窗外，等啊等啊，等到了大自然之美！！！几个小时后，窗外已是阳光无比灿烂，窗户已经不能打开了，光线太强！我这个时候已经困得不行了，打算就这样耗下去当倒时差了，飞机上开始广播前方到达\"Tacoma\"。。。 激动！快到了，看到了山脉，很Cool当地时间12点左右，我们到达西雅图塔科玛机场待续。。。Wayne写于4月17日9时左右，雷蒙德HomeStead旅馆 ","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/%E4%BA%BA%E7%94%9F%E4%B8%AD%E9%82%A3%E4%BA%9B%E9%87%8D%E8%A6%81%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1---%E4%BB%81%E5%B7%9D%E5%88%B0%E8%A5%BF%E9%9B%85%E5%9B%BE%E5%A1%94%E7%A7%91%E7%8E%9B",
        "teaser":null},{
        "title": "人生中那些重要的第一次 - 塔科玛机场见闻",
        "excerpt":"这个时候我已经坚持了十几个小时，人昏昏沉沉的，但是。。。要面对边境检查，还是得打起精神，这是第一次，所以没有任何经验，我心想：“别搞得折腾了半天挂在检察官手里让我回家，机票他报销。。”，呵呵。在等待过边检的时候看到一张宣传图，上书：“Keep our doors open and nation secure.”赞！！！我的理解是:我们欢迎人才！在保证国家安全的前提下！不拘一格降人才！在过去的一个多世纪里，美国宽松灵活的移民政策在很大程度上保证了这个国家领先于世界民族之林。不过近几年呢，尤其是911之后，老大很受伤，变得相对谨慎。。。很多仁人志士对此颇有微词，比如比尔盖茨。正思考着呢，轮到俺了。Check我的检察官是个黑人，问了些问题，现在只记得问有没有带食物，我回答没有，之前在飞机上韩国空姐给的单子上我也填的没有，我觉得我带过来的那一箱热干面应该不会伤害山姆大叔的农民伯伯吧：）我的邀请函上只有26天，我的PM让我要3个月，那么在检察官问我时间时我跟他说：请您给我3个月，因为培训已经延长了。他没说啥，就一个劲的在那里盖章，好多章要盖！大概有20分钟吧，ok了，看到同事已经在等我了，发现自己已经汗湿了，没办法，里面有点热。随便拍了张这个很有意义！洋人的孩子，一个人管3个包，背一个还拖2个，前面的是他爹。心想这场景在国内我是从没见过的，什么时候可以见到呢？？拿了行李后，机场工作人员指引我们上了。。。地铁？？这个我倒不意外，听爸爸说香港是做小火车的，那么这里用地铁一定是为了加快效率吧，只是不知道多远。还好，大概5分钟就到了。看了下手机，1点10分，上海应该是上午10点10分吧，熬了一整夜，呵呵：）在去旅馆的车上，拍了张:土鳖扛铁牛^_^。。。 ","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/%E4%BA%BA%E7%94%9F%E4%B8%AD%E9%82%A3%E4%BA%9B%E9%87%8D%E8%A6%81%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1---%E5%A1%94%E7%A7%91%E7%8E%9B%E6%9C%BA%E5%9C%BA%E8%A7%81%E9%97%BB",
        "teaser":null},{
        "title": "把Blog里的照片全部加上圆角效果吧：）",
        "excerpt":"前几天在网上找到这么个酷酷的玩意，用JS给图片加上各种各样的圆角效果，官方主页：   http://www.netzgesta.de/corner/   看后顿时觉得很酷，今天周末，有时间来搞搞这个：）   读了官网的说明后发现很简单，下载corner.js（本地下载  ），然后页面include后直接使用class=\"自己挑一个喜欢的class\"就ok了。   那么这里有个问题，如果你的Blog上线已有时日（比如鄙博）,难道要手动更新你之前所有Blog里的图片代码给它们加上  class？？  呵呵，这点事根本不能称之为问题：）当然是加段JS脚本给动态注册className喽，鄙播采用了Div+Css架构以及  MasterPage，所有的Blog都包含于一个名为“ContentPlaceHolder”对Div中，那么好办了:   1. 得到此Div的Dom2. 遍历其下所有Tag为img的东西3. 设置  className 打完收工。  完整代码如下：     // Set Corner to image     var divBlogArtitle = document.getElementById('BlogArticle');          var imgs = divBlogArtitle.getElementsByTagName('img');          for (var i = 0; i    需要注意的是，这段代码要加在页面尾部已确保图片文件都下载完成后再设置class。   ","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/%E6%8A%8ABlog%E9%87%8C%E7%9A%84%E7%85%A7%E7%89%87%E5%85%A8%E9%83%A8%E5%8A%A0%E4%B8%8A%E5%9C%86%E8%A7%92%E6%95%88%E6%9E%9C%E5%90%A7:)",
        "teaser":null},{
        "title": "来美国一个月的生活小结 （上）",
        "excerpt":"一个月了，基本上都习惯了，衣食住行，文化，交流，觉得适应得还行吧，零零散散的想记录一下平时的所思所感。  食：首先当然是吃饭问题，民以食为天，饭吃不好那问题可是大大的！吃的最多附近的当属汉堡了，大口大口的，呵呵。想起第一次吃汉堡是90年在北京，我们一堆小屁孩一人发一个麦当劳的牛肉汉堡，我们都实在无法忍受两块“面包”中间的那“坨”肉饼，无论是视觉还是味觉都从心理上第一时间抵制了，总之大家都扔了，只吃“面包”和薯条。之后从不太厌恶变成现在的还有点喜欢，隔段时间也许还想啃上一个（比如上海的汉堡王鄙人就比较喜欢，呵呵），临走之前Monica说那个（叫什么来着的店，不记得了）有70块大洋的一个巨大汉堡，比较感兴趣的说，一直想去吃呢。。。那么来美国一个月后，我对汉堡的认识是更加深刻了，每天中午去微软的食堂，对我来讲基本上只有3.5种选择：1. 皮萨2. 汉堡3. 沙拉3.5 每天变换的汤  汤由于不能解决温饱问题所以算0.5个好了，皮萨最简单了，就躺在那，铲一片走人，直接买单（2刀），也是最便宜的了。汉堡呢就有很多选择，Turkey burger($3.10)， Angus Burger($4.15)，Blah Blah Burger(最多7刀，猪鸡鱼牛都有，名字太多太复杂不记得了)，我老是吃Turkey burger，真可怜呵呵， ok，说下汉堡是怎么做成的，鄙人原来是不知道的。先跟厨师说我要什么肉（橱窗里选一个），同时他又是还会问你要什么样的“面包”（不知道翻译成什么好，呵呵，土人一个），“面包”分为两种，我之前一直不懂，直到写此部落格之前的几个小时才从美国同事那里得知答案，所以我一直都是脸红着说：“您帮我选吧：）我不介意。”然后他就把肉放在一个炉子上烤，我现在知道那炉子叫Grill，一般每种肉都会在写出价格的同时标上大概需要几分钟，只是我发现时间根本不对，说是4分钟其实每次都要等大概8分钟左右，那“坨”肉在我看来最后都是糊的。。。我每次都有点担心怕他们太忙会不会弄糊，呵呵，不过这点上老美确实喜欢量化，他会拿一个我猜是测温仪的东西戳进肉里检查情况。快好的时候他会问你：“需要什么芝士？”有N（N&gt;4）种，我只能听懂一个\"Swiss Cheese\"，所以每次只能是Swiss Cheese，再次可怜下自己，但从美国同时那得知Swiss Cheese是不错的，他们也常吃，呵呵。OK，你也可以不要芝士，最后会问你要不要Frys（各种各样的油炸薯条，薯棒？不知咋翻译。。。），这里我闹了个笑话，后面会谈到：）。到此呢，厨师的工作也就完成了，你自己去选番茄，洋葱和腌黄瓜以及N种Source(N&gt;10)，迄今为止我尝试过5+种，都还可以，之后呢？没啦，开啃：） ","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/%E6%9D%A5%E7%BE%8E%E5%9B%BD%E4%B8%80%E4%B8%AA%E6%9C%88%E7%9A%84%E7%94%9F%E6%B4%BB%E5%B0%8F%E7%BB%93-(%E4%B8%8A)",
        "teaser":null},{
        "title": "来美国一个月的生活小结 （下）",
        "excerpt":"鄙人的桌子：&nbsp;  ","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/%E6%9D%A5%E7%BE%8E%E5%9B%BD%E4%B8%80%E4%B8%AA%E6%9C%88%E7%9A%84%E7%94%9F%E6%B4%BB%E5%B0%8F%E7%BB%93-(%E4%B8%8B)",
        "teaser":null},{
        "title": "来美国一个月的生活小结 （中）",
        "excerpt":"住处附近有些中餐馆，比如这个：  ","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/%E6%9D%A5%E7%BE%8E%E5%9B%BD%E4%B8%80%E4%B8%AA%E6%9C%88%E7%9A%84%E7%94%9F%E6%B4%BB%E5%B0%8F%E7%BB%93-(%E4%B8%AD)",
        "teaser":null},{
        "title": "My Powerful PC!!!So Excited!!!",
        "excerpt":"几经周折，我的超强DIY机器终于到了，这几乎就是我的梦想了，尽管连熬两夜赶项目（2天加起来睡了10个小时），周五下午已经是走路都走不稳了：），但当我抱着那个从NewEgg来的大箱子时我所有的疲劳和烦恼全都没了，6年了，我没换过台式机，实在厌烦了本本苗条的身材，平平的性能，我要Power！就像老美对70年代的肌肉车那种特殊的爱好，我对PC的审美观那就是Power！我自认为是个Geek，组装所有配件在保证性价比和够用就好的原则下，亲手打造一台主机的工作/游戏机，我乐此不疲！ 百度百科上对Geek（极客）的解释：Geek也可能是电脑高手也可能不一定是电脑高手，不过大部分都对电脑有莫大的偏爱，他们可能会对一切新鲜玩意儿都弄来搞搞.Geek是新的精英亚文化群，是一群爱好新事物的、以技术为中心的、同时对社会怀有深刻不满的地下人类. 熟悉鄙人的人都知道，鄙人是个“反革命”。。。Stop。。。See here OK，正题！鄙人配置： Hardware Details Price CPU Intel Core 2 Duo E8400 Wolfdale 3.0GHz LGA 775 65W Dual-Core Processor Model BX80570E8400 - Retail $194.99 Motherboard ASUS P5K-E/WIFI-AP LGA 775 Intel P35 ATX Intel Motherboard - Retail $149.99 Memory G.SKILL 4GB (2 x 2GB) 240-Pin DDR2 SDRAM DDR2 800...","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/My-Powerful-PC-From-Newegg",
        "teaser":null},{
        "title": "作息时间自动提醒Windows Service",
        "excerpt":"经济危机真真切切的影响到了几乎每一个人，09年过去三分之一多一点了，生活不太规律，确实太忙的说，工作换了，房子也换了，又做回了张江男，觉得自己再不好好努力会Out的。。。都奔三儿而去了。。。于是乎，为了勉励自己，做了这么个东东。 一个Windows Service，里面跑一个Timer，每隔10秒check一下当前时间，一旦发现时间吻合，则调用Microsoft Speech Technology? 发声提醒，超级简单，不过。。。以后要么得一直戴着心爱的森海塞尔，要么只能用音箱了。。。 服务描述：Notify Wayne to follow the schedule established by himself. If this service is disabled, Wayne may waste a lot of time... 项目层级：&nbsp; WayneScheduleService.cs Windows Service后台代码 ScheduleItemsReader.cs Linq读取ScheduleItems SoundNotifier.cs 执行发声提醒 ServiceLogManager.cs 打Log 主要程序代码： 调用程序发声的代码：&nbsp;&nbsp;&nbsp;&nbsp; public static class SoundNotifier&nbsp;&nbsp;&nbsp; {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; public static void Phonate(String sentence)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Personal-Schedule-Windows-Service",
        "teaser":null},{
        "title": "有饮料的夏日是幸福的:)",
        "excerpt":" ","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/%E6%9C%89%E9%A5%AE%E6%96%99%E7%9A%84%E5%A4%8F%E6%97%A5%E6%98%AF%E5%B9%B8%E7%A6%8F%E7%9A%84:)",
        "teaser":null},{
        "title": "A good lesson and experience",
        "excerpt":"I was extremely busy during the last two weeks, since our project was at bug fixing phase, my team and I worked really hard on dealing with the bugs; We fixed two to three bugs everyday by average, I am very satisfied with the efficiency myself. During this process, I...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/A-Good-Lesson-On-DateTime-Localization",
        "teaser":null},{
        "title": "史上最胖的猫 - 32斤！笑死俺了，粉可爱！",
        "excerpt":"  &nbsp;  跟这厮比起来，我们家多多简直就是小不点。。。  &nbsp;             ","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/29-Pounds-Lovely-Cat",
        "teaser":null},{
        "title": "\\[转\\]揭秘朝鲜自主操作系统：红星Red Star",
        "excerpt":"据国外资讯网站RT报道，朝鲜（North Korea）不仅拥有自主的、与基于美国的万维网相互独立的区域网络，而且还拥有自行研发的红星Red Star操作系统。据悉，红星OS是去年由朝鲜IT技术人员在Linux操作系统的基础上改进而来的。俄罗斯学者Mikhail利用他在金日成大学交流之际获得了这款红星OS。他花费了5美元在距离宿舍五分钟步行路程的地方购得两张安装光盘。系统共分为客户端和服务器两种版本，第三方软件可以另外花钱购买。  废话不多说，下面就让我们一睹为快：  　　1、拆包后的安装盘，上下共两张；  图（1）  　　2、启动Logo画面，红星OS支持硬盘或网络下载安装，整个过程约为10-25分钟。启动安装程序后，用户会发现整个过程与Windows十分相似，但更加快速、简单，而且只有朝鲜语一种语言版本；  图（2）  　　3、登录界面：默认为Root用户名，右侧的Lim是游客账号；  图（3）  　　4、Red Star桌面环境  图（4）  　　5、文件布局  图（5）  　　与纯正的Linux相比，红星OS算不上最轻便的操作系统，它的最低硬件需求为奔III 800MHz处理器、256M内存、3G固态硬盘容量。  　　桌面环境布局与同类产品十分相似，提供“我的电脑”、“回收站”等图标。界面左侧下方则是开始菜单，旁边是快速启动按钮  　　6、应用程序一览  图（6）  　　系统集成的应用程序十分有限，诸如“My Country”浏览器（更换外壳的Firefox）、简单的Word字处理软件、PDF文档阅读器、视频播放软件、虚拟磁盘管理软件。  　　7、小游戏（象棋）  图（7）  　　红星OS采用独特的键盘标准，分别可用于输入英语、朝鲜语、汉语和俄语；娱乐应用中包含四款益智小游戏，分别是扫雷、中国象棋、碎石机、花图纸牌；  　　8、其他应用程序  图（8）  　　光盘的其他内容有与Openoffice很类似的“We”办公组件，“Pigeon”电子邮件服务、传真通信服务、“Pyongyang Fortress”防火墙和计算器/日历等；  　　9、又见Firefox的身影  图（9）  　　浏览器中默认的搜索引擎是Google，但无法搜索到任何有用的信息，因为朝鲜的网络是完全封闭的。  　　10、安全软件  图（10）  　　红星OS整合的Antivirus 2.0套装（朝鲜文，不认识）算是唯一货真价实的正品，并没有改写某款开源代码，全部代码都是自行编写，具备一定的查杀恶意程序能力。另外，Mikhail使用运行Warcraft 3等大型应用软件时，系统表现平稳；  　　11、“开始”功能菜单  图（11）  &nbsp;  转载自： http://www.cnbeta.com/articles/105358.htm ","categories": ["IT-Industry"],
        "tags": ["IT-Industry"],
        "url": "https://wayneye.me/North-Korea-RedStar-OS",
        "teaser":null},{
        "title": "Personal Schedule Management Tool",
        "excerpt":"Time is always ticking no matter you care it or you don’t care it, everyone knows it including myself, to remind myself don’t waste too much time on gaming, reading news or something else, I developed a little tool which I call it “Personal Schedule Management Tool” to achieve this...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Personal-Schedule-Management-Tool",
        "teaser":null},{
        "title": "2010年5月23日 - 属于Nerazzurri的一天",
        "excerpt":"意大利当地时间5月22日晚，国际米兰2:0击败拜仁慕尼黑获得09-10年度欧洲冠军杯，同时一举获得“三冠王”，成为意大利历史上第一支获取三冠王的球队！ 这一夜，对于全世界所有的Nerazzurri而言，是无比骄傲与幸福的！国际米兰经历一个漫长而艰难赛季，最终没有留下任何遗憾！电话门之后最困难的赛季，意大利杯战胜死敌罗马，欧冠半决赛淘汰上赛季六冠王巴萨！他们创造了历史！这样的球队配得上所有的赞美，国米完成一个完美的赛季！ 在全场结束哨声吹响的那一刻，在萨队举起大耳朵杯的那一刻，在整个伯纳乌响彻《Pazza Inter》的那一刻，熬了一整夜有些疲惫的我，嘴角浮现出一丝微笑，眼里也有一点点幸福的泪水。我在电视机镜头里看见很多Nerazzurri留下幸福的泪水，无论男女老少，作为中国球迷我也许没有他们的感触那么深刻，但是，从96年开始，我便开始喜欢这支蓝黑色的球队，因为他对冠军的强烈渴望，因为他高贵而忧郁的气质，因为他有很多我喜欢的球星，因为他有一个慈祥善良的主席。。。更因为，他一次又一次的倒在成功的路上：球星黑洞，换帅如麻，阵容强大但发挥极不稳定，一到关键时刻就掉链子。。。联赛关键战役输给尤文（金童皮耶罗的成名之作），最后一轮输给拉齐奥（罗纳尔多的泪水），0:6惨败同城对手AC米兰，所有这些痛苦的经历，从来没有让我改变过对他的关注，欣赏和喜爱；相反，一次又一次的伤心与失望，让懵懂之年的我明白一个道理：一只球队的拥趸，不应只在球队顺风顺水时为他加油，为他鼓掌，为他感到骄傲，更应在球队困难时给予支持，给予理解，给予鼓励！ 这一夜，是国米对所有Nerazzurri爱的回报，我了解到有一对意大利Nerazzurri夫妇，他们整个赛季没有错过任何一场国米的比赛，包括所有的客场比赛！他们也跟随国米与其他Nerazzurri一起赶赴西班牙马德里为国米加油，这一刻，我被他们感动，但我更能想象他们内心的激动！我们的国米用一场伟大的胜利登上欧洲之巅，用一个三冠王回报所有的Nerazzurri！ 祝福国际米兰，祝福所有的Nerazzurri，希望这是大国米时代的开启！ 萨队举起大耳朵杯： 国米全队合影： “The Special One” - 穆里尼奥 没有他，这一切可能仅仅只是一场美梦！ 15年，这位慈祥，善良的Nerazzurri为球队奉献了一切，像马西莫 莫拉蒂老人致敬！ 永远不能忘记足球场上第12名球员，我也是其中一员:) 国际米兰队歌 – Pazza Inter &nbsp; Pazza Inter 国际米兰新队歌 Lo sai, per un gol你知道, 为了踢进一球 Io darei la vita… la mia vita我奉献出了人生 -- 我的人生! Che in fondo lo so我明了直到生命的尽头 Sara una partita infinita将有一场永不停止的竞赛 E...","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/Inter-Milan-Nerazzurri-Festival",
        "teaser":null},{
        "title": "Encrypt .Net Configuration file",
        "excerpt":"Under some scenarios the developers want to encrypt some sections inside app.config or web.config file, this article How To: Encrypt Configuration Sections in ASP.NET 2.0 Using RSA describes how to do so clearly, Scott Guthrie also posted one: Encrypting Web.Config Values in ASP.NET 2.0. However, in the posts above they...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Encrypt-DotNet-Configuration-File",
        "teaser":null},{
        "title": "Programmatically PIN shortcut onto Taskbar on Win7",
        "excerpt":"Background During my work I got one requirement of pinning a specific shortcut file (*.lnk) onto the Windows 7 Taskbar, after investigating I found programmtically achive this is “not permitted”, refer MSDN article: http://msdn.microsoft.com/en-us/library/dd378460(VS.85).aspx A small set of applications are pinned by default for new installations. Other than these, only...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Programmatically-PIN-shortcut-Onto-Taskbar-on-Win7",
        "teaser":null},{
        "title": "A complete Impersonation Demo in C#.NET",
        "excerpt":"Under some scenarios we need impersonate another Windows account and do some work under that user’s session, for example: An enterprise ASP.NET web application provides server administrators’ ability to access the server under some specific privilege set; Server admin input their NT account information (domain\\account + password) on the page,...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/DotNet-Impersonation-Demo",
        "teaser":null},{
        "title": "Study EVM (Earned Value Management) – Part 1",
        "excerpt":"During the past few days I was studying Project Time Management in PMBOK, for preparing the upcoming PMP exam on 4th December 2010, while I spent a few hours on understanding/mastering EVM, I log my memory here EVM stands for Eearned Value Management, it is a complementary for Critical Path...","categories": ["Project-Mgmt"],
        "tags": ["Project-Mgmt"],
        "url": "https://wayneye.me/Study-EVM-Part-1",
        "teaser":null},{
        "title": "这个其实真不算什么噩耗",
        "excerpt":"     对于已经石化的我，你们这点小小的努力对我来说算不得什么，反正，anyway，你们爱怎么搞怎么搞|^      我已经十分清楚自己想要什么。    I insert a flag here today, and I know some day I will pull it out and leave:) ","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/WordPress-Blocked-By-GFW",
        "teaser":null},{
        "title": "Study EVM (Earned Value Management) - Part 2",
        "excerpt":"Once the CPI/SPI were calculated at some time-stamp, project manager should be deeper analyses, he need to predict the future cost: ETC (Estimate To Completion) Then EAC (Estimate At Completion) = AC + ETC How to calculate ETC based on current situation (EV/AC/PV and SPI&amp;CPI), there are usually three methods:...","categories": ["Project-Mgmt"],
        "tags": ["Project-Mgmt"],
        "url": "https://wayneye.me/Study-EVM-Part-2",
        "teaser":null},{
        "title": "Microsoft Desktop Player",
        "excerpt":"MSDN TechNet Flash has announced Microsoft Desktop Player, now it is in Beta, it can be accessed through the official website which is Silverlight based: http://www.microsoft.com/click/desktopplayer/ I also installed the desktop version, the desktop version is not a Silverlight OOB, instead, it is a traditional Winform, see screenshot below: Microsoft...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Microsoft-Desktop-Player",
        "teaser":null},{
        "title": "My new Dev box - HP Z800 Workstation",
        "excerpt":"两个星期以前我实在无法忍受Visual Studio 2010的缓慢，即使Disable了IntelliTrace以及别的一些的优化也没有显著改善，而我很清楚这台HP XW9400虽然也很强大很CPU主频很低：2.2G，CPU Rank 300名外。。 我向Manager申请一台新的开发机，老大欣然同意了，于是我跟部门的IT沟通说只希望CPU，内存，硬盘快些就行了，不要光驱和显卡。   两周后Z800到货了！！CPU按我要求的是Intel Xeon 5680，6核主频3.33G，12M三级缓存，开启超线程后任务管理器里显示12个CPU！！8G内存加360GB 7200R/S硬盘（这个有点短板），没有光驱:)。    这颗CPU在cpubenchmark.net上现今排名高居第6名：         Well,这下心满意足的，一边玩着机器一边啧啧称赞加坏笑ing:)  周二带上新烧的Nike D7000去公司拍了几张，Showing below:             显卡仅支持HDMI输出，这下俺的HP 24寸显示器又成了短板了^_^  搞到这台Baby之后，我该好好努力工作了吧，呵呵，多多研究12核Parallel Computing吧:) ","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/My-New-Devbox-HP-Z800",
        "teaser":null},{
        "title": "败了Nikon D7000",
        "excerpt":"周六去星光入手了心仪已久的Nike D7000，配了个35mm/1.8 G，特别鸣谢Sean童鞋，不仅全程陪同，帮忙砍价，验机，最后还帮我全额付款，感动得我那个内牛满面啊^_^   玩了两天，出了点片，this is just a start, 出片才是硬道理！！我会努力证明这款强大的机器在我这只菜鸟手上会发挥很大威力:)眼下还是很菜的。。。   菜片showing below：                未完待续续续。。。    ","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/Bought-Nikon-D7000",
        "teaser":null},{
        "title": "Utilize gzip compression in IIS",
        "excerpt":"GZIP format is developed by GNU Project and standardized&nbsp;by IETF in RFC 1952, which MUST be considered by web developers to improve their websites' performance, there are several&nbsp;Quintessential articles documented using gzip compression, they are: 10 Tips for Writing High-Performance Web Applications Best Practices for Speeding Up Your Web Site...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/IIS-Gzip-Compression",
        "teaser":null},{
        "title": "IP Address to Geolocation",
        "excerpt":"Background Few months ago I found an interesting website: http://ipinfodb.com/, it provided API which could \"translate\" any IP Address into a geography location including City/Region/Country as well as latitude/longitude and time zone information, to invoke its API, a registered API key is required (which is free). Since beforehand I stored...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/IPAddress-To-Geolocation",
        "teaser":null},{
        "title": "PMP exam passed:)",
        "excerpt":"Yesterday I received an Email from PMI, which confirmed I've passed the PMP exam and now became a certificated PMP, hum, I didn't expect the result came out in such a short duration, but anyway, feeling exicting:) I took the exam on Dec 4th, 2010, I still remember how hard...","categories": ["Project-Mgmt"],
        "tags": ["Project-Mgmt"],
        "url": "https://wayneye.me/PMP-Exam-Passed",
        "teaser":null},{
        "title": "Unique URL Pattern in Ajax Web Application",
        "excerpt":"Testing: Can I really edit this? Background Few days ago one of my friend asked me how does Gmail change its URL while user operates inside it without page refreshing, I've no idea about that at that time, he then shared a link Ajax Pattern - Unique URLs which deep...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Unique-URL-Pattern-In-Ajax",
        "teaser":null},{
        "title": "HTML is the new HTML5",
        "excerpt":"Few days ago Ian Hickson wrote a blog: HTML is the new HTML5, he referred \"we moved to a new development model\", and comes with two major changes: The HTML specification will henceforth just be known as \"HTML\", with the URL http://whatwg.org/html. The WHATWG HTML spec now became \"living standard\", \"It's...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/HTML-is-the-new-HTML5",
        "teaser":null},{
        "title": "Significant Enhancement in Internet Explorer 9",
        "excerpt":"Background Microsoft announced Internet Explorer 9 Release Candidate on&#160; Feb 10th, 2011, RC indicates except bug fixing, there would not have big changes before the final RTM. Since I've been keeping a watchful eye on IE9 from its very first preview version, I would like to write a post about...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Significant-Enhancement-In-InternetExplorer9",
        "teaser":null},{
        "title": "HTML5 Web Storage in Essence",
        "excerpt":"Background Web Storage (also named Dom storage) is a brand new mechanism of storing temporary/permanent data introduced in HTML5 to replace cookie, it contains two new DOM objects: sessionStoragy and localStorage), in Web Storage Spec, Ian Hickson documented that Web Storage are intended to solve two cases that &quot;not handled...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/HTML5-Web-Storage-In-Essence",
        "teaser":null},{
        "title": "AJAX Cross-Origin HTTP request",
        "excerpt":"Background Cross-Origin Request Sharing - CORS (A.K.A. Cross-Domain AJAX request) is an issue that most web developers might encounter,&nbsp;according to Same-Origin-Policy, browsers restrict client JavaScript in a security sandbox, usually JS cannot directly communicate with a remote server from a different domain. In the past developers created many tricky ways...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Ajax-Cross-Origin-HTTP-request",
        "teaser":null},{
        "title": "HTML5 Web Socket in Essence",
        "excerpt":"HTML5 WebSocket defines a bi-directional, full-duplex communication channel operates through a single TCP connection, this article discusses its fantastic performance, the WebSocket protocol principle and its handshake mechanism, and develop a WebSocket application in action (Team Poker). Embeded youku video link because Youtube is outside of the largest \"intranet\" in...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/HTML5-Web-Socket-In-Essence",
        "teaser":null},{
        "title": "Exception handling particulars in C#",
        "excerpt":"Background Exception handling appears in most .NET applications, this post is trying to describe some &nbsp;Exception handling particulars in C# which might not take enough awareness from C# developers.&nbsp; Differences between throw and throw ex&nbsp; I guess every C# developer has seen code snippet below: try { &nbsp;&nbsp;&nbsp; // Do...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Exception-Handling-Particulars-In-Csharp",
        "teaser":null},{
        "title": "JavaScript - Foundation of the Language",
        "excerpt":"Introduction JavaScript&nbsp;\"was born under the shadow of Java\" - Brenden Eich, it&nbsp;is \"the most misunderstood programming language in the world\" - Douglas Crockford. JavaScript&nbsp;was used so widely nowadays, nearly everywhere&nbsp;as long as you are using a web browser and surfing the internet, most of the websites have JS inside, and...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/JavaScript-Foundation-Of-The-Language",
        "teaser":null},{
        "title": "HTML5 WebSocket in Essence技术分享",
        "excerpt":"今天下午，我非常荣幸受邀参加HTML5兴趣小组每月一次的沙龙活动，我给大家分享了HTML5 WebSocket的特性，协议本质，以及我的Team Poker demo。  第一次做技术分享，表面&ldquo;淡定&ldquo;，内心紧张，因语速较快原本打算持续1个小时左右的分享，大约40分钟就结束了，囧  现场照片    在谈各种comet技巧    PPT  HTML5 WebSocket in Essence&nbsp;on&nbsp;Prezi    现场视频    摄影帅哥貌似对焦不实的说  下一次，希望更好！+U！  ","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/HTML5-WebSocket-In-Essence-Public-Speak",
        "teaser":null},{
        "title": "nodejs+express+jade+socket.io on Ubuntu 11.04",
        "excerpt":"Introduction socket.io&nbsp;is a brilliant project which perfectly supports HTML5 WebSocket, in additional, it can fall back to flash or long polling when the client web browser does not support WebSocket, I explored it today on Ubuntu, I summarized the process in this post. &nbsp; Install nodejs I used nodejs v0.4.11,...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/nodejs-express-jade-socketio-On-Ubuntu",
        "teaser":null},{
        "title": "HTML5 WebMessaging In Essence",
        "excerpt":"Download HTML5_Cross-Domain_WebMessaging_Demo.zip - 2.97 KB As a web developer, sometimes we are easy to encounter one problem: Cross-Domain communication, conforming Same-Origin-Policy, JavaScript code cannot access code stay in different domain(or sub-domain) or&nbsp;protocol (HTTP/HTTPs) or&nbsp;port, so there was no direct (or I can say: simple) way to achieve Cross-Domain Communication. However,...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/HTML5-WebMessaging-In-Essence",
        "teaser":null},{
        "title": "Print partial web content",
        "excerpt":"Per project needs we need print part of a web page, which I have no idea when I saw this requirement,&nbsp;I googled and I read this post:&nbsp;http://www.huntingground.freeserve.co.uk/main/mainfram.htm?../scripts/printing.htm, it basically use document.write to write the content you want to print to a new window by window.open, it works, however I really...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Print-Partial-Web-Content",
        "teaser":null},{
        "title": "Experiencing Windows 8 Tablet",
        "excerpt":"This week is a Tablet week for me, Shilpa told me the Ipad2 I won in the Codeproject HTML5 &amp; CSS3 competition had just arrived at Cupertino office, and my boss notified me he had successfully helped me bought an HP Touchpad - $99, &nbsp;and my colleague Jun Yi participated...","categories": ["IT-Industry"],
        "tags": ["IT-Industry"],
        "url": "https://wayneye.me/Experiencing-Windows-8-Tablet",
        "teaser":null},{
        "title": "URL Rewrite Rules used by WayneYe.com",
        "excerpt":"I've successfully transferred my website to winhost, now the architecture is IIS 7.5 + ASP.NET 4.0 + SQL Server 2008 R2 + HTML5, this blog post is a summary about&nbsp;URL Rewrite Rules used by WayneYe.com. RESTful URL for blogs Blog posts are absolutely the soul of a blog website, comparing...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/URL-Rewrite-Rules-Used-By-WayneYe-Dot-Com",
        "teaser":null},{
        "title": "Atomic Operation in C#.Net",
        "excerpt":"Introduction Atomic Operation is named academic to Linearizability,&nbsp;Atomicity is a guarantee of isolation from concurrent processes, it can be enfored by hardware level build on Cache&nbsp;Coherence protocol, or software level exclusive lock. In this blog post, I am going to explore a few number of mechanisms to achieve atomic operation...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Atomic-Operation-In-Csharp",
        "teaser":null},{
        "title": "Make your HTML5 Video support all browsers",
        "excerpt":"Introduction HTML5 video tag gave us the following advantages: No plugin required, directly play. Visible &amp; controllable for Browser and search engine, not a \"black box\" such as Flash or SilverLight. Cross-platform, in theory all PC/mobile browsers as well as Ipad/Windows 8/Android tablet PC.&nbsp; Downward compatibility. Which is very important,...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Make-Your-HTML5-Video-Support-ALL-Browsers",
        "teaser":null},{
        "title": "Rooted my HTC Sensation (G14)",
        "excerpt":"Where there is an Android phone, there are reasons to root it. Here I took a note how I rootedmy HTC Sensation (A.K.A G14): Find the S/N on battery, and find HBoot version by holding \"Volumn down\" and long press power down. &nbsp; Install modified HTC drive from: http://downloads.unrevoked.com/HTCDriver3.0.0.007.exe Go...","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/Rooted-My-HTC-Sensation",
        "teaser":null},{
        "title": "Honored to Win CodeProject HTML5 competition",
        "excerpt":"Three months ago, my article &lt;HTML5 WebSocket In Essence&gt; was honored to be named first prize in CodeProject HTML5 &amp; CSS3 competion, the award was an Ipad2. To be very honest I was expecting to win a T-Shirt or a CP Mug, if I could get either on I would...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Honored-To-Win-CodeProject-HTML5-Competition",
        "teaser":null},{
        "title": "Windows 8 - Far from perfect",
        "excerpt":"Recently I spent a few days in investigating Metro App (AKA immersive UI) development, I downloaded &amp; installed VS 2011 Ultimate, watched couple of videos talking about WinRT, Metro App life cycle, Living tiles &amp; Notifications, etc. So far, I've encountered many many issues... I had to say:&nbsp;Windows 8 -...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Windows-8-Far-From-Perfect",
        "teaser":null},{
        "title": "Modify proxy settings using Powershell",
        "excerpt":"To use Live Messenger in the office, I always need to firstly disable my proxy settings, after Live Messenger launched, I need turn it back. Thus everytime I need to change that from \"Internet Options -&gt; Connections -&gt; Lan Settings -&gt;\", check/uncheck the checkboxes, well, this task I need to...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Modify-Proxy-Settings-Using-Powershell",
        "teaser":null},{
        "title": "Resolving mouseover/mouseout multi-trigger problem",
        "excerpt":"Background While I was developing my blog's comments function, I hope reader can write down their Gravatar&nbsp;email address, and my preferable UI was an \"hint icon\" dispolayed desides the Email textbox, so that while reader mouse overs it an overlay box will show the reason why Email is required, in...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Resolving-mouseover-mouseout-Multi-Trigger-Problem",
        "teaser":null},{
        "title": "Honored to be CodeProject MVP 2012",
        "excerpt":"It is a huge honor for me, I appreciate the recognition from the CodeProject team, and I believe this is not only a recognition but also a kind of&nbsp;encourage,&nbsp;I&nbsp;will&nbsp;definitely try my best to work harder in the coming 2012:) CodeProject MVP List 2012 My current profile &nbsp; 2011 is an...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Honored-To-Be-CodeProject-MVP-2012",
        "teaser":null},{
        "title": "Geek life in ThoughtWorks",
        "excerpt":"ThoughtWorks card on my MacBook Pro (Click to enlarge) One month milestone I just experienced my first month in ThoughtWorks, in fact I decided to record my feelings and thoughts even before I joint this incredible company, I believe it would be a unforgettable period of my life. And right...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Geek-Life-In-ThoughtWorks",
        "teaser":null},{
        "title": "Observation on CDN",
        "excerpt":"Motivation Leveraging CDN (Content Delivery Network) to speed up static files loading time is one of the most important fact which affects a website's loading time, CDN was emphasized in many articles related with improving website's performance, for example: Nicholas C. Zakas - How content delivery networks (CDNs) work Why...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Observation-On-CDN",
        "teaser":null},{
        "title": "12 tips to boost RSpect and Cucumber",
        "excerpt":"In our daily TDD/BDD work, we spent most of our time in test cases, we analyze requirements, write test case, run it and watch it fail, implement code to make the test pass, repeat the process \"until money runs out\". Thus the speed of running those test cases have significant...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/12-Tips-To-Boost-RSpec-And-Cucumber",
        "teaser":null},{
        "title": "Cache Reverse Proxy - nginx",
        "excerpt":"Introduction On the homepage of nxing wiki, there used to be one sentence which really impressed my very much when I first time to take a look at it and learn it three years ago: Apache is like Microsoft Word, it has a million options but you only need six....","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Cache-Reverse-Proxy-nginx",
        "teaser":null},{
        "title": "Cache Reverse Proxy - Varnish",
        "excerpt":"Introduction Varnish is an HTTP accelerator, the official page is: https://www.varnish-cache.org/. Varnish stands in front of the web application server to be a cache reverse proxy (also can be a load balancer), it can simply cache all the static resources in memory, and can also be powerfully configed using VCL...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Cache-Reverse-Proxy-Varnish",
        "teaser":null},{
        "title": "WTF?IBM Lotus and Domino Server?",
        "excerpt":"Technical tags: IBM, Domino, AIX, LotusScript, ODBC/JDBC, ADO, OLE DB, Assume we are now in Jurassic period, the technologies above are in Cambrian period, developers who has less than 4 years experience probably never heard about any of the above terminologies... No choice, I was dealing with them during the...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/WTF-IBM-Lotus-and-Domino-Server",
        "teaser":null},{
        "title": "MongoDB Schema Design and Common Practices",
        "excerpt":"Installation Exhaustive documentation:&nbsp;http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/ Mongo executables will be installed into&nbsp;/use/bin/, database files will under&nbsp;/data/db/ Log file location:&nbsp;/var/log/mongodb/mongodb.log Terminology Adminstration sudo service mongodb start/stop/restart&nbsp;or simply issue&nbsp;mongod&nbsp;to start MongoDB process mongo&nbsp;to enter MongoDB Console &gt; show dbs &nbsp;#Show all databases &gt; db &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; #Show current db &gt; db.help()...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/MongoDB_Schema_Design_And_Common_Practices",
        "teaser":null},{
        "title": "Setup MongoDB with sharding infrastructure",
        "excerpt":"The landscape&nbsp; Sharding is the strategy that MongoDB uses to horizentally scale the entire data store infrustructure and meet the demands of data,growth, the infrastructure can be demonstrated as image below: Preparation To simulate a production like environment, a minimum number of 7 physical/virtual servers are required, the role of...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Setup_MongoDB_With_Sharding_Infrastructure",
        "teaser":null},{
        "title": "My New iMac",
        "excerpt":"Hooray! My new development &amp; gaming machine - the later 2013 iMac! I wrote this blog post to record my thoughts and feelings before and after I purchased this baby:) My open questions and the answers I got from the Apple customer service I will choose a dedicated SSD, will...","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/My-New-iMac",
        "teaser":null},{
        "title": "My Book &lt;Instant Cucumber BDD How-to&gt;",
        "excerpt":"The background I received an email during November 2012 from Packt, in the email they asked me whether or not consider writing a book for them related with BDD using Cucumber based on Rails platform, the book will only contains 50-70 pages, they named this kind of book \"Instant book\",...","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/My-Book-Instant-Cucumber-BDD-How-to",
        "teaser":null},{
        "title": "My Love on Vim",
        "excerpt":"My life with Vim I started learning Vim during Aug, 2011, the original motivation was trying to \"get rid of my mouse while I am coding\", I had no teacher but google, learnt it from the very hard way. From the beginning 2-3 months, honest speaking, I was less productive...","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/My-Love-on-Vim",
        "teaser":null},{
        "title": "PacktPub 10 years celebration",
        "excerpt":"PacktPub 10 years celebration     PacktPub 10 years celebration! All eBooks and Videos at just $10 each until July 5th, my book &lt;Instant Cucumber BDD How-To&gt; will also be promoted on the celebration page, hooray! http://goo.gl/nkUb7o #Packt10Dollar         ","categories": ["Hack"],
        "tags": ["Hack"],
        "url": "https://wayneye.me/Packy-10-Years-Celebration",
        "teaser":null},{
        "title": "New Life Begins In BayArea",
        "excerpt":"多年的梦想实现，展望崭新的人生目标!始终自勉，热诚而稳重，谦逊但专注；不卑不亢，以德服人；严于律己，宽以待人；永远斗志高昂，笑对挫折；不断修善自身，追求一颗强大的内心，永不言败！ Long time's dream comes true, looking forward to brand new target now, self-encourage, be zealous and steady, modest but focused; be neither overbearing nor servile, win people by virtue; always be passionate, laughs in the face of setback; continuously upgrade myself, pursue a strong heart, never talking about failure!...","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/New-Life-Begins-In-BayArea",
        "teaser":null},{
        "title": "FC Barcelona Miracle Comeback!",
        "excerpt":"0:4到6:1 - 史诗般的逆转 From 0:4 to 6:1 - Epic comeback 2017年3月8日，巴塞罗那诺坎普球场，加泰罗尼亚足球巨人巴塞罗那队坐镇主场迎战巴黎圣日耳曼队，带着首回合0:4的比分，开始了几乎所有人都认为的荣誉之战，绝大多数人（包括我在内），都认为巴萨可能会赢，但绝不可能翻盘，自有欧洲冠军杯以来，没有任何球队在落后4球的情况下能搬回来，迄今为止最惊天动地的翻盘出现在13年前，AC米兰主场4:1战胜拉科鲁尼亚，回到拉科主场，由马凯，潘迪亚尼、贝莱隆等人领衔实现4:0的疯狂逆转。此次虽说巴萨有世上无双的MSN三叉戟，巴黎账面上也绝对比当年的AC米兰差了点点，但是毕竟巴萨可是可怜得连个客场进球都没有，而大巴黎状态正佳，进1球就几乎可以宣告巴萨死刑，因为在此情况下他们需要进6球，面对由当世顶尖中卫蒂亚戈席尔瓦领衔的大巴黎防线，这种期望值是否太。。。然而，足球就是足球，理性分析与实际结果的差距经常巨大！就在此时，就在此地，巴塞罗那队实现了欧冠历史上绝无仅有的超级大逆转，全世界所有足球迷，即使不是巴萨的粉丝，都被此神迹彻底燃爆！ Mar 8th 2017, Camp Nou stadium at Barcelona, the Catalan giant faced Paris Saint Germain, with a 0:4 loss taken from 1st leg, started a “honor bound” from majority people’s point of view, most people (including me), would guess...","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/FC-Barcelona-Miracle-Comeback",
        "teaser":null},{
        "title": "Storage+Media home server for less than $300",
        "excerpt":"Background I have been researched and watched many NAS options to setup a home storage+media server during the past year, and so far there was no perfect answer, either lacking features/performance, or way too expensive… An Intel Celeron CPU + 1GB mem with a customized Linux (in other words: closed...","categories": ["Geek"],
        "tags": ["Geek","Hack"],
        "url": "https://wayneye.me/geek/Storage-Media-Home-Server-Less-Than-300/",
        "teaser":null},{
        "title": "Passing AWS Certified Solutions Architect",
        "excerpt":"3 years of AWS hands on experience, two months of preparation, 30 hours of course learning, 300+ exam practices, this was the work I’ve done to pass the AWS Certified Solutions Architect - Associate, my exam result is below: Overall Score: 81% Topic Level Scoring: 1.0 Designing highly available, cost efficient,...","categories": ["Self-Improvement"],
        "tags": ["AWS","Technology"],
        "url": "https://wayneye.me/self-improvement/passing-aws-certified-solutions-architect/",
        "teaser":null},{
        "title": "Master AWS Development Video Published",
        "excerpt":"Course overview video Publishing information After 8 months of continuously hard working, this &lt;Master AWS Development&gt; video course is now live at: Packt Website, I described this course as below: Amazon Web Services (AWS) is the gold standard of the cloud. If you are web and cloud computing developer, your...","categories": ["Self-Improvement"],
        "tags": ["AWS","Technology"],
        "url": "https://wayneye.me/Master-AWS-Development-Video-Published",
        "teaser":null},{
        "title": "Apply UK Visit VISA",
        "excerpt":"Background I was planning to attend #adskfootball2019 in Dublin, Ireland from Jun 14th to Jun 16th, 2019: Autodesk Football Tournament 2019 In order to attend, I needed applying Ireland VISA, and since I was planning to fly back to Shanghai later in June, so I thought I could just fly...","categories": ["Life"],
        "tags": ["Life"],
        "url": "https://wayneye.me/Apply-UK-Visit-VISA",
        "teaser":null},{
        "title": "Ireland Trip 2019",
        "excerpt":"WHEN YOU ARE OLD When you are old and grey and full of sleep, And nodding by the fire, take down this book, And slowly read, and dream of the soft look Your eyes had once, and of their shadows deep; How many loved your moments of glad grace, And...","categories": ["Life"],
        "tags": ["Life","Travel"],
        "url": "https://wayneye.me/Ireland-Trip-2019",
        "teaser":null},{
        "title": "AWS reinvent 2019 - Las Vegas",
        "excerpt":"This is my second time attending AWS re-Invent, last time was year 2017, the purpose of this blog is to summarize what I’ve learned, impressed and entertained :smile: At reinvent logo Crazy crowd at midnight madness party Overall during my week staying my daily schedule was listening to sessions mixed...","categories": ["IT-Industry"],
        "tags": ["IT-Industry","AWS"],
        "url": "https://wayneye.me/AWS-reinvent-Las-Vegas",
        "teaser":null},{
        "title": "SkyJump from Stratosphere Tower at Las Vegas - Smile all the way down",
        "excerpt":"Instead of spending any cent in the money pit casinos, I’d chose to do something more meaningful and exciting :) SkyJump Las Vegas SkyJump Las Vegas holds the Guinness World Record for highest commercial decelerator descent with an official height of 829 ft (253 m) and is located at Stratosphere...","categories": ["Life"],
        "tags": ["Life","Travel"],
        "url": "https://wayneye.me/2019-12-07-SkyJump-Las-Vegas",
        "teaser":null},{
        "title": "BMW Convertible As My Beater Car",
        "excerpt":"Life is too short to drive boring cars I bought a 2015 BMW X5 Dec last year, it has been half a year so far (with 2 months she stayed inside the garage for most of the time due to the pandemic), I am pretty satisfied with it, her condition...","categories": ["Life"],
        "tags": ["Car","Life"],
        "url": "https://wayneye.me/BMW-Convertible-As-My-Beater-Car",
        "teaser":null}]

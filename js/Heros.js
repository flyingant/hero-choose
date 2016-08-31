var Heros = Backbone.Collection.extend({

    initialize: function(){
        this.add([
            {
                name: "伏皇后",
                type: "2013",
                heroId: "YJ202",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "关平",
                type: "2013",
                heroId: "YJ203",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "刘封",
                type: "2013",
                heroId: "YJ207",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "曹冲",
                type: "2013",
                heroId: "YJ201",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "朱然",
                type: "2013",
                heroId: "YJ211",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "李儒",
                type: "2013",
                heroId: "YJ206",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "满宠",
                type: "2013",
                heroId: "YJ208",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "潘璋&马忠",
                type: "2013",
                heroId: "YJ209",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "简雍",
                type: "2013",
                heroId: "YJ205",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "虞翻",
                type: "2013",
                heroId: "YJ210",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "郭淮",
                type: "2013",
                heroId: "YJ204",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "伏完",
                type: "SP",
                heroId: "SP018",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "公孙瓒",
                type: "SP",
                heroId: "SP003",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "关羽",
                type: "SP",
                heroId: "SP007",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "关银屏",
                type: "SP",
                heroId: "SP014",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "刘协",
                type: "SP",
                heroId: "SP016",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "刘备",
                type: "SP_EX",
                heroId: "SP007",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "吕蒙",
                type: "SP_EX",
                heroId: "SP006",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "夏侯惇",
                type: "SP_EX",
                heroId: "SP010",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "夏侯霸",
                type: "SP",
                heroId: "SP019",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "大乔",
                type: "SP_EX",
                heroId: "SP008",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "大乔&小乔",
                type: "SP",
                heroId: "SP021",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "孙尚香",
                type: "SP",
                heroId: "SP005",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "庞德",
                type: "SP",
                heroId: "SP006",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "庞统",
                type: "SP_EX",
                heroId: "SP004",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "张飞",
                type: "SP_EX",
                heroId: "SP005",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "曹仁",
                type: "SP_EX",
                heroId: "SP003",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "曹洪",
                type: "SP",
                heroId: "SP013",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "灵雎",
                type: "SP",
                heroId: "SP017",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "甘宁",
                type: "SP_EX",
                heroId: "SP009",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "吕布",
                type: "HULAOGUAN",
                heroId: "SP008(2-1)",
                hearth: 8,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "吕布",
                type: "HULAOGUAN",
                heroId: "SP008(2-2)",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "蔡文姬",
                type: "SP",
                heroId: "SP009",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "袁术",
                type: "SP",
                heroId: "SP004",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "貂蝉",
                type: "SP_EX",
                heroId: "SP002",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "贾诩",
                type: "SP",
                heroId: "SP012",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "赵云",
                type: "SP_EX",
                heroId: "SP001",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "陈琳",
                type: "SP",
                heroId: "SP020",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "马超",
                type: "SP",
                heroId: "SP011",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "于吉",
                type: "FENG",
                heroId: "QUN011",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "于禁",
                type: "2012",
                heroId: "YJ010",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "关兴&张苞",
                type: "2012",
                heroId: "YJ104",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "关羽",
                type: "BIAOZHUN",
                heroId: "SHU002",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "凌统",
                type: "2012",
                heroId: "YJ005",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "刘备",
                type: "BIAOZHUN",
                heroId: "SHU001",
                hearth: 4,
                defaultMaster: true,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "刘禅",
                type: "SHAN",
                heroId: "SHU013",
                hearth: 3,
                defaultMaster: true,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "刘表",
                type: "2012",
                heroId: "YJ108",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "华佗",
                type: "BIAOZHUN",
                heroId: "QUN001",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "华雄",
                type: "2012",
                heroId: "YJ106",
                hearth: 6,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "司马懿",
                type: "BIAOZHUN",
                heroId: "WEI002",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "吕布",
                type: "BIAOZHUN",
                heroId: "QUN002",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "吕蒙",
                type: "BIAOZHUN",
                heroId: "WU003",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "吴国太",
                type: "2012",
                heroId: "YJ007",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "周泰",
                type: "FENG",
                heroId: "WU013",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "周瑜",
                type: "BIAOZHUN",
                heroId: "WU005",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "夏侯惇",
                type: "BIAOZHUN",
                heroId: "WEI003",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "夏侯渊",
                type: "FENG",
                heroId: "WEI008",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "大乔",
                type: "BIAOZHUN",
                heroId: "WU006",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "太史慈",
                type: "HUO",
                heroId: "WU012",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "姜维",
                type: "SHAN",
                heroId: "SHU012",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "孙坚",
                type: "LIN",
                heroId: "WU009",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "孙尚香",
                type: "BIAOZHUN",
                heroId: "WU008",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "孙权",
                type: "BIAOZHUN",
                heroId: "WU001",
                hearth: 4,
                defaultMaster: true,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "孙策",
                type: "SHAN",
                heroId: "WU010",
                hearth: 4,
                defaultMaster: true,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "孟获",
                type: "LIN",
                heroId: "SHU014",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "小乔",
                type: "FENG",
                heroId: "WU011",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "左慈",
                type: "SHAN",
                heroId: "QUN009",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "庞德",
                type: "HUO",
                heroId: "QUN008",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "庞统",
                type: "HUO",
                heroId: "SHU010",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "廖化",
                type: "2012",
                heroId: "YJ107",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "张春华",
                type: "2012",
                heroId: "YJ011",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "张昭&张纮",
                type: "SHAN",
                heroId: "WU015",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "张角",
                type: "FENG",
                heroId: "QUN010",
                hearth: 3,
                defaultMaster: true,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "张辽",
                type: "BIAOZHUN",
                heroId: "WEI004",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "张郃",
                type: "SHAN",
                heroId: "WEI009",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "张飞",
                type: "BIAOZHUN",
                heroId: "SHU003",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "徐庶",
                type: "2012",
                heroId: "YJ009",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "徐晃",
                type: "LIN",
                heroId: "WEI010",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "徐盛",
                type: "2012",
                heroId: "YJ008",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "曹丕",
                type: "LIN",
                heroId: "WEI014",
                hearth: 3,
                defaultMaster: true,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "曹仁",
                type: "FENG",
                heroId: "WEI011",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "曹彰",
                type: "2012",
                heroId: "YJ102",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "曹操",
                type: "BIAOZHUN",
                heroId: "WEI001",
                hearth: 4,
                defaultMaster: true,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "曹植",
                type: "2012",
                heroId: "YJ001",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "步练师",
                type: "2012",
                heroId: "YJ101",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "法正",
                type: "2012",
                heroId: "YJ003",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "诸葛亮",
                type: "HUO",
                heroId: "SHU011",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "王异",
                type: "2012",
                heroId: "YJ110",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "甄姬",
                type: "BIAOZHUN",
                heroId: "WEI007",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "甘宁",
                type: "BIAOZHUN",
                heroId: "WU002",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "祝融",
                type: "LIN",
                heroId: "SHU015",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "程普",
                type: "2012",
                heroId: "YJ103",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "荀彧",
                type: "HUO",
                heroId: "WEI013",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "荀攸",
                type: "2012",
                heroId: "YJ111",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "董卓",
                type: "LIN",
                heroId: "QUN006",
                hearth: 8,
                defaultMaster: true,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "蔡文姬",
                type: "SHAN",
                heroId: "QUN012",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "袁绍",
                type: "HUO",
                heroId: "QUN004",
                hearth: 4,
                defaultMaster: true,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "许褚",
                type: "BIAOZHUN",
                heroId: "WEI005",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "诸葛亮",
                type: "BIAOZHUN",
                heroId: "SHU004",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "貂蝉",
                type: "BIAOZHUN",
                heroId: "QUN003",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "贾诩",
                type: "LIN",
                heroId: "QUN007",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "赵云",
                type: "BIAOZHUN",
                heroId: "SHU005",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "邓艾",
                type: "SHAN",
                heroId: "WEI015",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "郭嘉",
                type: "BIAOZHUN",
                heroId: "WEI006",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "陆逊",
                type: "BIAOZHUN",
                heroId: "WU007",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "陈宫",
                type: "2012",
                heroId: "YJ002",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "颜良&文丑",
                type: "HUO",
                heroId: "QUN005",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "马岱",
                type: "2012",
                heroId: "YJ109",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "高顺",
                type: "2012",
                heroId: "YJ004",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "马谡",
                type: "2012",
                heroId: "YJ006",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "马超",
                type: "BIAOZHUN",
                heroId: "SHU006",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "鲁肃",
                type: "LIN",
                heroId: "WU014",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "魏延",
                type: "FENG",
                heroId: "SHU009",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "黄月英",
                type: "BIAOZHUN",
                heroId: "SHU007",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "黄忠",
                type: "FENG",
                heroId: "SHU008",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "黄盖",
                type: "BIAOZHUN",
                heroId: "WU004",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "关羽",
                type: "FENG",
                heroId: "LE001",
                hearth: 5,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "吕蒙",
                type: "FENG",
                heroId: "LE002",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "吕布",
                type: "LIN",
                heroId: "LE006",
                hearth: 5,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "诸葛亮",
                type: "HUO",
                heroId: "LE004",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "赵云",
                type: "SHAN",
                heroId: "LE007",
                hearth: 2,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "周瑜",
                type: "HUO",
                heroId: "LE003",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "曹操",
                type: "LIN",
                heroId: "LE005",
                hearth: 3,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "司马懿",
                type: "SHAN",
                heroId: "LE008",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "png",
                remoteURl: ""
            },
            {
                name: "钟会",
                type: "2012",
                heroId: "YJ012",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            },
            {
                name: "韩当",
                type: "2012",
                heroId: "YJ105",
                hearth: 4,
                defaultMaster: false,
                imageExtension: "jpg",
                remoteURl: ""
            }
        ]);
    }
})
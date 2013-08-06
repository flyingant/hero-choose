var HeroCollection = Backbone.Collection.extend({

    initialize: function(){
        this.add([
            {
                name: "于吉",
                url: "source/于吉.png",
                health: 3,
                available: true,
                remoteURL: "https://photos-5.dropbox.com/t/0/AAC_qaNuc7T1POKDKwbKNofR84ikKwuprMJiFf70_qGSmw/12/145767243/png/2048x1536/3/1375772400/0/2/%E4%BA%8E%E5%90%89.png/xD03m6y55OrpFKTS-wsy7qJ8TmBNf2uVBQ8-aiGQKjg"
            },


            {
                name: "于禁",
                url: "source/于禁.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAD-UP8-KV3_NNUX7fTQ0Q0qh5e0sMtmsGASf_-ysyEg9A/12/145767243/png/1024x768/3/1375772400/0/2/%E4%BA%8E%E7%A6%81.png/akTBGHir2Dl7O__GbfFvMUGXRnlXbXDEzkumI9-8XeU"
            },


            {
                name: "关兴&张苞",
                url: "source/关兴&张苞.jpg",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AADVA4iCJpN8R6tbUeVGjtQgwRkJ7O1ksskdknWvXlMeuQ/12/145767243/jpeg/1024x768/3/1375772400/0/2/%E5%85%B3%E5%85%B4%26%E5%BC%A0%E8%8B%9E.jpg/UVD_3LNj2YrLZ83-brm-1OfwvB9woElWu30dOUKsnYY"
            },


            {
                name: "关羽",
                url: "source/关羽.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAC-KfzelRksrekZpRz80wYipSv5hOJN-5r0DBWXW0cd-A/12/145767243/png/1024x768/3/1375772400/0/2/%E5%85%B3%E7%BE%BD.png/llhNoCMM7WR4S-ua7FCQTDv0J6HQxvfzMh2sCJHxkqE"
            },


            {
                name: "典韦",
                url: "source/典韦.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AACA0zAsYFOgcG7zT7hr4JdHPOvGMySL2-EExj1FWCwPoA/12/145767243/png/1024x768/3/1375772400/0/2/%E5%85%B8%E9%9F%A6.png/KtxsTzyRslTqu1f9f6fe5tNKPMViOx2OivOVoCw_chY"
            },


            {
                name: "凌统",
                url: "source/凌统.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AADvZCi_5CXC9HYQy3AeD7JTOBXGAlJKvoODlO9Q2jnhLQ/12/145767243/png/2048x1536/3/1375772400/0/2/%E5%87%8C%E7%BB%9F.png/j9xuBfiApeV7bQM8yg_cXwRmf8yDTIEcjlJRauCK374"
            },


            {
                name: "刘备",
                url: "source/刘备.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AACKt8qhwlEKst6seX8lMgVaG9Bswi8-iVSK9VbKRTwLEg/12/145767243/png/1024x768/3/1375772400/0/2/%E5%88%98%E5%A4%87.png/knO8_FKUovPihO1QE4hl6HzsTHZ5PBspnPen8JFbVrY"
            },


            {
                name: "刘禅",
                url: "source/刘禅.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAC0X7st6Ar_UUkf5BB0XN7daanh4x1nBA-l-Urs87FrpA/12/145767243/png/1024x768/3/1375772400/0/2/%E5%88%98%E7%A6%85.png/3TglsRKWJN4PNuq02F3sSJmKYanI35Jcw0KNEcq5qYU"
            },


            {
                name: "刘表",
                url: "source/刘表.jpg",
                health: 4,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AAAWJ55CM7_FJvT6O2kPnTgSav7J4gtOkXwAuS-D1PE4-g/12/145767243/jpeg/2048x1536/3/1375772400/0/2/%E5%88%98%E8%A1%A8.jpg/OQaCXF9aPUyi1V_oBY-QUAxoFXdKBVVFvC1N6a_kzno"
            },


            {
                name: "华佗",
                url: "source/华佗.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AABCNNfBRokqqvuNVo1oOWg2xGRKHDDVAV5Vmq4bBW4Uwg/12/145767243/png/1024x768/3/1375772400/0/2/%E5%8D%8E%E4%BD%97.png/wP45_7OM66EW7cJGmhnfI3N7Ut8DVEvSQ8QADakSeC8"
            },


            {
                name: "华雄",
                url: "source/华雄.jpg",
                health: 6,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AABurFcAQgbcqTB-0gjtKWrJ6B9wuecXHSlLbQ3NM9C1iQ/12/145767243/jpeg/2048x1536/3/1375772400/0/2/%E5%8D%8E%E9%9B%84.jpg/1Ex04MpgKgVrpxPG1UVdWh-KwAPdjaK81Ws2Qt9G-M0"
            },


            {
                name: "司马懿",
                url: "source/司马懿.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AABCVU-GTC_KkedEzHbjJFqBpL0R00ZH4SAeVB6gXZBP3Q/12/145767243/png/1024x768/3/1375772400/0/2/%E5%8F%B8%E9%A9%AC%E6%87%BF.png/uqKHEgN-Zakcmw3BlvmTr-57diRvJLrxBUyiBnLUCbU"
            },


            {
                name: "吕布",
                url: "source/吕布.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AADuvJVqHY0W8UicrOJfLfrkyVcFaXcdwRcL4F_URTSGhg/12/145767243/png/1024x768/3/1375772400/0/2/%E5%90%95%E5%B8%83.png/WEWH6PoUUU0CzWq7bxuGFZNXpTzATRQCHc49Ziqa1_A"
            },


            {
                name: "吕蒙",
                url: "source/吕蒙.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AACdiZlbi75ToeabeInhfhgI31IoFJImwo-fglDq9li8-w/12/145767243/png/1024x768/3/1375772400/0/2/%E5%90%95%E8%92%99.png/84lbWggFNuRWe5wECQxTllOcVtj0-5wrTEC0c1NYO94"
            },


            {
                name: "吴国太",
                url: "source/吴国太.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AAA9HbdjySJ2vTDkCmLAvBTgtj1dR7yyCyeLoXyHTzgn9Q/12/145767243/png/1024x768/3/1375772400/0/2/%E5%90%B4%E5%9B%BD%E5%A4%AA.png/eVyaQs1nz5GqUyqOwRwVFHlOzNP03tsOMuUjdO1hv8A"
            },


            {
                name: "周泰",
                url: "source/周泰.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAAVBqlgrzJxxdQoYV6l224Rr0a0e7-WXF4O6iKJcLtQTA/12/145767243/png/1024x768/3/1375772400/0/2/%E5%91%A8%E6%B3%B0.png/1Jy5Q7Oo3KBJVhLMKRtiyqbeK0LNi4lGwCJPfDrG8Ww"
            },


            {
                name: "周瑜",
                url: "source/周瑜.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAC1ym4T4_DGbZ7DrvyJiF6MZXDvzmNrseVsK-_Dwm9LZw/12/145767243/png/1024x768/3/1375772400/0/2/%E5%91%A8%E7%91%9C.png/rHCLNDk0b-r1IShHl5FC_xk1JLt9lOEEDJSWWQSNrxY"
            },


            {
                name: "夏侯惇",
                url: "source/夏侯惇.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AADEI55_qTjjb5v9aRbUY7CzGDsab7aucrmHJsQ55ss6Pg/12/145767243/png/1024x768/3/1375772400/0/2/%E5%A4%8F%E4%BE%AF%E6%83%87.png/09-59VV_lOcxcN67xkV4HCbNS-uJxJ-05Ijz50oT3G0"
            },


            {
                name: "夏侯渊",
                url: "source/夏侯渊.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AABUk9_c4TJC9nzEEHg19Dx4JrPeEQDRtcbg0Obo19j9rg/12/145767243/png/1024x768/3/1375772400/0/2/%E5%A4%8F%E4%BE%AF%E6%B8%8A.png/e4u9lBlVH3rKCx7LYgORuWfaYJe37BemCganYX40mvU"
            },


            {
                name: "大乔",
                url: "source/大乔.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AAD4S5aSeMTqoRO5yH5OOATlk5uTAgZed1Au_Ll3Obu4iA/12/145767243/png/1024x768/3/1375772400/0/2/%E5%A4%A7%E4%B9%94.png/TGUhUmb7IpxsTrFvRwg0lb9zSexZSJUi5En2Pmnr25c"
            },


            {
                name: "太史慈",
                url: "source/太史慈.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AABLYq0o6rfA6QoiX4G6oFrBX3egE7h37cehr7PeX_rLIg/12/145767243/png/1024x768/3/1375772400/0/2/%E5%A4%AA%E5%8F%B2%E6%85%88.png/7bPVFzWLG4lezs4OHIVRRPyRVL9kKrx5xfnVLiCWMto"
            },


            {
                name: "姜维",
                url: "source/姜维.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AADZXUnIvH-YF87c4fRiIzE0eUY8AsFSWgLbnK33liCyrQ/12/145767243/png/1024x768/3/1375772400/0/2/%E5%A7%9C%E7%BB%B4.png/BGLWc8kiYmCOQyIr9Tz34KjxrZkP_FmgUoEV2304X3w"
            },


            {
                name: "孙坚",
                url: "source/孙坚.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AACmXXu-WsSyIiwH1aAl2TGjdAtdQLidlWgLjwB6tpMFUQ/12/145767243/png/1024x768/3/1375772400/0/2/%E5%AD%99%E5%9D%9A.png/pk8jWgS1NrI4eGF5jDQvBMFo_VkWhEgDDKxxHmfl7zw"
            },


            {
                name: "孙尚香",
                url: "source/孙尚香.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AACK_QY1TTNO2Stt8fwcIJD6Tyqny5b4NgAq9tZGQxnBzA/12/145767243/png/1024x768/3/1375772400/0/2/%E5%AD%99%E5%B0%9A%E9%A6%99.png/XWz6TZcaxUeW1abLXU8YFslftVt3ttm_5V0qoKTZ51k"
            },


            {
                name: "孙权",
                url: "source/孙权.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AABhfYHp0xGtXuVqrEU1o1lmsaurTiRglSG0iGNZUP7DKw/12/145767243/png/1024x768/3/1375772400/0/2/%E5%AD%99%E6%9D%83.png/9bhXFTHVJurfUIbn5AJmt1b-wVUbL7oo93CJfCgrvGM"
            },


            {
                name: "孙策",
                url: "source/孙策.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAAbfmFgrpzlXlA_Hl--QQOPoLcvMDejvtNfDQu6yiH3Yw/12/145767243/png/1024x768/3/1375772400/0/2/%E5%AD%99%E7%AD%96.png/9SWq7TEoVfXQBuPk9fShog8hiDRWj5l-qX6iI0fUwQs"
            },


            {
                name: "孟获",
                url: "source/孟获.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AAA9CRA9X3D9AQQLbHbVLpmbq8RQBnZ3GqvrMezUNpUJlg/12/145767243/png/1024x768/3/1375772400/0/2/%E5%AD%9F%E8%8E%B7.png/pXCDfiexMOd1Jyn4PDpYtmC0e4v38gorYNvje3HSN0c"
            },


            {
                name: "小乔",
                url: "source/小乔.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAC02IX0LbsFiIn96gq1WU9AJjtZ7KU56jTIgybrw5kUeQ/12/145767243/png/1024x768/3/1375772400/0/2/%E5%B0%8F%E4%B9%94.png/VtPPGc7y6Z0Qs-8xy_wARjAGIQVYCGVOXlqTNKgvEIY"
            },


            {
                name: "左慈",
                url: "source/左慈.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AAA66ugGkjsOiF2zh0-zZSVZfMMLzCnpEu_ILvGqWveF_A/12/145767243/png/1024x768/3/1375772400/0/2/%E5%B7%A6%E6%85%88.png/L7qlsGFP--moXOSpUNmoC5eRztv5eKKuz3xOSC1e6Wg"
            },


            {
                name: "庞德",
                url: "source/庞德.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAAM8FuoN_FkgGWm1CHPdNuskTMv-BBi1f0L9BAgIio6sQ/12/145767243/png/1024x768/3/1375772400/0/2/%E5%BA%9E%E5%BE%B7.png/ry2mQtF6LgtjfeRzLm6jV7RgDSGhxbcCXV9C-cXYD4k"
            },


            {
                name: "庞统",
                url: "source/庞统.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AACWVm1kk_Z7CvEsDWb1MLYe34E9KNAg4MMhj51cpWfTJg/12/145767243/png/1024x768/3/1375772400/0/2/%E5%BA%9E%E7%BB%9F.png/5Jqls3n_2GLU1WeYR0g7fMTErUGCKVawoxuhc3IW_1Y"
            },


            {
                name: "廖化",
                url: "source/廖化.jpg",
                health: 4,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AAD6H7iOIJxz9ifu2G5AUHU2F7bdabntah5cHBERLPfvQQ/12/145767243/jpeg/2048x1536/3/1375772400/0/2/%E5%BB%96%E5%8C%96.jpg/UJn0ImML9kcKB0uie-KW5_-qdyQrWOsgMLWUpokbJbg"
            },


            {
                name: "张昭&张纮",
                url: "source/张昭&张纮.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AAC7lDvTAX7bJ_sVueZ4dsA5L2neSUaJKyRi0eZsCeAGTg/12/145767243/png/2048x1536/3/1375772400/0/2/%E5%BC%A0%E6%98%AD%26%E5%BC%A0%E7%BA%AE.png/PPXSqFi2d22fCgiYeczU-stW5hJGKrobKkmT8z9qAaA"
            },


            {
                name: "张春华",
                url: "source/张春华.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AADYCFE6RdZf691NABM76OJlMs5-pZF9Ak3JL_G1lI_jHg/12/145767243/png/1024x768/3/1375776000/0/2/%E5%BC%A0%E6%98%A5%E5%8D%8E.png/gf8u7RPCbUPPO64GNe56Bmq7TjtYNdUf1HBKmkKikfs"
            },


            {
                name: "张角",
                url: "source/张角.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAAsmQQTnUq59S-SttqHkPn_b1CRwzBM0mw0gxgwm5ZmXg/12/145767243/png/1024x768/3/1375776000/0/2/%E5%BC%A0%E8%A7%92.png/vYSKsId_giv7OSVFyboLcOtuglA_OsJHY_IAQ7_4c6A"
            },


            {
                name: "张辽",
                url: "source/张辽.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAC8RN0RywcoqooVh3HxgOkiQDJ5ttdfH3aNcu-ePEJ_pg/12/145767243/png/1024x768/3/1375776000/0/2/%E5%BC%A0%E8%BE%BD.png/_QJ2XfmEYBMDQBocqVM7tUJZ1vMbom-GGV4Z1pqEY9c"
            },


            {
                name: "张颌",
                url: "source/张颌.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AACxigncwVryZDEt4Ve4bdnOWau4673v3jBcxS57J-Zx1g/12/145767243/png/1024x768/3/1375776000/0/2/%E5%BC%A0%E9%A2%8C.png/GTf8kYPO0zRl0acJgdmHcUdhjh0GvIpPIspiI_YpV8Q"
            },


            {
                name: "张飞",
                url: "source/张飞.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAATHREdDE1RbO2ftDxpOAD51BlnmrOph5pva6euqpl74A/12/145767243/png/1024x768/3/1375776000/0/2/%E5%BC%A0%E9%A3%9E.png/BUBO6hCnuDd5T8aMu5FNnLhr3XF4TXqVLR9iR9DhAs8"
            },


            {
                name: "徐庶",
                url: "source/徐庶.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AABQJ31CTXo0EE1dQAhLuSNC7ZueRqGH4fWVkk9HoOB11A/12/145767243/png/1024x768/3/1375776000/0/2/%E5%BE%90%E5%BA%B6.png/INssqZgBwLUa1iqdVpcknu_uQu5NmAljwSrbcP16FBY"
            },


            {
                name: "徐晃",
                url: "source/徐晃.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AAAB2EjH0TITWUf09LNZltI3XUtqNCkQwLA6_lhmewR6-A/12/145767243/png/1024x768/3/1375776000/0/2/%E5%BE%90%E6%99%83.png/P1xsuhlu9smJbDGeMJN7rJaCWgI6vprVg-71Go-qNE4"
            },


            {
                name: "徐盛",
                url: "source/徐盛.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AADKQrrdsmOJD9NFzpZEsQiHjXjpuu4IPPQJn494wcKkOg/12/145767243/png/1024x768/3/1375776000/0/2/%E5%BE%90%E7%9B%9B.png/JfWxPP_wZR5wOyvto3aYTW_1Nlu_WSxCesgTzPceJ38"
            },


            {
                name: "曹丕",
                url: "source/曹丕.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AAAcSoVFZoNwSIc9vP1wKPcJ8BfA565T9D67hZxh4CZfqg/12/145767243/png/1024x768/3/1375776000/0/2/%E6%9B%B9%E4%B8%95.png/AGhAtqfLnVhV3mabiWgRfzNWmXok2ZYV_Q7lxUpodSE"
            },


            {
                name: "曹仁",
                url: "source/曹仁.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAC0geNTU1y0NL6boQIEuWBgN8c0wCd8ZHCMVzVuhWxvXw/12/145767243/png/1024x768/3/1375776000/0/2/%E6%9B%B9%E4%BB%81.png/9gQGhtuSLOEIxOPPl7qGUAdocG5LPrEEVJ_bBqbMKwI"
            },


            {
                name: "曹彰",
                url: "source/曹彰.jpg",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAATEJ4FDK0TOi3DQzlCRUIcbIJvnEuUBJtw9xQA5KAxTw/12/145767243/jpeg/2048x1536/3/1375776000/0/2/%E6%9B%B9%E5%BD%B0.jpg/9xaBrlk_xWUdhERjQnRdm1rr7z_EmuyKjCt62W1Dkpg"
            },


            {
                name: "曹操",
                url: "source/曹操.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AACGrak7IKMX3fDqVPa8200xRBYLrNglIZpxCiM713bhKw/12/145767243/png/1024x768/3/1375776000/0/2/%E6%9B%B9%E6%93%8D.png/5pgUQOm5e9rB7TIeAcD2iFKlD2zWkK9EuTRpiIq7shk"
            },


            {
                name: "曹植",
                url: "source/曹植.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAAmdaDg8ELsA-uESg5EYwhk3mmFAipIchdY_pfo2Ai8PA/12/145767243/png/1024x768/3/1375776000/0/2/%E6%9B%B9%E6%A4%8D.png/2DujYz0ilNB0DcFlZATyNd5OMtwuj9MiAjU5cYNpkSk"
            },


            {
                name: "步练师",
                url: "source/步练师.jpg",
                health: 3,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AACGxOkUxDdODd9kYCA504roZzU6Da_tId9Pd_8wOl0DbQ/12/145767243/jpeg/2048x1536/3/1375776000/0/2/%E6%AD%A5%E7%BB%83%E5%B8%88.jpg/7tuLQ5WatosXEQntr-7ORwO_EQcIcjc-xUl3-DlZEpA"
            },


            {
                name: "法正",
                url: "source/法正.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AAAvdxsrvAS8BCZa65IrPUkxq16BQ3mAesJDsWTUkQqQBg/12/145767243/png/1024x768/3/1375776000/0/2/%E6%B3%95%E6%AD%A3.png/d2DrClIGdwy8lHFjlIWOVNsdIyUCxyn2UXRuLJHz-o0"
            },


            {
                name: "火诸葛亮",
                url: "source/火诸葛亮.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAD-j6lTiNhfpMpy-M1O4hGVNOL36V4nNPmmtywKrSwX8A/12/145767243/png/1024x768/3/1375776000/0/2/%E7%81%AB%E8%AF%B8%E8%91%9B%E4%BA%AE.png/MGhTY5XVhuujCvn_gxfOZronIdjkg6auT54cstJ20lI"
            },


            {
                name: "王异",
                url: "source/王异.jpg",
                health: 3,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AACDHGvn_ImMEMpmBTFWw3Heiavq9f8pJ1z299EEFCkhLw/12/145767243/jpeg/2048x1536/3/1375776000/0/2/%E7%8E%8B%E5%BC%82.jpg/xAwsIw3xN1f5kAxUPIEVC-0AIAVu2dfVU8k2MbH633M"
            },


            {
                name: "甄姬",
                url: "source/甄姬.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AADgQ8ptnFpQNn2XVP-saWn1EPWWtpv_yJwchqT7-HNTLQ/12/145767243/png/1024x768/3/1375776000/0/2/%E7%94%84%E5%A7%AC.png/BeqRD492y9IBVCSgi1zCay6K7ln9LbeG2zCUxPzgjnA"
            },


            {
                name: "甘宁",
                url: "source/甘宁.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AABz7BwHSoqCwJ_SD8UmddUlB7hXfI5hlQ7rBmvDSsv09Q/12/145767243/png/2048x1536/3/1375776000/0/2/%E7%94%98%E5%AE%81.png/wxv69pEasp7umnFZ3ICdXbci-v0okv5k0jTZBoTbf88"
            },


            {
                name: "祝融",
                url: "source/祝融.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AADBO9C9yZxEJbnF3PwJkG4vbP-iq92tV6pCpVt-iOYCpQ/12/145767243/png/1024x768/3/1375776000/0/2/%E7%A5%9D%E8%9E%8D.png/2qHKOV7WP1mDM7iz8vM8lXbSWcu16pvHf1N8xMs4wVo"
            },


            {
                name: "神关羽",
                url: "source/神关羽.png",
                health: 5,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAAGv88TtF8gmvPZT76lbHL5sNwsA8TMXFsnatOl3pc20g/12/145767243/png/2048x1536/3/1375776000/0/2/%E7%A5%9E%E5%85%B3%E7%BE%BD.png/lZJjzFbidcfh8FOw7EpnmFK4rdvZjkGhHOmjtqGy4v0"
            },


            {
                name: "神司马懿",
                url: "source/神司马懿.png",
                health: 3,
                available: false,
                remoteURL:"https://photos-3.dropbox.com/t/0/AABPtlgK2PxOZmTfuhviau5x3HgFbZGOkMRrSi2AttApUw/12/145767243/png/1024x768/3/1375776000/0/2/%E7%A5%9E%E5%8F%B8%E9%A9%AC%E6%87%BF.png/CaFkYZZS2wn8C_wPnp_fbNgJzDfk9xF7yuE4IzqS3LQ"
            },


            {
                name: "神吕布",
                url: "source/神吕布.png",
                health: 4,
                available: false,
                remoteURL:"https://photos-3.dropbox.com/t/0/AAAtXjLps4htMIokxjWFb3MMizagZdG-ytFQqWO4EhLEzA/12/145767243/png/2048x1536/3/1375776000/0/2/%E7%A5%9E%E5%90%95%E5%B8%83.png/_G4N7hMMKbnGtgBkrGqDdmobUp8mfs5Wd1NgrV7Fqkk"
            },


            {
                name: "神吕蒙",
                url: "source/神吕蒙.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AAC8jePe-3FXgi9yo7JBZkWr_sckc752eNWC501v22dfNA/12/145767243/png/1024x768/3/1375776000/0/2/%E7%A5%9E%E5%90%95%E8%92%99.png/u_Jh7K6vybDe6YN4jGDgV3KnEWK47_DlGXFRfyrqoZA"
            },


            {
                name: "神周瑜",
                url: "source/神周瑜.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAAlOmCCJtRpQYTFMohX6KI_gnw5cvKfAi5u85yfqR5e8g/12/145767243/png/2048x1536/3/1375776000/0/2/%E7%A5%9E%E5%91%A8%E7%91%9C.png/oBUu20k2Aj0c_ASIyf0Qr4t_p2E2gDwMVLkqwVno5K0"
            },


            {
                name: "神曹操",
                url: "source/神曹操.png",
                health: 3,
                available: false,
                remoteURL:"https://photos-2.dropbox.com/t/0/AAB4DH3gyXYv37y2Q3zvsHTO3Awxr3XBv4oVInXefp_t6w/12/145767243/png/1024x768/3/1375776000/0/2/%E7%A5%9E%E6%9B%B9%E6%93%8D.png/ws-iMpSjYnnEf3PVEevZ2IYed5vM86PYtBlR0l_boXI"
            },


            {
                name: "神诸葛亮",
                url: "source/神诸葛亮.png",
                health: 3,
                available: false,
                remoteURL:"https://photos-3.dropbox.com/t/0/AAAj2-u4589Z5hJDIxjGeBlXhrlajKWkAxpvPJntW-E8QQ/12/145767243/png/1024x768/3/1375776000/0/2/%E7%A5%9E%E8%AF%B8%E8%91%9B%E4%BA%AE.png/Ne_rO4xA1GLOvCqfBX2pnn2wSXPoc9Fe41tJoFwhN-E"
            },


            {
                name: "神赵云",
                url: "source/神赵云.png",
                health: 2,
                available: false,
                remoteURL:"https://photos-3.dropbox.com/t/0/AACd5SyQOABsLGD9l-dQuXciwnE1TnaobAjLTR9UnbGk-A/12/145767243/png/1024x768/3/1375776000/0/2/%E7%A5%9E%E8%B5%B5%E4%BA%91.png/qSJTUmE6EnXoQsO8X4qS7HGwWGfGHVqkPMt1pWNLP3I"
            },


            {
                name: "程普",
                url: "source/程普.jpg",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAA30DVVwsgIc_cKDGtOcPVRX8Wqe7vnsSVvCG7cwo4a1A/12/145767243/jpeg/1024x768/3/1375776000/0/2/%E7%A8%8B%E6%99%AE.jpg/XQtxQXByaJFLb-4fGwDjC5mh4gd7rOy72UkGNIM-dZ8"
            },


            {
                name: "荀彧",
                url: "source/荀彧.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AACf0V_wr8dqm-HaOcGTSNMs8tZwPihnSLSTrkc3t5Imig/12/145767243/png/1024x768/3/1375776000/0/2/%E8%8D%80%E5%BD%A7.png/g1lmZXUDr9g5s6o9js_EHYuqBFQs02RX-Bw8Z-dCUtU"
            },


            {
                name: "荀攸",
                url: "source/荀攸.jpg",
                health: 3,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAA_x9JjLjqmAsqbjlBC1wNFcwI1kLXUldADWpGjioOJjg/12/145767243/jpeg/2048x1536/3/1375776000/0/2/%E8%8D%80%E6%94%B8.jpg/H_tlKWTGcqo8vmjcuduJj_Cp2wg9dy_xOPHLe8cOhEI"
            },


            {
                name: "董卓",
                url: "source/董卓.png",
                health: 8,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AADJKZzc7xm9fuJFKxa98phBybTxCXvWu5b0kG8xQ94AIw/12/145767243/png/1024x768/3/1375776000/0/2/%E8%91%A3%E5%8D%93.png/s2kAm1jTvUunEBSVIFhhu-2OyORVEsHmoURHXHNaT9M"
            },


            {
                name: "蔡文姬",
                url: "source/蔡文姬.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AACXemQrywl1GW8jtzcRdfroSBTbgD2BQOCoSKwb7iv0uQ/12/145767243/png/1024x768/3/1375776000/0/2/%E8%94%A1%E6%96%87%E5%A7%AC.png/p4iy-tT3ZBUR_GTbM3OZxhUT7k7SAf56XzUwXPhNV6c"
            },


            {
                name: "袁绍",
                url: "source/袁绍.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AABgHpnJMiTDibnKdN0ugQDeMB_fJy9xuKC5y6yCYqXQIQ/12/145767243/png/1024x768/3/1375776000/0/2/%E8%A2%81%E7%BB%8D.png/5Ixt-xTWvNl2KIxWLexX4x6GbMESZZs_HGJ6kr4OzUs"
            },


            {
                name: "许褚",
                url: "source/许褚.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AACjgchphWFwIO05jr-WCERKMm9Gt0RY0XZBX43ZNS9QkA/12/145767243/png/1024x768/3/1375776000/0/2/%E8%AE%B8%E8%A4%9A.png/BuA4bPvkzMMQt1spxEXECEyWasMY4yUv1HyvzBeoFLM"
            },


            {
                name: "诸葛亮",
                url: "source/诸葛亮.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AAAaN9ekvlGpirmNUjmN83dlXXhlpzrSD0mW9XcorKJY2g/12/145767243/png/1024x768/3/1375776000/0/2/%E8%AF%B8%E8%91%9B%E4%BA%AE.png/xpG6V3GX3kQs4KmQLcwvnXOyHdo8lv0cwfjqx1acMaY"
            },


            {
                name: "貂蝉",
                url: "source/貂蝉.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAAk3GuhZ0exYRvQ--RK_xtgzmZICyNhTs3xTeN5zYHUJQ/12/145767243/png/1024x768/3/1375776000/0/2/%E8%B2%82%E8%9D%89.png/50PNGccSoz34TfPZPQWWwAsY2JrDiovXysx4PHcln-U"
            },


            {
                name: "贾诩",
                url: "source/贾诩.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AABeAIhiaU0mNDmWfVcCylo_X0YLg0canIEWWi6e5iAiMA/12/145767243/png/1024x768/3/1375776000/0/2/%E8%B4%BE%E8%AF%A9.png/CltnBfY_qTMMcnj5iMTUFhwXLrVCsHr30uISvCVJaFQ"
            },


            {
                name: "赵云",
                url: "source/赵云.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AABvqusbP3vxwjWAR83uzPDAr8HNcSsqfK_bjdVHsvZ4Zw/12/145767243/png/1024x768/3/1375776000/0/2/%E8%B5%B5%E4%BA%91.png/d6RwhDNiDUF-FHTkTLz2pjxP5Tmzd-nSx8V3d3iolGQ"
            },


            {
                name: "邓艾",
                url: "source/邓艾.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAA025gudok9Jr9db6NL30C8-iD8aYMNEMwMx5dgSKQCkQ/12/145767243/png/1024x768/3/1375776000/0/2/%E9%82%93%E8%89%BE.png/pi9XgZtEheo7ZpJWy6hJtQoqgzJilf7CUy9bT2ZtuJk"
            },


            {
                name: "郭嘉",
                url: "source/郭嘉.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AAAiCPMLMgMrlGYr_IcmukKeyqJYUVvttMhwhxMkI7NcAQ/12/145767243/png/1024x768/3/1375776000/0/2/%E9%83%AD%E5%98%89.png/U9g_nDsk0_55PthtEHuleeskE-m764XmoD25hTluJq4"
            },


            {
                name: "钟会",
                url: "source/钟会.jpg",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAD21apWdCyGIypTsTmzEUwvv2S9so4dJAED2kbuipyREw/12/145767243/jpeg/1024x768/3/1375776000/0/2/%E9%92%9F%E4%BC%9A.jpg/5LJQms6lArIu4LJXEBSxM_vxdDg1a7VX8Wqd17-i8EY"
            },


            {
                name: "陆逊",
                url: "source/陆逊.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AADELwBHQxBYhzIkNUcCOTTPfapq2ExKpVyuRXmZhTQhGQ/12/145767243/png/1024x768/3/1375776000/0/2/%E9%99%86%E9%80%8A.png/ugxD_WQOCcIxVo6c3GNb3lMNjYaAT9gE4up12RvYByI"
            },


            {
                name: "陈宫",
                url: "source/陈宫.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AACGR28Sy1aOBpYQ8hdlgP2-8gxkuWmtT7-iWekTuOWiTw/12/145767243/png/2048x1536/3/1375776000/0/2/%E9%99%88%E5%AE%AB.png/gDHPKbqf3wcYOfhA7pU_iiiz3caxl2PMFh0kIQkS-88"
            },


            {
                name: "韩当",
                url: "source/韩当.jpg",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AACqxO13KGMC7WnsDrVaoJG8XvhI3z_FkYMmXNJurIPnWA/12/145767243/jpeg/1024x768/3/1375776000/0/2/%E9%9F%A9%E5%BD%93.jpg/JjC7UQmr5wdQH9R9S_QJBcBoMRLnc-Fszh7tmt8thfQ"
            },


            {
                name: "颜良&文丑",
                url: "source/颜良&文丑.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AACTnYLjaTg9eOd0D-eCsfpm9NRyxJAsuCUtZ-7W5HHyFw/12/145767243/png/1024x768/3/1375776000/0/2/%E9%A2%9C%E8%89%AF%26%E6%96%87%E4%B8%91.png/EOclmsOPHPV0UaK4OHZWZ3AYtbYJQBMA6nu8BPsDx9o"
            },


            {
                name: "马岱",
                url: "source/马岱.jpg",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAAaz9OGmdrPxJM2Zrwu-vfeQrg4Ine1ni-99XnrPoYiVg/12/145767243/jpeg/1024x768/3/1375776000/0/2/%E9%A9%AC%E5%B2%B1.jpg/FsvAPkFLmyDq5VjDKKOUjmdejQPhT7R-8_Muw34AKJw"
            },


            {
                name: "马谡",
                url: "source/马谡.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AACZKcKxbpqIHE_geXcfwIVhSQS_K2nrU3riRMgRY3XLdw/12/145767243/png/1024x768/3/1375776000/0/2/%E9%A9%AC%E8%B0%A1.png/BqaspGH-OlJzOYSuiFZyFTX5eHUCzjngnBthbNvJYEU"
            },


            {
                name: "马超",
                url: "source/马超.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AACGiwzc8UIbp4kziuogZxRYLBIMGzJ5qGCIXAYqfcyn2A/12/145767243/png/1024x768/3/1375776000/0/2/%E9%A9%AC%E8%B6%85.png/MIxRRWVuxsO04jbbkjOBCPmsGFn_BgXgUJjLcNY0iVc"
            },


            {
                name: "高顺",
                url: "source/高顺.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AADo7og7io1Bc8rSZ97bQsVr-oRRabs2A6ynqxrnM1uhhQ/12/145767243/png/1024x768/3/1375776000/0/2/%E9%AB%98%E9%A1%BA.png/wHaRz4e7LFJuTIHKoOrlJ1JIbkY-xuaxBh1HoW_yLqw"
            },


            {
                name: "魏延",
                url: "source/魏延.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAAKuH5fOmfQk0iWHmu6Xd34meCyPKa3EEgBrOfT2wz8Zw/12/145767243/png/1024x768/3/1375776000/0/2/%E9%AD%8F%E5%BB%B6.png/xWa_R65jijlzHXjtu0jCFLsDRCGqPAPzhIZDQ6T7AAY"
            },


            {
                name: "鲁肃",
                url: "source/鲁肃.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AABPjlOssY5Nh6IA5A8xyXV5xBT6fEuFCtk-NPIowFGkEA/12/145767243/png/1024x768/3/1375776000/0/2/%E9%B2%81%E8%82%83.png/-J7kOPFR0xY9I5fZlJMHeMChXO3L-Db_F7Ov12CFNKc"
            },


            {
                name: "黄忠",
                url: "source/黄忠.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AACAQAC0iaPfIZfkQGzyFa4H1Xv0KyskXyTmSeUqos-dfg/12/145767243/png/1024x768/3/1375776000/0/2/%E9%BB%84%E5%BF%A0.png/4R_Y4-UAD62Jg4I-X0VqpjIpCXRHAgo4fKmqEOgoGSY"
            },


            {
                name: "黄月英",
                url: "source/黄月英.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AABjCrw8VBRIbsg4C5lzFzXzeaJ0AcuOdtnGxhExfiaviw/12/145767243/png/1024x768/3/1375776000/0/2/%E9%BB%84%E6%9C%88%E8%8B%B1.png/UIFm7I3X9mGAmMk-Ole1-XZeSBaG_CehP7--cQBrq3A"
            },


            {
                name: "黄盖",
                url: "source/黄盖.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAAPfkX0JdpUOSbwZBO5rOm2Uj9FiF7VZHe0QvhPiyJEAA/12/145767243/png/1024x768/3/1375776000/0/2/%E9%BB%84%E7%9B%96.png/ZYZRo4ACPV4FbjlBnixMC7Neywl1QlnV4_VVpLFrXiY"
            },


            {
                name: "sp公孙瓒",
                url: "source/sp公孙瓒.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAD1aVWnE9XI9yVhjyzttH7hDfdIzwmzJqsub98LItDffQ/12/145767243/png/2048x1536/3/1375776000/0/2/sp%E5%85%AC%E5%AD%99%E7%93%92.png/E_J7JUI7HLiABVLm9J__wjVD2MJukLN0memzzdcGDrk"
            },


            {
                name: "sp袁术",
                url: "source/sp袁术.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AABt3kOYNkEuKIZU4875bcYQdecFK35-v2WrgTsgEgPq9w/12/145767243/png/1024x768/3/1375776000/0/2/sp%E8%A2%81%E6%9C%AF.png/0LcPm4Q2AXAchKBwAoSk-gLmOT1B7DEzMQWX7t2DjKg"
            },


            {
                name: "sp伏完",
                url: "source/sp伏完.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAA9VFGa7T5H-M4iaH5FtZeBSPzNzxQ489lX5RRhqVzvSg/12/145767243/png/1024x768/3/1375776000/0/2/sp%E4%BC%8F%E5%AE%8C.png/SGoaqmWP1CEWxE03MhSSnxS98ZfKGaD4IVQbnkTY5hA"
            },


            {
                name: "sp关羽",
                url: "source/sp关羽.png",
                health: 4,
                available: false,
                remoteURL:"https://photos-3.dropbox.com/t/0/AAAu5D9ox9Qn6C2zvhfeRoCeYUZ1NT-0KQk2dRJES63GDw/12/145767243/png/1024x768/3/1375776000/0/2/sp%E5%85%B3%E7%BE%BD.png/mANHbDhMFtlU75iNBhrVz8ziad4yZD2pa3AUNQdee5Y"
            },


            {
                name: "sp关银萍",
                url: "source/sp关银萍.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAAdGPVKMjLTDWx1qWvwWBqYU26XTodLhc0dIKO3nsS0sA/12/145767243/png/1024x768/3/1375776000/0/2/sp%E5%85%B3%E9%93%B6%E8%90%8D.png/AXjkXEejzBVK5VoL1jnky1OjyuJepTjwqyq4BErcU_8"
            },


            {
                name: "sp刘协",
                url: "source/sp刘协.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AADaK5KXR6cC9R-KqQPPboruqj7Yl5NTgYW1ZIyd0uEMhw/12/145767243/png/2048x1536/3/1375776000/0/2/sp%E5%88%98%E5%8D%8F.png/eREsvRXcm1p4zeTmBnqRkrDP0oNWpAHBbgE1IGKQhZk"
            },


            {
                name: "sp刘备",
                url: "source/sp刘备.jpg",
                health: 3,
                available: false,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAB1nx0RRphmSJLut5vcmvfuCtWFlgQbqvLLQa6ySuG4Bw/12/145767243/jpeg/1024x768/3/1375776000/0/2/sp%E5%88%98%E5%A4%87.jpg/nKXz0nFwaB_voxenClGYGCYT-EUO38ZEuWUHd-kCVWM"
            },


            {
                name: "sp吕蒙",
                url: "source/sp吕蒙.jpg",
                health: 3,
                available: false,
                remoteURL:"https://photos-6.dropbox.com/t/0/AABV5X6x_qqayilrkbh1OSUkngYQ1lbIOHHrP5mgfVRAdw/12/145767243/jpeg/1024x768/3/1375776000/0/2/sp%E5%90%95%E8%92%99.jpg/40i_iHGAIrKqCYZHMLiWJeVeIELvxc5O_-QAkBzpC60"
            },


            {
                name: "sp夏侯淳",
                url: "source/sp夏侯淳.jpg",
                health: 4,
                available: false,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAApz-AWCS-AkZ4XlzjBp8NB_B_VSDRCvr0vb54OC7oUtg/12/145767243/jpeg/1024x768/3/1375776000/0/2/sp%E5%A4%8F%E4%BE%AF%E6%B7%B3.jpg/PfkjNVPdsUPoTMHI3gkaen7SJ9StvHxHVREzd4gXTp4"
            },


            {
                name: "sp夏侯霸",
                url: "source/sp夏侯霸.png",
                health: 4,
                available: false,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAACbqU2pgj7yxTfs3v99CmV6IA3Pb4U9DK-bGlh1KEdag/12/145767243/png/1024x768/3/1375776000/0/2/sp%E5%A4%8F%E4%BE%AF%E9%9C%B8.png/CjDtF9n60NiJLqLIDI9Qrk59XDFGjsM9rUHDVtkVZTQ"
            },


            {
                name: "sp大乔",
                url: "source/sp大乔.jpg",
                health: 3,
                available: false,
                remoteURL:"https://photos-4.dropbox.com/t/0/AACfFk_iojxHWKnZMCY17Hd5KnuYHTrP2Jaq8VH-SgS0tA/12/145767243/jpeg/1024x768/3/1375772400/0/2/sp%E5%A4%A7%E4%B9%94.jpg/lMjM88Ur4rbdBv6jtuFU8e9GBv6h2WayCkXDtDfPTPU"
            },


            {
                name: "sp大乔小乔",
                url: "source/sp大乔小乔.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AACuZNFyo2DfixE2Jse37eoy4usnM-Q1H2fC9UfKa_W3HA/12/145767243/png/1024x768/3/1375772400/0/2/sp%E5%A4%A7%E4%B9%94%E5%B0%8F%E4%B9%94.png/hSHEC7qJNHEjfGnPHhgQ0mrdI7rUzpUOQ5lastAsQHs"
            },


            {
                name: "sp孙尚香",
                url: "source/sp孙尚香.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AABDHP7VM6s3b_Z395i7CBnHpN9vZioH55TQGfah6UOudw/12/145767243/png/1024x768/3/1375772400/0/2/sp%E5%AD%99%E5%B0%9A%E9%A6%99.png/dxGLV_1okaUirumJiPd_xQCPRgQJy6XI8wvp-oPt0Rg"
            },


            {
                name: "sp庞德",
                url: "source/sp庞德.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AAD7sIZ6aK7us9BudC9LA3ltjsAxcfzqWPqOYGFceO2fJg/12/145767243/png/1024x768/3/1375772400/0/2/sp%E5%BA%9E%E5%BE%B7.png/8G_dR_gtuy-XWMTsrZGcCguxZIvNiTgUQe_lrGkzYMk"
            },


            {
                name: "sp庞统",
                url: "source/sp庞统.jpg",
                health: 3,
                available: false,
                remoteURL:"https://photos-2.dropbox.com/t/0/AABTunUbx9JlIFz2VsmYwuXjpxX0PFGVLGMeogNOcWANEA/12/145767243/jpeg/2048x1536/3/1375772400/0/2/sp%E5%BA%9E%E7%BB%9F.jpg/6OrA1xcmOc456MP4emJPr96Nb2xwCJCS5cN5iBoXxlE"
            },


            {
                name: "sp张飞",
                url: "source/sp张飞.jpg",
                health: 4,
                available: false,
                remoteURL:"https://photos-1.dropbox.com/t/0/AACzCEfSXC2ahqufpqm4t5rWHeAS-AL65yCPe0eCju43-A/12/145767243/jpeg/1024x768/3/1375772400/0/2/sp%E5%BC%A0%E9%A3%9E.jpg/rg48SXYzRgvcIP1fWPsNnk_Q_vNNHGdddI8CTS3aGNA"
            },


            {
                name: "sp曹仁",
                url: "source/sp曹仁.jpg",
                health: 4,
                available: true,
                remoteURL:"https://photos-6.dropbox.com/t/0/AADk7t55DZkGZdVWjQ-pSmFXDkt_iQfwp1wZKMhT0Dbpaw/12/145767243/jpeg/2048x1536/3/1375776000/0/2/sp%E6%9B%B9%E4%BB%81.jpg/FT6nMqy_HW2hAgoQa-n9peelFLhUj3YFQR6anJd6y1A"
            },


            {
                name: "sp曹洪",
                url: "source/sp曹洪.jpg",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAC8MY_65TtFMl4f1QxRe9fCh-j7NZJt-W3QNvQVcll-fQ/12/145767243/jpeg/1024x768/3/1375772400/0/2/sp%E6%9B%B9%E6%B4%AA.jpg/2hMyEond9ogOoj4_iWU7zaQ5LgDJ-xKRrhr3MEXVv-Y"
            },


            {
                name: "sp灵雎",
                url: "source/sp灵雎.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AAAuRBPgOIJ5dsI6IUq9C0cuOp6Q5lQfcdX3rXulmArCuQ/12/145767243/png/1024x768/3/1375772400/0/2/sp%E7%81%B5%E9%9B%8E.png/Ah-rRR93_KDtQ9ajWOEziiA8oUI6s22BmTRSKNmmj-I"
            },


            {
                name: "sp甘宁",
                url: "source/sp甘宁.jpg",
                health: 4,
                available: false,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAB9UIhSavqkt4MM6c-PUNR5HmTUFupGJCjZX5v_QalRXg/12/145767243/jpeg/2048x1536/3/1375772400/0/2/sp%E7%94%98%E5%AE%81.jpg/bxuuvoqdnEYdTsQUBQ68Byn7BHX5mj_N43GgK2dy0Bo"
            },


            {
                name: "sp蔡文姬",
                url: "source/sp蔡文姬.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AAAtes4rYDxsmovZ1BehiBDu7hs4m5w4Yb5tK6S4dLsDKg/12/145767243/png/1024x768/3/1375772400/0/2/sp%E8%94%A1%E6%96%87%E5%A7%AC.png/TUkVHIZMfG_ho9CpqbcLkE2p8QnHn-mcDbNAyMBOoOQ"
            },


            {
                name: "sp袁术",
                url: "source/sp袁术.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAC0Z0oevr09kf1m7q0f4yylW-YMut4d5_zx31weCqhEyw/12/145767243/png/1024x768/3/1375772400/0/2/sp%E8%A2%81%E6%9C%AF.png/0LcPm4Q2AXAchKBwAoSk-gLmOT1B7DEzMQWX7t2DjKg"
            },


            {
                name: "sp貂蝉",
                url: "source/sp貂蝉.jpg",
                health: 3,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AABZqlmgKNvO3WCNF8THr1A2Q00Ljm6yIhPIhDMHfqg2HA/12/145767243/jpeg/2048x1536/3/1375772400/0/2/sp%E8%B2%82%E8%9D%89.jpg/tZFKinBjG-EI2HX_ehWLU8hk5Eb1YU34L2UDMBc6RJo"
            },


            {
                name: "sp贾诩",
                url: "source/sp贾诩.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AADJc90_TSaz0T16bKX9XCeRNXAucwokdlrWHy9XB0ojnw/12/145767243/png/2048x1536/3/1375772400/0/2/sp%E8%B4%BE%E8%AF%A9.png/MCc3O4sOKBWF71hfHhc21vcQEsPoY5w7duQ23aSsRJU"
            },


            {
                name: "sp赵云",
                url: "source/sp赵云.jpg",
                health: 3,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAAUGK5Yt1-kylmLB3wZKclAbsXEemF9zTVkAzk04qSbpQ/12/145767243/jpeg/2048x1536/3/1375772400/0/2/sp%E8%B5%B5%E4%BA%91.jpg/vSWDQMrRtx5yK8b_O1sHWen7Skpvm_N5A7mbFGX5Wyw"
            },


            {
                name: "sp陈琳",
                url: "source/sp陈琳.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AABKpPyUCzR9HJnYcPuSeI3OZ-s3L5BdRdoq9_5sWMv5-A/12/145767243/png/1024x768/3/1375772400/0/2/sp%E9%99%88%E7%90%B3.png/-aUmMXjoCAtpUh0EwHt86LdBulObzm8Lr53UvfXUZwc"
            },


            {
                name: "sp马超",
                url: "source/sp马超.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AABlwEcue_M9eQAItRnQb7oZG0F6-VHOTnbbIBhy02E9gQ/12/145767243/png/1024x768/3/1375772400/0/2/sp%E9%A9%AC%E8%B6%85.png/pzZOLnQ-IUVACMboZfGB9wV5a9-uOmoNq6MsNr1ktbI"
            }
        ]);
    },

    filterMasterHeros: function(){
        return [
            {
                name: "刘备",
                url: "source/刘备.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-3.dropbox.com/t/0/AACKt8qhwlEKst6seX8lMgVaG9Bswi8-iVSK9VbKRTwLEg/12/145767243/png/1024x768/3/1375772400/0/2/%E5%88%98%E5%A4%87.png/knO8_FKUovPihO1QE4hl6HzsTHZ5PBspnPen8JFbVrY"
            },
            {
                name: "刘禅",
                url: "source/刘禅.png",
                health: 3,
                available: true,
                remoteURL:""
            },
            {
                name: "曹操",
                url: "source/曹操.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AACGrak7IKMX3fDqVPa8200xRBYLrNglIZpxCiM713bhKw/12/145767243/png/1024x768/3/1375776000/0/2/%E6%9B%B9%E6%93%8D.png/5pgUQOm5e9rB7TIeAcD2iFKlD2zWkK9EuTRpiIq7shk"
            },
            {
                name: "曹丕",
                url: "source/曹丕.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AAAcSoVFZoNwSIc9vP1wKPcJ8BfA565T9D67hZxh4CZfqg/12/145767243/png/1024x768/3/1375776000/0/2/%E6%9B%B9%E4%B8%95.png/AGhAtqfLnVhV3mabiWgRfzNWmXok2ZYV_Q7lxUpodSE"
            },
            {
                name: "孙权",
                url: "source/孙权.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-2.dropbox.com/t/0/AABhfYHp0xGtXuVqrEU1o1lmsaurTiRglSG0iGNZUP7DKw/12/145767243/png/1024x768/3/1375772400/0/2/%E5%AD%99%E6%9D%83.png/9bhXFTHVJurfUIbn5AJmt1b-wVUbL7oo93CJfCgrvGM"
            },
            {
                name: "孙策",
                url: "source/孙策.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AAAbfmFgrpzlXlA_Hl--QQOPoLcvMDejvtNfDQu6yiH3Yw/12/145767243/png/1024x768/3/1375772400/0/2/%E5%AD%99%E7%AD%96.png/9SWq7TEoVfXQBuPk9fShog8hiDRWj5l-qX6iI0fUwQs"
            },
            {
                name: "张角",
                url: "source/张角.png",
                health: 3,
                available: true,
                remoteURL:"https://photos-4.dropbox.com/t/0/AAAsmQQTnUq59S-SttqHkPn_b1CRwzBM0mw0gxgwm5ZmXg/12/145767243/png/1024x768/3/1375776000/0/2/%E5%BC%A0%E8%A7%92.png/vYSKsId_giv7OSVFyboLcOtuglA_OsJHY_IAQ7_4c6A"
            },
            {
                name: "袁绍",
                url: "source/袁绍.png",
                health: 4,
                available: true,
                remoteURL:"https://photos-5.dropbox.com/t/0/AABgHpnJMiTDibnKdN0ugQDeMB_fJy9xuKC5y6yCYqXQIQ/12/145767243/png/1024x768/3/1375776000/0/2/%E8%A2%81%E7%BB%8D.png/5Ixt-xTWvNl2KIxWLexX4x6GbMESZZs_HGJ6kr4OzUs"
            },
            {
                name: "董卓",
                url: "source/董卓.png",
                health: 8,
                available: true,
                remoteURL:"https://photos-1.dropbox.com/t/0/AADJKZzc7xm9fuJFKxa98phBybTxCXvWu5b0kG8xQ94AIw/12/145767243/png/1024x768/3/1375776000/0/2/%E8%91%A3%E5%8D%93.png/s2kAm1jTvUunEBSVIFhhu-2OyORVEsHmoURHXHNaT9M"
            }
        ]
    }

})
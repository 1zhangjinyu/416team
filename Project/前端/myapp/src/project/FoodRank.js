import React, { Component } from 'react'
import {NavLink, Route, Redirect,useHistory,useLocation,useParams,useRouteMatch,withRouter} from 'react-router-dom';
import './nav.css';
const FoodContent = (props)=>{
    let fruitlist = [
        {name:'草莓',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=394619434,2624198360&fm=26&gp=0.jpg',cal:'32千卡/100克'},
        {name:'西柚',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2969742053,686781073&fm=26&gp=0.jpg',cal:'33千卡/100克'},
        {name:'李子',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2966115348,1281892717&fm=26&gp=0.jpg',cal:'38千卡/100克'},
        {name:'杏',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1779019150,2082713560&fm=26&gp=0.jpg',cal:'38千卡/100克'},
        {name:'西梅',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2853618108,3000122567&fm=26&gp=0.jpg',cal:'42千卡/100克'},
        {name:'柚子',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2800259881,3035227964&fm=26&gp=0.jpg',cal:'42千卡/100克'},
        {name:'桃子',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2901655724,4275457581&fm=26&gp=0.jpg',cal:'42千卡/100克'},
        {name:'橘子',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2329086175,2030525471&fm=26&gp=0.jpg',cal:'44千卡/100克'},
        {name:'芦柑',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2264368987,129300566&fm=26&gp=0.jpg',cal:'44千卡/100克'},
        {name:'葡萄',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3570466292,438438104&fm=26&gp=0.jpg',cal:'45千卡/100克'}
    ];
    let foodlists = [
        {name:'绿豆',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3400318270,3828141011&fm=26&gp=0.jpg',cal:'GI：27.0     '},
        {name:'红豆',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2670531770,2264765062&fm=26&gp=0.jpg',cal:'GI：27.2      '},
        {name:'鹰嘴豆',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2255663966,1167892138&fm=26&gp=0.jpg',cal:'GI：33.0     '},
        {name:'黑麦',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3546075942,1732912599&fm=26&gp=0.jpg',cal:'GI：34.0     '},
        {name:'煮面条',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=941010769,2338655905&fm=26&gp=0.jpg',cal:'GI：41.0     '},
        {name:'小麦',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=348173227,4124531095&fm=26&gp=0.jpg',cal:'GI：41.0      '},
        {name:'意大利面',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1500410310,710462139&fm=26&gp=0.jpg',cal:'GI：49.0    '},
        {name:'山药',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3905961391,1545226503&fm=26&gp=0.jpg',cal:'GI：51.0     '},
        {name:'煮芋头',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3240279597,2524304004&fm=26&gp=0.jpg',cal:'GI：54.0     '},

    ];
    let meatlist = [
        {name:'鸡胸脯肉',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=239251617,1883674972&fm=26&gp=0.jpg',cal:'蛋白质：24.6克/100克'},
        {name:'乌骨鸡',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=684032799,11769698&fm=26&gp=0.jpg',cal:'蛋白质：22.3克/100克'},
        {name:'牛肉',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3542479807,2484944845&fm=26&gp=0.jpg',cal:'蛋白质：22.2克/100克'},
        {name:'牛肉后腿',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=984567304,3191937900&fm=26&gp=0.jpg',cal:'蛋白质：20.9克/100克'},
        {name:'羊肉',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2727588824,4278245853&fm=26&gp=0.jpg',cal:'蛋白质：20.5克/100克'},
        {name:'猪肉',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730172871,1384436179&fm=26&gp=0.jpg',cal:'蛋白质：20.3克/100克'},
        {name:'猪肉里脊',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730172871,1384436179&fm=26&gp=0.jpg',cal:'蛋白质：20.2克/100克'},
        
    ];
    let beanlist = [
        {name:'腐竹',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3406727090,808407987&fm=26&gp=0.jpg',cal:'蛋白质：54.2克/100克'},
        {name:'豆腐皮',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2125773291,3554775761&fm=26&gp=0.jpg',cal:'蛋白质：51.6克/100克'},
        {name:'黑豆',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=295747976,3933955189&fm=26&gp=0.jpg',cal:'蛋白质：36.0克/100克'},
        {name:'黄豆 ',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2188318334,3338319076&fm=26&gp=0.jpg',cal:'蛋白质：35.0克/100克'},
        {name:'青豆',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922278542,130888523&fm=26&gp=0.jpg',cal:'蛋白质：34.5克/100克'},
        {name:'黄豆粉',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3786270859,3849210661&fm=26&gp=0.jpg ',cal:'蛋白质：32.7克/100克'},
        {name:'千张 ',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2198577245,3070709309&fm=26&gp=0.jpg ',cal:'蛋白质：24.5克/100克'},
        {name:'豆腐丝 ',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2424103224,4120387557&fm=26&gp=0.jpg',cal:'蛋白质：21.5克/100克'},
    ];
    let sealist = [
        {name:'鲅鱼',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=146085782,2535234987&fm=26&gp=0.jpg ',cal:'蛋白质：21.2克/100克'},
        {name:'塘水虾',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=448196584,3699684456&fm=26&gp=0.jpg',cal:'蛋白质：21.2克/100克'},
        {name:'比目鱼',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1954091426,1361955806&fm=26&gp=0.jpg',cal:'蛋白质：21.1克/100克'},
        {name:'鳕鱼',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3919851294,3388497957&fm=26&gp=0.jpg ',cal:' 蛋白质：20.4克/100克'},
        {name:'青鱼',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853991680,1964053924&fm=26&gp=0.jpg ',cal:'蛋白质：20.1克/100克'},
        {name:'鲐鱼',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2661184667,1023958248&fm=26&gp=0.jpg ',cal:'蛋白质：19.9克/100克'},
        {name:'沙丁鱼',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2285543831,2292822772&fm=26&gp=0.jpg ',cal:'蛋白质：19.8克/100克'},
        {name:'章鱼',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1219248654,3539247341&fm=26&gp=0.jpg',cal:'蛋白质：18.9克/100克'},
        {name:'龙虾 ',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3185573974,1600610263&fm=26&gp=0.jpg ',cal:'蛋白质：18.9克/100克'},
    ];
    let vegtablelist = [
        {name:'毛豆',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2584367593,2916550210&fm=26&gp=0.jpg',cal:'蛋白质：13.1克/100克'},
        {name:'发芽豆',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3001268411,1681600405&fm=26&gp=0.jpg',cal:'蛋白质：12.4克/100克'},
        {name:'蚕豆',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4003191544,1388347829&fm=26&gp=0.jpg',cal:'蛋白质：8.8克/100克'},
        {name:'豌豆',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3071684356,2223840314&fm=26&gp=0.jpg ',cal:'蛋白质：7.4克/100克'},
        {name:'大蒜',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2092094281,3440816305&fm=26&gp=0.jpg',cal:'蛋白质：5.2克/100克'},
        {name:'豌豆苗',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4256737414,3786098429&fm=26&gp=0.jpg ',cal:'蛋白质：4.8克/100克'},
        {name:'榆钱',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2654353176,1118713525&fm=26&gp=0.jpg ',cal:'蛋白质：4.8克/100克'},
        {name:'黄豆芽',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1867159558,2931791238&fm=26&gp=0.jpg',cal:'蛋白质：4.5克/100克'},
        {name:'菱角',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=820061586,3122165004&fm=26&gp=0.jpg',cal:'蛋白质：4.5克/100克'},
        {name:'冬笋',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1196990676,1497101333&fm=26&gp=0.jpg',cal:'蛋白质：4.1克/100克'},
    ];
    let nutlist = [
        {name:'杏仁',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3852013993,3574612889&fm=26&gp=0.jpg ',cal:'蛋白质：18.5克/100克'},
        {name:'黑芝麻',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3536224870,3894323870&fm=26&gp=0.jpg',cal:'蛋白质：14.0克/100克'},
        {name:'松子',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2851550699,2455544445&fm=26&gp=0.jpg ',cal:'蛋白质：12.4克/100克'},
        {name:'松子仁 ',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1236017843,1476888423&fm=26&gp=0.jpg ',cal:'蛋白质：14.0克/100克'},
        {name:'白芝麻',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3786355703,2726684075&fm=26&gp=0.jpg ',cal:'蛋白质：9.8克/100克'},
        
    ];
    let oillist = [
        {name:'奶粉',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2673545152,45215354&fm=26&gp=0.jpg',cal:'钙：1797.0毫克/100克'},
        {name:'曲拉',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=574663109,3643191999&fm=26&gp=0.jpg',cal:'钙：1217毫克/100克'},
        {name:'奶皮子',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2715258321,1482667895&fm=26&gp=0.jpg ',cal:'钙：818.0毫克/100克'},
        {name:'奶酪',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1418518235,330064634&fm=26&gp=0.jpg',cal:'钙：799.0毫克/100克'},
        {name:'全脂牛奶粉',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2739900061,3881405611&fm=26&gp=0.jpg ',cal:'钙：676.0毫克/100克'},
        {name:'奶豆腐 ',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1248579662,1701326139&fm=26&gp=0.jpg ',cal:'钙：597.0毫克/100克'},
        {name:'酸奶 ',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1509251413,608111738&fm=26&gp=0.jpg ',cal:'钙：140毫克/100克'},
        {name:'牛奶',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3494213905,3940926941&fm=26&gp=0.jpg  ',cal:'钙：107毫克/100克'},
    ];
    let acidlist = [
        {name:'鸡肝',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4182084033,3290256424&fm=26&gp=0.jpg',cal:'叶酸：1172.2微克/100克'},
        {name:'苋菜',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=494874164,1722486042&fm=26&gp=0.jpg  ',cal:'叶酸：419.8微克/100克'},
        {name:'黄豆粉',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3377168375,1237730954&fm=26&gp=0.jpg ',cal:'叶酸：392.2微克/100克'},
        {name:'猪肝',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1010715970,3394302536&fm=26&gp=0.jpg',cal:' 叶酸：353.4微克/100克'},
        {name:'绿苋菜',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1651862471,2254875838&fm=26&gp=0.jpg ',cal:'叶酸：330.6微克/100克'},
        {name:'羊肝 ',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1105633465,2814888277&fm=26&gp=0.jpg ',cal:'叶酸：226.5微克/100克'},
        {name:'黄豆',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3228038477,1406651143&fm=26&gp=0.jpg ',cal:'叶酸：210.1微克/100克'},
        {name:'藜麦',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1142592022,200868630&fm=26&gp=0.jpg ',cal:'叶酸：186.6微克/100克'},
        {name:'黑豆  ',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=427593058,2121156433&fm=26&gp=0.jpg ',cal:'叶酸：186.4微克/100克'},
        {name:'芸豆 ',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1015315986,3189846368&fm=26&gp=0.jpg',cal:'叶酸：152.4微克/100克'},
    ];
    let calist = [
        {name:'荠菜',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=866381561,1388281904&fm=26&gp=0.jpg ',cal:'钙：294毫克/100克'},
        {name:'海带',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2639081406,902202958&fm=26&gp=0.jpg',cal:'钙：241毫克/100克'},
        {name:'芥菜',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1866016437,3588073733&fm=26&gp=0.jpg ',cal:' 钙：230毫克/100克'},
        {name:'油菜 ',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2490556493,1122280537&fm=26&gp=0.jpg',cal:'钙：191毫克/100克'},
        {name:'苋菜',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=494874164,1722486042&fm=26&gp=0.jpg ',cal:'钙：187毫克/100克'},
        {name:'裙带菜 ',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3797911358,2467664890&fm=26&gp=0.jpg',cal:'钙：150毫克/100克'},
        {name:'小白菜  ',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1264846585,1700269493&fm=26&gp=0.jpg ',cal:'钙：117毫克/100克'},
        {name:'菜心',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3829166787,2744931365&fm=26&gp=0.jpg',cal:'钙：96毫克/100克'},
        {name:'红心萝卜 ',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1827625782,2197824465&fm=26&gp=0.jpg ',cal:' 钙：86毫克/100克'},
        {name:'生菜 ',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2349079197,1488994097&fm=26&gp=0.jpg ',cal:'钙：70毫克/100克'},
    ];
    let znlist = [
        {name:'生蚝  ',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2795386845,1521477014&fm=26&gp=0.jpg ',cal:'锌：71.2毫克/100克'},
        {name:'小麦胚粉 ',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3313716080,2575141951&fm=26&gp=0.jpg',cal:'锌：23.4毫克/100克'},
        {name:'蛏干 ',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3897452326,138008537&fm=26&gp=0.jpg',cal:'锌：13.63毫克/100克'},
        {name:'马肉',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2050157657,1963207071&fm=26&gp=0.jpg',cal:'锌：12.26毫克/100克'},
        {name:'羊肚菌',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3496802107,3617414876&fm=26&gp=0.jpg',cal:'锌：12.11毫克/100克'},
        {name:'扇贝  ',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2523234235,146859756&fm=26&gp=0.jpg ',cal:'锌：11.69毫克/100克'},
        {name:'猪胆肝',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3937224135,1532518671&fm=26&gp=0.jpg',cal:'锌：11.25毫克/100克'},
        {name:'鱿鱼',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3784493448,203028503&fm=26&gp=0.jpg',cal:' 锌：11.24毫克/100克'},
        {name:'螺蛳 ',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2834623794,206275875&fm=26&gp=0.jpg',cal:' 锌：10.27毫克/100克'},
        {name:'牡蛎 ',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=110839920,2914409003&fm=26&gp=0.jpg',cal:'锌：9.39毫克/100克'},
    ];
    let felist = [
        {name:'蛏子',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2020097746,2104283843&fm=26&gp=0.jpg ',cal:'铁：33.6毫克/100克'},
        {name:'鸭血',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3856244860,565102269&fm=26&gp=0.jpg ',cal:'铁：30.5毫克/100克'},
        {name:'河蚌 ',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1114101488,2444277190&fm=26&gp=0.jpg ',cal:'铁：26.6毫克/100克'},
        {name:'猪肝  ',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1010715970,3394302536&fm=26&gp=0.jpg ',cal:'铁：23.2毫克/100克'},
        {name:'鸭肝',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2270433326,61411631&fm=26&gp=0.jpg  ',cal:' 铁：23.1毫克/100克'},
        {name:'田螺 ',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2333875455,1120097780&fm=26&gp=0.jpg',cal:'铁：19.7毫克/100克'},
        {name:'牛肉干 ',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=605175474,4141268218&fm=26&gp=0.jpg ',cal:'铁：15.6毫克/100克'},
        {name:'蛤蜊 ',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4133176158,773245002&fm=26&gp=0.jpg',cal:'铁：10.9毫克/100克'},
        {name:'鲍鱼 ',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1533313938,2335106002&fm=26&gp=0.jpg  ',cal:'铁：0.5毫克/100克'},
    ];
    switch(props.match.params.type){
        //水果类
        case 'fruit':
            return (
                fruitlist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'20px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )
        //主食类
        case 'food':
            return (
                foodlists.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                    
                </li>
                )
            )
        //肉蛋类
        case 'meat':
            return (
                meatlist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )

        //豆类
        case 'bean':
            return (
                beanlist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )
        //海鲜类
        case 'sea':
            return (
                sealist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )
        //蔬菜菌藻类
        case 'vegtable':
            return (
                vegtablelist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )
        //坚果类
        case 'nut':
            return (
                nutlist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )
        //乳制品类
        case 'oil':
            return (
                oillist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )
        //高叶酸类
        case 'acid':
            return (
                acidlist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )
        //高钙类
        case 'ca':
            return (
                calist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )
        //高锌类
        case 'zn':
            return (
                znlist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )
        //高铁类
        case 'fe':
            return (
                felist.map((item)=><li>
                    <img src={item.img} className='foodrank-picture' />
                    <div className="foodlist-name">
                        <p style={{marginTop:'-10px'}}>{item.name}</p>
                        <p style={{fontSize:'12px',marginTop:'10px'}}>{item.cal}</p>
                    </div>
                </li>
                )
            )
            
        
    }
}
class FoodRank extends Component {
    render() {
        return (
            <div className='foodrank'>
                <div className='foodrank-header'>
                    <span className="iconfont icon-jiantouarrowhead7" onClick={()=>this.props.history.push('/home')}></span>
                    <span>食物排行榜</span>
                </div>
               <ol>
                    <li><NavLink to='/home/rank/fruit'>水果类</NavLink></li>
                    <li><NavLink to='/home/rank/food'>主食类</NavLink></li>
                    <li><NavLink to='/home/rank/meat'>肉蛋类</NavLink></li>
                    <li><NavLink to='/home/rank/bean'>豆类</NavLink></li>
                    <li><NavLink to='/home/rank/sea'>海鲜类</NavLink></li>
                    <li><NavLink to='/home/rank/vegtable'>蔬菜类</NavLink></li>
                    <li><NavLink to='/home/rank/nut'>坚果类</NavLink></li>
                    <li><NavLink to='/home/rank/oil'>油脂类</NavLink></li>
                    <li><NavLink to='/home/rank/acid'>高叶酸类</NavLink></li>
                    <li><NavLink to='/home/rank/ca'>高钙类</NavLink></li>
                    <li><NavLink to='/home/rank/zn'>高锌类</NavLink></li>
                    <li><NavLink to='/home/rank/fe'>高铁类</NavLink></li>
                </ol>
                <div className="foodlist">
                    <Route path='/home/rank/:type' component={FoodContent}/>
                    <Redirect from='/home/rank' to='/home/rank/fruit'/>
                </div>
                
            </div>
        )
    }
}
export default withRouter(FoodRank);


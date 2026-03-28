import pandas as pd
import os
from flask import Flask, render_template, jsonify
app = Flask(__name__)
@app.route("/")
def test():
    return render_template("index.html")
@app.route("/get_data", methods=["GET"])
def get_data():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(script_dir, "plot.xlsx")
    plot = pd.read_excel(file_path)
    p0=list(plot.iloc[0:5,0])
    p01=list(plot.iloc[5:15,0])
    p02=list(plot.iloc[15:19,0])
    
    p03=list(plot.iloc[19:28,0])
    p031=list(plot.iloc[28:31,0])
    
    p035=list(plot.iloc[31:36,0])
    
    p04=list(plot.iloc[36:44,0])
    p05=list(plot.iloc[44:47,0])
    p051=list(plot.iloc[47:54,0])
    p055=list(plot.iloc[54:58,0])
    p056=list(plot.iloc[58:65,0])
    p06=list(plot.iloc[65:84,0])
    
    p07=list(plot.iloc[84:85,0])
    p071=list(plot.iloc[85:97,0])
    p075=list(plot.iloc[97:107,0])
    
    p08=list(plot.iloc[107:112,0])
    p09=list(plot.iloc[112:115,0])
    p091=list(plot.iloc[115:124,0])
    p095=list(plot.iloc[124:128,0])
    
    p10=list(plot.iloc[128:132,0])
    p11=list(plot.iloc[132:148,0])
    p12=list(plot.iloc[148:151,0])
    p121=list(plot.iloc[151:158,0])
    p122=list(plot.iloc[158:176,0])
    p123=list(plot.iloc[176:181,0])
    p125=list(plot.iloc[181:188,0])
    p126=list(plot.iloc[188:197,0])
    p127=list(plot.iloc[197:204,0])
    p128=list(plot.iloc[204:207,0])
    p129=list(plot.iloc[207:221,0])
    p13=list(plot.iloc[221:225,0])
    p131=list(plot.iloc[225:227,0])
    p132=list(plot.iloc[227:237,0])
    p135=list(plot.iloc[237:239,0])
    p136=list(plot.iloc[239:245,0])
    p14=list(plot.iloc[245:267,0])
    p15=list(plot.iloc[267:270,0])
    p151=list(plot.iloc[270:281,0])
    p155=list(plot.iloc[281:290,0])
    p16=list(plot.iloc[290:297,0])
    p17=list(plot.iloc[297:317,0])
    p171=list(plot.iloc[317:324,0])
    p175=list(plot.iloc[324:332,0])
    p18=list(plot.iloc[332:339,0])
    p19=list(plot.iloc[339:344,0])
    p191=list(plot.iloc[344:358,0])
    p195=list(plot.iloc[358:372,0])
    p20=list(plot.iloc[372:378,0])
    p21=list(plot.iloc[378:384,0])
    p211=list(plot.iloc[384:402,0])
    p215=list(plot.iloc[402:418,0])
    p22=list(plot.iloc[418:426,0])
    p23=list(plot.iloc[426:456,0])
    p24=list(plot.iloc[456:459,0])
    p241=list(plot.iloc[459:462,0])
    p245=list(plot.iloc[462:468,0])
    p25=list(plot.iloc[468:470,0])
    p26=list(plot.iloc[470:480,0])
    p27=list(plot.iloc[480:484,0])
    p271=list(plot.iloc[484:487,0])
    p275=list(plot.iloc[487:489,0])
    p28=list(plot.iloc[489:490,0])
    p281=list(plot.iloc[490:499,0])
    p285=list(plot.iloc[499:513,0])
    p29=list(plot.iloc[513:522,0])
    

    
    
    
    
    
    s0=list(plot.iloc[0:5,1])
    s01=list(plot.iloc[5:15,1])
    s02=list(plot.iloc[15:19,1])
    
    s03=list(plot.iloc[19:28,1])
    s031=list(plot.iloc[28:31,1])
    s035=list(plot.iloc[31:36,1])
    s04=list(plot.iloc[36:44,1])
    s05=list(plot.iloc[44:47,1])
    s051=list(plot.iloc[47:54,1])
    s055=list(plot.iloc[54:58,1])
    s056=list(plot.iloc[58:65,1])
    s06=list(plot.iloc[65:84,1])
    
    s07=list(plot.iloc[84:85,1])
    s071=list(plot.iloc[85:97,1])
    s075=list(plot.iloc[97:107,1])
    
    s08=list(plot.iloc[107:112,1])
    s09=list(plot.iloc[112:115,1])
    s091=list(plot.iloc[115:124,1])
    s095=list(plot.iloc[124:128,1])
    
    s10=list(plot.iloc[128:132,1])
    s11=list(plot.iloc[132:148,1])
    s12=list(plot.iloc[148:151,1])
    s121=list(plot.iloc[151:158,1])
    s122=list(plot.iloc[158:176,1])
    s123=list(plot.iloc[176:181,1])
    s125=list(plot.iloc[181:188,1])
    s126=list(plot.iloc[188:197,1])
    s127=list(plot.iloc[197:204,1])
    s128=list(plot.iloc[204:207,1])
    s129=list(plot.iloc[207:221,1])
    s13=list(plot.iloc[221:225,1])
    s131=list(plot.iloc[225:227,1])
    s132=list(plot.iloc[227:237,1])
    s135=list(plot.iloc[237:239,1])
    s136=list(plot.iloc[239:245,1])
    s14=list(plot.iloc[245:267,1])
    s15=list(plot.iloc[267:270,1])
    s151=list(plot.iloc[270:281,1])
    s155=list(plot.iloc[281:290,1])
    s16=list(plot.iloc[290:297,1])
    s17=list(plot.iloc[297:317,1])
    s171=list(plot.iloc[317:324,1])
    s175=list(plot.iloc[324:332,1])
    s18=list(plot.iloc[332:339,1])
    s19=list(plot.iloc[339:344,1])
    s191=list(plot.iloc[344:358,1])
    s195=list(plot.iloc[358:372,1])
    s20=list(plot.iloc[372:378,1])
    s21=list(plot.iloc[378:384,1])
    s211=list(plot.iloc[384:402,1])
    s215=list(plot.iloc[402:418,1])
    s22=list(plot.iloc[418:426,1])
    s23=list(plot.iloc[426:456,1])
    s24=list(plot.iloc[456:459,1])
    s241=list(plot.iloc[459:462,1])
    s245=list(plot.iloc[462:468,1])
    s25=list(plot.iloc[468:470,1])
    s26=list(plot.iloc[470:480,1])
    s27=list(plot.iloc[480:484,1])
    s271=list(plot.iloc[484:487,1])
    s275=list(plot.iloc[487:489,1])
    s28=list(plot.iloc[489:490,1])
    s281=list(plot.iloc[490:499,1])
    s285=list(plot.iloc[499:513,1])
    s29=list(plot.iloc[513:522,1])

    
    m01=list(plot.iloc[5:15,2])
    
    m03=list(plot.iloc[19:28,2])
    m031=list(plot.iloc[28:31,2])
    m035=list(plot.iloc[31:36,2])
    m06=list(plot.iloc[65:84,2])
    m07=list(plot.iloc[84:85,2])
    m071=list(plot.iloc[85:97,2])
    m075=list(plot.iloc[97:107,2])
    
    m10=list(plot.iloc[128:132,2])
    m11=list(plot.iloc[132:148,2])
    m12=list(plot.iloc[148:151,2])
    m121=list(plot.iloc[151:158,2])
    m122=list(plot.iloc[158:176,2])
    m123=list(plot.iloc[176:181,2])
    m125=list(plot.iloc[181:188,2])
    m126=list(plot.iloc[188:197,2])
    m127=list(plot.iloc[197:204,2])
    m128=list(plot.iloc[204:207,2])
    m129=list(plot.iloc[207:221,2])
    m13=list(plot.iloc[221:225,2])
    m131=list(plot.iloc[225:227,2])
    m132=list(plot.iloc[227:237,2])
    m135=list(plot.iloc[237:239,2])
    m136=list(plot.iloc[239:245,2])
    m14=list(plot.iloc[245:267,2])
    m15=list(plot.iloc[267:270,2])
    m151=list(plot.iloc[270:281,2])
    m155=list(plot.iloc[281:290,2])
    m16=list(plot.iloc[290:297,2])
    m17=list(plot.iloc[297:317,2])
    m171=list(plot.iloc[317:324,2])
    m175=list(plot.iloc[324:332,2])
    m18=list(plot.iloc[332:339,2])
    m19=list(plot.iloc[339:344,2])
    m191=list(plot.iloc[344:358,2])
    m195=list(plot.iloc[358:372,2])
    m20=list(plot.iloc[372:378,2])
    m21=list(plot.iloc[378:384,2])
    m211=list(plot.iloc[384:402,2])
    m215=list(plot.iloc[402:418,2])
    m22=list(plot.iloc[418:426,2])
    m23=list(plot.iloc[426:456,2])
    m24=list(plot.iloc[456:459,2])
    m241=list(plot.iloc[459:462,2])
    m245=list(plot.iloc[462:468,2])
    m25=list(plot.iloc[468:470,2])
    m26=list(plot.iloc[470:480,2])
    m27=list(plot.iloc[480:484,2])
    m271=list(plot.iloc[484:487,2])
    m275=list(plot.iloc[487:489,2])
    m28=list(plot.iloc[489:490,2])
    m281=list(plot.iloc[490:499,2])
    m285=list(plot.iloc[499:513,2])
    m29=list(plot.iloc[513:522,2])
    
    
    data = {
        "p0":p0,
        "p01":p01,
        "p02":p02,
        "p03":p03,
        "p031":p031,
        "p035":p035,
        "p04":p04,
        "p05":p05,
        "p051":p051,
        "p055":p055,
        "p056":p056,
        "p06":p06,
        "p07":p07,
        "p071":p071,
        "p075":p075,
        "p08":p08,
        "p09":p09,
        "p091":p091,
        "p095":p095,
        
        "p10":p10,
        "p11":p11,
        "p12":p12,
        "p121":p121,
        "p122":p122,
        "p123":p123,
        "p125":p125,
        "p126":p126,
        "p127":p127,
        "p128":p128,
        "p129":p129,
        "p13":p13,
        "p131":p131,
        "p132":p132,
        "p135":p135,
        "p136":p136,
        "p14":p14,
        "p15":p15,
        "p151":p151,
        "p155":p155,
        "p16":p16,
        "p17":p17,
        "p171":p171,
        "p175":p175,
        "p18":p18,
        "p19":p19,
        "p191":p191,
        "p195":p195,
        "p20":p20,
        "p21":p21,
        "p211":p211,
        "p215":p215,
        "p22":p22,
        "p23":p23,
        "p24":p24,
        "p241":p241,
        "p245":p245,
        "p25":p25,
        "p26":p26,
        "p27":p27,
        "p271":p271,
        "p275":p275,
        "p28":p28,
        "p281":p281,
        "p285":p285,
        
        "s0":s0,      
        "s01":s01,
        "s02":s02,
        "s03":s03,
        "s031":s031,
        "s035":s035,
        "s04":s04,
        "s05":s05,
        "s051":s051,
        "s055":s055,
        "s056":s056,
        "s06":s06,
        "s07":s07,
        "s071":s071,
        "s075":s075,
        "s08":s08,
        "s09":s09,
        "s091":s091,
        "s095":s095,

        "s10":s10,
        "s11":s11,
        "s12":s12,
        "s121":s121,
        "s122":s122,
        "s123":s123,
        "s125":s125,
        "s126":s126,
        "s127":s127,
        "s128":s128,
        "s129":s129,
        "s13":s13,
        "s131":s131,
        "s132":s132,
        "s135":s135,
        "s136":s136,
        "s14":s14,
        "s15":s15,
        "s151":s151,
        "s155":s155,
        "s16":s16,
        "s17":s17,
        "s171":s171,
        "s175":s175,
        "s18":s18,
        "s19":s19,
        "s191":s191,
        "s195":s195,
        "s20":s20,
        "s21":s21,
        "s211":s211,
        "s215":s215,
        "s22":s22,
        "s23":s23,
        "s24":s24,
        "s241":s241,
        "s245":s245,
        "s25":s25,
        "s26":s26,
        "s27":s27,
        "s271":s271,
        "s275":s275,
        "s28":s28,
        "s281":s281,
        "s285":s285,

        "m01":m01,
        "m03":m03,
        "m031":m031,
        "m035":m035,
        "m06":m06,
        "m07":m07,
        "m071":m071,
        "m075":m075, 
        
        "m10":m10,
        "m122":m122,
        "m129":m129,
        "m136":m136,
        
        "m14":m14,
        "m15":m15,
        "m151":m151,
        "m155":m155,
        
        "m17":m17,
        "m171":m171,
        "m175":m175,
        
        
        "m20":m20,
        "m21":m21,
        "m211":m211,
        "m215":m215,
        "m22":m22,
        
        
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)

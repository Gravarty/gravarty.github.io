// Created by iWeb 3.0.2 local-build-20250727

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,-0.0000),color:'#3a060f',opacity:1.000000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#463c3c',opacity:0.750000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,260),url:'Willkommen_files/stroke.png'},{rect:new IWRect(-2,-2,4,2),url:'Willkommen_files/stroke_1.png'},{rect:new IWRect(2,-2,192,2),url:'Willkommen_files/stroke_2.png'},{rect:new IWRect(194,-2,5,2),url:'Willkommen_files/stroke_3.png'},{rect:new IWRect(194,0,5,260),url:'Willkommen_files/stroke_4.png'},{rect:new IWRect(194,260,5,3),url:'Willkommen_files/stroke_5.png'},{rect:new IWRect(2,260,192,3),url:'Willkommen_files/stroke_6.png'},{rect:new IWRect(-2,260,4,3),url:'Willkommen_files/stroke_7.png'}],new IWSize(197,261))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Willkommen_files/WillkommenMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}

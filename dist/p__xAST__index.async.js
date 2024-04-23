"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[290],{50505:function(au,D,o){o.r(D),o.d(D,{default:function(){return Y}});var M=o(48305),g=o.n(M),m=o(93236),T=o(14218),I=o(82187),w=o.n(I),P=o(39552),x=o(81275),k=o(87832),L=o(13317),$=o(62659);const H=a=>{const{componentCls:i,sizePaddingEdgeHorizontal:r,colorSplit:s,lineWidth:n,textPaddingInline:d,orientationMargin:t,verticalMarginInline:l}=a;return{[i]:Object.assign(Object.assign({},(0,k.Wf)(a)),{borderBlockStart:`${(0,x.bf)(n)} solid ${s}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:l,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,x.bf)(n)} solid ${s}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,x.bf)(a.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${i}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,x.bf)(a.dividerHorizontalWithTextGutterMargin)} 0`,color:a.colorTextHeading,fontWeight:500,fontSize:a.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${s}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,x.bf)(n)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${i}-with-text-left`]:{"&::before":{width:`calc(${t} * 100%)`},"&::after":{width:`calc(100% - ${t} * 100%)`}},[`&-horizontal${i}-with-text-right`]:{"&::before":{width:`calc(100% - ${t} * 100%)`},"&::after":{width:`calc(${t} * 100%)`}},[`${i}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:d},"&-dashed":{background:"none",borderColor:s,borderStyle:"dashed",borderWidth:`${(0,x.bf)(n)} 0 0`},[`&-horizontal${i}-with-text${i}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${i}-dashed`]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${i}-with-text`]:{color:a.colorText,fontWeight:"normal",fontSize:a.fontSize},[`&-horizontal${i}-with-text-left${i}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${i}-inner-text`]:{paddingInlineStart:r}},[`&-horizontal${i}-with-text-right${i}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${i}-inner-text`]:{paddingInlineEnd:r}}})}},z=a=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:a.marginXS});var R=(0,L.I$)("Divider",a=>{const i=(0,$.TS)(a,{dividerHorizontalWithTextGutterMargin:a.margin,dividerHorizontalGutterMargin:a.marginLG,sizePaddingEdgeHorizontal:0});return[H(i)]},z,{unitless:{orientationMargin:!0}}),W=function(a,i){var r={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&i.indexOf(s)<0&&(r[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)i.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(r[s[n]]=a[s[n]]);return r},f=a=>{const{getPrefixCls:i,direction:r,divider:s}=m.useContext(P.E_),{prefixCls:n,type:d="horizontal",orientation:t="center",orientationMargin:l,className:p,rootClassName:v,children:h,dashed:j,plain:B,style:A}=a,C=W(a,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),c=i("divider",n),[b,E,F]=R(c),q=t.length>0?`-${t}`:t,N=!!h,y=t==="left"&&l!=null,_=t==="right"&&l!=null,uu=w()(c,s==null?void 0:s.className,E,F,`${c}-${d}`,{[`${c}-with-text`]:N,[`${c}-with-text${q}`]:N,[`${c}-dashed`]:!!j,[`${c}-plain`]:!!B,[`${c}-rtl`]:r==="rtl",[`${c}-no-default-orientation-margin-left`]:y,[`${c}-no-default-orientation-margin-right`]:_},p,v),S=m.useMemo(()=>typeof l=="number"?l:/^\d+$/.test(l)?Number(l):l,[l]),eu=Object.assign(Object.assign({},y&&{marginLeft:S}),_&&{marginRight:S});return b(m.createElement("div",Object.assign({className:uu,style:Object.assign(Object.assign({},s==null?void 0:s.style),A)},C,{role:"separator"}),h&&d!=="vertical"&&m.createElement("span",{className:`${c}-inner-text`,style:eu},h)))},e={bannerContainer:"bannerContainer___KH2W1",blueCap:"blueCap___opPU1",bannerTextSection:"bannerTextSection___wnDnb",bannerHeading:"bannerHeading___hPgyK",bannerSubHeading:"bannerSubHeading___G5ZKm",bannerButton:"bannerButton___C86NZ",bannerImageSection:"bannerImageSection___DZL9C",parContainer:"parContainer___CDJIM","canyu-container":"canyu-container___d8WDB","canyu-image":"canyu-image___HaTcC","huoban-container":"huoban-container___Xjzl0","huoban-row":"huoban-row___x2JG3","huoban-image":"huoban-image___IvzFA",footer:"footer___FD1js","footer-container":"footer-container___cZdh2","footer-left":"footer-left___hLtKy","footer-logo":"footer-logo___KgoAP","footer-email":"footer-email___BygKK","footer-email-icon":"footer-email-icon___nR9tA","footer-email-address":"footer-email-address___FHPHZ","footer-note":"footer-note___A_2BG","footer-right":"footer-right___XsOqr","footer-qrcode":"footer-qrcode___dwYf9",linkBottom:"linkBottom___pIcoH",rightCon:"rightCon___UzLDI",communityLink:"communityLink___gJ5f2","scene-text":"scene-text___LdB2_","scene-text2":"scene-text2___eDPAb",appContainer:"appContainer___i142i",appModule:"appModule___IhvF4",appImageSection:"appImageSection___pNPcy",appTextSection:"appTextSection___v24_x",tecCard:"tecCard___nV0bi",tecContainer:"tecContainer___ilhj7",tecModule:"tecModule___uwPQu",tecImageSection:"tecImageSection___MdxfP",tecTextSection:"tecTextSection___prZwc",canyuMap:"canyuMap___Hmhyd",communityIamge:"communityIamge___Hp8rQ",communityTab:"communityTab___wXWgu",communityTabText:"communityTabText___Hritc","avatar-container":"avatar-container____arap",avatar:"avatar___nVEvs"},u=o(62086),O=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"",children:(0,u.jsx)("div",{className:"tab1-container",children:(0,u.jsxs)("div",{className:"tab1-module",children:[(0,u.jsx)("div",{className:"tab1-title",children:"PMC\uFF08\u7B79\uFF09"}),(0,u.jsxs)("div",{className:"tab1-content",children:[(0,u.jsx)("div",{className:"text1",children:"PMC\u662FxAST\u8BC4\u4EF7\u4F53\u7CFB\u5F00\u6E90\u793E\u533A\u65E5\u5E38\u7684\u6280\u672F\u7BA1\u7406\u673A\u6784\uFF0C\u8D1F\u8D23\u793E\u533A\u76F8\u5173\u5404\u7C7B\u91CD\u5927\u4E8B\u9879\u7684\u51B3\u8BAE"}),(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u804C\u8D23.png"})," \u804C\u8D23\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:"\u8D1F\u8D23roadmap \u5236\u5B9A\u4E0E\u793E\u533A\u76F8\u5173\u7684\u91CD\u5927\u51B3\u8BAE\uFF0C\u5305\u62EC\u4FEE\u6539\u793E\u533A\u7AE0\u7A0B\u548C\u7EC4\u7EC7\u8BBE\u7F6E\u7B49"}),(0,u.jsx)("div",{className:"text1",children:"\u5B9A\u671F\u7EC4\u7EC7\u793E\u533A\u4F8B\u4F1A\u5E76\u516C\u5F00\u793E\u533A\u76F8\u5173\u4E8B\u9879\u51B3\u8BAE"}),(0,u.jsx)("div",{className:"text1",children:"\u793E\u533A\u8363\u8A89\u8BC4\u9009\uFF08\u5982\u8BC4\u9009\u4F18\u79C0\u8D21\u732E\u8005\u7B49\uFF09"}),(0,u.jsx)("div",{className:"text1",children:"\u4FC3\u8FDB\u4E0E\u5F00\u6E90\u7EC4\u7EC7\u548C\u5176\u4ED6\u5F00\u6E90\u9879\u76EE\u95F4\u7684\u5408\u4F5C"}),(0,u.jsx)("div",{style:{fontSize:"14px",color:"rgba(0,0,0,0.45)"},children:"\u5982\u4F55\u6210\u4E3APMC"}),(0,u.jsx)("div",{className:"text1",children:"\u76EE\u524DPMC\u5904\u4E8E\u7B79\u5907\u72B6\u6001\uFF0C\u5F85\u540E\u7EED\u9879\u76EE\u6210\u719F\u540E\u5C06\u6210\u7ACB\u6B63\u5F0F\u7684PMC"})]})]})})})})},G=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{style:{fontWeight:"400",color:"rgba(0, 0, 0, 0.85)",marginTop:"29px",marginBottom:"12px"},children:"\u8003\u8651\u5230xAST\u8BC4\u4EF7\u4F53\u7CFB\u4F5C\u4E3A\u6280\u672F\u6807\u51C6\u7684\u7279\u6B8A\u6027\uFF0C\u4EFB\u4F55\u6D89\u53CA\u8BC4\u4EF7\u9879\u548C\u4EE3\u7801\u7684\u63D0\u4EA4\u90FD\u4E0D\u5141\u8BB8\u5355\u4E2A\u7528\u6237\u7684\u72EC\u7ACB\u64CD\u4F5C\u3002"}),(0,u.jsxs)("div",{className:"tab2-container",children:[(0,u.jsxs)("div",{className:"tab2-module",children:[(0,u.jsx)("div",{className:"tab2-title",children:"\u7EF4\u62A4\u8005\uFF08Maintainers\uFF09"}),(0,u.jsxs)("div",{className:"tab2-content",children:[(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u804C\u8D23.png"})," \u804C\u8D23\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:"\u957F\u671F\u5173\u6CE8\u9879\u76EE\u53D1\u5C55\uFF0C\u79EF\u6781\u53C2\u4E0E\u9879\u76EE\u5EFA\u8BBE"}),(0,u.jsx)("div",{className:"text1",children:"\u5438\u7EB3\u5E76\u53D1\u5C55Active Contributors \u52A0\u5165Maintainers"}),(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u6743\u76CA.png"})," \u6743\u76CA\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:"\u8BC4\u4EF7\u9879\u548CBenchmark\u4FEE\u6539\u7684\u6295\u7968\u6743\uFF0C\u4E00\u4EBA\u4E00\u7968\uFF0C\u8D85"}),(0,u.jsx)("div",{className:"textWithout",children:" \u8FC71/2 Maintainers\u540C\u610F\u7684\u624D\u53EF\u4EE5\u6700\u7EC8\u5408\u5E76"}),(0,u.jsx)("div",{className:"text1",children:" \u63D0\u540DActive Contributors\u6210\u4E3AMaintainers"}),(0,u.jsx)("div",{className:"howTo",children:"\u5982\u4F55\u6210\u4E3AMaintainers\uFF0C\u9700\u8981\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A"}),(0,u.jsx)("div",{className:"text1",children:"\u6210\u4E3AActive Contributors\u81F3\u5C112\u4E2A\u6708\u4EE5\u4E0A"}),(0,u.jsx)("div",{className:"text1",children:"\u81F3\u5C112\u4E2A\u91CD\u5927PR\u88AB\u9879\u76EE\u5408\u5E76"}),(0,u.jsx)("div",{className:"text1",children:"\u81F3\u5C11\u4E00\u4F4DMaintainers\u63D0\u540D\uFF0C\u6240\u6709Maintainers\u6295"}),(0,u.jsx)("div",{className:"textWithout",children:"\u7968\uFF0C\u83B7\u5F97\u8D85\u8FC71/2 Maintainers\u7684\u540C\u610F"})]})]}),(0,u.jsxs)("div",{className:"tab2-module",children:[(0,u.jsx)("div",{className:"tab2-title",children:"\u6D3B\u8DC3\u8D21\u732E\u8005\uFF08Active Contributors\uFF09"}),(0,u.jsxs)("div",{className:"tab2-content",children:[(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u804C\u8D23.png"})," \u804C\u8D23\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:"\u53C2\u4E0E\u793E\u533A\u54A8\u8BE2\u652F\u6301"}),(0,u.jsx)("div",{className:"text1",children:"\u79EF\u6781\u54CD\u5E94\u793E\u533A\u6307\u6D3E\u7684 Issue \u53CA PR"}),(0,u.jsx)("div",{className:"text1",children:"\u5E2E\u5FD9\u56DE\u590D issue/pr\uFF0Ctriage\uFF08\u628A issue \u5206\u914D\u7ED9\u5BF9\u5E94\u6A21"}),(0,u.jsx)("div",{className:"textWithout",children:"\u5757\u7684\u8D1F\u8D23\u4EBA"}),(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u6743\u76CA.png"})," \u6743\u76CA\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:" Triage\uFF0C\u64CD\u4F5Cissue \u548C pr\uFF0C\u4F8B\u5982\u6253 label\u3001\u5206\u914D"}),(0,u.jsx)("div",{className:"text1",children:"\u53EF\u53C2\u4E0E\u793E\u533A\u8363\u8A89\u8BC4\u9009"}),(0,u.jsx)("div",{className:"howTo",children:"\u5982\u4F55\u6210\u4E3AActive Contributors\uFF0C\u9700\u8981\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A"}),(0,u.jsx)("div",{className:"text1",children:"\u6210\u4E3AActive Contributors\u81F3\u5C112\u4E2A\u6708\u4EE5\u4E0A"}),(0,u.jsx)("div",{className:"textWithout",children:"\u81F3\u5C11\u4E00\u4E2A\u91CD\u5927PR\uFF08\u7531Maintainers\u6295\u7968\u65F6\u786E\u8BA4\uFF0C\u4E00\u822C"}),(0,u.jsx)("div",{className:"text1",children:"\u81F3\u5C11\u8D21\u732E10\u4E2Acase\u4EE5\u4E0A\uFF09\u88AB\u9879\u76EE\u5408\u5E76"}),(0,u.jsx)("div",{className:"text1",children:" \u6709\u610F\u613F\u4E00\u8D77\u7EF4\u62A4\u793E\u533A"})]})]}),(0,u.jsxs)("div",{className:"tab2-module",children:[(0,u.jsx)("div",{className:"tab2-title",children:"\u8D21\u732E\u8005\uFF08 Contributors\uFF09"}),(0,u.jsxs)("div",{className:"tab2-content",style:{paddingTop:"12px"},children:[(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u804C\u8D23.png"})," \u804C\u8D23\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:"\u63D0\u4EA4\u6709\u4EF7\u503C\u7684 issue"}),(0,u.jsx)("div",{className:"text1",children:"\u5E2E\u52A9\u6539\u8FDB\u6587\u6863"}),(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u6743\u76CA.png"})," \u6743\u76CA\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:" \u63D0\u4EA4PR/issue "}),(0,u.jsx)("div",{className:"howTo",children:"\u5982\u4F55\u6210\u4E3AContributors\uFF1A"}),(0,u.jsx)("div",{className:"text1",children:"\u81F3\u5C11\u63D0\u4EA4\u4E00\u4E2A\u6709\u6548PR\u6216\u8005issue"})]})]})]})]})},U=function(){return(0,u.jsxs)("div",{className:"tab3-container",children:[(0,u.jsxs)("div",{className:"tab3-module",children:[(0,u.jsx)("div",{className:"tab3-title",children:"\u5E03\u9053\u5E08\uFF08Community Leader\uFF09"}),(0,u.jsxs)("div",{className:"tab3-content",children:[(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u804C\u8D23.png"})," \u804C\u8D23\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:"\u4E3B\u52A8\u5BF9\u5916\u5206\u4EAB\u9879\u76EE\u7684\u7406\u5FF5\u548C\u6D4B\u8BC4\u7ED3\u679C"}),(0,u.jsx)("div",{className:"text1",children:"\u79EF\u6781\u54CD\u5E94\u793E\u533A\u6307\u6D3E\u7684\u6587\u7AE0\u6216\u5206\u4EAB\u5DE5\u4F5C"}),(0,u.jsx)("div",{className:"text1",children:"\u5438\u7EB3\u5E76\u53D1\u5C55Ambassador\u52A0\u5165Community Leader"}),(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u6743\u76CA.png"})," \u6743\u76CA\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:"\u884C\u4E1A\u5E74\u5EA6\u6D4B\u8BC4\u62A5\u544A\u7684\u7F72\u540D\u6743\uFF08\u5982\u6709\u53C2\u4E0E\uFF09"}),(0,u.jsx)("div",{className:"text1",children:"\u4F18\u5148\u63D0\u4F9BPR\u6E20\u9053\u8D44\u6E90"}),(0,u.jsx)("div",{className:"howTo",children:"\u5982\u4F55\u6210\u4E3ACommunity Leader\uFF0C\u9700\u8981\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A"}),(0,u.jsx)("div",{className:"text1",children:"\u6210\u4E3AAmbassador\u8D85\u8FC7 2 \u4E2A\u6708 "}),(0,u.jsx)("div",{className:"text1",children:"\u57FA\u4E8E\u8BC4\u4EF7\u4F53\u7CFB\u8FDB\u884C\u6D4B\u8BC4\uFF0C\u5BF9\u5916\u516C\u5F00\u53D1\u5E03\u4F18\u8D28\u6D4B\u8BC4\u7ED3\u679C\uFF08\u7ECFPMC\u6295\u7968\u8BC4\u9009\u786E\u8BA4\uFF091\u7BC7\u4EE5 "}),(0,u.jsx)("div",{className:"textWithout",children:"\u4E0A\u6216\u8005\u4EE3\u8868\u793E\u533A\u53C2\u4E0E\u5927\u4F1A\u5BA3\u8BB2/Meetup\u5206\u4EAB 1 \u6B21\u4EE5\u4E0A"}),(0,u.jsx)("div",{className:"text1",children:"\u81F3\u5C11\u4E00\u4F4DCommunity Leader\u63D0\u540D\uFF0C\u7531Community Leader\u6295\u7968\uFF0C\u83B7\u5F97\u8D85\u8FC71/2"}),(0,u.jsx)("div",{className:"textWithout",children:"Community Leader\u7684\u540C\u610F"})]})]}),(0,u.jsxs)("div",{className:"tab3-module",children:[(0,u.jsx)("div",{className:"tab3-title",children:"\u8D44\u6DF1\u7528\u6237\uFF08Ambassador\uFF09"}),(0,u.jsxs)("div",{className:"tab3-content",children:[(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u804C\u8D23.png"})," \u804C\u8D23\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:"\u53C2\u4E0E\u5B89\u5168\u5DE5\u5177\u6D4B\u8BC4 "}),(0,u.jsx)("div",{className:"text1",children:"\u53C2\u4E0E\u793E\u533A\u63A8\u5E7F\u6D3B\u52A8"}),(0,u.jsx)("div",{className:"text1",children:"\u79EF\u6781\u54CD\u5E94\u793E\u533A\u5185\u7528\u6237\u63D0\u95EE"}),(0,u.jsxs)("div",{className:"littleHeadLine",children:[(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\\\u6743\u76CA.png"})," \u6743\u76CA\uFF1A"]}),(0,u.jsx)("div",{className:"text1",children:" \u4EE3\u8868\u793E\u533A\u53C2\u4E0E\u5927\u4F1A\u5BA3\u8BB2\u3001Meetup\u5206\u4EAB"}),(0,u.jsx)("div",{className:"text1",children:"\u53EF\u53C2\u4E0E\u793E\u533A\u8363\u8A89\u8BC4\u9009"}),(0,u.jsx)("div",{className:"howTo",children:"\u5982\u4F55\u6210\u4E3AAmbassador\uFF0C\u6EE1\u8DB3\u4EE5\u4E0B\u4EFB\u4E00\u6761\u4EF6\uFF1A"}),(0,u.jsx)("div",{className:"text1",children:"\u57FA\u4E8E\u8BC4\u4EF7\u4F53\u7CFB\u8FDB\u884C\u6D4B\u8BC4\uFF0C\u5E76\u5BF9\u5916\u516C\u5F00\u53D1\u5E03\u6D4B\u8BC4\u62A5\u544A1\u7BC7\u4EE5\u4E0A"}),(0,u.jsx)("div",{className:"text1",children:"\u5728\u793E\u533A\u6D3B\u8DC3\u8D85\u8FC7 1 \u4E2A\u6708\uFF0C\u7D2F\u8BA1\u6709\u6548\u7B54\u7591\u8D85\u8FC7 10 \u6B21"})]})]})]})},K=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"tab4Container",children:(0,u.jsx)("div",{className:"textArea",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{style:{fontSize:"16px",color:"rgba(0,0,0,0.45)",lineHeight:"44px"},children:"PMC\uFF08\u7B79\uFF09\u6839\u636E\u9879\u76EE\u8FDB\u5C55\uFF0C\u5B9A\u671F\u7EC4\u7EC7\u793E\u533A\u4F1A\u8BAE\uFF0C\u76EE\u524D\u9ED8\u8BA4\u4E00\u4E2A\u6708\u4E00\u6B21"}),(0,u.jsx)("div",{className:"text4",children:" \u793E\u533A\u4F1A\u8BAE\u6240\u6709\u611F\u5174\u8DA3\u7684\u793E\u533A\u6210\u5458\u90FD\u53EF\u4EE5\u53C2\u52A0"}),(0,u.jsx)("div",{className:"text4",children:"\u6240\u6709\u4E8B\u9879\u7684\u51B3\u7B56\u90FD\u5728\u793E\u533A\u4F1A\u8BAE\u4E2D\u516C\u5F00\u8FDB\u884C\uFF0C\u4F46PR\u5408\u5E76\u3001\u4F18\u79C0\u8BC4\u6D4B\u62A5\u544A\u7B49\u76F8\u5173\u6295\u7968\u53EA\u80FD\u7531\u6709\u6295\u7968\u6743\u7684\u4EBA\u53C2\u4E0E"}),(0,u.jsx)("div",{style:{fontSize:"16px",color:"rgba(0,0,0,0.45)",lineHeight:"44px"},children:" PMC\uFF08\u7B79\uFF09\u5C06\u4E0D\u5B9A\u671F\u7EC4\u7EC7\u5404\u7C7B\u793E\u533A\u6D3B\u52A8 "}),(0,u.jsx)("div",{style:{fontSize:"16px",color:"rgba(0,0,0,0.45)",lineHeight:"44px"},children:"PMC\uFF08\u7B79\uFF09\u5C06\u4EE5\u793E\u533A\u540D\u4E49\u53D1\u5E03\u5B89"})]})})})})},Z=function(){var i=(0,m.useState)("PMC\uFF08\u7B79\uFF09"),r=g()(i,2),s=r[0],n=r[1],d=[{name:"PMC\uFF08\u7B79\uFF09",content:(0,u.jsx)(O,{})},{name:"Develop Group\uFF08\u5F00\u53D1\u8005\u793E\u533A\uFF09",content:(0,u.jsx)(G,{})},{name:"User Group\uFF08\u7528\u6237\u793E\u533A\uFF09",content:(0,u.jsx)(U,{})},{name:"\u793E\u533A\u65E5\u5E38\u5DE5\u4F5C\u673A\u5236",content:(0,u.jsx)(K,{})}];return(0,u.jsxs)("div",{className:"tabs-container",children:[(0,u.jsx)("div",{className:"tabs-header",children:d.map(function(t){return(0,u.jsx)("div",{className:"tab ".concat(s===t.name?"active":""),onClick:function(){return n(t.name)},children:t.name},t.name)})}),(0,u.jsx)("div",{className:"tab-content",children:d.filter(function(t){return t.name===s})[0].content})]})},Q=Z,V=function(){var i="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",r=(0,m.useState)("/images/05\u53C2\u4E0E\u8D21\u732E/\u5E38\u89C4\u6837\u5F0F/1.png"),s=g()(r,2),n=s[0],d=s[1],t=(0,m.useState)("/images/05\u53C2\u4E0E\u8D21\u732E/\u5E38\u89C4\u6837\u5F0F/2.png"),l=g()(t,2),p=l[0],v=l[1],h=(0,m.useState)("/images/05\u53C2\u4E0E\u8D21\u732E/\u5E38\u89C4\u6837\u5F0F/3.png"),j=g()(h,2),B=j[0],A=j[1],C=function(F){F==1&&d("/images/05\u53C2\u4E0E\u8D21\u732E/\u60AC\u505C\u6837\u5F0F/1.png"),F==2&&v("/images/05\u53C2\u4E0E\u8D21\u732E/\u60AC\u505C\u6837\u5F0F/2.png"),F==3&&A("/images/05\u53C2\u4E0E\u8D21\u732E/\u60AC\u505C\u6837\u5F0F/3.png")},c=function(F){F==1&&d("/images/05\u53C2\u4E0E\u8D21\u732E/\u5E38\u89C4\u6837\u5F0F/1.png"),F==2&&v("/images/05\u53C2\u4E0E\u8D21\u732E/\u5E38\u89C4\u6837\u5F0F/2.png"),F==3&&A("/images/05\u53C2\u4E0E\u8D21\u732E/\u5E38\u89C4\u6837\u5F0F/3.png")},b=function(){window.open("https://github.com/alipay/ant-application-security-testing-benchmark","_blank")};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{style:{backgroundColor:"#1E2639",height:"488px",color:"#fff"},children:(0,u.jsxs)("div",{className:e.bannerContainer,children:[(0,u.jsx)("div",{style:{display:"flex",width:"100%",alignItems:"center"},children:(0,u.jsxs)("div",{className:e.bannerTextSection,children:[(0,u.jsxs)("h1",{className:e.bannerHeading,children:[" ",(0,u.jsx)("span",{class:"blueCap",children:"A"}),"pplication ",(0,u.jsx)("span",{class:"blueCap",children:"S"}),"ecurity ",(0,u.jsx)("span",{class:"blueCap",children:"T"}),"esting Evaluation Criteria"]}),(0,u.jsx)("p",{className:e.bannerSubHeading,children:"\u9488\u5BF9\u5E94\u7528\u5B89\u5168\u6D4B\u8BD5\u9886\u57DF\uFF08AST\uFF09\u7F3A\u4E4F\u6709\u6548\u8861\u91CF\u6280\u672F\u80FD\u529B\u6807\u51C6\u7684\u4E1A\u754C\u75DB\u70B9\uFF0C \u8682\u8681\u5B89\u5168\u56E2\u961F\u8054\u5408\u6D59\u6C5F\u5927\u5B66\u7F51\u7EDC\u7A7A\u95F4\u5B89\u5168\u5B66\u9662\u768420\u4F59\u4F4D\u4E13\u5BB6\u5B66\u8005\uFF0C \u5171\u540C\u8BBE\u8BA1\u4E86xAST\u8BC4\u4EF7\u4F53\u7CFB\u53CA\u5176\u6D4B\u8BD5\u6837\u672C\u5957\u4EF6Benchmark\u3002"}),(0,u.jsxs)(T.ZP,{type:"primary",className:e.bannerButton,onClick:b,children:["Github ",">"," "]})]})}),(0,u.jsx)("div",{className:e.bannerImageSection,children:(0,u.jsx)("img",{src:"/images/01\u5934\u90E8/bannerFinal.png",alt:"banner"})})]})}),(0,u.jsxs)("div",{style:{width:"1200px",margin:"0 auto"},children:[(0,u.jsx)("div",{style:{textAlign:"center",marginTop:"80px"},children:(0,u.jsx)("div",{class:"scene-text",children:"\u5E94\u7528\u573A\u666F"})}),(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:e.appContainer,children:[(0,u.jsxs)("div",{className:e.appModule,style:{backgroundColor:"#FFFAEA"},children:[(0,u.jsx)("div",{className:e.appImageSection,children:(0,u.jsx)("img",{src:"/images/02\u5E94\u7528\u573A\u666F/01.png",alt:"\u63CF\u8FF01"})}),(0,u.jsx)("div",{className:e.appTextSection,children:(0,u.jsx)("p",{children:"\u5E94\u7528\u5B89\u5168\u6D4B\u8BD5\u6280\u672F\u8861\u91CF"})})]}),(0,u.jsxs)("div",{className:e.appModule,style:{backgroundColor:"#F0F4FE"},children:[(0,u.jsx)("div",{className:e.appImageSection,children:(0,u.jsx)("img",{src:"/images/02\u5E94\u7528\u573A\u666F/02.png",alt:"\u63CF\u8FF02"})}),(0,u.jsx)("div",{className:e.appTextSection,children:(0,u.jsx)("p",{children:"\u6307\u5F15\u5E94\u7528\u5B89\u5168\u6D4B\u8BD5\u6280\u672F\u53D1\u5C55\u65B9\u5411"})})]}),(0,u.jsxs)("div",{className:e.appModule,style:{backgroundColor:"#E9FDFC"},children:[(0,u.jsx)("div",{className:e.appImageSection,children:(0,u.jsx)("img",{src:"/images/02\u5E94\u7528\u573A\u666F/03.png",alt:"\u63CF\u8FF03"})}),(0,u.jsx)("div",{className:e.appTextSection,children:(0,u.jsx)("p",{children:"\u8F85\u52A9\u4F01\u4E1A\u5BA2\u6237\u4EA7\u54C1\u9009\u578B"})})]})]})}),(0,u.jsx)("div",{})]}),(0,u.jsxs)("div",{className:"tecCard",children:[(0,u.jsx)("div",{style:{textAlign:"center"},children:(0,u.jsx)("div",{class:"scene-text2",children:"\u6280\u672F\u540D\u7247"})}),(0,u.jsxs)("div",{className:e.tecContainer,children:[(0,u.jsxs)("div",{className:e.tecModule,children:[(0,u.jsx)("div",{className:e.tecImageSection,children:(0,u.jsx)("img",{src:"/images/03\u6280\u672F\u540D\u7247/01.png",alt:"\u6280\u672F1"})}),(0,u.jsx)("div",{className:e.tecTextSection,children:(0,u.jsx)("p",{children:"\u4E1A\u754C\u9996\u4E2A\u8BC4\u4EF7\u4F53\u7CFB\u9A71\u52A8\u5F0F Benchmark"})})]}),(0,u.jsxs)("div",{className:e.tecModule,children:[(0,u.jsx)("div",{className:e.tecImageSection,children:(0,u.jsx)("img",{src:"/images/03\u6280\u672F\u540D\u7247/02.png",alt:"\u6280\u672F2"})}),(0,u.jsx)("div",{className:e.tecTextSection,children:(0,u.jsx)("p",{children:"\u4E1A\u754C\u9996\u4E2A\u9762\u5411\u5DE5\u5177\u89C6\u89D2 Benchmark "})})]}),(0,u.jsxs)("div",{className:e.tecModule,children:[(0,u.jsx)("div",{className:e.tecImageSection,children:(0,u.jsx)("img",{src:"/images/03\u6280\u672F\u540D\u7247/03.png",alt:"\u6280\u672F3"})}),(0,u.jsx)("div",{className:e.tecTextSection,children:(0,u.jsx)("p",{children:"\u8BC4\u4EF7\u4F53\u7CFB\u5206\u5C42\u8BBE\u8BA1"})})]}),(0,u.jsxs)("div",{className:e.tecModule,children:[(0,u.jsx)("div",{className:e.tecImageSection,children:(0,u.jsx)("img",{src:"/images/03\u6280\u672F\u540D\u7247/04.png",alt:"\u6280\u672F4"})}),(0,u.jsx)("div",{className:e.tecTextSection,children:(0,u.jsx)("p",{children:"\u201C\u4F53\u9A8C\u62A5\u544A\u201D\u5F0F\u7ED3\u679C\uFF0C \u7EC6\u7C92\u5EA6\u53EF\u89E3\u91CA"})})]}),(0,u.jsxs)("div",{className:e.tecModule,children:[(0,u.jsx)("div",{className:e.tecImageSection,children:(0,u.jsx)("img",{src:"/images/03\u6280\u672F\u540D\u7247/05.png",alt:"\u6280\u672F5"})}),(0,u.jsx)("div",{className:e.tecTextSection,children:(0,u.jsx)("p",{children:"\u4E1A\u754CBenchmark\u4EA4\u53C9\u9A8C\u8BC1\uFF0C \u786E\u4FDD\u5B8C\u6574\u6027 "})})]})]})]}),(0,u.jsx)("div",{style:{textAlign:"center",marginTop:"80px"},children:(0,u.jsxs)("div",{class:"scene-text",children:[" ",(0,u.jsx)("a",{className:"communityLink",href:"https://yuque.antfin-inc.com/product_sec/poxwxs/lt6asc1oino9ig1x?singleDoc# \u300AxAST\u5F00\u6E90\u793E\u533A\u7EC4\u7EC7\u67B6\u6784\u300B",target:"_blank",rel:"noopener noreferrer",children:"\u793E\u533A\u7EC4\u7EC7\u67B6\u6784"})]})}),(0,u.jsx)("div",{class:"communityIamge",children:(0,u.jsx)("img",{src:"/images/04\u793E\u533A\u7EC4\u7EC7\u67B6\u6784/map.png",alt:""})}),(0,u.jsx)(Q,{}),(0,u.jsxs)("div",{className:"canyuMap",children:[(0,u.jsx)("div",{style:{marginTop:"80px"},children:(0,u.jsx)("div",{style:{textAlign:"center"},children:(0,u.jsx)("div",{class:"scene-text2",children:"\u53C2\u4E0E\u8D21\u732E"})})}),(0,u.jsxs)("div",{className:e.parContainer,children:[(0,u.jsx)("div",{class:"canyu-container",onMouseEnter:function(){return C(1)},onMouseLeave:function(){return c(1)},children:(0,u.jsxs)("a",{href:"https://github.com/alipay/ant-application-security-testing-benchmark/wiki/%E5%8F%82%E4%B8%8E%E8%B4%A1%E7%8C%AE#%E5%8F%82%E4%B8%8E%E4%BB%A3%E7%A0%81%E6%96%87%E6%A1%A3%E8%B4%A1%E7%8C%AE",target:"_blank",rel:"noopener noreferrer",children:[(0,u.jsx)("img",{src:n,alt:"\u793A\u4F8B\u56FE\u7247",class:"canyu-image"}),(0,u.jsx)("span",{class:"canyu-text",children:"\u53C2\u4E0E\u8BC4\u6D4B"})]})}),(0,u.jsx)("div",{class:"canyu-container",onMouseEnter:function(){return C(2)},onMouseLeave:function(){return c(2)},children:(0,u.jsxs)("a",{href:"https://github.com/alipay/ant-application-security-testing-benchmark/wiki/%E5%8F%82%E4%B8%8E%E8%B4%A1%E7%8C%AE#%E5%8F%82%E4%B8%8E%E4%BB%A3%E7%A0%81%E6%96%87%E6%A1%A3%E8%B4%A1%E7%8C%AE",target:"_blank",rel:"noopener noreferrer",children:[(0,u.jsx)("img",{src:p,alt:"\u793A\u4F8B\u56FE\u7247",class:"canyu-image"}),(0,u.jsx)("span",{class:"canyu-text",children:" \u53C2\u4E0E\u4EE3\u7801\u8D21\u732E"})]})}),(0,u.jsx)("div",{class:"canyu-container",onMouseEnter:function(){return C(3)},onMouseLeave:function(){return c(3)},children:(0,u.jsxs)("a",{href:"https://github.com/alipay/ant-application-security-testing-benchmark/blob/main/code-of-conduct.md",target:"_blank",rel:"noopener noreferrer",children:[(0,u.jsx)("img",{src:B,alt:"\u793A\u4F8B\u56FE\u7247",class:"canyu-image"}),(0,u.jsx)("span",{class:"canyu-text",children:"\u884C\u4E3A\u51C6\u5219"})]})})]})]}),(0,u.jsx)("div",{style:{textAlign:"center",marginTop:"80px",marginBottom:"50px"},children:(0,u.jsx)("div",{class:"scene-text",children:"Maintainers"})}),(0,u.jsx)("div",{class:"avatar-container",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{class:"avatar",src:"/images/08\u5934\u50CF/01.png",alt:"Profile Avatar"}),(0,u.jsx)("img",{class:"avatar",src:"/images/08\u5934\u50CF/02.png",alt:"Profile Avatar"}),(0,u.jsx)("img",{class:"avatar",src:"/images/08\u5934\u50CF/03.png",alt:"Profile Avatar"}),(0,u.jsx)("img",{class:"avatar",src:"/images/08\u5934\u50CF/04.png",alt:"Profile Avatar"}),(0,u.jsx)("img",{class:"avatar",src:"/images/08\u5934\u50CF/05.png",alt:"Profile Avatar"})]})}),(0,u.jsxs)("div",{style:{backgroundImage:'url("/images/huobanBGC.png")',backgroundSize:"contain"},children:[(0,u.jsx)("div",{style:{textAlign:"center",marginTop:"80px"},children:(0,u.jsx)("div",{class:"scene-text",children:"\u751F\u6001\u4F19\u4F34"})}),(0,u.jsx)("div",{style:{textAlign:"center",marginTop:"16px",marginBottom:"44px",fontSize:"18px",color:"rgba(0, 0, 0, 0.45)"},children:"\u6392\u540D\u4E0D\u5206\u5148\u540E"}),(0,u.jsx)("div",{style:{paddingBottom:"80px"},children:(0,u.jsxs)("div",{class:"huoban-container",children:[(0,u.jsxs)("div",{class:"huoban-row",children:[(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u5E73\u5207.png",alt:"Image 1",class:"huoban-image"}),(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u4E2D\u56FD\u8BC4\u6D4B.png",alt:"Image 1",class:"huoban-image"}),(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u6D59\u6C5F\u5927\u5B66.png",alt:"Image 2",class:"huoban-image"}),(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u5F00\u653E.png",alt:"Image 3",class:"huoban-image"})]}),(0,u.jsxs)("div",{class:"huoban-row",children:[(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u963F\u91CC\u5DF4\u5DF4.png",alt:"Image 7",class:"huoban-image"}),(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u79D1\u5927.png",alt:"Image 8",class:"huoban-image"}),(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u6C34\u6728.png",alt:"Image 9",class:"huoban-image"}),(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u8682\u8681.png",alt:"Image 10",class:"huoban-image"})]}),(0,u.jsxs)("div",{class:"huoban-row",children:[(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u6597\u8C61.png",alt:"Image 4",class:"huoban-image"}),(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u7EDF\u4FE1.png",alt:"Image 5",class:"huoban-image"}),(0,u.jsx)("img",{src:"/images/06\u751F\u6001\u4F19\u4F34/\u871A\u8BED\u79D1\u6280.png",alt:"Image 1",class:"huoban-image"})]})]})})]}),(0,u.jsx)("div",{class:"footer",children:(0,u.jsxs)("div",{class:"footer-container",children:[(0,u.jsxs)("div",{class:"footer-left",children:[(0,u.jsx)("div",{class:"footer-logo",children:(0,u.jsx)("img",{src:"/images/07\u5E95\u90E8/bottomLogo.png",alt:"Logo"})}),(0,u.jsxs)("div",{class:"footer-email",children:[(0,u.jsx)("img",{src:"/images/07\u5E95\u90E8/emailLogo.png",alt:"Email Icon",class:"footer-email-icon"}),(0,u.jsx)("span",{class:"footer-email-address",children:"xast-contact@service.alipay.com"})]}),(0,u.jsxs)("div",{class:"footer-note",children:[(0,u.jsx)("a",{className:"linkBottom",href:"#",children:"\u793E\u533A\u4ECB\u7ECD"}),"   ",(0,u.jsx)(f,{type:"vertical",style:{backgroundColor:"#fff"}}),(0,u.jsx)("a",{className:"linkBottom",href:"https://www.yuque.com/u22090306/nxa79b",target:"_blank",rel:"noopener noreferrer",children:"\u793E\u533A\u6D3B\u52A8"}),(0,u.jsx)(f,{type:"vertical",style:{backgroundColor:"#fff"}}),(0,u.jsx)("a",{className:"linkBottom",href:"https://www.yuque.com/u22090306/nxa79b",target:"_blank",rel:"noopener noreferrer",children:"\u8BC4\u6D4B\u62A5\u544A"})]})]}),(0,u.jsxs)("div",{class:"footer-right",children:[(0,u.jsx)("img",{src:"/images/07\u5E95\u90E8/\u516C\u4F17\u53F7.png",alt:"QR Code 1",class:"footer-qrcode"}),(0,u.jsx)("img",{src:"/images/07\u5E95\u90E8/\u4EA4\u6D41\u7FA4.png",alt:"QR Code 2",class:"footer-qrcode"})]})]})})]})},iu={"zh-CN":"\u{1F1E8}\u{1F1F3}","en-US":"\u{1F1FA}\u{1F1F8}"},X={"zh-CN":"/images/01\u5934\u90E8/\u4E2D\u6587\u72B6\u6001.png","en-US":"/images/01\u5934\u90E8/\u82F1\u6587\u72B6\u6001.png"},J=function(){var i=(0,m.useState)("zh-CN"),r=g()(i,2),s=r[0],n=r[1],d=function(l){n(l.target.value)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{children:[(0,u.jsx)("nav",{class:"navbar",children:(0,u.jsxs)("div",{class:"content",children:[(0,u.jsx)("a",{href:"https://github.com/alipay/ant-application-security-testing-benchmark",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("div",{class:"logo",children:" "})}),(0,u.jsxs)("ul",{class:"nav-links",children:[(0,u.jsx)("li",{children:(0,u.jsx)("a",{children:"\u793E\u533A\u4ECB\u7ECD"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"https://www.yuque.com/u22090306/nxa79b",target:"_blank",children:"\u793E\u533A\u6D3B\u52A8"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"https://www.yuque.com/u22090306/nxa79b",target:"_blank",children:"\u8BC4\u6D4B\u62A5\u544A"})})]}),(0,u.jsx)("div",{className:"git-icon",children:(0,u.jsx)("a",{href:"https://github.com/alipay/ant-application-security-testing-benchmark",target:"_blank",children:(0,u.jsx)("img",{src:"/images/01\u5934\u90E8/github.png"})})}),(0,u.jsx)("div",{className:"language-icon",children:(0,u.jsx)("img",{src:X[s],alt:""})}),(0,u.jsx)("div",{class:"language-selector",children:(0,u.jsx)("span",{style:{lineHeight:"18px",color:"rgba(255, 255, 255, 1)"},children:"\u7B80\u4F53\u4E2D\u6587"})})]})}),(0,u.jsx)(V,{})]})})},Y=J}}]);

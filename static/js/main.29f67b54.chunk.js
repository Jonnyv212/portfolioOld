(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(67)},41:function(e,t,a){},42:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(31),r=a.n(s),o=(a(41),a(10)),c=a(11),A=a(13),m=a(12),i=a(14),u=(a(42),a(32)),p=a.n(u),h=a(8),E=a(33),d=a.n(E),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(A.a)(this,Object(m.a)(t).call(this,e))).nav=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Jonathan Vega"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{href:"#projects"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact"))))},a.header=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"headername"},l.a.createElement("h1",null,"Jonathan Vega"),l.a.createElement("p",null,"Software Developer")),l.a.createElement("div",{className:"list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},l.a.createElement("img",{src:"https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/github2.jpg"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#news"},l.a.createElement("img",{src:"https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/linkedin2.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:jonnyv212@hotmail.com?Subject=Hello"},l.a.createElement("img",{src:"https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/email6.png"}))))))},a.projects=function(e,t,a,n,s){return l.a.createElement("div",{className:"Pcontainer"},l.a.createElement("div",{className:"Pcontent"},l.a.createElement("div",{className:"Pimg"},l.a.createElement("img",{src:t,style:{boxShadow:"0 1rem 1rem rgba(0, 0, 0, 0.2)"}})),l.a.createElement("div",{className:"Pinfo"},l.a.createElement("div",{className:"Ptitle"},e),a)),l.a.createElement("div",{className:"Pbottom"},l.a.createElement("div",{className:"PbottomLinks"},l.a.createElement("a",{href:n},"Demo"),l.a.createElement("a",{href:s,target:"_blank"},l.a.createElement("img",{src:"https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/projects/source.png"}),"Source")),l.a.createElement("div",{className:"Pstacks"},l.a.createElement("ul",null,l.a.createElement("li",null,"ReactJS"),l.a.createElement("li",null,"JavaScript ")))))},a.projectLister=function(){for(var e=h.length,t=[],n=0;n<e;n++)t.push(a.projects(h[n].projectName,h[n].image,h[n].description,h[n].preview,h[n].source));return t},a.skillBlock=function(e,t,a){return l.a.createElement("div",{className:"skillBlock"},l.a.createElement("img",{src:e}),l.a.createElement("h3",{className:"skillType"},t),l.a.createElement("p",{className:"skillName"},a))},a.content=function(){return l.a.createElement("div",{id:"about"},l.a.createElement("div",null,"Description of who I am, what I do. Blah blah blah.",l.a.createElement("div",{className:"Resume"},l.a.createElement("h1",null,"Resume download button here. pdf"))),l.a.createElement("div",{className:"skills"},l.a.createElement("h1",null,"Skills"),l.a.createElement("div",{className:"skillContainer"},a.skillBlock("https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/frontend.png","Frontend",a.state.data),a.skillBlock("https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/backend.png","Backend","Skill Name Here"),a.skillBlock("https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/git.png","Other","Skill Name Here"))),l.a.createElement("div",{className:"Projects",id:"projects"},l.a.createElement("h2",null,"PROJECTS"),l.a.createElement(d.a,null,a.projectLister())))},a.footer=function(){return l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},l.a.createElement("img",{src:"https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/github2.jpg"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},l.a.createElement("img",{src:"https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/linkedin2.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},l.a.createElement("img",{src:"https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/outlook2.png"}))))},a.state={data:[]},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/db").then(function(t){for(var a=t.data.length,n=[],l=0;l<a;l++)l==a-1?n.push(t.data[l].skill_name):n.push(t.data[l].skill_name+", "),console.log("Inside state data: "+n);e.setState({data:n})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"nav"},this.nav()),l.a.createElement("div",null,this.header()),l.a.createElement("div",{className:"content"},this.content()),l.a.createElement("div",{className:"footer"},this.footer()))}}]),t}(n.Component),f=a(16),g=a(6),j=(a(64),function(e){function t(){return Object(o.a)(this,t),Object(A.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(g.a,{path:"/",component:v}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports=[{projectName:"Portfolio",image:"https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/projects/portfolio_preview.png",description:"The page you are currently viewing! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",preview:"Preview",source:"https://github.com/Jonnyv212/Portfolio"},{projectName:"CNECENTRAL",image:"https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/cnecentral_preview.png",description:"CNE Central description",preview:"Preview",source:"https://github.com/Jonnyv212/Portfolio"}]}},[[36,1,2]]]);
//# sourceMappingURL=main.29f67b54.chunk.js.map
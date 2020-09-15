(this["webpackJsonpuse-mapbox-gl-example"]=this["webpackJsonpuse-mapbox-gl-example"]||[]).push([[0],{11:function(e,t,n){e.exports=n(233)},18:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),s=n.n(r),c=(n(18),n(235)),l=n(234),i=n(5),m=n.n(i),p=function(){return(p=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u={style:"mapbox://styles/mapbox/streets-v11",center:[0,0],zoom:0};function f(e,t,n){Object(a.useEffect)((function(){var a=e.current;if(a){var o=null!=t?t:{},r=p(p(p({},u),o),{container:a}),s=new m.a.Map(r);return s.once("load",(function(){return n&&n(s)})),function(){s.remove()}}}),[])}var d=Object({NODE_ENV:"production",PUBLIC_URL:"/use-mapbox-gl",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MAPBOX_TOKEN||"pk.eyJ1IjoiZHF1bmJwIiwiYSI6ImNrZjEwNGphNzBuczQyd2xuYng4cjN4MjEifQ.oNhRDejc1ELUrre1pVL4EA";var g=function(){var e=Object(a.useRef)();return f(e,{style:"mapbox://styles/mapbox/streets-v11",accessToken:d}),o.a.createElement("section",{className:"container example"},o.a.createElement("h2",{className:"title"},"Basic Map"),o.a.createElement("div",{className:"map",ref:e}),o.a.createElement("div",null,o.a.createElement(c.a,{language:"javascript",style:l.a,customStyle:{borderRadius:"5px",padding:"1.5rem"}},'import React from "react";\nimport { useMapboxGl } from "use-mapbox-gl";\n\nfunction BasicMap() {\n  const containerRef = useRef();\n\n  useMapboxGl(containerRef, {\n    style: "mapbox://styles/mapbox/streets-v11",\n    accessToken: "your_access_token",\n  });\n\n  return <div ref={containerRef} />;\n}\n\nexport default BasicMap\n')))},y={version:8,sources:{osm:{type:"raster",tiles:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png","https://b.tile.openstreetmap.org/{z}/{x}/{y}.png","https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256}},layers:[{id:"osm",source:"osm",type:"raster"}]};var v=function(){var e=Object(a.useRef)();return f(e,{style:y,zoom:9,center:[30,50]}),o.a.createElement("section",{className:"container example"},o.a.createElement("h2",{className:"title"},"Without token"),o.a.createElement("div",{className:"map",ref:e}),o.a.createElement("div",null,o.a.createElement(c.a,{language:"javascript",style:l.a,customStyle:{borderRadius:"5px",padding:"1.5rem"}},'import React from "react";\nimport { useMapboxGl } from "use-mapbox-gl";\n\nconst osmStyle = {\n  version: 8,\n  sources: {\n    osm: {\n      type: "raster",\n      tiles: [\n        "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",\n        "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",\n        "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",\n      ],\n      tileSize: 256,\n    },\n  },\n  layers: [\n    {\n      id: "osm",\n      source: "osm",\n      type: "raster",\n    },\n  ],\n};\n\nfunction WithoutTokenMap() {\n  const containerRef = useRef();\n\n  useMapboxGl(containerRef, {\n    style: osmStyle,\n    zoom: 9,\n    center: [30, 50],\n  });\n\n  return <div ref={containerRef} />;\n}\n\nexport default WithoutTokenMap\n')))};var x=function(){return o.a.createElement("div",{className:"app"},o.a.createElement("header",{className:"container"},o.a.createElement("h1",{className:"logo"},o.a.createElement("a",{href:"https://github.com/dqunbp/use-mapbox-gl"},"use-mapbox-gl")," ","react hook")),o.a.createElement("main",null,o.a.createElement(g,null),o.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(232);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.180035e4.chunk.js.map
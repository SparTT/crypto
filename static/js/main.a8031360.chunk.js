(this.webpackJsonpteste=this.webpackJsonpteste||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=(a(12),a(1)),s=a(2),l=a(4),u=a(3),m=(a(13),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"priceContainer",value:function(){for(var e=this.props.price,t=Object.keys(e),a=Object.values(e),n=[],c=0;c<t.length;c++){var o=Number(this.props.qtd)*Number(a[c]),i=r.a.createElement(r.a.Fragment,{key:"".concat(t[c],"-").concat([c])},r.a.createElement("div",{className:"recent-price"},new Intl.NumberFormat("pt-BR",{style:"currency",currency:t[c]}).format(a[c])),r.a.createElement("div",{className:"owned-value"},"Owned: ",this.props.qtd," "),r.a.createElement("div",{className:"user-owned-value"},"Value: ",new Intl.NumberFormat("pt-BR",{style:"currency",currency:t[c]}).format(o)));n.push(i)}return r.a.createElement(r.a.Fragment,null,n)}},{key:"render",value:function(){var e=this.props.name;return e=e.charAt(0).toUpperCase()+e.slice(1),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"".concat(this.props.name),className:"price-container"},r.a.createElement("h2",null,e),this.priceContainer()))}}]),a}(n.Component)),p=(a(14),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={comparator:1,cryptoName:null,Data:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({cryptoName:Object.keys(this.props.data)[0]})}},{key:"setValue",value:function(e){this.setState({comparator:e.target.value})}},{key:"setCrypto",value:function(e){this.setState({cryptoName:e.target.value})}},{key:"options",value:function(){return Object.keys(this.props.data).map((function(e){return r.a.createElement("option",{value:e},e)}))}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.comparator,n=t.cryptoName,c=0,o=0;o<Object.values(this.props.data).length;o++)n===Object.keys(this.props.data)[o]&&(c=Object.values(this.props.data)[o],c=Object.values(c)[0]);var i=Number(a)*Number(c);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"result-value"},a," ",n," = ",new Intl.NumberFormat("pt-BR",{style:"currency",currency:this.props.currency}).format(i)),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{type:"number",value:a,onChange:function(t){return e.setValue(t)}}),r.a.createElement("select",{onChange:function(t){return e.setCrypto(t)}},this.options())))}}]),a}(n.Component)),h=(a(15),{cryptos:"Bitcoin,Ethereum,Monero",fiatCurrencies:"brl",data:[{name:"Bitcoin",qtd:.10888498},{name:"Monero",qtd:1.095803},{name:"Ethereum",qtd:1.022981952}]}),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,Data:[]},n}return Object(s.a)(a,[{key:"getData",value:function(){var e=this,t=h.fiatCurrencies,a=h.cryptos;fetch("https://api.coingecko.com/api/v3/simple/price?ids=".concat(a,"&vs_currencies=").concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,Data:t})})).catch((function(t){e.setState({error:t})}))}},{key:"componentDidMount",value:function(){var e=this;this.getData(),setInterval((function(){e.getData()}),1e4)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.Data;if(!1===a)return r.a.createElement("div",null,"loading");if(null!==t)return r.a.createElement("div",null,t);for(var c=Object.keys(n),o=Object.values(n),i=[],s=0,l=0,u=0;u<o.length;u++){for(var v=0;v<o.length;v++){if(h.data[v].name.toLowerCase()===c[u].toLowerCase())l+=Number(Object.values(o[u])[0])*Number(h.data[v].qtd),s=h.data[v].qtd}var d=r.a.createElement(m,{key:"".concat(c[u],"-").concat([u]),name:c[u],price:o[u],qtd:s});i.push(d)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{data:n,currency:h.fiatCurrencies}),r.a.createElement("div",{className:"total-container"},r.a.createElement("h2",{className:"title"},"Total em conta"),r.a.createElement("div",{className:"total-fiat"},r.a.createElement("h3",null,new Intl.NumberFormat("pt-BR",{style:"currency",currency:h.fiatCurrencies}).format(l)))),r.a.createElement("div",{className:"crypto-container"},r.a.createElement("h3",{className:"title"},"Crypto Prices"),i))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a8031360.chunk.js.map
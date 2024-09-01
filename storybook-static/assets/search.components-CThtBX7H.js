import{u as j,j as o,c as y,f as b,P as u,R as C,F as N}from"./common.testdata-DhpCxAve.js";import{r as i,R as m}from"./index-DJO9vBfz.js";const v=i.createContext(null);v.displayName="InputGroupContext";const h=i.forwardRef(({className:e,bsPrefix:a,as:n="span",...t},r)=>(a=j(a,"input-group-text"),o.jsx(n,{ref:r,className:y(e,a),...t})));h.displayName="InputGroupText";const E=e=>o.jsx(h,{children:o.jsx(b,{type:"checkbox",...e})}),T=e=>o.jsx(h,{children:o.jsx(b,{type:"radio",...e})}),O=i.forwardRef(({bsPrefix:e,size:a,hasValidation:n,className:t,as:r="div",...s},c)=>{e=j(e,"input-group");const p=i.useMemo(()=>({}),[]);return o.jsx(v.Provider,{value:p,children:o.jsx(r,{ref:c,...s,className:y(t,e,a&&`${e}-${a}`,n&&"has-validation")})})});O.displayName="InputGroup";const F=Object.assign(O,{Text:h,Radio:T,Checkbox:E});var R=["color","size","title","className"];function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}function S(e,a){if(e==null)return{};var n=G(e,a),t,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function G(e,a){if(e==null)return{};var n={},t=Object.keys(e),r,s;for(s=0;s<t.length;s++)r=t[s],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}var g=i.forwardRef(function(e,a){var n=e.color,t=e.size,r=e.title,s=e.className,c=S(e,R);return m.createElement("svg",d({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:n,className:["bi","bi-search",s].filter(Boolean).join(" ")},c),r?m.createElement("title",null,r):null,m.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"}))});g.propTypes={color:u.string,size:u.oneOfType([u.string,u.number]),title:u.string,className:u.string};g.defaultProps={color:"currentColor",size:"1em",title:null,className:""};const x="search",k=(e,a,n)=>{const t=[];return a==null||a.forEach(r=>{M(e,r,n)?r.filters=C(x,r.filters):r.filters.indexOf(x)<0&&r.filters.push(x),t.push(r)}),t},M=(e,a,n)=>{let t=e.length==0;const r=a.data;if(r){const s=e.toUpperCase();n.forEach(c=>{const p=r[c];typeof p=="string"&&(t=t||p.toUpperCase().indexOf(s)>-1)})}return t},P=({columns:e,data:a,name:n,handleDisplayedRows:t})=>{const r=i.useMemo(()=>{let l="Search Bar";return n&&n.length>0&&(l=n+" "+l),l},[n]),s=i.useMemo(()=>{const l=[];return e==null||e.forEach(f=>{f.searchable&&f.accessorKey&&l.push(f.accessorKey.toString())}),l},[e]),c=i.useMemo(()=>s&&s.length>0&&typeof t<"u",[s,t]),p=i.useCallback(l=>{if(t){const f=l.toUpperCase(),I=k(f,a,s);t(I)}},[e,a]);return o.jsx(o.Fragment,{children:c?o.jsxs(o.Fragment,{children:[o.jsx(N.Control,{placeholder:"Search","aria-label":r+" Search Input",tabIndex:0,onChange:l=>p(l.target.value)}),o.jsx(F.Text,{children:o.jsx(g,{})})]}):null})};export{F as I,P as R};

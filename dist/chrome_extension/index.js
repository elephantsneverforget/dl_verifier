var joiBrowser_min = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(self,(function(){return e={1238:e=>{e.exports={version:"17.4.2"};},7629:(e,t,r)=>{const s=r(375),n=r(8571),a=r(9474),o=r(1687),i=r(8652),l=r(8160),c=r(3292),u=r(6354),f=r(8901),m=r(9708),h=r(6914),d=r(2294),p=r(6133),g=r(1152),y=r(8863),b=r(2036),v={Base:class{constructor(e){this.type=e,this.$_root=null,this._definition={},this._reset();}_reset(){this._ids=new d.Ids,this._preferences=null,this._refs=new p.Manager,this._cache=null,this._valids=null,this._invalids=null,this._flags={},this._rules=[],this._singleRules=new Map,this.$_terms={},this.$_temp={ruleset:null,whens:{}};}describe(){return s("function"==typeof m.describe,"Manifest functionality disabled"),m.describe(this)}allow(...e){return l.verifyFlat(e,"allow"),this._values(e,"_valids")}alter(e){s(e&&"object"==typeof e&&!Array.isArray(e),"Invalid targets argument"),s(!this._inRuleset(),"Cannot set alterations inside a ruleset");const t=this.clone();t.$_terms.alterations=t.$_terms.alterations||[];for(const r in e){const n=e[r];s("function"==typeof n,"Alteration adjuster for",r,"must be a function"),t.$_terms.alterations.push({target:r,adjuster:n});}return t.$_temp.ruleset=!1,t}artifact(e){return s(void 0!==e,"Artifact cannot be undefined"),s(!this._cache,"Cannot set an artifact with a rule cache"),this.$_setFlag("artifact",e)}cast(e){return s(!1===e||"string"==typeof e,"Invalid to value"),s(!1===e||this._definition.cast[e],"Type",this.type,"does not support casting to",e),this.$_setFlag("cast",!1===e?void 0:e)}default(e,t){return this._default("default",e,t)}description(e){return s(e&&"string"==typeof e,"Description must be a non-empty string"),this.$_setFlag("description",e)}empty(e){const t=this.clone();return void 0!==e&&(e=t.$_compile(e,{override:!1})),t.$_setFlag("empty",e,{clone:!1})}error(e){return s(e,"Missing error"),s(e instanceof Error||"function"==typeof e,"Must provide a valid Error object or a function"),this.$_setFlag("error",e)}example(e,t={}){return s(void 0!==e,"Missing example"),l.assertOptions(t,["override"]),this._inner("examples",e,{single:!0,override:t.override})}external(e,t){return "object"==typeof e&&(s(!t,"Cannot combine options with description"),t=e.description,e=e.method),s("function"==typeof e,"Method must be a function"),s(void 0===t||t&&"string"==typeof t,"Description must be a non-empty string"),this._inner("externals",{method:e,description:t},{single:!0})}failover(e,t){return this._default("failover",e,t)}forbidden(){return this.presence("forbidden")}id(e){return e?(s("string"==typeof e,"id must be a non-empty string"),s(/^[^\.]+$/.test(e),"id cannot contain period character"),this.$_setFlag("id",e)):this.$_setFlag("id",void 0)}invalid(...e){return this._values(e,"_invalids")}label(e){return s(e&&"string"==typeof e,"Label name must be a non-empty string"),this.$_setFlag("label",e)}meta(e){return s(void 0!==e,"Meta cannot be undefined"),this._inner("metas",e,{single:!0})}note(...e){s(e.length,"Missing notes");for(const t of e)s(t&&"string"==typeof t,"Notes must be non-empty strings");return this._inner("notes",e)}only(e=!0){return s("boolean"==typeof e,"Invalid mode:",e),this.$_setFlag("only",e)}optional(){return this.presence("optional")}prefs(e){s(e,"Missing preferences"),s(void 0===e.context,"Cannot override context"),s(void 0===e.externals,"Cannot override externals"),s(void 0===e.warnings,"Cannot override warnings"),s(void 0===e.debug,"Cannot override debug"),l.checkPreferences(e);const t=this.clone();return t._preferences=l.preferences(t._preferences,e),t}presence(e){return s(["optional","required","forbidden"].includes(e),"Unknown presence mode",e),this.$_setFlag("presence",e)}raw(e=!0){return this.$_setFlag("result",e?"raw":void 0)}result(e){return s(["raw","strip"].includes(e),"Unknown result mode",e),this.$_setFlag("result",e)}required(){return this.presence("required")}strict(e){const t=this.clone(),r=void 0!==e&&!e;return t._preferences=l.preferences(t._preferences,{convert:r}),t}strip(e=!0){return this.$_setFlag("result",e?"strip":void 0)}tag(...e){s(e.length,"Missing tags");for(const t of e)s(t&&"string"==typeof t,"Tags must be non-empty strings");return this._inner("tags",e)}unit(e){return s(e&&"string"==typeof e,"Unit name must be a non-empty string"),this.$_setFlag("unit",e)}valid(...e){l.verifyFlat(e,"valid");const t=this.allow(...e);return t.$_setFlag("only",!!t._valids,{clone:!1}),t}when(e,t){const r=this.clone();r.$_terms.whens||(r.$_terms.whens=[]);const n=c.when(r,e,t);if(!["any","link"].includes(r.type)){const e=n.is?[n]:n.switch;for(const t of e)s(!t.then||"any"===t.then.type||t.then.type===r.type,"Cannot combine",r.type,"with",t.then&&t.then.type),s(!t.otherwise||"any"===t.otherwise.type||t.otherwise.type===r.type,"Cannot combine",r.type,"with",t.otherwise&&t.otherwise.type);}return r.$_terms.whens.push(n),r.$_mutateRebuild()}cache(e){s(!this._inRuleset(),"Cannot set caching inside a ruleset"),s(!this._cache,"Cannot override schema cache"),s(void 0===this._flags.artifact,"Cannot cache a rule with an artifact");const t=this.clone();return t._cache=e||i.provider.provision(),t.$_temp.ruleset=!1,t}clone(){const e=Object.create(Object.getPrototypeOf(this));return this._assign(e)}concat(e){s(l.isSchema(e),"Invalid schema object"),s("any"===this.type||"any"===e.type||e.type===this.type,"Cannot merge type",this.type,"with another type:",e.type),s(!this._inRuleset(),"Cannot concatenate onto a schema with open ruleset"),s(!e._inRuleset(),"Cannot concatenate a schema with open ruleset");let t=this.clone();if("any"===this.type&&"any"!==e.type){const r=e.clone();for(const e of Object.keys(t))"type"!==e&&(r[e]=t[e]);t=r;}t._ids.concat(e._ids),t._refs.register(e,p.toSibling),t._preferences=t._preferences?l.preferences(t._preferences,e._preferences):e._preferences,t._valids=b.merge(t._valids,e._valids,e._invalids),t._invalids=b.merge(t._invalids,e._invalids,e._valids);for(const r of e._singleRules.keys())t._singleRules.has(r)&&(t._rules=t._rules.filter((e=>e.keep||e.name!==r)),t._singleRules.delete(r));for(const r of e._rules)e._definition.rules[r.method].multi||t._singleRules.set(r.name,r),t._rules.push(r);if(t._flags.empty&&e._flags.empty){t._flags.empty=t._flags.empty.concat(e._flags.empty);const r=Object.assign({},e._flags);delete r.empty,o(t._flags,r);}else if(e._flags.empty){t._flags.empty=e._flags.empty;const r=Object.assign({},e._flags);delete r.empty,o(t._flags,r);}else o(t._flags,e._flags);for(const r in e.$_terms){const s=e.$_terms[r];s?t.$_terms[r]?t.$_terms[r]=t.$_terms[r].concat(s):t.$_terms[r]=s.slice():t.$_terms[r]||(t.$_terms[r]=s);}return this.$_root._tracer&&this.$_root._tracer._combine(t,[this,e]),t.$_mutateRebuild()}extend(e){return s(!e.base,"Cannot extend type with another base"),f.type(this,e)}extract(e){return e=Array.isArray(e)?e:e.split("."),this._ids.reach(e)}fork(e,t){s(!this._inRuleset(),"Cannot fork inside a ruleset");let r=this;for(let s of [].concat(e))s=Array.isArray(s)?s:s.split("."),r=r._ids.fork(s,t,r);return r.$_temp.ruleset=!1,r}rule(e){const t=this._definition;l.assertOptions(e,Object.keys(t.modifiers)),s(!1!==this.$_temp.ruleset,"Cannot apply rules to empty ruleset or the last rule added does not support rule properties");const r=null===this.$_temp.ruleset?this._rules.length-1:this.$_temp.ruleset;s(r>=0&&r<this._rules.length,"Cannot apply rules to empty ruleset");const a=this.clone();for(let o=r;o<a._rules.length;++o){const r=a._rules[o],i=n(r);for(const n in e)t.modifiers[n](i,e[n]),s(i.name===r.name,"Cannot change rule name");a._rules[o]=i,a._singleRules.get(i.name)===r&&a._singleRules.set(i.name,i);}return a.$_temp.ruleset=!1,a.$_mutateRebuild()}get ruleset(){s(!this._inRuleset(),"Cannot start a new ruleset without closing the previous one");const e=this.clone();return e.$_temp.ruleset=e._rules.length,e}get $(){return this.ruleset}tailor(e){e=[].concat(e),s(!this._inRuleset(),"Cannot tailor inside a ruleset");let t=this;if(this.$_terms.alterations)for(const{target:r,adjuster:n}of this.$_terms.alterations)e.includes(r)&&(t=n(t),s(l.isSchema(t),"Alteration adjuster for",r,"failed to return a schema object"));return t=t.$_modify({each:t=>t.tailor(e),ref:!1}),t.$_temp.ruleset=!1,t.$_mutateRebuild()}tracer(){return g.location?g.location(this):this}validate(e,t){return y.entry(e,this,t)}validateAsync(e,t){return y.entryAsync(e,this,t)}$_addRule(e){"string"==typeof e&&(e={name:e}),s(e&&"object"==typeof e,"Invalid options"),s(e.name&&"string"==typeof e.name,"Invalid rule name");for(const t in e)s("_"!==t[0],"Cannot set private rule properties");const t=Object.assign({},e);t._resolve=[],t.method=t.method||t.name;const r=this._definition.rules[t.method],n=t.args;s(r,"Unknown rule",t.method);const a=this.clone();if(n){s(1===Object.keys(n).length||Object.keys(n).length===this._definition.rules[t.name].args.length,"Invalid rule definition for",this.type,t.name);for(const e in n){let o=n[e];if(void 0!==o){if(r.argsByName){const i=r.argsByName.get(e);if(i.ref&&l.isResolvable(o))t._resolve.push(e),a.$_mutateRegister(o);else if(i.normalize&&(o=i.normalize(o),n[e]=o),i.assert){const t=l.validateArg(o,e,i);s(!t,t,"or reference");}}n[e]=o;}else delete n[e];}}return r.multi||(a._ruleRemove(t.name,{clone:!1}),a._singleRules.set(t.name,t)),!1===a.$_temp.ruleset&&(a.$_temp.ruleset=null),r.priority?a._rules.unshift(t):a._rules.push(t),a}$_compile(e,t){return c.schema(this.$_root,e,t)}$_createError(e,t,r,s,n,a={}){const o=!1!==a.flags?this._flags:{},i=a.messages?h.merge(this._definition.messages,a.messages):this._definition.messages;return new u.Report(e,t,r,o,i,s,n)}$_getFlag(e){return this._flags[e]}$_getRule(e){return this._singleRules.get(e)}$_mapLabels(e){return e=Array.isArray(e)?e:e.split("."),this._ids.labels(e)}$_match(e,t,r,s){(r=Object.assign({},r)).abortEarly=!0,r._externals=!1,t.snapshot();const n=!y.validate(e,this,t,r,s).errors;return t.restore(),n}$_modify(e){return l.assertOptions(e,["each","once","ref","schema"]),d.schema(this,e)||this}$_mutateRebuild(){return s(!this._inRuleset(),"Cannot add this rule inside a ruleset"),this._refs.reset(),this._ids.reset(),this.$_modify({each:(e,{source:t,name:r,path:s,key:n})=>{const a=this._definition[t][r]&&this._definition[t][r].register;!1!==a&&this.$_mutateRegister(e,{family:a,key:n});}}),this._definition.rebuild&&this._definition.rebuild(this),this.$_temp.ruleset=!1,this}$_mutateRegister(e,{family:t,key:r}={}){this._refs.register(e,t),this._ids.register(e,{key:r});}$_property(e){return this._definition.properties[e]}$_reach(e){return this._ids.reach(e)}$_rootReferences(){return this._refs.roots()}$_setFlag(e,t,r={}){s("_"===e[0]||!this._inRuleset(),"Cannot set flag inside a ruleset");const n=this._definition.flags[e]||{};if(a(t,n.default)&&(t=void 0),a(t,this._flags[e]))return this;const o=!1!==r.clone?this.clone():this;return void 0!==t?(o._flags[e]=t,o.$_mutateRegister(t)):delete o._flags[e],"_"!==e[0]&&(o.$_temp.ruleset=!1),o}$_parent(e,...t){return this[e][l.symbols.parent].call(this,...t)}$_validate(e,t,r){return y.validate(e,this,t,r)}_assign(e){e.type=this.type,e.$_root=this.$_root,e.$_temp=Object.assign({},this.$_temp),e.$_temp.whens={},e._ids=this._ids.clone(),e._preferences=this._preferences,e._valids=this._valids&&this._valids.clone(),e._invalids=this._invalids&&this._invalids.clone(),e._rules=this._rules.slice(),e._singleRules=n(this._singleRules,{shallow:!0}),e._refs=this._refs.clone(),e._flags=Object.assign({},this._flags),e._cache=null,e.$_terms={};for(const t in this.$_terms)e.$_terms[t]=this.$_terms[t]?this.$_terms[t].slice():null;e.$_super={};for(const t in this.$_super)e.$_super[t]=this._super[t].bind(e);return e}_bare(){const e=this.clone();e._reset();const t=e._definition.terms;for(const r in t){const s=t[r];e.$_terms[r]=s.init;}return e.$_mutateRebuild()}_default(e,t,r={}){return l.assertOptions(r,"literal"),s(void 0!==t,"Missing",e,"value"),s("function"==typeof t||!r.literal,"Only function value supports literal option"),"function"==typeof t&&r.literal&&(t={[l.symbols.literal]:!0,literal:t}),this.$_setFlag(e,t)}_generate(e,t,r){if(!this.$_terms.whens)return {schema:this};const s=[],n=[];for(let a=0;a<this.$_terms.whens.length;++a){const o=this.$_terms.whens[a];if(o.concat){s.push(o.concat),n.push("".concat(a,".concat"));continue}const i=o.ref?o.ref.resolve(e,t,r):e,l=o.is?[o]:o.switch,c=n.length;for(let c=0;c<l.length;++c){const{is:u,then:f,otherwise:m}=l[c],h="".concat(a).concat(o.switch?"."+c:"");if(u.$_match(i,t.nest(u,"".concat(h,".is")),r)){if(f){const a=t.localize([...t.path,"".concat(h,".then")],t.ancestors,t.schemas),{schema:o,id:i}=f._generate(e,a,r);s.push(o),n.push("".concat(h,".then").concat(i?"(".concat(i,")"):""));break}}else if(m){const a=t.localize([...t.path,"".concat(h,".otherwise")],t.ancestors,t.schemas),{schema:o,id:i}=m._generate(e,a,r);s.push(o),n.push("".concat(h,".otherwise").concat(i?"(".concat(i,")"):""));break}}if(o.break&&n.length>c)break}const a=n.join(", ");if(t.mainstay.tracer.debug(t,"rule","when",a),!a)return {schema:this};if(!t.mainstay.tracer.active&&this.$_temp.whens[a])return {schema:this.$_temp.whens[a],id:a};let o=this;this._definition.generate&&(o=this._definition.generate(this,e,t,r));for(const e of s)o=o.concat(e);return this.$_root._tracer&&this.$_root._tracer._combine(o,[this,...s]),this.$_temp.whens[a]=o,{schema:o,id:a}}_inner(e,t,r={}){s(!this._inRuleset(),"Cannot set ".concat(e," inside a ruleset"));const n=this.clone();return n.$_terms[e]&&!r.override||(n.$_terms[e]=[]),r.single?n.$_terms[e].push(t):n.$_terms[e].push(...t),n.$_temp.ruleset=!1,n}_inRuleset(){return null!==this.$_temp.ruleset&&!1!==this.$_temp.ruleset}_ruleRemove(e,t={}){if(!this._singleRules.has(e))return this;const r=!1!==t.clone?this.clone():this;r._singleRules.delete(e);const s=[];for(let t=0;t<r._rules.length;++t){const n=r._rules[t];n.name!==e||n.keep?s.push(n):r._inRuleset()&&t<r.$_temp.ruleset&&--r.$_temp.ruleset;}return r._rules=s,r}_values(e,t){l.verifyFlat(e,t.slice(1,-1));const r=this.clone(),n=e[0]===l.symbols.override;if(n&&(e=e.slice(1)),!r[t]&&e.length?r[t]=new b:n&&(r[t]=e.length?new b:null,r.$_mutateRebuild()),!r[t])return r;n&&r[t].override();for(const n of e){s(void 0!==n,"Cannot call allow/valid/invalid with undefined"),s(n!==l.symbols.override,"Override must be the first value");const e="_invalids"===t?"_valids":"_invalids";r[e]&&(r[e].remove(n),r[e].length||(s("_valids"===t||!r._flags.only,"Setting invalid value",n,"leaves schema rejecting all values due to previous valid rule"),r[e]=null)),r[t].add(n,r._refs);}return r}}};v.Base.prototype[l.symbols.any]={version:l.version,compile:c.compile,root:"$_root"},v.Base.prototype.isImmutable=!0,v.Base.prototype.deny=v.Base.prototype.invalid,v.Base.prototype.disallow=v.Base.prototype.invalid,v.Base.prototype.equal=v.Base.prototype.valid,v.Base.prototype.exist=v.Base.prototype.required,v.Base.prototype.not=v.Base.prototype.invalid,v.Base.prototype.options=v.Base.prototype.prefs,v.Base.prototype.preferences=v.Base.prototype.prefs,e.exports=new v.Base;},8652:(e,t,r)=>{const s=r(375),n=r(8571),a=r(8160),o={max:1e3,supported:new Set(["undefined","boolean","number","string"])};t.provider={provision:e=>new o.Cache(e)},o.Cache=class{constructor(e={}){a.assertOptions(e,["max"]),s(void 0===e.max||e.max&&e.max>0&&isFinite(e.max),"Invalid max cache size"),this._max=e.max||o.max,this._map=new Map,this._list=new o.List;}get length(){return this._map.size}set(e,t){if(null!==e&&!o.supported.has(typeof e))return;let r=this._map.get(e);if(r)return r.value=t,void this._list.first(r);r=this._list.unshift({key:e,value:t}),this._map.set(e,r),this._compact();}get(e){const t=this._map.get(e);if(t)return this._list.first(t),n(t.value)}_compact(){if(this._map.size>this._max){const e=this._list.pop();this._map.delete(e.key);}}},o.List=class{constructor(){this.tail=null,this.head=null;}unshift(e){return e.next=null,e.prev=this.head,this.head&&(this.head.next=e),this.head=e,this.tail||(this.tail=e),e}first(e){e!==this.head&&(this._remove(e),this.unshift(e));}pop(){return this._remove(this.tail)}_remove(e){const{next:t,prev:r}=e;return t.prev=r,r&&(r.next=t),e===this.tail&&(this.tail=t),e.prev=null,e.next=null,e}};},8160:(e,t,r)=>{const s=r(375),n=r(7916),a=r(1238);let o,i;const l={isoDate:/^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/};t.version=a.version,t.defaults={abortEarly:!0,allowUnknown:!1,artifacts:!1,cache:!0,context:null,convert:!0,dateFormat:"iso",errors:{escapeHtml:!1,label:"path",language:null,render:!0,stack:!1,wrap:{label:'"',array:"[]"}},externals:!0,messages:{},nonEnumerables:!1,noDefaults:!1,presence:"optional",skipFunctions:!1,stripUnknown:!1,warnings:!1},t.symbols={any:Symbol.for("@hapi/joi/schema"),arraySingle:Symbol("arraySingle"),deepDefault:Symbol("deepDefault"),errors:Symbol("errors"),literal:Symbol("literal"),override:Symbol("override"),parent:Symbol("parent"),prefs:Symbol("prefs"),ref:Symbol("ref"),template:Symbol("template"),values:Symbol("values")},t.assertOptions=function(e,t,r="Options"){s(e&&"object"==typeof e&&!Array.isArray(e),"Options must be of type object");const n=Object.keys(e).filter((e=>!t.includes(e)));s(0===n.length,"".concat(r," contain unknown keys: ").concat(n));},t.checkPreferences=function(e){i=i||r(3378);const t=i.preferences.validate(e);if(t.error)throw new n([t.error.details[0].message])},t.compare=function(e,t,r){switch(r){case"=":return e===t;case">":return e>t;case"<":return e<t;case">=":return e>=t;case"<=":return e<=t}},t.default=function(e,t){return void 0===e?t:e},t.isIsoDate=function(e){return l.isoDate.test(e)},t.isNumber=function(e){return "number"==typeof e&&!isNaN(e)},t.isResolvable=function(e){return !!e&&(e[t.symbols.ref]||e[t.symbols.template])},t.isSchema=function(e,r={}){const n=e&&e[t.symbols.any];return !!n&&(s(r.legacy||n.version===t.version,"Cannot mix different versions of joi schemas"),!0)},t.isValues=function(e){return e[t.symbols.values]},t.limit=function(e){return Number.isSafeInteger(e)&&e>=0},t.preferences=function(e,s){o=o||r(6914),e=e||{},s=s||{};const n=Object.assign({},e,s);return s.errors&&e.errors&&(n.errors=Object.assign({},e.errors,s.errors),n.errors.wrap=Object.assign({},e.errors.wrap,s.errors.wrap)),s.messages&&(n.messages=o.compile(s.messages,e.messages)),delete n[t.symbols.prefs],n},t.tryWithPath=function(e,t,r={}){try{return e()}catch(e){throw void 0!==e.path?e.path=t+"."+e.path:e.path=t,r.append&&(e.message="".concat(e.message," (").concat(e.path,")")),e}},t.validateArg=function(e,r,{assert:s,message:n}){if(t.isSchema(s)){const t=s.validate(e);if(!t.error)return;return t.error.message}if(!s(e))return r?"".concat(r," ").concat(n):n},t.verifyFlat=function(e,t){for(const r of e)s(!Array.isArray(r),"Method no longer accepts array arguments:",t);};},3292:(e,t,r)=>{const s=r(375),n=r(8160),a=r(6133),o={};t.schema=function(e,t,r={}){n.assertOptions(r,["appendPath","override"]);try{return o.schema(e,t,r)}catch(e){throw r.appendPath&&void 0!==e.path&&(e.message="".concat(e.message," (").concat(e.path,")")),e}},o.schema=function(e,t,r){s(void 0!==t,"Invalid undefined schema"),Array.isArray(t)&&(s(t.length,"Invalid empty array schema"),1===t.length&&(t=t[0]));const a=(t,...s)=>!1!==r.override?t.valid(e.override,...s):t.valid(...s);if(o.simple(t))return a(e,t);if("function"==typeof t)return e.custom(t);if(s("object"==typeof t,"Invalid schema content:",typeof t),n.isResolvable(t))return a(e,t);if(n.isSchema(t))return t;if(Array.isArray(t)){for(const r of t)if(!o.simple(r))return e.alternatives().try(...t);return a(e,...t)}return t instanceof RegExp?e.string().regex(t):t instanceof Date?a(e.date(),t):(s(Object.getPrototypeOf(t)===Object.getPrototypeOf({}),"Schema can only contain plain objects"),e.object().keys(t))},t.ref=function(e,t){return a.isRef(e)?e:a.create(e,t)},t.compile=function(e,r,a={}){n.assertOptions(a,["legacy"]);const i=r&&r[n.symbols.any];if(i)return s(a.legacy||i.version===n.version,"Cannot mix different versions of joi schemas:",i.version,n.version),r;if("object"!=typeof r||!a.legacy)return t.schema(e,r,{appendPath:!0});const l=o.walk(r);return l?l.compile(l.root,r):t.schema(e,r,{appendPath:!0})},o.walk=function(e){if("object"!=typeof e)return null;if(Array.isArray(e)){for(const t of e){const e=o.walk(t);if(e)return e}return null}const t=e[n.symbols.any];if(t)return {root:e[t.root],compile:t.compile};s(Object.getPrototypeOf(e)===Object.getPrototypeOf({}),"Schema can only contain plain objects");for(const t in e){const r=o.walk(e[t]);if(r)return r}return null},o.simple=function(e){return null===e||["boolean","string","number"].includes(typeof e)},t.when=function(e,r,i){if(void 0===i&&(s(r&&"object"==typeof r,"Missing options"),i=r,r=a.create(".")),Array.isArray(i)&&(i={switch:i}),n.assertOptions(i,["is","not","then","otherwise","switch","break"]),n.isSchema(r))return s(void 0===i.is,'"is" can not be used with a schema condition'),s(void 0===i.not,'"not" can not be used with a schema condition'),s(void 0===i.switch,'"switch" can not be used with a schema condition'),o.condition(e,{is:r,then:i.then,otherwise:i.otherwise,break:i.break});if(s(a.isRef(r)||"string"==typeof r,"Invalid condition:",r),s(void 0===i.not||void 0===i.is,'Cannot combine "is" with "not"'),void 0===i.switch){let l=i;void 0!==i.not&&(l={is:i.not,then:i.otherwise,otherwise:i.then,break:i.break});let c=void 0!==l.is?e.$_compile(l.is):e.$_root.invalid(null,!1,0,"").required();return s(void 0!==l.then||void 0!==l.otherwise,'options must have at least one of "then", "otherwise", or "switch"'),s(void 0===l.break||void 0===l.then||void 0===l.otherwise,"Cannot specify then, otherwise, and break all together"),void 0===i.is||a.isRef(i.is)||n.isSchema(i.is)||(c=c.required()),o.condition(e,{ref:t.ref(r),is:c,then:l.then,otherwise:l.otherwise,break:l.break})}s(Array.isArray(i.switch),'"switch" must be an array'),s(void 0===i.is,'Cannot combine "switch" with "is"'),s(void 0===i.not,'Cannot combine "switch" with "not"'),s(void 0===i.then,'Cannot combine "switch" with "then"');const l={ref:t.ref(r),switch:[],break:i.break};for(let t=0;t<i.switch.length;++t){const r=i.switch[t],o=t===i.switch.length-1;n.assertOptions(r,o?["is","then","otherwise"]:["is","then"]),s(void 0!==r.is,'Switch statement missing "is"'),s(void 0!==r.then,'Switch statement missing "then"');const c={is:e.$_compile(r.is),then:e.$_compile(r.then)};if(a.isRef(r.is)||n.isSchema(r.is)||(c.is=c.is.required()),o){s(void 0===i.otherwise||void 0===r.otherwise,'Cannot specify "otherwise" inside and outside a "switch"');const t=void 0!==i.otherwise?i.otherwise:r.otherwise;void 0!==t&&(s(void 0===l.break,"Cannot specify both otherwise and break"),c.otherwise=e.$_compile(t));}l.switch.push(c);}return l},o.condition=function(e,t){for(const r of ["then","otherwise"])void 0===t[r]?delete t[r]:t[r]=e.$_compile(t[r]);return t};},6354:(e,t,r)=>{const s=r(5688),n=r(8160),a=r(3328);t.Report=class{constructor(e,r,s,n,a,o,i){if(this.code=e,this.flags=n,this.messages=a,this.path=o.path,this.prefs=i,this.state=o,this.value=r,this.message=null,this.template=null,this.local=s||{},this.local.label=t.label(this.flags,this.state,this.prefs,this.messages),void 0===this.value||this.local.hasOwnProperty("value")||(this.local.value=this.value),this.path.length){const e=this.path[this.path.length-1];"object"!=typeof e&&(this.local.key=e);}}_setTemplate(e){if(this.template=e,!this.flags.label&&0===this.path.length){const e=this._template(this.template,"root");e&&(this.local.label=e);}}toString(){if(this.message)return this.message;const e=this.code;if(!this.prefs.errors.render)return this.code;const t=this._template(this.template)||this._template(this.prefs.messages)||this._template(this.messages);return void 0===t?'Error code "'.concat(e,'" is not defined, your custom type is missing the correct messages definition'):(this.message=t.render(this.value,this.state,this.prefs,this.local,{errors:this.prefs.errors,messages:[this.prefs.messages,this.messages]}),this.prefs.errors.label||(this.message=this.message.replace(/^"" /,"").trim()),this.message)}_template(e,r){return t.template(this.value,e,r||this.code,this.state,this.prefs)}},t.path=function(e){let t="";for(const r of e)"object"!=typeof r&&("string"==typeof r?(t&&(t+="."),t+=r):t+="[".concat(r,"]"));return t},t.template=function(e,t,r,s,o){if(!t)return;if(a.isTemplate(t))return "root"!==r?t:null;let i=o.errors.language;return n.isResolvable(i)&&(i=i.resolve(e,s,o)),i&&t[i]&&void 0!==t[i][r]?t[i][r]:t[r]},t.label=function(e,r,s,n){if(e.label)return e.label;if(!s.errors.label)return "";let a=r.path;"key"===s.errors.label&&r.path.length>1&&(a=r.path.slice(-1));return t.path(a)||t.template(null,s.messages,"root",r,s)||n&&t.template(null,n,"root",r,s)||"value"},t.process=function(e,r,s){if(!e)return null;const{override:n,message:a,details:o}=t.details(e);if(n)return n;if(s.errors.stack)return new t.ValidationError(a,o,r);const i=Error.stackTraceLimit;Error.stackTraceLimit=0;const l=new t.ValidationError(a,o,r);return Error.stackTraceLimit=i,l},t.details=function(e,t={}){let r=[];const s=[];for(const n of e){if(n instanceof Error){if(!1!==t.override)return {override:n};const e=n.toString();r.push(e),s.push({message:e,type:"override",context:{error:n}});continue}const e=n.toString();r.push(e),s.push({message:e,path:n.path.filter((e=>"object"!=typeof e)),type:n.code,context:n.local});}return r.length>1&&(r=[...new Set(r)]),{message:r.join(". "),details:s}},t.ValidationError=class extends Error{constructor(e,t,r){super(e),this._original=r,this.details=t;}static isError(e){return e instanceof t.ValidationError}},t.ValidationError.prototype.isJoi=!0,t.ValidationError.prototype.name="ValidationError",t.ValidationError.prototype.annotate=s.error;},8901:(e,t,r)=>{const s=r(375),n=r(8571),a=r(8160),o=r(6914),i={};t.type=function(e,t){const r=Object.getPrototypeOf(e),l=n(r),c=e._assign(Object.create(l)),u=Object.assign({},t);delete u.base,l._definition=u;const f=r._definition||{};u.messages=o.merge(f.messages,u.messages),u.properties=Object.assign({},f.properties,u.properties),c.type=u.type,u.flags=Object.assign({},f.flags,u.flags);const m=Object.assign({},f.terms);if(u.terms)for(const e in u.terms){const t=u.terms[e];s(void 0===c.$_terms[e],"Invalid term override for",u.type,e),c.$_terms[e]=t.init,m[e]=t;}u.terms=m,u.args||(u.args=f.args),u.prepare=i.prepare(u.prepare,f.prepare),u.coerce&&("function"==typeof u.coerce&&(u.coerce={method:u.coerce}),u.coerce.from&&!Array.isArray(u.coerce.from)&&(u.coerce={method:u.coerce.method,from:[].concat(u.coerce.from)})),u.coerce=i.coerce(u.coerce,f.coerce),u.validate=i.validate(u.validate,f.validate);const h=Object.assign({},f.rules);if(u.rules)for(const e in u.rules){const t=u.rules[e];s("object"==typeof t,"Invalid rule definition for",u.type,e);let r=t.method;if(void 0===r&&(r=function(){return this.$_addRule(e)}),r&&(s(!l[e],"Rule conflict in",u.type,e),l[e]=r),s(!h[e],"Rule conflict in",u.type,e),h[e]=t,t.alias){const e=[].concat(t.alias);for(const r of e)l[r]=t.method;}t.args&&(t.argsByName=new Map,t.args=t.args.map((e=>("string"==typeof e&&(e={name:e}),s(!t.argsByName.has(e.name),"Duplicated argument name",e.name),a.isSchema(e.assert)&&(e.assert=e.assert.strict().label(e.name)),t.argsByName.set(e.name,e),e))));}u.rules=h;const d=Object.assign({},f.modifiers);if(u.modifiers)for(const e in u.modifiers){s(!l[e],"Rule conflict in",u.type,e);const t=u.modifiers[e];s("function"==typeof t,"Invalid modifier definition for",u.type,e);const r=function(t){return this.rule({[e]:t})};l[e]=r,d[e]=t;}if(u.modifiers=d,u.overrides){l._super=r,c.$_super={};for(const e in u.overrides)s(r[e],"Cannot override missing",e),u.overrides[e][a.symbols.parent]=r[e],c.$_super[e]=r[e].bind(c);Object.assign(l,u.overrides);}u.cast=Object.assign({},f.cast,u.cast);const p=Object.assign({},f.manifest,u.manifest);return p.build=i.build(u.manifest&&u.manifest.build,f.manifest&&f.manifest.build),u.manifest=p,u.rebuild=i.rebuild(u.rebuild,f.rebuild),c},i.build=function(e,t){return e&&t?function(r,s){return t(e(r,s),s)}:e||t},i.coerce=function(e,t){return e&&t?{from:e.from&&t.from?[...new Set([...e.from,...t.from])]:null,method(r,s){let n;if((!t.from||t.from.includes(typeof r))&&(n=t.method(r,s),n)){if(n.errors||void 0===n.value)return n;r=n.value;}if(!e.from||e.from.includes(typeof r)){const t=e.method(r,s);if(t)return t}return n}}:e||t},i.prepare=function(e,t){return e&&t?function(r,s){const n=e(r,s);if(n){if(n.errors||void 0===n.value)return n;r=n.value;}return t(r,s)||n}:e||t},i.rebuild=function(e,t){return e&&t?function(r){t(r),e(r);}:e||t},i.validate=function(e,t){return e&&t?function(r,s){const n=t(r,s);if(n){if(n.errors&&(!Array.isArray(n.errors)||n.errors.length))return n;r=n.value;}return e(r,s)||n}:e||t};},5107:(e,t,r)=>{const s=r(375),n=r(8571),a=r(8652),o=r(8160),i=r(3292),l=r(6354),c=r(8901),u=r(9708),f=r(6133),m=r(3328),h=r(1152);let d;const p={types:{alternatives:r(4946),any:r(8068),array:r(546),boolean:r(4937),date:r(7500),function:r(390),link:r(8785),number:r(3832),object:r(8966),string:r(7417),symbol:r(8826)},aliases:{alt:"alternatives",bool:"boolean",func:"function"},root:function(){const e={_types:new Set(Object.keys(p.types))};for(const t of e._types)e[t]=function(...e){return s(!e.length||["alternatives","link","object"].includes(t),"The",t,"type does not allow arguments"),p.generate(this,p.types[t],e)};for(const t of ["allow","custom","disallow","equal","exist","forbidden","invalid","not","only","optional","options","prefs","preferences","required","strip","valid","when"])e[t]=function(...e){return this.any()[t](...e)};Object.assign(e,p.methods);for(const t in p.aliases){const r=p.aliases[t];e[t]=e[r];}return e.x=e.expression,h.setup&&h.setup(e),e}};p.methods={ValidationError:l.ValidationError,version:o.version,cache:a.provider,assert(e,t,...r){p.assert(e,t,!0,r);},attempt:(e,t,...r)=>p.assert(e,t,!1,r),build(e){return s("function"==typeof u.build,"Manifest functionality disabled"),u.build(this,e)},checkPreferences(e){o.checkPreferences(e);},compile(e,t){return i.compile(this,e,t)},defaults(e){s("function"==typeof e,"modifier must be a function");const t=Object.assign({},this);for(const r of t._types){const n=e(t[r]());s(o.isSchema(n),"modifier must return a valid schema object"),t[r]=function(...e){return p.generate(this,n,e)};}return t},expression:(...e)=>new m(...e),extend(...e){o.verifyFlat(e,"extend"),d=d||r(3378),s(e.length,"You need to provide at least one extension"),this.assert(e,d.extensions);const t=Object.assign({},this);t._types=new Set(t._types);for(let r of e){"function"==typeof r&&(r=r(t)),this.assert(r,d.extension);const e=p.expandExtension(r,t);for(const r of e){s(void 0===t[r.type]||t._types.has(r.type),"Cannot override name",r.type);const e=r.base||this.any(),n=c.type(e,r);t._types.add(r.type),t[r.type]=function(...e){return p.generate(this,n,e)};}}return t},isError:l.ValidationError.isError,isExpression:m.isTemplate,isRef:f.isRef,isSchema:o.isSchema,in:(...e)=>f.in(...e),override:o.symbols.override,ref:(...e)=>f.create(...e),types(){const e={};for(const t of this._types)e[t]=this[t]();for(const t in p.aliases)e[t]=this[t]();return e}},p.assert=function(e,t,r,s){const a=s[0]instanceof Error||"string"==typeof s[0]?s[0]:null,i=a?s[1]:s[0],c=t.validate(e,o.preferences({errors:{stack:!0}},i||{}));let u=c.error;if(!u)return c.value;if(a instanceof Error)throw a;const f=r&&"function"==typeof u.annotate?u.annotate():u.message;throw u instanceof l.ValidationError==0&&(u=n(u)),u.message=a?"".concat(a," ").concat(f):f,u},p.generate=function(e,t,r){return s(e,"Must be invoked on a Joi instance."),t.$_root=e,t._definition.args&&r.length?t._definition.args(t,...r):t},p.expandExtension=function(e,t){if("string"==typeof e.type)return [e];const r=[];for(const s of t._types)if(e.type.test(s)){const n=Object.assign({},e);n.type=s,n.base=t[s](),r.push(n);}return r},e.exports=p.root();},6914:(e,t,r)=>{const s=r(375),n=r(8571),a=r(3328);t.compile=function(e,t){if("string"==typeof e)return s(!t,"Cannot set single message string"),new a(e);if(a.isTemplate(e))return s(!t,"Cannot set single message template"),e;s("object"==typeof e&&!Array.isArray(e),"Invalid message options"),t=t?n(t):{};for(let r in e){const n=e[r];if("root"===r||a.isTemplate(n)){t[r]=n;continue}if("string"==typeof n){t[r]=new a(n);continue}s("object"==typeof n&&!Array.isArray(n),"Invalid message for",r);const o=r;for(r in t[o]=t[o]||{},n){const e=n[r];"root"===r||a.isTemplate(e)?t[o][r]=e:(s("string"==typeof e,"Invalid message for",r,"in",o),t[o][r]=new a(e));}}return t},t.decompile=function(e){const t={};for(let r in e){const s=e[r];if("root"===r){t[r]=s;continue}if(a.isTemplate(s)){t[r]=s.describe({compact:!0});continue}const n=r;for(r in t[n]={},s){const e=s[r];t[n][r]="root"!==r?e.describe({compact:!0}):e;}}return t},t.merge=function(e,r){if(!e)return t.compile(r);if(!r)return e;if("string"==typeof r)return new a(r);if(a.isTemplate(r))return r;const o=n(e);for(let e in r){const t=r[e];if("root"===e||a.isTemplate(t)){o[e]=t;continue}if("string"==typeof t){o[e]=new a(t);continue}s("object"==typeof t&&!Array.isArray(t),"Invalid message for",e);const n=e;for(e in o[n]=o[n]||{},t){const r=t[e];"root"===e||a.isTemplate(r)?o[n][e]=r:(s("string"==typeof r,"Invalid message for",e,"in",n),o[n][e]=new a(r));}}return o};},2294:(e,t,r)=>{function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s);}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o=r(375),i=r(8160),l=r(6133),c={};t.Ids=c.Ids=class{constructor(){this._byId=new Map,this._byKey=new Map,this._schemaChain=!1;}clone(){const e=new c.Ids;return e._byId=new Map(this._byId),e._byKey=new Map(this._byKey),e._schemaChain=this._schemaChain,e}concat(e){e._schemaChain&&(this._schemaChain=!0);for(const[t,r]of e._byId.entries())o(!this._byKey.has(t),"Schema id conflicts with existing key:",t),this._byId.set(t,r);for(const[t,r]of e._byKey.entries())o(!this._byId.has(t),"Schema key conflicts with existing id:",t),this._byKey.set(t,r);}fork(e,t,r){const s=this._collect(e);s.push({schema:r});const n=s.shift();let a={id:n.id,schema:t(n.schema)};o(i.isSchema(a.schema),"adjuster function failed to return a joi schema type");for(const e of s)a={id:e.id,schema:c.fork(e.schema,a.id,a.schema)};return a.schema}labels(e,t=[]){const r=e[0],s=this._get(r);if(!s)return [...t,...e].join(".");const n=e.slice(1);return t=[...t,s.schema._flags.label||r],n.length?s.schema._ids.labels(n,t):t.join(".")}reach(e,t=[]){const r=e[0],s=this._get(r);o(s,"Schema does not contain path",[...t,...e].join("."));const n=e.slice(1);return n.length?s.schema._ids.reach(n,[...t,r]):s.schema}register(e,{key:t}={}){if(!e||!i.isSchema(e))return;(e.$_property("schemaChain")||e._ids._schemaChain)&&(this._schemaChain=!0);const r=e._flags.id;if(r){const t=this._byId.get(r);o(!t||t.schema===e,"Cannot add different schemas with the same id:",r),o(!this._byKey.has(r),"Schema id conflicts with existing key:",r),this._byId.set(r,{schema:e,id:r});}t&&(o(!this._byKey.has(t),"Schema already contains key:",t),o(!this._byId.has(t),"Schema key conflicts with existing id:",t),this._byKey.set(t,{schema:e,id:t}));}reset(){this._byId=new Map,this._byKey=new Map,this._schemaChain=!1;}_collect(e,t=[],r=[]){const s=e[0],n=this._get(s);o(n,"Schema does not contain path",[...t,...e].join(".")),r=[n,...r];const a=e.slice(1);return a.length?n.schema._ids._collect(a,[...t,s],r):r}_get(e){return this._byId.get(e)||this._byKey.get(e)}},c.fork=function(e,r,s){const n=t.schema(e,{each:(e,{key:t})=>{if(r===(e._flags.id||t))return s},ref:!1});return n?n.$_mutateRebuild():e},t.schema=function(e,t){let r;for(const s in e._flags){if("_"===s[0])continue;const n=c.scan(e._flags[s],{source:"flags",name:s},t);void 0!==n&&(r=r||e.clone(),r._flags[s]=n);}for(let s=0;s<e._rules.length;++s){const n=e._rules[s],a=c.scan(n.args,{source:"rules",name:n.name},t);if(void 0!==a){r=r||e.clone();const t=Object.assign({},n);t.args=a,r._rules[s]=t,r._singleRules.get(n.name)===n&&r._singleRules.set(n.name,t);}}for(const s in e.$_terms){if("_"===s[0])continue;const n=c.scan(e.$_terms[s],{source:"terms",name:s},t);void 0!==n&&(r=r||e.clone(),r.$_terms[s]=n);}return r},c.scan=function(e,t,r,s,a){const o=s||[];if(null===e||"object"!=typeof e)return;let u;if(Array.isArray(e)){for(let s=0;s<e.length;++s){const n="terms"===t.source&&"keys"===t.name&&e[s].key,a=c.scan(e[s],t,r,[s,...o],n);void 0!==a&&(u=u||e.slice(),u[s]=a);}return u}if(!1!==r.schema&&i.isSchema(e)||!1!==r.ref&&l.isRef(e)){const s=r.each(e,n(n({},t),{},{path:o,key:a}));if(s===e)return;return s}for(const s in e){if("_"===s[0])continue;const n=c.scan(e[s],t,r,[s,...o],a);void 0!==n&&(u=u||Object.assign({},e),u[s]=n);}return u};},6133:(e,t,r)=>{function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s);}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o=r(375),i=r(8571),l=r(9621),c=r(8160);let u;const f={symbol:Symbol("ref"),defaults:{adjust:null,in:!1,iterables:null,map:null,separator:".",type:"value"}};t.create=function(e,t={}){o("string"==typeof e,"Invalid reference key:",e),c.assertOptions(t,["adjust","ancestor","in","iterables","map","prefix","render","separator"]),o(!t.prefix||"object"==typeof t.prefix,"options.prefix must be of type object");const r=Object.assign({},f.defaults,t);delete r.prefix;const s=r.separator,n=f.context(e,s,t.prefix);if(r.type=n.type,e=n.key,"value"===r.type)if(n.root&&(o(!s||e[0]!==s,"Cannot specify relative path with root prefix"),r.ancestor="root",e||(e=null)),s&&s===e)e=null,r.ancestor=0;else if(void 0!==r.ancestor)o(!s||!e||e[0]!==s,"Cannot combine prefix with ancestor option");else {const[t,n]=f.ancestor(e,s);n&&""===(e=e.slice(n))&&(e=null),r.ancestor=t;}return r.path=s?null===e?[]:e.split(s):[e],new f.Ref(r)},t.in=function(e,r={}){return t.create(e,n(n({},r),{},{in:!0}))},t.isRef=function(e){return !!e&&!!e[c.symbols.ref]},f.Ref=class{constructor(e){o("object"==typeof e,"Invalid reference construction"),c.assertOptions(e,["adjust","ancestor","in","iterables","map","path","render","separator","type","depth","key","root","display"]),o([!1,void 0].includes(e.separator)||"string"==typeof e.separator&&1===e.separator.length,"Invalid separator"),o(!e.adjust||"function"==typeof e.adjust,"options.adjust must be a function"),o(!e.map||Array.isArray(e.map),"options.map must be an array"),o(!e.map||!e.adjust,"Cannot set both map and adjust options"),Object.assign(this,f.defaults,e),o("value"===this.type||void 0===this.ancestor,"Non-value references cannot reference ancestors"),Array.isArray(this.map)&&(this.map=new Map(this.map)),this.depth=this.path.length,this.key=this.path.length?this.path.join(this.separator):null,this.root=this.path[0],this.updateDisplay();}resolve(e,t,r,s,n={}){return o(!this.in||n.in,"Invalid in() reference usage"),"global"===this.type?this._resolve(r.context,t,n):"local"===this.type?this._resolve(s,t,n):this.ancestor?"root"===this.ancestor?this._resolve(t.ancestors[t.ancestors.length-1],t,n):(o(this.ancestor<=t.ancestors.length,"Invalid reference exceeds the schema root:",this.display),this._resolve(t.ancestors[this.ancestor-1],t,n)):this._resolve(e,t,n)}_resolve(e,t,r){let s;if("value"===this.type&&t.mainstay.shadow&&!1!==r.shadow&&(s=t.mainstay.shadow.get(this.absolute(t))),void 0===s&&(s=l(e,this.path,{iterables:this.iterables,functions:!0})),this.adjust&&(s=this.adjust(s)),this.map){const e=this.map.get(s);void 0!==e&&(s=e);}return t.mainstay&&t.mainstay.tracer.resolve(t,this,s),s}toString(){return this.display}absolute(e){return [...e.path.slice(0,-this.ancestor),...this.path]}clone(){return new f.Ref(this)}describe(){const e={path:this.path};"value"!==this.type&&(e.type=this.type),"."!==this.separator&&(e.separator=this.separator),"value"===this.type&&1!==this.ancestor&&(e.ancestor=this.ancestor),this.map&&(e.map=[...this.map]);for(const t of ["adjust","iterables","render"])null!==this[t]&&void 0!==this[t]&&(e[t]=this[t]);return !1!==this.in&&(e.in=!0),{ref:e}}updateDisplay(){const e=null!==this.key?this.key:"";if("value"!==this.type)return void(this.display="ref:".concat(this.type,":").concat(e));if(!this.separator)return void(this.display="ref:".concat(e));if(!this.ancestor)return void(this.display="ref:".concat(this.separator).concat(e));if("root"===this.ancestor)return void(this.display="ref:root:".concat(e));if(1===this.ancestor)return void(this.display="ref:".concat(e||".."));const t=new Array(this.ancestor+1).fill(this.separator).join("");this.display="ref:".concat(t).concat(e||"");}},f.Ref.prototype[c.symbols.ref]=!0,t.build=function(e){return "value"===(e=Object.assign({},f.defaults,e)).type&&void 0===e.ancestor&&(e.ancestor=1),new f.Ref(e)},f.context=function(e,t,r={}){if(e=e.trim(),r){const s=void 0===r.global?"$":r.global;if(s!==t&&e.startsWith(s))return {key:e.slice(s.length),type:"global"};const n=void 0===r.local?"#":r.local;if(n!==t&&e.startsWith(n))return {key:e.slice(n.length),type:"local"};const a=void 0===r.root?"/":r.root;if(a!==t&&e.startsWith(a))return {key:e.slice(a.length),type:"value",root:!0}}return {key:e,type:"value"}},f.ancestor=function(e,t){if(!t)return [1,0];if(e[0]!==t)return [1,0];if(e[1]!==t)return [0,1];let r=2;for(;e[r]===t;)++r;return [r-1,r]},t.toSibling=0,t.toParent=1,t.Manager=class{constructor(){this.refs=[];}register(e,s){if(e)if(s=void 0===s?t.toParent:s,Array.isArray(e))for(const t of e)this.register(t,s);else if(c.isSchema(e))for(const t of e._refs.refs)t.ancestor-s>=0&&this.refs.push({ancestor:t.ancestor-s,root:t.root});else t.isRef(e)&&"value"===e.type&&e.ancestor-s>=0&&this.refs.push({ancestor:e.ancestor-s,root:e.root}),u=u||r(3328),u.isTemplate(e)&&this.register(e.refs(),s);}get length(){return this.refs.length}clone(){const e=new t.Manager;return e.refs=i(this.refs),e}reset(){this.refs=[];}roots(){return this.refs.filter((e=>!e.ancestor)).map((e=>e.root))}};},3378:(e,t,r)=>{const s=r(5107),n={};n.wrap=s.string().min(1).max(2).allow(!1),t.preferences=s.object({allowUnknown:s.boolean(),abortEarly:s.boolean(),artifacts:s.boolean(),cache:s.boolean(),context:s.object(),convert:s.boolean(),dateFormat:s.valid("date","iso","string","time","utc"),debug:s.boolean(),errors:{escapeHtml:s.boolean(),label:s.valid("path","key",!1),language:[s.string(),s.object().ref()],render:s.boolean(),stack:s.boolean(),wrap:{label:n.wrap,array:n.wrap}},externals:s.boolean(),messages:s.object(),noDefaults:s.boolean(),nonEnumerables:s.boolean(),presence:s.valid("required","optional","forbidden"),skipFunctions:s.boolean(),stripUnknown:s.object({arrays:s.boolean(),objects:s.boolean()}).or("arrays","objects").allow(!0,!1),warnings:s.boolean()}).strict(),n.nameRx=/^[a-zA-Z0-9]\w*$/,n.rule=s.object({alias:s.array().items(s.string().pattern(n.nameRx)).single(),args:s.array().items(s.string(),s.object({name:s.string().pattern(n.nameRx).required(),ref:s.boolean(),assert:s.alternatives([s.function(),s.object().schema()]).conditional("ref",{is:!0,then:s.required()}),normalize:s.function(),message:s.string().when("assert",{is:s.function(),then:s.required()})})),convert:s.boolean(),manifest:s.boolean(),method:s.function().allow(!1),multi:s.boolean(),validate:s.function()}),t.extension=s.object({type:s.alternatives([s.string(),s.object().regex()]).required(),args:s.function(),cast:s.object().pattern(n.nameRx,s.object({from:s.function().maxArity(1).required(),to:s.function().minArity(1).maxArity(2).required()})),base:s.object().schema().when("type",{is:s.object().regex(),then:s.forbidden()}),coerce:[s.function().maxArity(3),s.object({method:s.function().maxArity(3).required(),from:s.array().items(s.string()).single()})],flags:s.object().pattern(n.nameRx,s.object({setter:s.string(),default:s.any()})),manifest:{build:s.function().arity(2)},messages:[s.object(),s.string()],modifiers:s.object().pattern(n.nameRx,s.function().minArity(1).maxArity(2)),overrides:s.object().pattern(n.nameRx,s.function()),prepare:s.function().maxArity(3),rebuild:s.function().arity(1),rules:s.object().pattern(n.nameRx,n.rule),terms:s.object().pattern(n.nameRx,s.object({init:s.array().allow(null).required(),manifest:s.object().pattern(/.+/,[s.valid("schema","single"),s.object({mapped:s.object({from:s.string().required(),to:s.string().required()}).required()})])})),validate:s.function().maxArity(3)}).strict(),t.extensions=s.array().items(s.object(),s.function().arity(1)).strict(),n.desc={buffer:s.object({buffer:s.string()}),func:s.object({function:s.function().required(),options:{literal:!0}}),override:s.object({override:!0}),ref:s.object({ref:s.object({type:s.valid("value","global","local"),path:s.array().required(),separator:s.string().length(1).allow(!1),ancestor:s.number().min(0).integer().allow("root"),map:s.array().items(s.array().length(2)).min(1),adjust:s.function(),iterables:s.boolean(),in:s.boolean(),render:s.boolean()}).required()}),regex:s.object({regex:s.string().min(3)}),special:s.object({special:s.valid("deep").required()}),template:s.object({template:s.string().required(),options:s.object()}),value:s.object({value:s.alternatives([s.object(),s.array()]).required()})},n.desc.entity=s.alternatives([s.array().items(s.link("...")),s.boolean(),s.function(),s.number(),s.string(),n.desc.buffer,n.desc.func,n.desc.ref,n.desc.regex,n.desc.special,n.desc.template,n.desc.value,s.link("/")]),n.desc.values=s.array().items(null,s.boolean(),s.function(),s.number().allow(1/0,-1/0),s.string().allow(""),s.symbol(),n.desc.buffer,n.desc.func,n.desc.override,n.desc.ref,n.desc.regex,n.desc.template,n.desc.value),n.desc.messages=s.object().pattern(/.+/,[s.string(),n.desc.template,s.object().pattern(/.+/,[s.string(),n.desc.template])]),t.description=s.object({type:s.string().required(),flags:s.object({cast:s.string(),default:s.any(),description:s.string(),empty:s.link("/"),failover:n.desc.entity,id:s.string(),label:s.string(),only:!0,presence:["optional","required","forbidden"],result:["raw","strip"],strip:s.boolean(),unit:s.string()}).unknown(),preferences:{allowUnknown:s.boolean(),abortEarly:s.boolean(),artifacts:s.boolean(),cache:s.boolean(),convert:s.boolean(),dateFormat:["date","iso","string","time","utc"],errors:{escapeHtml:s.boolean(),label:["path","key"],language:[s.string(),n.desc.ref],wrap:{label:n.wrap,array:n.wrap}},externals:s.boolean(),messages:n.desc.messages,noDefaults:s.boolean(),nonEnumerables:s.boolean(),presence:["required","optional","forbidden"],skipFunctions:s.boolean(),stripUnknown:s.object({arrays:s.boolean(),objects:s.boolean()}).or("arrays","objects").allow(!0,!1),warnings:s.boolean()},allow:n.desc.values,invalid:n.desc.values,rules:s.array().min(1).items({name:s.string().required(),args:s.object().min(1),keep:s.boolean(),message:[s.string(),n.desc.messages],warn:s.boolean()}),keys:s.object().pattern(/.*/,s.link("/")),link:n.desc.ref}).pattern(/^[a-z]\w*$/,s.any());},493:(e,t,r)=>{const s=r(8571),n=r(9621),a=r(8160),o={value:Symbol("value")};e.exports=o.State=class{constructor(e,t,r){this.path=e,this.ancestors=t,this.mainstay=r.mainstay,this.schemas=r.schemas,this.debug=null;}localize(e,t=null,r=null){const s=new o.State(e,t,this);return r&&s.schemas&&(s.schemas=[o.schemas(r),...s.schemas]),s}nest(e,t){const r=new o.State(this.path,this.ancestors,this);return r.schemas=r.schemas&&[o.schemas(e),...r.schemas],r.debug=t,r}shadow(e,t){this.mainstay.shadow=this.mainstay.shadow||new o.Shadow,this.mainstay.shadow.set(this.path,e,t);}snapshot(){this.mainstay.shadow&&(this._snapshot=s(this.mainstay.shadow.node(this.path)));}restore(){this.mainstay.shadow&&(this.mainstay.shadow.override(this.path,this._snapshot),this._snapshot=void 0);}},o.schemas=function(e){return a.isSchema(e)?{schema:e}:e},o.Shadow=class{constructor(){this._values=null;}set(e,t,r){if(!e.length)return;if("strip"===r&&"number"==typeof e[e.length-1])return;this._values=this._values||new Map;let s=this._values;for(let t=0;t<e.length;++t){const r=e[t];let n=s.get(r);n||(n=new Map,s.set(r,n)),s=n;}s[o.value]=t;}get(e){const t=this.node(e);if(t)return t[o.value]}node(e){if(this._values)return n(this._values,e,{iterables:!0})}override(e,t){if(!this._values)return;const r=e.slice(0,-1),s=e[e.length-1],a=n(this._values,r,{iterables:!0});t?a.set(s,t):a&&a.delete(s);}};},3328:(e,t,r)=>{function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s);}return r}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=r(375),o=r(8571),i=r(5277),l=r(1447),c=r(8160),u=r(6354),f=r(6133),m={symbol:Symbol("template"),opens:new Array(1e3).join("\0"),closes:new Array(1e3).join(""),dateFormat:{date:Date.prototype.toDateString,iso:Date.prototype.toISOString,string:Date.prototype.toString,time:Date.prototype.toTimeString,utc:Date.prototype.toUTCString}};e.exports=m.Template=class{constructor(e,t){a("string"==typeof e,"Template source must be a string"),a(!e.includes("\0")&&!e.includes(""),"Template source cannot contain reserved control characters"),this.source=e,this.rendered=e,this._template=null,this._settings=o(t),this._parse();}_parse(){if(!this.source.includes("{"))return;const e=m.encode(this.source),t=m.split(e);let r=!1;const s=[],n=t.shift();n&&s.push(n);for(const e of t){const t="{"!==e[0],n=t?"}":"}}",a=e.indexOf(n);if(-1===a||"{"===e[1]){s.push("{".concat(m.decode(e)));continue}let o=e.slice(t?0:1,a);const i=":"===o[0];i&&(o=o.slice(1));const l=this._ref(m.decode(o),{raw:t,wrapped:i});s.push(l),"string"!=typeof l&&(r=!0);const c=e.slice(a+n.length);c&&s.push(m.decode(c));}r?this._template=s:this.rendered=s.join("");}static date(e,t){return m.dateFormat[t.dateFormat].call(e)}describe(e={}){if(!this._settings&&e.compact)return this.source;const t={template:this.source};return this._settings&&(t.options=this._settings),t}static build(e){return new m.Template(e.template,e.options)}isDynamic(){return !!this._template}static isTemplate(e){return !!e&&!!e[c.symbols.template]}refs(){if(!this._template)return;const e=[];for(const t of this._template)"string"!=typeof t&&e.push(...t.refs);return e}resolve(e,t,r,s){return this._template&&1===this._template.length?this._part(this._template[0],e,t,r,s,{}):this.render(e,t,r,s)}_part(e,...t){return e.ref?e.ref.resolve(...t):e.formula.evaluate(t)}render(e,t,r,s,n={}){if(!this.isDynamic())return this.rendered;const a=[];for(const o of this._template)if("string"==typeof o)a.push(o);else {const l=this._part(o,e,t,r,s,n),c=m.stringify(l,e,t,r,s,n);if(void 0!==c){const e=o.raw||!1===(n.errors&&n.errors.escapeHtml)?c:i(c);a.push(m.wrap(e,o.wrapped&&r.errors.wrap.label));}}return a.join("")}_ref(e,{raw:t,wrapped:r}){const s=[],n=e=>{const t=f.create(e,this._settings);return s.push(t),e=>t.resolve(...e)};try{var a=new l.Parser(e,{reference:n,functions:m.functions,constants:m.constants});}catch(t){throw t.message='Invalid template variable "'.concat(e,'" fails due to: ').concat(t.message),t}if(a.single){if("reference"===a.single.type){const e=s[0];return {ref:e,raw:t,refs:s,wrapped:r||"local"===e.type&&"label"===e.key}}return m.stringify(a.single.value)}return {formula:a,raw:t,refs:s}}toString(){return this.source}},m.Template.prototype[c.symbols.template]=!0,m.Template.prototype.isImmutable=!0,m.encode=function(e){return e.replace(/\\(\{+)/g,((e,t)=>m.opens.slice(0,t.length))).replace(/\\(\}+)/g,((e,t)=>m.closes.slice(0,t.length)))},m.decode=function(e){return e.replace(/\u0000/g,"{").replace(/\u0001/g,"}")},m.split=function(e){const t=[];let r="";for(let s=0;s<e.length;++s){const n=e[s];if("{"===n){let n="";for(;s+1<e.length&&"{"===e[s+1];)n+="{",++s;t.push(r),r=n;}else r+=n;}return t.push(r),t},m.wrap=function(e,t){return t?1===t.length?"".concat(t).concat(e).concat(t):"".concat(t[0]).concat(e).concat(t[1]):e},m.stringify=function(e,t,r,a,o,i){const l=typeof e;let c=!1;if(f.isRef(e)&&e.render&&(c=e.in,e=e.resolve(t,r,a,o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}({in:e.in},i))),null===e)return "null";if("string"===l)return e;if("number"===l||"function"===l||"symbol"===l)return e.toString();if("object"!==l)return JSON.stringify(e);if(e instanceof Date)return m.Template.date(e,a);if(e instanceof Map){const t=[];for(const[r,s]of e.entries())t.push("".concat(r.toString()," -> ").concat(s.toString()));e=t;}if(!Array.isArray(e))return e.toString();let u="";for(const s of e)u=u+(u.length?", ":"")+m.stringify(s,t,r,a,o,i);return c?u:m.wrap(u,a.errors.wrap.array)},m.constants={true:!0,false:!1,null:null,second:1e3,minute:6e4,hour:36e5,day:864e5},m.functions={if:(e,t,r)=>e?t:r,msg(e){const[t,r,s,n,a]=this,o=a.messages;if(!o)return "";const i=u.template(t,o[0],e,r,s)||u.template(t,o[1],e,r,s);return i?i.render(t,r,s,n,a):""},number:e=>"number"==typeof e?e:"string"==typeof e?parseFloat(e):"boolean"==typeof e?e?1:0:e instanceof Date?e.getTime():null};},4946:(e,t,r)=>{const s=r(375),n=r(1687),a=r(8068),o=r(8160),i=r(3292),l=r(6354),c=r(6133),u={};e.exports=a.extend({type:"alternatives",flags:{match:{default:"any"}},terms:{matches:{init:[],register:c.toSibling}},args:(e,...t)=>1===t.length&&Array.isArray(t[0])?e.try(...t[0]):e.try(...t),validate(e,t){const{schema:r,error:s,state:a,prefs:o}=t;if(r._flags.match){const t=[];for(let s=0;s<r.$_terms.matches.length;++s){const n=r.$_terms.matches[s],i=a.nest(n.schema,"match.".concat(s));i.snapshot();const l=n.schema.$_validate(e,i,o);l.errors?i.restore():t.push(l.value);}return 0===t.length?{errors:s("alternatives.any")}:"one"===r._flags.match?1===t.length?{value:t[0]}:{errors:s("alternatives.one")}:t.length!==r.$_terms.matches.length?{errors:s("alternatives.all")}:r.$_terms.matches.reduce(((e,t)=>e&&"object"===t.schema.type),!0)?{value:t.reduce(((e,t)=>n(e,t,{mergeArrays:!1})))}:{value:t[t.length-1]}}const i=[];for(let t=0;t<r.$_terms.matches.length;++t){const s=r.$_terms.matches[t];if(s.schema){const r=a.nest(s.schema,"match.".concat(t));r.snapshot();const n=s.schema.$_validate(e,r,o);if(!n.errors)return n;r.restore(),i.push({schema:s.schema,reports:n.errors});continue}const n=s.ref?s.ref.resolve(e,a,o):e,l=s.is?[s]:s.switch;for(let r=0;r<l.length;++r){const i=l[r],{is:c,then:u,otherwise:f}=i,m="match.".concat(t).concat(s.switch?"."+r:"");if(c.$_match(n,a.nest(c,"".concat(m,".is")),o)){if(u)return u.$_validate(e,a.nest(u,"".concat(m,".then")),o)}else if(f)return f.$_validate(e,a.nest(f,"".concat(m,".otherwise")),o)}}return u.errors(i,t)},rules:{conditional:{method(e,t){s(!this._flags._endedSwitch,"Unreachable condition"),s(!this._flags.match,"Cannot combine match mode",this._flags.match,"with conditional rule"),s(void 0===t.break,"Cannot use break option with alternatives conditional");const r=this.clone(),n=i.when(r,e,t),a=n.is?[n]:n.switch;for(const e of a)if(e.then&&e.otherwise){r.$_setFlag("_endedSwitch",!0,{clone:!1});break}return r.$_terms.matches.push(n),r.$_mutateRebuild()}},match:{method(e){if(s(["any","one","all"].includes(e),"Invalid alternatives match mode",e),"any"!==e)for(const t of this.$_terms.matches)s(t.schema,"Cannot combine match mode",e,"with conditional rules");return this.$_setFlag("match",e)}},try:{method(...e){s(e.length,"Missing alternative schemas"),o.verifyFlat(e,"try"),s(!this._flags._endedSwitch,"Unreachable condition");const t=this.clone();for(const r of e)t.$_terms.matches.push({schema:t.$_compile(r)});return t.$_mutateRebuild()}}},overrides:{label(e){return this.$_parent("label",e).$_modify({each:(t,r)=>"is"!==r.path[0]?t.label(e):void 0,ref:!1})}},rebuild(e){e.$_modify({each:t=>{o.isSchema(t)&&"array"===t.type&&e.$_setFlag("_arrayItems",!0,{clone:!1});}});},manifest:{build(e,t){if(t.matches)for(const r of t.matches){const{schema:t,ref:s,is:n,not:a,then:o,otherwise:i}=r;e=t?e.try(t):s?e.conditional(s,{is:n,then:o,not:a,otherwise:i,switch:r.switch}):e.conditional(n,{then:o,otherwise:i});}return e}},messages:{"alternatives.all":"{{#label}} does not match all of the required types","alternatives.any":"{{#label}} does not match any of the allowed types","alternatives.match":"{{#label}} does not match any of the allowed types","alternatives.one":"{{#label}} matches more than one allowed type","alternatives.types":"{{#label}} must be one of {{#types}}"}}),u.errors=function(e,{error:t,state:r}){if(!e.length)return {errors:t("alternatives.any")};if(1===e.length)return {errors:e[0].reports};const s=new Set,n=[];for(const{reports:a,schema:o}of e){if(a.length>1)return u.unmatched(e,t);const i=a[0];if(i instanceof l.Report==0)return u.unmatched(e,t);if(i.state.path.length!==r.path.length){n.push({type:o.type,report:i});continue}if("any.only"===i.code){for(const e of i.local.valids)s.add(e);continue}const[c,f]=i.code.split(".");"base"===f?s.add(c):n.push({type:o.type,report:i});}return n.length?1===n.length?{errors:n[0].report}:u.unmatched(e,t):{errors:t("alternatives.types",{types:[...s]})}},u.unmatched=function(e,t){const r=[];for(const t of e)r.push(...t.reports);return {errors:t("alternatives.match",l.details(r,{override:!1}))}};},8068:(e,t,r)=>{const s=r(375),n=r(7629),a=r(8160),o=r(6914);e.exports=n.extend({type:"any",flags:{only:{default:!1}},terms:{alterations:{init:null},examples:{init:null},externals:{init:null},metas:{init:[]},notes:{init:[]},shared:{init:null},tags:{init:[]},whens:{init:null}},rules:{custom:{method(e,t){return s("function"==typeof e,"Method must be a function"),s(void 0===t||t&&"string"==typeof t,"Description must be a non-empty string"),this.$_addRule({name:"custom",args:{method:e,description:t}})},validate(e,t,{method:r}){try{return r(e,t)}catch(e){return t.error("any.custom",{error:e})}},args:["method","description"],multi:!0},messages:{method(e){return this.prefs({messages:e})}},shared:{method(e){s(a.isSchema(e)&&e._flags.id,"Schema must be a schema with an id");const t=this.clone();return t.$_terms.shared=t.$_terms.shared||[],t.$_terms.shared.push(e),t.$_mutateRegister(e),t}},warning:{method(e,t){return s(e&&"string"==typeof e,"Invalid warning code"),this.$_addRule({name:"warning",args:{code:e,local:t},warn:!0})},validate:(e,t,{code:r,local:s})=>t.error(r,s),args:["code","local"],multi:!0}},modifiers:{keep(e,t=!0){e.keep=t;},message(e,t){e.message=o.compile(t);},warn(e,t=!0){e.warn=t;}},manifest:{build(e,t){for(const r in t){const s=t[r];if(["examples","externals","metas","notes","tags"].includes(r))for(const t of s)e=e[r.slice(0,-1)](t);else if("alterations"!==r)if("whens"!==r){if("shared"===r)for(const t of s)e=e.shared(t);}else for(const t of s){const{ref:r,is:s,not:n,then:a,otherwise:o,concat:i}=t;e=i?e.concat(i):r?e.when(r,{is:s,not:n,then:a,otherwise:o,switch:t.switch,break:t.break}):e.when(s,{then:a,otherwise:o,break:t.break});}else {const t={};for(const{target:e,adjuster:r}of s)t[e]=r;e=e.alter(t);}}return e}},messages:{"any.custom":"{{#label}} failed custom validation because {{#error.message}}","any.default":"{{#label}} threw an error when running default method","any.failover":"{{#label}} threw an error when running failover method","any.invalid":"{{#label}} contains an invalid value","any.only":'{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}',"any.ref":"{{#label}} {{#arg}} references {{:#ref}} which {{#reason}}","any.required":"{{#label}} is required","any.unknown":"{{#label}} is not allowed"}});},546:(e,t,r)=>{const s=r(375),n=r(9474),a=r(9621),o=r(8068),i=r(8160),l=r(3292),c={};e.exports=o.extend({type:"array",flags:{single:{default:!1},sparse:{default:!1}},terms:{items:{init:[],manifest:"schema"},ordered:{init:[],manifest:"schema"},_exclusions:{init:[]},_inclusions:{init:[]},_requireds:{init:[]}},coerce:{from:"object",method(e,{schema:t,state:r,prefs:s}){if(!Array.isArray(e))return;const n=t.$_getRule("sort");return n?c.sort(t,e,n.args.options,r,s):void 0}},validate(e,{schema:t,error:r}){if(!Array.isArray(e)){if(t._flags.single){const t=[e];return t[i.symbols.arraySingle]=!0,{value:t}}return {errors:r("array.base")}}if(t.$_getRule("items")||t.$_terms.externals)return {value:e.slice()}},rules:{has:{method(e){e=this.$_compile(e,{appendPath:!0});const t=this.$_addRule({name:"has",args:{schema:e}});return t.$_mutateRegister(e),t},validate(e,{state:t,prefs:r,error:s},{schema:n}){const a=[e,...t.ancestors];for(let s=0;s<e.length;++s){const o=t.localize([...t.path,s],a,n);if(n.$_match(e[s],o,r))return e}const o=n._flags.label;return o?s("array.hasKnown",{patternLabel:o}):s("array.hasUnknown",null)},multi:!0},items:{method(...e){i.verifyFlat(e,"items");const t=this.$_addRule("items");for(let r=0;r<e.length;++r){const s=i.tryWithPath((()=>this.$_compile(e[r])),r,{append:!0});t.$_terms.items.push(s);}return t.$_mutateRebuild()},validate(e,{schema:t,error:r,state:s,prefs:n,errorsArray:a}){const o=t.$_terms._requireds.slice(),l=t.$_terms.ordered.slice(),u=[...t.$_terms._inclusions,...o],f=!e[i.symbols.arraySingle];delete e[i.symbols.arraySingle];const m=a();let h=e.length;for(let a=0;a<h;++a){const i=e[a];let d=!1,p=!1;const g=f?a:new Number(a),y=[...s.path,g];if(!t._flags.sparse&&void 0===i){if(m.push(r("array.sparse",{key:g,path:y,pos:a,value:void 0},s.localize(y))),n.abortEarly)return m;l.shift();continue}const b=[e,...s.ancestors];for(const e of t.$_terms._exclusions)if(e.$_match(i,s.localize(y,b,e),n,{presence:"ignore"})){if(m.push(r("array.excludes",{pos:a,value:i},s.localize(y))),n.abortEarly)return m;d=!0,l.shift();break}if(d)continue;if(t.$_terms.ordered.length){if(l.length){const o=l.shift(),u=o.$_validate(i,s.localize(y,b,o),n);if(u.errors){if(m.push(...u.errors),n.abortEarly)return m}else if("strip"===o._flags.result)c.fastSplice(e,a),--a,--h;else {if(!t._flags.sparse&&void 0===u.value){if(m.push(r("array.sparse",{key:g,path:y,pos:a,value:void 0},s.localize(y))),n.abortEarly)return m;continue}e[a]=u.value;}continue}if(!t.$_terms.items.length){if(m.push(r("array.orderedLength",{pos:a,limit:t.$_terms.ordered.length})),n.abortEarly)return m;break}}const v=[];let _=o.length;for(let l=0;l<_;++l){const u=s.localize(y,b,o[l]);u.snapshot();const f=o[l].$_validate(i,u,n);if(v[l]=f,!f.errors){if(e[a]=f.value,p=!0,c.fastSplice(o,l),--l,--_,!t._flags.sparse&&void 0===f.value&&(m.push(r("array.sparse",{key:g,path:y,pos:a,value:void 0},s.localize(y))),n.abortEarly))return m;break}u.restore();}if(p)continue;const w=n.stripUnknown&&!!n.stripUnknown.arrays||!1;_=u.length;for(const l of u){let u;const f=o.indexOf(l);if(-1!==f)u=v[f];else {const o=s.localize(y,b,l);if(o.snapshot(),u=l.$_validate(i,o,n),!u.errors){"strip"===l._flags.result?(c.fastSplice(e,a),--a,--h):t._flags.sparse||void 0!==u.value?e[a]=u.value:(m.push(r("array.sparse",{key:g,path:y,pos:a,value:void 0},s.localize(y))),d=!0),p=!0;break}o.restore();}if(1===_){if(w){c.fastSplice(e,a),--a,--h,p=!0;break}if(m.push(...u.errors),n.abortEarly)return m;d=!0;break}}if(!d&&(t.$_terms._inclusions.length||t.$_terms._requireds.length)&&!p){if(w){c.fastSplice(e,a),--a,--h;continue}if(m.push(r("array.includes",{pos:a,value:i},s.localize(y))),n.abortEarly)return m}}return o.length&&c.fillMissedErrors(t,m,o,e,s,n),l.length&&(c.fillOrderedErrors(t,m,l,e,s,n),m.length||c.fillDefault(l,e,s,n)),m.length?m:e},priority:!0,manifest:!1},length:{method(e){return this.$_addRule({name:"length",args:{limit:e},operator:"="})},validate:(e,t,{limit:r},{name:s,operator:n,args:a})=>i.compare(e.length,r,n)?e:t.error("array."+s,{limit:a.limit,value:e}),args:[{name:"limit",ref:!0,assert:i.limit,message:"must be a positive integer"}]},max:{method(e){return this.$_addRule({name:"max",method:"length",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"length",args:{limit:e},operator:">="})}},ordered:{method(...e){i.verifyFlat(e,"ordered");const t=this.$_addRule("items");for(let r=0;r<e.length;++r){const s=i.tryWithPath((()=>this.$_compile(e[r])),r,{append:!0});c.validateSingle(s,t),t.$_mutateRegister(s),t.$_terms.ordered.push(s);}return t.$_mutateRebuild()}},single:{method(e){const t=void 0===e||!!e;return s(!t||!this._flags._arrayItems,"Cannot specify single rule when array has array items"),this.$_setFlag("single",t)}},sort:{method(e={}){i.assertOptions(e,["by","order"]);const t={order:e.order||"ascending"};return e.by&&(t.by=l.ref(e.by,{ancestor:0}),s(!t.by.ancestor,"Cannot sort by ancestor")),this.$_addRule({name:"sort",args:{options:t}})},validate(e,{error:t,state:r,prefs:s,schema:n},{options:a}){const{value:o,errors:i}=c.sort(n,e,a,r,s);if(i)return i;for(let r=0;r<e.length;++r)if(e[r]!==o[r])return t("array.sort",{order:a.order,by:a.by?a.by.key:"value"});return e},convert:!0},sparse:{method(e){const t=void 0===e||!!e;return this._flags.sparse===t?this:(t?this.clone():this.$_addRule("items")).$_setFlag("sparse",t,{clone:!1})}},unique:{method(e,t={}){s(!e||"function"==typeof e||"string"==typeof e,"comparator must be a function or a string"),i.assertOptions(t,["ignoreUndefined","separator"]);const r={name:"unique",args:{options:t,comparator:e}};if(e)if("string"==typeof e){const s=i.default(t.separator,".");r.path=s?e.split(s):[e];}else r.comparator=e;return this.$_addRule(r)},validate(e,{state:t,error:r,schema:o},{comparator:i,options:l},{comparator:c,path:u}){const f={string:Object.create(null),number:Object.create(null),undefined:Object.create(null),boolean:Object.create(null),object:new Map,function:new Map,custom:new Map},m=c||n,h=l.ignoreUndefined;for(let n=0;n<e.length;++n){const o=u?a(e[n],u):e[n],l=c?f.custom:f[typeof o];if(s(l,"Failed to find unique map container for type",typeof o),l instanceof Map){const s=l.entries();let a;for(;!(a=s.next()).done;)if(m(a.value[0],o)){const s=t.localize([...t.path,n],[e,...t.ancestors]),o={pos:n,value:e[n],dupePos:a.value[1],dupeValue:e[a.value[1]]};return u&&(o.path=i),r("array.unique",o,s)}l.set(o,n);}else {if((!h||void 0!==o)&&void 0!==l[o]){const s={pos:n,value:e[n],dupePos:l[o],dupeValue:e[l[o]]};return u&&(s.path=i),r("array.unique",s,t.localize([...t.path,n],[e,...t.ancestors]))}l[o]=n;}}return e},args:["comparator","options"],multi:!0}},cast:{set:{from:Array.isArray,to:(e,t)=>new Set(e)}},rebuild(e){e.$_terms._inclusions=[],e.$_terms._exclusions=[],e.$_terms._requireds=[];for(const t of e.$_terms.items)c.validateSingle(t,e),"required"===t._flags.presence?e.$_terms._requireds.push(t):"forbidden"===t._flags.presence?e.$_terms._exclusions.push(t):e.$_terms._inclusions.push(t);for(const t of e.$_terms.ordered)c.validateSingle(t,e);},manifest:{build:(e,t)=>(t.items&&(e=e.items(...t.items)),t.ordered&&(e=e.ordered(...t.ordered)),e)},messages:{"array.base":"{{#label}} must be an array","array.excludes":"{{#label}} contains an excluded value","array.hasKnown":"{{#label}} does not contain at least one required match for type {:#patternLabel}","array.hasUnknown":"{{#label}} does not contain at least one required match","array.includes":"{{#label}} does not match any of the allowed types","array.includesRequiredBoth":"{{#label}} does not contain {{#knownMisses}} and {{#unknownMisses}} other required value(s)","array.includesRequiredKnowns":"{{#label}} does not contain {{#knownMisses}}","array.includesRequiredUnknowns":"{{#label}} does not contain {{#unknownMisses}} required value(s)","array.length":"{{#label}} must contain {{#limit}} items","array.max":"{{#label}} must contain less than or equal to {{#limit}} items","array.min":"{{#label}} must contain at least {{#limit}} items","array.orderedLength":"{{#label}} must contain at most {{#limit}} items","array.sort":"{{#label}} must be sorted in {#order} order by {{#by}}","array.sort.mismatching":"{{#label}} cannot be sorted due to mismatching types","array.sort.unsupported":"{{#label}} cannot be sorted due to unsupported type {#type}","array.sparse":"{{#label}} must not be a sparse array item","array.unique":"{{#label}} contains a duplicate value"}}),c.fillMissedErrors=function(e,t,r,s,n,a){const o=[];let i=0;for(const e of r){const t=e._flags.label;t?o.push(t):++i;}o.length?i?t.push(e.$_createError("array.includesRequiredBoth",s,{knownMisses:o,unknownMisses:i},n,a)):t.push(e.$_createError("array.includesRequiredKnowns",s,{knownMisses:o},n,a)):t.push(e.$_createError("array.includesRequiredUnknowns",s,{unknownMisses:i},n,a));},c.fillOrderedErrors=function(e,t,r,s,n,a){const o=[];for(const e of r)"required"===e._flags.presence&&o.push(e);o.length&&c.fillMissedErrors(e,t,o,s,n,a);},c.fillDefault=function(e,t,r,s){const n=[];let a=!0;for(let o=e.length-1;o>=0;--o){const i=e[o],l=[t,...r.ancestors],c=i.$_validate(void 0,r.localize(r.path,l,i),s).value;if(a){if(void 0===c)continue;a=!1;}n.unshift(c);}n.length&&t.push(...n);},c.fastSplice=function(e,t){let r=t;for(;r<e.length;)e[r++]=e[r];--e.length;},c.validateSingle=function(e,t){("array"===e.type||e._flags._arrayItems)&&(s(!t._flags.single,"Cannot specify array item with single rule enabled"),t.$_setFlag("_arrayItems",!0,{clone:!1}));},c.sort=function(e,t,r,s,n){const a="ascending"===r.order?1:-1,o=-1*a,i=a,l=(l,u)=>{let f=c.compare(l,u,o,i);if(null!==f)return f;if(r.by&&(l=r.by.resolve(l,s,n),u=r.by.resolve(u,s,n)),f=c.compare(l,u,o,i),null!==f)return f;const m=typeof l;if(m!==typeof u)throw e.$_createError("array.sort.mismatching",t,null,s,n);if("number"!==m&&"string"!==m)throw e.$_createError("array.sort.unsupported",t,{type:m},s,n);return "number"===m?(l-u)*a:l<u?o:i};try{return {value:t.slice().sort(l)}}catch(e){return {errors:e}}},c.compare=function(e,t,r,s){return e===t?0:void 0===e?1:void 0===t?-1:null===e?s:null===t?r:null};},4937:(e,t,r)=>{const s=r(375),n=r(8068),a=r(8160),o=r(2036),i={isBool:function(e){return "boolean"==typeof e}};e.exports=n.extend({type:"boolean",flags:{sensitive:{default:!1}},terms:{falsy:{init:null,manifest:"values"},truthy:{init:null,manifest:"values"}},coerce(e,{schema:t}){if("boolean"!=typeof e){if("string"==typeof e){const r=t._flags.sensitive?e:e.toLowerCase();e="true"===r||"false"!==r&&e;}return "boolean"!=typeof e&&(e=t.$_terms.truthy&&t.$_terms.truthy.has(e,null,null,!t._flags.sensitive)||(!t.$_terms.falsy||!t.$_terms.falsy.has(e,null,null,!t._flags.sensitive))&&e),{value:e}}},validate(e,{error:t}){if("boolean"!=typeof e)return {value:e,errors:t("boolean.base")}},rules:{truthy:{method(...e){a.verifyFlat(e,"truthy");const t=this.clone();t.$_terms.truthy=t.$_terms.truthy||new o;for(let r=0;r<e.length;++r){const n=e[r];s(void 0!==n,"Cannot call truthy with undefined"),t.$_terms.truthy.add(n);}return t}},falsy:{method(...e){a.verifyFlat(e,"falsy");const t=this.clone();t.$_terms.falsy=t.$_terms.falsy||new o;for(let r=0;r<e.length;++r){const n=e[r];s(void 0!==n,"Cannot call falsy with undefined"),t.$_terms.falsy.add(n);}return t}},sensitive:{method(e=!0){return this.$_setFlag("sensitive",e)}}},cast:{number:{from:i.isBool,to:(e,t)=>e?1:0},string:{from:i.isBool,to:(e,t)=>e?"true":"false"}},manifest:{build:(e,t)=>(t.truthy&&(e=e.truthy(...t.truthy)),t.falsy&&(e=e.falsy(...t.falsy)),e)},messages:{"boolean.base":"{{#label}} must be a boolean"}});},7500:(e,t,r)=>{const s=r(375),n=r(8068),a=r(8160),o=r(3328),i={isDate:function(e){return e instanceof Date}};e.exports=n.extend({type:"date",coerce:{from:["number","string"],method:(e,{schema:t})=>({value:i.parse(e,t._flags.format)||e})},validate(e,{schema:t,error:r,prefs:s}){if(e instanceof Date&&!isNaN(e.getTime()))return;const n=t._flags.format;return s.convert&&n&&"string"==typeof e?{value:e,errors:r("date.format",{format:n})}:{value:e,errors:r("date.base")}},rules:{compare:{method:!1,validate(e,t,{date:r},{name:s,operator:n,args:o}){const i="now"===r?Date.now():r.getTime();return a.compare(e.getTime(),i,n)?e:t.error("date."+s,{limit:o.date,value:e})},args:[{name:"date",ref:!0,normalize:e=>"now"===e?e:i.parse(e),assert:e=>null!==e,message:"must have a valid date format"}]},format:{method(e){return s(["iso","javascript","unix"].includes(e),"Unknown date format",e),this.$_setFlag("format",e)}},greater:{method(e){return this.$_addRule({name:"greater",method:"compare",args:{date:e},operator:">"})}},iso:{method(){return this.format("iso")}},less:{method(e){return this.$_addRule({name:"less",method:"compare",args:{date:e},operator:"<"})}},max:{method(e){return this.$_addRule({name:"max",method:"compare",args:{date:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"compare",args:{date:e},operator:">="})}},timestamp:{method(e="javascript"){return s(["javascript","unix"].includes(e),'"type" must be one of "javascript, unix"'),this.format(e)}}},cast:{number:{from:i.isDate,to:(e,t)=>e.getTime()},string:{from:i.isDate,to:(e,{prefs:t})=>o.date(e,t)}},messages:{"date.base":"{{#label}} must be a valid date","date.format":'{{#label}} must be in {msg("date.format." + #format) || #format} format',"date.greater":"{{#label}} must be greater than {{:#limit}}","date.less":"{{#label}} must be less than {{:#limit}}","date.max":"{{#label}} must be less than or equal to {{:#limit}}","date.min":"{{#label}} must be greater than or equal to {{:#limit}}","date.format.iso":"ISO 8601 date","date.format.javascript":"timestamp or number of milliseconds","date.format.unix":"timestamp or number of seconds"}}),i.parse=function(e,t){if(e instanceof Date)return e;if("string"!=typeof e&&(isNaN(e)||!isFinite(e)))return null;if(/^\s*$/.test(e))return null;if("iso"===t)return a.isIsoDate(e)?i.date(e.toString()):null;const r=e;if("string"==typeof e&&/^[+-]?\d+(\.\d+)?$/.test(e)&&(e=parseFloat(e)),t){if("javascript"===t)return i.date(1*e);if("unix"===t)return i.date(1e3*e);if("string"==typeof r)return null}return i.date(e)},i.date=function(e){const t=new Date(e);return isNaN(t.getTime())?null:t};},390:(e,t,r)=>{const s=r(375),n=r(7824);e.exports=n.extend({type:"function",properties:{typeof:"function"},rules:{arity:{method(e){return s(Number.isSafeInteger(e)&&e>=0,"n must be a positive integer"),this.$_addRule({name:"arity",args:{n:e}})},validate:(e,t,{n:r})=>e.length===r?e:t.error("function.arity",{n:r})},class:{method(){return this.$_addRule("class")},validate:(e,t)=>/^\s*class\s/.test(e.toString())?e:t.error("function.class",{value:e})},minArity:{method(e){return s(Number.isSafeInteger(e)&&e>0,"n must be a strict positive integer"),this.$_addRule({name:"minArity",args:{n:e}})},validate:(e,t,{n:r})=>e.length>=r?e:t.error("function.minArity",{n:r})},maxArity:{method(e){return s(Number.isSafeInteger(e)&&e>=0,"n must be a positive integer"),this.$_addRule({name:"maxArity",args:{n:e}})},validate:(e,t,{n:r})=>e.length<=r?e:t.error("function.maxArity",{n:r})}},messages:{"function.arity":"{{#label}} must have an arity of {{#n}}","function.class":"{{#label}} must be a class","function.maxArity":"{{#label}} must have an arity lesser or equal to {{#n}}","function.minArity":"{{#label}} must have an arity greater or equal to {{#n}}"}});},7824:(e,t,r)=>{const s=r(978),n=r(375),a=r(8571),o=r(3652),i=r(8068),l=r(8160),c=r(3292),u=r(6354),f=r(6133),m=r(3328),h={renameDefaults:{alias:!1,multiple:!1,override:!1}};e.exports=i.extend({type:"_keys",properties:{typeof:"object"},flags:{unknown:{default:!1}},terms:{dependencies:{init:null},keys:{init:null,manifest:{mapped:{from:"schema",to:"key"}}},patterns:{init:null},renames:{init:null}},args:(e,t)=>e.keys(t),validate(e,{schema:t,error:r,state:s,prefs:n}){if(!e||typeof e!==t.$_property("typeof")||Array.isArray(e))return {value:e,errors:r("object.base",{type:t.$_property("typeof")})};if(!(t.$_terms.renames||t.$_terms.dependencies||t.$_terms.keys||t.$_terms.patterns||t.$_terms.externals))return;e=h.clone(e,n);const a=[];if(t.$_terms.renames&&!h.rename(t,e,s,n,a))return {value:e,errors:a};if(!t.$_terms.keys&&!t.$_terms.patterns&&!t.$_terms.dependencies)return {value:e,errors:a};const o=new Set(Object.keys(e));if(t.$_terms.keys){const r=[e,...s.ancestors];for(const i of t.$_terms.keys){const t=i.key,l=e[t];o.delete(t);const c=s.localize([...s.path,t],r,i),u=i.schema.$_validate(l,c,n);if(u.errors){if(n.abortEarly)return {value:e,errors:u.errors};void 0!==u.value&&(e[t]=u.value),a.push(...u.errors);}else "strip"===i.schema._flags.result||void 0===u.value&&void 0!==l?delete e[t]:void 0!==u.value&&(e[t]=u.value);}}if(o.size||t._flags._hasPatternMatch){const r=h.unknown(t,e,o,a,s,n);if(r)return r}if(t.$_terms.dependencies)for(const r of t.$_terms.dependencies){if(r.key&&void 0===r.key.resolve(e,s,n,null,{shadow:!1}))continue;const o=h.dependencies[r.rel](t,r,e,s,n);if(o){const r=t.$_createError(o.code,e,o.context,s,n);if(n.abortEarly)return {value:e,errors:r};a.push(r);}}return {value:e,errors:a}},rules:{and:{method(...e){return l.verifyFlat(e,"and"),h.dependency(this,"and",null,e)}},append:{method(e){return null==e||0===Object.keys(e).length?this:this.keys(e)}},assert:{method(e,t,r){m.isTemplate(e)||(e=c.ref(e)),n(void 0===r||"string"==typeof r,"Message must be a string"),t=this.$_compile(t,{appendPath:!0});const s=this.$_addRule({name:"assert",args:{subject:e,schema:t,message:r}});return s.$_mutateRegister(e),s.$_mutateRegister(t),s},validate(e,{error:t,prefs:r,state:s},{subject:n,schema:a,message:o}){const i=n.resolve(e,s,r),l=f.isRef(n)?n.absolute(s):[];return a.$_match(i,s.localize(l,[e,...s.ancestors],a),r)?e:t("object.assert",{subject:n,message:o})},args:["subject","schema","message"],multi:!0},instance:{method(e,t){return n("function"==typeof e,"constructor must be a function"),t=t||e.name,this.$_addRule({name:"instance",args:{constructor:e,name:t}})},validate:(e,t,{constructor:r,name:s})=>e instanceof r?e:t.error("object.instance",{type:s,value:e}),args:["constructor","name"]},keys:{method(e){n(void 0===e||"object"==typeof e,"Object schema must be a valid object"),n(!l.isSchema(e),"Object schema cannot be a joi schema");const t=this.clone();if(e)if(Object.keys(e).length){t.$_terms.keys=t.$_terms.keys?t.$_terms.keys.filter((t=>!e.hasOwnProperty(t.key))):new h.Keys;for(const r in e)l.tryWithPath((()=>t.$_terms.keys.push({key:r,schema:this.$_compile(e[r])})),r);}else t.$_terms.keys=new h.Keys;else t.$_terms.keys=null;return t.$_mutateRebuild()}},length:{method(e){return this.$_addRule({name:"length",args:{limit:e},operator:"="})},validate:(e,t,{limit:r},{name:s,operator:n,args:a})=>l.compare(Object.keys(e).length,r,n)?e:t.error("object."+s,{limit:a.limit,value:e}),args:[{name:"limit",ref:!0,assert:l.limit,message:"must be a positive integer"}]},max:{method(e){return this.$_addRule({name:"max",method:"length",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"length",args:{limit:e},operator:">="})}},nand:{method(...e){return l.verifyFlat(e,"nand"),h.dependency(this,"nand",null,e)}},or:{method(...e){return l.verifyFlat(e,"or"),h.dependency(this,"or",null,e)}},oxor:{method(...e){return h.dependency(this,"oxor",null,e)}},pattern:{method(e,t,r={}){const s=e instanceof RegExp;s||(e=this.$_compile(e,{appendPath:!0})),n(void 0!==t,"Invalid rule"),l.assertOptions(r,["fallthrough","matches"]),s&&n(!e.flags.includes("g")&&!e.flags.includes("y"),"pattern should not use global or sticky mode"),t=this.$_compile(t,{appendPath:!0});const a=this.clone();a.$_terms.patterns=a.$_terms.patterns||[];const o={[s?"regex":"schema"]:e,rule:t};return r.matches&&(o.matches=this.$_compile(r.matches),"array"!==o.matches.type&&(o.matches=o.matches.$_root.array().items(o.matches)),a.$_mutateRegister(o.matches),a.$_setFlag("_hasPatternMatch",!0,{clone:!1})),r.fallthrough&&(o.fallthrough=!0),a.$_terms.patterns.push(o),a.$_mutateRegister(t),a}},ref:{method(){return this.$_addRule("ref")},validate:(e,t)=>f.isRef(e)?e:t.error("object.refType",{value:e})},regex:{method(){return this.$_addRule("regex")},validate:(e,t)=>e instanceof RegExp?e:t.error("object.regex",{value:e})},rename:{method(e,t,r={}){n("string"==typeof e||e instanceof RegExp,"Rename missing the from argument"),n("string"==typeof t||t instanceof m,"Invalid rename to argument"),n(t!==e,"Cannot rename key to same name:",e),l.assertOptions(r,["alias","ignoreUndefined","override","multiple"]);const a=this.clone();a.$_terms.renames=a.$_terms.renames||[];for(const t of a.$_terms.renames)n(t.from!==e,"Cannot rename the same key multiple times");return t instanceof m&&a.$_mutateRegister(t),a.$_terms.renames.push({from:e,to:t,options:s(h.renameDefaults,r)}),a}},schema:{method(e="any"){return this.$_addRule({name:"schema",args:{type:e}})},validate:(e,t,{type:r})=>!l.isSchema(e)||"any"!==r&&e.type!==r?t.error("object.schema",{type:r}):e},unknown:{method(e){return this.$_setFlag("unknown",!1!==e)}},with:{method(e,t,r={}){return h.dependency(this,"with",e,t,r)}},without:{method(e,t,r={}){return h.dependency(this,"without",e,t,r)}},xor:{method(...e){return l.verifyFlat(e,"xor"),h.dependency(this,"xor",null,e)}}},overrides:{default(e,t){return void 0===e&&(e=l.symbols.deepDefault),this.$_parent("default",e,t)}},rebuild(e){if(e.$_terms.keys){const t=new o.Sorter;for(const r of e.$_terms.keys)l.tryWithPath((()=>t.add(r,{after:r.schema.$_rootReferences(),group:r.key})),r.key);e.$_terms.keys=new h.Keys(...t.nodes);}},manifest:{build(e,t){if(t.keys&&(e=e.keys(t.keys)),t.dependencies)for(const{rel:r,key:s=null,peers:n,options:a}of t.dependencies)e=h.dependency(e,r,s,n,a);if(t.patterns)for(const{regex:r,schema:s,rule:n,fallthrough:a,matches:o}of t.patterns)e=e.pattern(r||s,n,{fallthrough:a,matches:o});if(t.renames)for(const{from:r,to:s,options:n}of t.renames)e=e.rename(r,s,n);return e}},messages:{"object.and":"{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}","object.assert":'{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',"object.base":"{{#label}} must be of type {{#type}}","object.instance":"{{#label}} must be an instance of {{:#type}}","object.length":'{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}',"object.max":'{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}',"object.min":'{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}',"object.missing":"{{#label}} must contain at least one of {{#peersWithLabels}}","object.nand":"{{:#mainWithLabel}} must not exist simultaneously with {{#peersWithLabels}}","object.oxor":"{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}","object.pattern.match":"{{#label}} keys failed to match pattern requirements","object.refType":"{{#label}} must be a Joi reference","object.regex":"{{#label}} must be a RegExp object","object.rename.multiple":"{{#label}} cannot rename {{:#from}} because multiple renames are disabled and another key was already renamed to {{:#to}}","object.rename.override":"{{#label}} cannot rename {{:#from}} because override is disabled and target {{:#to}} exists","object.schema":"{{#label}} must be a Joi schema of {{#type}} type","object.unknown":"{{#label}} is not allowed","object.with":"{{:#mainWithLabel}} missing required peer {{:#peerWithLabel}}","object.without":"{{:#mainWithLabel}} conflict with forbidden peer {{:#peerWithLabel}}","object.xor":"{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}"}}),h.clone=function(e,t){if("object"==typeof e){if(t.nonEnumerables)return a(e,{shallow:!0});const r=Object.create(Object.getPrototypeOf(e));return Object.assign(r,e),r}const r=function(...t){return e.apply(this,t)};return r.prototype=a(e.prototype),Object.defineProperty(r,"name",{value:e.name,writable:!1}),Object.defineProperty(r,"length",{value:e.length,writable:!1}),Object.assign(r,e),r},h.dependency=function(e,t,r,s,a){n(null===r||"string"==typeof r,t,"key must be a strings"),a||(a=s.length>1&&"object"==typeof s[s.length-1]?s.pop():{}),l.assertOptions(a,["separator"]),s=[].concat(s);const o=l.default(a.separator,"."),i=[];for(const e of s)n("string"==typeof e,t,"peers must be strings"),i.push(c.ref(e,{separator:o,ancestor:0,prefix:!1}));null!==r&&(r=c.ref(r,{separator:o,ancestor:0,prefix:!1}));const u=e.clone();return u.$_terms.dependencies=u.$_terms.dependencies||[],u.$_terms.dependencies.push(new h.Dependency(t,r,i,s)),u},h.dependencies={and(e,t,r,s,n){const a=[],o=[],i=t.peers.length;for(const e of t.peers)void 0===e.resolve(r,s,n,null,{shadow:!1})?a.push(e.key):o.push(e.key);if(a.length!==i&&o.length!==i)return {code:"object.and",context:{present:o,presentWithLabels:h.keysToLabels(e,o),missing:a,missingWithLabels:h.keysToLabels(e,a)}}},nand(e,t,r,s,n){const a=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&a.push(e.key);if(a.length!==t.peers.length)return;const o=t.paths[0],i=t.paths.slice(1);return {code:"object.nand",context:{main:o,mainWithLabel:h.keysToLabels(e,o),peers:i,peersWithLabels:h.keysToLabels(e,i)}}},or(e,t,r,s,n){for(const e of t.peers)if(void 0!==e.resolve(r,s,n,null,{shadow:!1}))return;return {code:"object.missing",context:{peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)}}},oxor(e,t,r,s,n){const a=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&a.push(e.key);if(!a.length||1===a.length)return;const o={peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)};return o.present=a,o.presentWithLabels=h.keysToLabels(e,a),{code:"object.oxor",context:o}},with(e,t,r,s,n){for(const a of t.peers)if(void 0===a.resolve(r,s,n,null,{shadow:!1}))return {code:"object.with",context:{main:t.key.key,mainWithLabel:h.keysToLabels(e,t.key.key),peer:a.key,peerWithLabel:h.keysToLabels(e,a.key)}}},without(e,t,r,s,n){for(const a of t.peers)if(void 0!==a.resolve(r,s,n,null,{shadow:!1}))return {code:"object.without",context:{main:t.key.key,mainWithLabel:h.keysToLabels(e,t.key.key),peer:a.key,peerWithLabel:h.keysToLabels(e,a.key)}}},xor(e,t,r,s,n){const a=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&a.push(e.key);if(1===a.length)return;const o={peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)};return 0===a.length?{code:"object.missing",context:o}:(o.present=a,o.presentWithLabels=h.keysToLabels(e,a),{code:"object.xor",context:o})}},h.keysToLabels=function(e,t){return Array.isArray(t)?t.map((t=>e.$_mapLabels(t))):e.$_mapLabels(t)},h.rename=function(e,t,r,s,n){const a={};for(const o of e.$_terms.renames){const i=[],l="string"!=typeof o.from;if(l)for(const e in t){if(void 0===t[e]&&o.options.ignoreUndefined)continue;if(e===o.to)continue;const r=o.from.exec(e);r&&i.push({from:e,to:o.to,match:r});}else !Object.prototype.hasOwnProperty.call(t,o.from)||void 0===t[o.from]&&o.options.ignoreUndefined||i.push(o);for(const c of i){const i=c.from;let u=c.to;if(u instanceof m&&(u=u.render(t,r,s,c.match)),i!==u){if(!o.options.multiple&&a[u]&&(n.push(e.$_createError("object.rename.multiple",t,{from:i,to:u,pattern:l},r,s)),s.abortEarly))return !1;if(Object.prototype.hasOwnProperty.call(t,u)&&!o.options.override&&!a[u]&&(n.push(e.$_createError("object.rename.override",t,{from:i,to:u,pattern:l},r,s)),s.abortEarly))return !1;void 0===t[i]?delete t[u]:t[u]=t[i],a[u]=!0,o.options.alias||delete t[i];}}}return !0},h.unknown=function(e,t,r,s,n,a){if(e.$_terms.patterns){let o=!1;const i=e.$_terms.patterns.map((e=>{if(e.matches)return o=!0,[]})),l=[t,...n.ancestors];for(const o of r){const c=t[o],u=[...n.path,o];for(let f=0;f<e.$_terms.patterns.length;++f){const m=e.$_terms.patterns[f];if(m.regex){const e=m.regex.test(o);if(n.mainstay.tracer.debug(n,"rule","pattern.".concat(f),e?"pass":"error"),!e)continue}else if(!m.schema.$_match(o,n.nest(m.schema,"pattern.".concat(f)),a))continue;r.delete(o);const h=n.localize(u,l,{schema:m.rule,key:o}),d=m.rule.$_validate(c,h,a);if(d.errors){if(a.abortEarly)return {value:t,errors:d.errors};s.push(...d.errors);}if(m.matches&&i[f].push(o),t[o]=d.value,!m.fallthrough)break}}if(o)for(let r=0;r<i.length;++r){const o=i[r];if(!o)continue;const c=e.$_terms.patterns[r].matches,f=n.localize(n.path,l,c),m=c.$_validate(o,f,a);if(m.errors){const r=u.details(m.errors,{override:!1});r.matches=o;const i=e.$_createError("object.pattern.match",t,r,n,a);if(a.abortEarly)return {value:t,errors:i};s.push(i);}}}if(r.size&&(e.$_terms.keys||e.$_terms.patterns)){if(a.stripUnknown&&!e._flags.unknown||a.skipFunctions){const e=!(!a.stripUnknown||!0!==a.stripUnknown&&!a.stripUnknown.objects);for(const s of r)e?(delete t[s],r.delete(s)):"function"==typeof t[s]&&r.delete(s);}if(!l.default(e._flags.unknown,a.allowUnknown))for(const o of r){const r=n.localize([...n.path,o],[]),i=e.$_createError("object.unknown",t[o],{child:o},r,a,{flags:!1});if(a.abortEarly)return {value:t,errors:i};s.push(i);}}},h.Dependency=class{constructor(e,t,r,s){this.rel=e,this.key=t,this.peers=r,this.paths=s;}describe(){const e={rel:this.rel,peers:this.paths};return null!==this.key&&(e.key=this.key.key),"."!==this.peers[0].separator&&(e.options={separator:this.peers[0].separator}),e}},h.Keys=class extends Array{concat(e){const t=this.slice(),r=new Map;for(let e=0;e<t.length;++e)r.set(t[e].key,e);for(const s of e){const e=s.key,n=r.get(e);void 0!==n?t[n]={key:e,schema:t[n].schema.concat(s.schema)}:t.push(s);}return t}};},8785:(e,t,r)=>{const s=r(375),n=r(8068),a=r(8160),o=r(3292),i=r(6354),l={};e.exports=n.extend({type:"link",properties:{schemaChain:!0},terms:{link:{init:null,manifest:"single",register:!1}},args:(e,t)=>e.ref(t),validate(e,{schema:t,state:r,prefs:n}){s(t.$_terms.link,"Uninitialized link schema");const a=l.generate(t,e,r,n),o=t.$_terms.link[0].ref;return a.$_validate(e,r.nest(a,"link:".concat(o.display,":").concat(a.type)),n)},generate:(e,t,r,s)=>l.generate(e,t,r,s),rules:{ref:{method(e){s(!this.$_terms.link,"Cannot reinitialize schema"),e=o.ref(e),s("value"===e.type||"local"===e.type,"Invalid reference type:",e.type),s("local"===e.type||"root"===e.ancestor||e.ancestor>0,"Link cannot reference itself");const t=this.clone();return t.$_terms.link=[{ref:e}],t}},relative:{method(e=!0){return this.$_setFlag("relative",e)}}},overrides:{concat(e){s(this.$_terms.link,"Uninitialized link schema"),s(a.isSchema(e),"Invalid schema object"),s("link"!==e.type,"Cannot merge type link with another link");const t=this.clone();return t.$_terms.whens||(t.$_terms.whens=[]),t.$_terms.whens.push({concat:e}),t.$_mutateRebuild()}},manifest:{build:(e,t)=>(s(t.link,"Invalid link description missing link"),e.ref(t.link))}}),l.generate=function(e,t,r,s){let n=r.mainstay.links.get(e);if(n)return n._generate(t,r,s).schema;const a=e.$_terms.link[0].ref,{perspective:o,path:i}=l.perspective(a,r);l.assert(o,"which is outside of schema boundaries",a,e,r,s);try{n=i.length?o.$_reach(i):o;}catch(t){l.assert(!1,"to non-existing schema",a,e,r,s);}return l.assert("link"!==n.type,"which is another link",a,e,r,s),e._flags.relative||r.mainstay.links.set(e,n),n._generate(t,r,s).schema},l.perspective=function(e,t){if("local"===e.type){for(const{schema:r,key:s}of t.schemas){if((r._flags.id||s)===e.path[0])return {perspective:r,path:e.path.slice(1)};if(r.$_terms.shared)for(const t of r.$_terms.shared)if(t._flags.id===e.path[0])return {perspective:t,path:e.path.slice(1)}}return {perspective:null,path:null}}return "root"===e.ancestor?{perspective:t.schemas[t.schemas.length-1].schema,path:e.path}:{perspective:t.schemas[e.ancestor]&&t.schemas[e.ancestor].schema,path:e.path}},l.assert=function(e,t,r,n,a,o){e||s(!1,'"'.concat(i.label(n._flags,a,o),'" contains link reference "').concat(r.display,'" ').concat(t));};},3832:(e,t,r)=>{const s=r(375),n=r(8068),a=r(8160),o={numberRx:/^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i,precisionRx:/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/};e.exports=n.extend({type:"number",flags:{unsafe:{default:!1}},coerce:{from:"string",method(e,{schema:t,error:r}){const s=e.match(o.numberRx);if(!s)return;e=e.trim();const n={value:parseFloat(e)};if(0===n.value&&(n.value=0),!t._flags.unsafe)if(e.match(/e/i)){if(o.normalizeExponent("".concat(n.value/Math.pow(10,s[1]),"e").concat(s[1]))!==o.normalizeExponent(e))return n.errors=r("number.unsafe"),n}else {const t=n.value.toString();if(t.match(/e/i))return n;if(t!==o.normalizeDecimal(e))return n.errors=r("number.unsafe"),n}return n}},validate(e,{schema:t,error:r,prefs:s}){if(e===1/0||e===-1/0)return {value:e,errors:r("number.infinity")};if(!a.isNumber(e))return {value:e,errors:r("number.base")};const n={value:e};if(s.convert){const e=t.$_getRule("precision");if(e){const t=Math.pow(10,e.args.limit);n.value=Math.round(n.value*t)/t;}}return 0===n.value&&(n.value=0),!t._flags.unsafe&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&(n.errors=r("number.unsafe")),n},rules:{compare:{method:!1,validate:(e,t,{limit:r},{name:s,operator:n,args:o})=>a.compare(e,r,n)?e:t.error("number."+s,{limit:o.limit,value:e}),args:[{name:"limit",ref:!0,assert:a.isNumber,message:"must be a number"}]},greater:{method(e){return this.$_addRule({name:"greater",method:"compare",args:{limit:e},operator:">"})}},integer:{method(){return this.$_addRule("integer")},validate:(e,t)=>Math.trunc(e)-e==0?e:t.error("number.integer")},less:{method(e){return this.$_addRule({name:"less",method:"compare",args:{limit:e},operator:"<"})}},max:{method(e){return this.$_addRule({name:"max",method:"compare",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"compare",args:{limit:e},operator:">="})}},multiple:{method(e){return this.$_addRule({name:"multiple",args:{base:e}})},validate:(e,t,{base:r},s)=>e%r==0?e:t.error("number.multiple",{multiple:s.args.base,value:e}),args:[{name:"base",ref:!0,assert:e=>"number"==typeof e&&isFinite(e)&&e>0,message:"must be a positive number"}],multi:!0},negative:{method(){return this.sign("negative")}},port:{method(){return this.$_addRule("port")},validate:(e,t)=>Number.isSafeInteger(e)&&e>=0&&e<=65535?e:t.error("number.port")},positive:{method(){return this.sign("positive")}},precision:{method(e){return s(Number.isSafeInteger(e),"limit must be an integer"),this.$_addRule({name:"precision",args:{limit:e}})},validate(e,t,{limit:r}){const s=e.toString().match(o.precisionRx);return Math.max((s[1]?s[1].length:0)-(s[2]?parseInt(s[2],10):0),0)<=r?e:t.error("number.precision",{limit:r,value:e})},convert:!0},sign:{method(e){return s(["negative","positive"].includes(e),"Invalid sign",e),this.$_addRule({name:"sign",args:{sign:e}})},validate:(e,t,{sign:r})=>"negative"===r&&e<0||"positive"===r&&e>0?e:t.error("number.".concat(r))},unsafe:{method(e=!0){return s("boolean"==typeof e,"enabled must be a boolean"),this.$_setFlag("unsafe",e)}}},cast:{string:{from:e=>"number"==typeof e,to:(e,t)=>e.toString()}},messages:{"number.base":"{{#label}} must be a number","number.greater":"{{#label}} must be greater than {{#limit}}","number.infinity":"{{#label}} cannot be infinity","number.integer":"{{#label}} must be an integer","number.less":"{{#label}} must be less than {{#limit}}","number.max":"{{#label}} must be less than or equal to {{#limit}}","number.min":"{{#label}} must be greater than or equal to {{#limit}}","number.multiple":"{{#label}} must be a multiple of {{#multiple}}","number.negative":"{{#label}} must be a negative number","number.port":"{{#label}} must be a valid port","number.positive":"{{#label}} must be a positive number","number.precision":"{{#label}} must have no more than {{#limit}} decimal places","number.unsafe":"{{#label}} must be a safe number"}}),o.normalizeExponent=function(e){return e.replace(/E/,"e").replace(/\.(\d*[1-9])?0+e/,".$1e").replace(/\.e/,"e").replace(/e\+/,"e").replace(/^\+/,"").replace(/^(-?)0+([1-9])/,"$1$2")},o.normalizeDecimal=function(e){return (e=e.replace(/^\+/,"").replace(/\.0*$/,"").replace(/^(-?)\.([^\.]*)$/,"$10.$2").replace(/^(-?)0+([0-9])/,"$1$2")).includes(".")&&e.endsWith("0")&&(e=e.replace(/0+$/,"")),"-0"===e?"0":e};},8966:(e,t,r)=>{const s=r(7824);e.exports=s.extend({type:"object",cast:{map:{from:e=>e&&"object"==typeof e,to:(e,t)=>new Map(Object.entries(e))}}});},7417:(e,t,r)=>{function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s);}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o=r(375),i=r(5380),l=r(1745),c=r(9959),u=r(6064),f=r(9926),m=r(5752),h=r(8068),d=r(8160),p={tlds:f instanceof Set&&{tlds:{allow:f,deny:null}},base64Regex:{true:{true:/^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}==|[\w\-]{3}=)?$/,false:/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/},false:{true:/^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}(==)?|[\w\-]{3}=?)?$/,false:/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/}},dataUriRegex:/^data:[\w+.-]+\/[\w+.-]+;((charset=[\w-]+|base64),)?(.*)$/,hexRegex:/^[a-f0-9]+$/i,ipRegex:c.regex().regex,isoDurationRegex:/^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/,guidBrackets:{"{":"}","[":"]","(":")","":""},guidVersions:{uuidv1:"1",uuidv2:"2",uuidv3:"3",uuidv4:"4",uuidv5:"5"},guidSeparators:new Set([void 0,!0,!1,"-",":"]),normalizationForms:["NFC","NFD","NFKC","NFKD"]};e.exports=h.extend({type:"string",flags:{insensitive:{default:!1},truncate:{default:!1}},terms:{replacements:{init:null}},coerce:{from:"string",method(e,{schema:t,state:r,prefs:s}){const n=t.$_getRule("normalize");n&&(e=e.normalize(n.args.form));const a=t.$_getRule("case");a&&(e="upper"===a.args.direction?e.toLocaleUpperCase():e.toLocaleLowerCase());const o=t.$_getRule("trim");if(o&&o.args.enabled&&(e=e.trim()),t.$_terms.replacements)for(const r of t.$_terms.replacements)e=e.replace(r.pattern,r.replacement);const i=t.$_getRule("hex");if(i&&i.args.options.byteAligned&&e.length%2!=0&&(e="0".concat(e)),t.$_getRule("isoDate")){const t=p.isoDate(e);t&&(e=t);}if(t._flags.truncate){const n=t.$_getRule("max");if(n){let a=n.args.limit;if(d.isResolvable(a)&&(a=a.resolve(e,r,s),!d.limit(a)))return {value:e,errors:t.$_createError("any.ref",a,{ref:n.args.limit,arg:"limit",reason:"must be a positive integer"},r,s)};e=e.slice(0,a);}}return {value:e}}},validate:(e,{error:t})=>"string"!=typeof e?{value:e,errors:t("string.base")}:""===e?{value:e,errors:t("string.empty")}:void 0,rules:{alphanum:{method(){return this.$_addRule("alphanum")},validate:(e,t)=>/^[a-zA-Z0-9]+$/.test(e)?e:t.error("string.alphanum")},base64:{method(e={}){return d.assertOptions(e,["paddingRequired","urlSafe"]),e=n({urlSafe:!1,paddingRequired:!0},e),o("boolean"==typeof e.paddingRequired,"paddingRequired must be boolean"),o("boolean"==typeof e.urlSafe,"urlSafe must be boolean"),this.$_addRule({name:"base64",args:{options:e}})},validate:(e,t,{options:r})=>p.base64Regex[r.paddingRequired][r.urlSafe].test(e)?e:t.error("string.base64")},case:{method(e){return o(["lower","upper"].includes(e),"Invalid case:",e),this.$_addRule({name:"case",args:{direction:e}})},validate:(e,t,{direction:r})=>"lower"===r&&e===e.toLocaleLowerCase()||"upper"===r&&e===e.toLocaleUpperCase()?e:t.error("string.".concat(r,"case")),convert:!0},creditCard:{method(){return this.$_addRule("creditCard")},validate(e,t){let r=e.length,s=0,n=1;for(;r--;){const t=e.charAt(r)*n;s+=t-9*(t>9),n^=3;}return s>0&&s%10==0?e:t.error("string.creditCard")}},dataUri:{method(e={}){return d.assertOptions(e,["paddingRequired"]),e=n({paddingRequired:!0},e),o("boolean"==typeof e.paddingRequired,"paddingRequired must be boolean"),this.$_addRule({name:"dataUri",args:{options:e}})},validate(e,t,{options:r}){const s=e.match(p.dataUriRegex);if(s){if(!s[2])return e;if("base64"!==s[2])return e;if(p.base64Regex[r.paddingRequired].false.test(s[3]))return e}return t.error("string.dataUri")}},domain:{method(e){e&&d.assertOptions(e,["allowUnicode","maxDomainSegments","minDomainSegments","tlds"]);const t=p.addressOptions(e);return this.$_addRule({name:"domain",args:{options:e},address:t})},validate:(e,t,r,{address:s})=>i.isValid(e,s)?e:t.error("string.domain")},email:{method(e={}){d.assertOptions(e,["allowUnicode","ignoreLength","maxDomainSegments","minDomainSegments","multiple","separator","tlds"]),o(void 0===e.multiple||"boolean"==typeof e.multiple,"multiple option must be an boolean");const t=p.addressOptions(e),r=new RegExp("\\s*[".concat(e.separator?u(e.separator):",","]\\s*"));return this.$_addRule({name:"email",args:{options:e},regex:r,address:t})},validate(e,t,{options:r},{regex:s,address:n}){const a=r.multiple?e.split(s):[e],o=[];for(const e of a)l.isValid(e,n)||o.push(e);return o.length?t.error("string.email",{value:e,invalids:o}):e}},guid:{alias:"uuid",method(e={}){d.assertOptions(e,["version","separator"]);let t="";if(e.version){const r=[].concat(e.version);o(r.length>=1,"version must have at least 1 valid version specified");const s=new Set;for(let e=0;e<r.length;++e){const n=r[e];o("string"==typeof n,"version at position "+e+" must be a string");const a=p.guidVersions[n.toLowerCase()];o(a,"version at position "+e+" must be one of "+Object.keys(p.guidVersions).join(", ")),o(!s.has(a),"version at position "+e+" must not be a duplicate"),t+=a,s.add(a);}}o(p.guidSeparators.has(e.separator),'separator must be one of true, false, "-", or ":"');const r=void 0===e.separator?"[:-]?":!0===e.separator?"[:-]":!1===e.separator?"[]?":"\\".concat(e.separator),s=new RegExp("^([\\[{\\(]?)[0-9A-F]{8}(".concat(r,")[0-9A-F]{4}\\2?[").concat(t||"0-9A-F","][0-9A-F]{3}\\2?[").concat(t?"89AB":"0-9A-F","][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$"),"i");return this.$_addRule({name:"guid",args:{options:e},regex:s})},validate(e,t,r,{regex:s}){const n=s.exec(e);return n?p.guidBrackets[n[1]]!==n[n.length-1]?t.error("string.guid"):e:t.error("string.guid")}},hex:{method(e={}){return d.assertOptions(e,["byteAligned"]),e=n({byteAligned:!1},e),o("boolean"==typeof e.byteAligned,"byteAligned must be boolean"),this.$_addRule({name:"hex",args:{options:e}})},validate:(e,t,{options:r})=>p.hexRegex.test(e)?r.byteAligned&&e.length%2!=0?t.error("string.hexAlign"):e:t.error("string.hex")},hostname:{method(){return this.$_addRule("hostname")},validate:(e,t)=>i.isValid(e,{minDomainSegments:1})||p.ipRegex.test(e)?e:t.error("string.hostname")},insensitive:{method(){return this.$_setFlag("insensitive",!0)}},ip:{method(e={}){d.assertOptions(e,["cidr","version"]);const{cidr:t,versions:r,regex:s}=c.regex(e),n=e.version?r:void 0;return this.$_addRule({name:"ip",args:{options:{cidr:t,version:n}},regex:s})},validate:(e,t,{options:r},{regex:s})=>s.test(e)?e:r.version?t.error("string.ipVersion",{value:e,cidr:r.cidr,version:r.version}):t.error("string.ip",{value:e,cidr:r.cidr})},isoDate:{method(){return this.$_addRule("isoDate")},validate:(e,{error:t})=>p.isoDate(e)?e:t("string.isoDate")},isoDuration:{method(){return this.$_addRule("isoDuration")},validate:(e,t)=>p.isoDurationRegex.test(e)?e:t.error("string.isoDuration")},length:{method(e,t){return p.length(this,"length",e,"=",t)},validate(e,t,{limit:r,encoding:s},{name:n,operator:a,args:o}){const i=!s&&e.length;return d.compare(i,r,a)?e:t.error("string."+n,{limit:o.limit,value:e,encoding:s})},args:[{name:"limit",ref:!0,assert:d.limit,message:"must be a positive integer"},"encoding"]},lowercase:{method(){return this.case("lower")}},max:{method(e,t){return p.length(this,"max",e,"<=",t)},args:["limit","encoding"]},min:{method(e,t){return p.length(this,"min",e,">=",t)},args:["limit","encoding"]},normalize:{method(e="NFC"){return o(p.normalizationForms.includes(e),"normalization form must be one of "+p.normalizationForms.join(", ")),this.$_addRule({name:"normalize",args:{form:e}})},validate:(e,{error:t},{form:r})=>e===e.normalize(r)?e:t("string.normalize",{value:e,form:r}),convert:!0},pattern:{alias:"regex",method(e,t={}){o(e instanceof RegExp,"regex must be a RegExp"),o(!e.flags.includes("g")&&!e.flags.includes("y"),"regex should not use global or sticky mode"),"string"==typeof t&&(t={name:t}),d.assertOptions(t,["invert","name"]);const r=["string.pattern",t.invert?".invert":"",t.name?".name":".base"].join("");return this.$_addRule({name:"pattern",args:{regex:e,options:t},errorCode:r})},validate:(e,t,{regex:r,options:s},{errorCode:n})=>r.test(e)^s.invert?e:t.error(n,{name:s.name,regex:r,value:e}),args:["regex","options"],multi:!0},replace:{method(e,t){"string"==typeof e&&(e=new RegExp(u(e),"g")),o(e instanceof RegExp,"pattern must be a RegExp"),o("string"==typeof t,"replacement must be a String");const r=this.clone();return r.$_terms.replacements||(r.$_terms.replacements=[]),r.$_terms.replacements.push({pattern:e,replacement:t}),r}},token:{method(){return this.$_addRule("token")},validate:(e,t)=>/^\w+$/.test(e)?e:t.error("string.token")},trim:{method(e=!0){return o("boolean"==typeof e,"enabled must be a boolean"),this.$_addRule({name:"trim",args:{enabled:e}})},validate:(e,t,{enabled:r})=>r&&e!==e.trim()?t.error("string.trim"):e,convert:!0},truncate:{method(e=!0){return o("boolean"==typeof e,"enabled must be a boolean"),this.$_setFlag("truncate",e)}},uppercase:{method(){return this.case("upper")}},uri:{method(e={}){d.assertOptions(e,["allowRelative","allowQuerySquareBrackets","domain","relativeOnly","scheme"]),e.domain&&d.assertOptions(e.domain,["allowUnicode","maxDomainSegments","minDomainSegments","tlds"]);const{regex:t,scheme:r}=m.regex(e),s=e.domain?p.addressOptions(e.domain):null;return this.$_addRule({name:"uri",args:{options:e},regex:t,domain:s,scheme:r})},validate(e,t,{options:r},{regex:s,domain:n,scheme:a}){if(["http:/","https:/"].includes(e))return t.error("string.uri");const o=s.exec(e);if(o){const s=o[1]||o[2];return !n||r.allowRelative&&!s||i.isValid(s,n)?e:t.error("string.domain",{value:s})}return r.relativeOnly?t.error("string.uriRelativeOnly"):r.scheme?t.error("string.uriCustomScheme",{scheme:a,value:e}):t.error("string.uri")}}},manifest:{build(e,t){if(t.replacements)for(const{pattern:r,replacement:s}of t.replacements)e=e.replace(r,s);return e}},messages:{"string.alphanum":"{{#label}} must only contain alpha-numeric characters","string.base":"{{#label}} must be a string","string.base64":"{{#label}} must be a valid base64 string","string.creditCard":"{{#label}} must be a credit card","string.dataUri":"{{#label}} must be a valid dataUri string","string.domain":"{{#label}} must contain a valid domain name","string.email":"{{#label}} must be a valid email","string.empty":"{{#label}} is not allowed to be empty","string.guid":"{{#label}} must be a valid GUID","string.hex":"{{#label}} must only contain hexadecimal characters","string.hexAlign":"{{#label}} hex decoded representation must be byte aligned","string.hostname":"{{#label}} must be a valid hostname","string.ip":"{{#label}} must be a valid ip address with a {{#cidr}} CIDR","string.ipVersion":"{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR","string.isoDate":"{{#label}} must be in iso format","string.isoDuration":"{{#label}} must be a valid ISO 8601 duration","string.length":"{{#label}} length must be {{#limit}} characters long","string.lowercase":"{{#label}} must only contain lowercase characters","string.max":"{{#label}} length must be less than or equal to {{#limit}} characters long","string.min":"{{#label}} length must be at least {{#limit}} characters long","string.normalize":"{{#label}} must be unicode normalized in the {{#form}} form","string.token":"{{#label}} must only contain alpha-numeric and underscore characters","string.pattern.base":"{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}","string.pattern.name":"{{#label}} with value {:[.]} fails to match the {{#name}} pattern","string.pattern.invert.base":"{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}","string.pattern.invert.name":"{{#label}} with value {:[.]} matches the inverted {{#name}} pattern","string.trim":"{{#label}} must not have leading or trailing whitespace","string.uri":"{{#label}} must be a valid uri","string.uriCustomScheme":"{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern","string.uriRelativeOnly":"{{#label}} must be a valid relative uri","string.uppercase":"{{#label}} must only contain uppercase characters"}}),p.addressOptions=function(e){if(!e)return e;if(o(void 0===e.minDomainSegments||Number.isSafeInteger(e.minDomainSegments)&&e.minDomainSegments>0,"minDomainSegments must be a positive integer"),o(void 0===e.maxDomainSegments||Number.isSafeInteger(e.maxDomainSegments)&&e.maxDomainSegments>0,"maxDomainSegments must be a positive integer"),!1===e.tlds)return e;if(!0===e.tlds||void 0===e.tlds)return o(p.tlds,"Built-in TLD list disabled"),Object.assign({},e,p.tlds);o("object"==typeof e.tlds,"tlds must be true, false, or an object");const t=e.tlds.deny;if(t)return Array.isArray(t)&&(e=Object.assign({},e,{tlds:{deny:new Set(t)}})),o(e.tlds.deny instanceof Set,"tlds.deny must be an array, Set, or boolean"),o(!e.tlds.allow,"Cannot specify both tlds.allow and tlds.deny lists"),p.validateTlds(e.tlds.deny,"tlds.deny"),e;const r=e.tlds.allow;return r?!0===r?(o(p.tlds,"Built-in TLD list disabled"),Object.assign({},e,p.tlds)):(Array.isArray(r)&&(e=Object.assign({},e,{tlds:{allow:new Set(r)}})),o(e.tlds.allow instanceof Set,"tlds.allow must be an array, Set, or boolean"),p.validateTlds(e.tlds.allow,"tlds.allow"),e):e},p.validateTlds=function(e,t){for(const r of e)o(i.isValid(r,{minDomainSegments:1,maxDomainSegments:1}),"".concat(t," must contain valid top level domain names"));},p.isoDate=function(e){if(!d.isIsoDate(e))return null;/.*T.*[+-]\d\d$/.test(e)&&(e+="00");const t=new Date(e);return isNaN(t.getTime())?null:t.toISOString()},p.length=function(e,t,r,s,n){return o(!n||!1,"Invalid encoding:",n),e.$_addRule({name:t,method:"length",args:{limit:r,encoding:n},operator:s})};},8826:(e,t,r)=>{const s=r(375),n=r(8068),a={};a.Map=class extends Map{slice(){return new a.Map(this)}},e.exports=n.extend({type:"symbol",terms:{map:{init:new a.Map}},coerce:{method(e,{schema:t,error:r}){const s=t.$_terms.map.get(e);return s&&(e=s),t._flags.only&&"symbol"!=typeof e?{value:e,errors:r("symbol.map",{map:t.$_terms.map})}:{value:e}}},validate(e,{error:t}){if("symbol"!=typeof e)return {value:e,errors:t("symbol.base")}},rules:{map:{method(e){e&&!e[Symbol.iterator]&&"object"==typeof e&&(e=Object.entries(e)),s(e&&e[Symbol.iterator],"Iterable must be an iterable or object");const t=this.clone(),r=[];for(const n of e){s(n&&n[Symbol.iterator],"Entry must be an iterable");const[e,a]=n;s("object"!=typeof e&&"function"!=typeof e&&"symbol"!=typeof e,"Key must not be of type object, function, or Symbol"),s("symbol"==typeof a,"Value must be a Symbol"),t.$_terms.map.set(e,a),r.push(a);}return t.valid(...r)}}},manifest:{build:(e,t)=>(t.map&&(e=e.map(t.map)),e)},messages:{"symbol.base":"{{#label}} must be a symbol","symbol.map":"{{#label}} must be one of {{#map}}"}});},8863:(e,t,r)=>{const s=r(375),n=r(8571),a=r(738),o=r(9621),i=r(8160),l=r(6354),c=r(493),u={result:Symbol("result")};t.entry=function(e,t,r){let n=i.defaults;r&&(s(void 0===r.warnings,"Cannot override warnings preference in synchronous validation"),s(void 0===r.artifacts,"Cannot override artifacts preference in synchronous validation"),n=i.preferences(i.defaults,r));const a=u.entry(e,t,n);s(!a.mainstay.externals.length,"Schema with external rules must use validateAsync()");const o={value:a.value};return a.error&&(o.error=a.error),a.mainstay.warnings.length&&(o.warning=l.details(a.mainstay.warnings)),a.mainstay.debug&&(o.debug=a.mainstay.debug),a.mainstay.artifacts&&(o.artifacts=a.mainstay.artifacts),o},t.entryAsync=async function(e,t,r){let s=i.defaults;r&&(s=i.preferences(i.defaults,r));const n=u.entry(e,t,s),a=n.mainstay;if(n.error)throw a.debug&&(n.error.debug=a.debug),n.error;if(a.externals.length){let e=n.value;for(const{method:t,path:s,label:n}of a.externals){let a,i,l=e;s.length&&(a=s[s.length-1],i=o(e,s.slice(0,-1)),l=i[a]);try{const s=await t(l,{prefs:r});if(void 0===s||s===l)continue;i?i[a]=s:e=s;}catch(e){throw e.message+=" (".concat(n,")"),e}}n.value=e;}if(!s.warnings&&!s.debug&&!s.artifacts)return n.value;const c={value:n.value};return a.warnings.length&&(c.warning=l.details(a.warnings)),a.debug&&(c.debug=a.debug),a.artifacts&&(c.artifacts=a.artifacts),c},u.entry=function(e,r,s){const{tracer:n,cleanup:a}=u.tracer(r,s),o={externals:[],warnings:[],tracer:n,debug:s.debug?[]:null,links:r._ids._schemaChain?new Map:null},i=r._ids._schemaChain?[{schema:r}]:null,f=new c([],[],{mainstay:o,schemas:i}),m=t.validate(e,r,f,s);a&&r.$_root.untrace();const h=l.process(m.errors,e,s);return {value:m.value,error:h,mainstay:o}},u.tracer=function(e,t){return e.$_root._tracer?{tracer:e.$_root._tracer._register(e)}:t.debug?(s(e.$_root.trace,"Debug mode not supported"),{tracer:e.$_root.trace()._register(e),cleanup:!0}):{tracer:u.ignore}},t.validate=function(e,t,r,s,n={}){if(t.$_terms.whens&&(t=t._generate(e,r,s).schema),t._preferences&&(s=u.prefs(t,s)),t._cache&&s.cache){const s=t._cache.get(e);if(r.mainstay.tracer.debug(r,"validate","cached",!!s),s)return s}const a=(n,a,o)=>t.$_createError(n,e,a,o||r,s),o={original:e,prefs:s,schema:t,state:r,error:a,errorsArray:u.errorsArray,warn:(e,t,s)=>r.mainstay.warnings.push(a(e,t,s)),message:(n,a)=>t.$_createError("custom",e,a,r,s,{messages:n})};r.mainstay.tracer.entry(t,r);const l=t._definition;if(l.prepare&&void 0!==e&&s.convert){const t=l.prepare(e,o);if(t){if(r.mainstay.tracer.value(r,"prepare",e,t.value),t.errors)return u.finalize(t.value,[].concat(t.errors),o);e=t.value;}}if(l.coerce&&void 0!==e&&s.convert&&(!l.coerce.from||l.coerce.from.includes(typeof e))){const t=l.coerce.method(e,o);if(t){if(r.mainstay.tracer.value(r,"coerced",e,t.value),t.errors)return u.finalize(t.value,[].concat(t.errors),o);e=t.value;}}const c=t._flags.empty;c&&c.$_match(u.trim(e,t),r.nest(c),i.defaults)&&(r.mainstay.tracer.value(r,"empty",e,void 0),e=void 0);const f=n.presence||t._flags.presence||(t._flags._endedSwitch?null:s.presence);if(void 0===e){if("forbidden"===f)return u.finalize(e,null,o);if("required"===f)return u.finalize(e,[t.$_createError("any.required",e,null,r,s)],o);if("optional"===f){if(t._flags.default!==i.symbols.deepDefault)return u.finalize(e,null,o);r.mainstay.tracer.value(r,"default",e,{}),e={};}}else if("forbidden"===f)return u.finalize(e,[t.$_createError("any.unknown",e,null,r,s)],o);const m=[];if(t._valids){const n=t._valids.get(e,r,s,t._flags.insensitive);if(n)return s.convert&&(r.mainstay.tracer.value(r,"valids",e,n.value),e=n.value),r.mainstay.tracer.filter(t,r,"valid",n),u.finalize(e,null,o);if(t._flags.only){const n=t.$_createError("any.only",e,{valids:t._valids.values({display:!0})},r,s);if(s.abortEarly)return u.finalize(e,[n],o);m.push(n);}}if(t._invalids){const n=t._invalids.get(e,r,s,t._flags.insensitive);if(n){r.mainstay.tracer.filter(t,r,"invalid",n);const a=t.$_createError("any.invalid",e,{invalids:t._invalids.values({display:!0})},r,s);if(s.abortEarly)return u.finalize(e,[a],o);m.push(a);}}if(l.validate){const t=l.validate(e,o);if(t&&(r.mainstay.tracer.value(r,"base",e,t.value),e=t.value,t.errors)){if(!Array.isArray(t.errors))return m.push(t.errors),u.finalize(e,m,o);if(t.errors.length)return m.push(...t.errors),u.finalize(e,m,o)}}return t._rules.length?u.rules(e,m,o):u.finalize(e,m,o)},u.rules=function(e,t,r){const{schema:s,state:n,prefs:a}=r;for(const o of s._rules){const l=s._definition.rules[o.method];if(l.convert&&a.convert){n.mainstay.tracer.log(s,n,"rule",o.name,"full");continue}let c,f=o.args;if(o._resolve.length){f=Object.assign({},f);for(const t of o._resolve){const r=l.argsByName.get(t),o=f[t].resolve(e,n,a),u=r.normalize?r.normalize(o):o,m=i.validateArg(u,null,r);if(m){c=s.$_createError("any.ref",o,{arg:t,ref:f[t],reason:m},n,a);break}f[t]=u;}}c=c||l.validate(e,r,f,o);const m=u.rule(c,o);if(m.errors){if(n.mainstay.tracer.log(s,n,"rule",o.name,"error"),o.warn){n.mainstay.warnings.push(...m.errors);continue}if(a.abortEarly)return u.finalize(e,m.errors,r);t.push(...m.errors);}else n.mainstay.tracer.log(s,n,"rule",o.name,"pass"),n.mainstay.tracer.value(n,"rule",e,m.value,o.name),e=m.value;}return u.finalize(e,t,r)},u.rule=function(e,t){return e instanceof l.Report?(u.error(e,t),{errors:[e],value:null}):Array.isArray(e)&&e[i.symbols.errors]?(e.forEach((e=>u.error(e,t))),{errors:e,value:null}):{errors:null,value:e}},u.error=function(e,t){return t.message&&e._setTemplate(t.message),e},u.finalize=function(e,t,r){t=t||[];const{schema:n,state:a,prefs:o}=r;if(t.length){const s=u.default("failover",void 0,t,r);void 0!==s&&(a.mainstay.tracer.value(a,"failover",e,s),e=s,t=[]);}if(t.length&&n._flags.error)if("function"==typeof n._flags.error){t=n._flags.error(t),Array.isArray(t)||(t=[t]);for(const e of t)s(e instanceof Error||e instanceof l.Report,"error() must return an Error object");}else t=[n._flags.error];if(void 0===e){const s=u.default("default",e,t,r);a.mainstay.tracer.value(a,"default",e,s),e=s;}if(n._flags.cast&&void 0!==e){const t=n._definition.cast[n._flags.cast];if(t.from(e)){const s=t.to(e,r);a.mainstay.tracer.value(a,"cast",e,s,n._flags.cast),e=s;}}if(n.$_terms.externals&&o.externals&&!1!==o._externals)for(const{method:e}of n.$_terms.externals)a.mainstay.externals.push({method:e,path:a.path,label:l.label(n._flags,a,o)});const i={value:e,errors:t.length?t:null};return n._flags.result&&(i.value="strip"===n._flags.result?void 0:r.original,a.mainstay.tracer.value(a,n._flags.result,e,i.value),a.shadow(e,n._flags.result)),n._cache&&!1!==o.cache&&!n._refs.length&&n._cache.set(r.original,i),void 0===e||i.errors||void 0===n._flags.artifact||(a.mainstay.artifacts=a.mainstay.artifacts||new Map,a.mainstay.artifacts.has(n._flags.artifact)||a.mainstay.artifacts.set(n._flags.artifact,[]),a.mainstay.artifacts.get(n._flags.artifact).push(a.path)),i},u.prefs=function(e,t){const r=t===i.defaults;return r&&e._preferences[i.symbols.prefs]?e._preferences[i.symbols.prefs]:(t=i.preferences(t,e._preferences),r&&(e._preferences[i.symbols.prefs]=t),t)},u.default=function(e,t,r,s){const{schema:a,state:o,prefs:l}=s,c=a._flags[e];if(l.noDefaults||void 0===c)return t;if(o.mainstay.tracer.log(a,o,"rule",e,"full"),!c)return c;if("function"==typeof c){const t=c.length?[n(o.ancestors[0]),s]:[];try{return c(...t)}catch(t){return void r.push(a.$_createError("any.".concat(e),null,{error:t},o,l))}}return "object"!=typeof c?c:c[i.symbols.literal]?c.literal:i.isResolvable(c)?c.resolve(t,o,l):n(c)},u.trim=function(e,t){if("string"!=typeof e)return e;const r=t.$_getRule("trim");return r&&r.args.enabled?e.trim():e},u.ignore={active:!1,debug:a,entry:a,filter:a,log:a,resolve:a,value:a},u.errorsArray=function(){const e=[];return e[i.symbols.errors]=!0,e};},2036:(e,t,r)=>{const s=r(375),n=r(9474),a=r(8160),o={};e.exports=o.Values=class{constructor(e,t){this._values=new Set(e),this._refs=new Set(t),this._lowercase=o.lowercases(e),this._override=!1;}get length(){return this._values.size+this._refs.size}add(e,t){a.isResolvable(e)?this._refs.has(e)||(this._refs.add(e),t&&t.register(e)):this.has(e,null,null,!1)||(this._values.add(e),"string"==typeof e&&this._lowercase.set(e.toLowerCase(),e));}static merge(e,t,r){if(e=e||new o.Values,t){if(t._override)return t.clone();for(const r of [...t._values,...t._refs])e.add(r);}if(r)for(const t of [...r._values,...r._refs])e.remove(t);return e.length?e:null}remove(e){a.isResolvable(e)?this._refs.delete(e):(this._values.delete(e),"string"==typeof e&&this._lowercase.delete(e.toLowerCase()));}has(e,t,r,s){return !!this.get(e,t,r,s)}get(e,t,r,s){if(!this.length)return !1;if(this._values.has(e))return {value:e};if("string"==typeof e&&e&&s){const t=this._lowercase.get(e.toLowerCase());if(t)return {value:t}}if(!this._refs.size&&"object"!=typeof e)return !1;if("object"==typeof e)for(const t of this._values)if(n(t,e))return {value:t};if(t)for(const a of this._refs){const o=a.resolve(e,t,r,null,{in:!0});if(void 0===o)continue;const i=a.in&&"object"==typeof o?Array.isArray(o)?o:Object.keys(o):[o];for(const t of i)if(typeof t==typeof e)if(s&&e&&"string"==typeof e){if(t.toLowerCase()===e.toLowerCase())return {value:t,ref:a}}else if(n(t,e))return {value:t,ref:a}}return !1}override(){this._override=!0;}values(e){if(e&&e.display){const e=[];for(const t of [...this._values,...this._refs])void 0!==t&&e.push(t);return e}return Array.from([...this._values,...this._refs])}clone(){const e=new o.Values(this._values,this._refs);return e._override=this._override,e}concat(e){s(!e._override,"Cannot concat override set of values");const t=new o.Values([...this._values,...e._values],[...this._refs,...e._refs]);return t._override=this._override,t}describe(){const e=[];this._override&&e.push({override:!0});for(const t of this._values.values())e.push(t&&"object"==typeof t?{value:t}:t);for(const t of this._refs.values())e.push(t.describe());return e}},o.Values.prototype[a.symbols.values]=!0,o.Values.prototype.slice=o.Values.prototype.clone,o.lowercases=function(e){const t=new Map;if(e)for(const r of e)"string"==typeof r&&t.set(r.toLowerCase(),r);return t};},978:(e,t,r)=>{const s=r(375),n=r(8571),a=r(1687),o=r(9621),i={};e.exports=function(e,t,r={}){if(s(e&&"object"==typeof e,"Invalid defaults value: must be an object"),s(!t||!0===t||"object"==typeof t,"Invalid source value: must be true, falsy or an object"),s("object"==typeof r,"Invalid options: must be an object"),!t)return null;if(r.shallow)return i.applyToDefaultsWithShallow(e,t,r);const o=n(e);if(!0===t)return o;const l=void 0!==r.nullOverride&&r.nullOverride;return a(o,t,{nullOverride:l,mergeArrays:!1})},i.applyToDefaultsWithShallow=function(e,t,r){const l=r.shallow;s(Array.isArray(l),"Invalid keys");const c=new Map,u=!0===t?null:new Set;for(let r of l){r=Array.isArray(r)?r:r.split(".");const s=o(e,r);s&&"object"==typeof s?c.set(s,u&&o(t,r)||s):u&&u.add(r);}const f=n(e,{},c);if(!u)return f;for(const e of u)i.reachCopy(f,t,e);const m=void 0!==r.nullOverride&&r.nullOverride;return a(f,t,{nullOverride:m,mergeArrays:!1})},i.reachCopy=function(e,t,r){for(const e of r){if(!(e in t))return;const r=t[e];if("object"!=typeof r||null===r)return;t=r;}const s=t;let n=e;for(let e=0;e<r.length-1;++e){const t=r[e];"object"!=typeof n[t]&&(n[t]={}),n=n[t];}n[r[r.length-1]]=s;};},375:(e,t,r)=>{const s=r(7916);e.exports=function(e,...t){if(!e){if(1===t.length&&t[0]instanceof Error)throw t[0];throw new s(t)}};},8571:(e,t,r)=>{const s=r(9621),n=r(4277),a=r(7043),o={needsProtoHack:new Set([n.set,n.map,n.weakSet,n.weakMap])};e.exports=o.clone=function(e,t={},r=null){if("object"!=typeof e||null===e)return e;let s=o.clone,i=r;if(t.shallow){if(!0!==t.shallow)return o.cloneWithShallow(e,t);s=e=>e;}else if(i){const t=i.get(e);if(t)return t}else i=new Map;const l=n.getInternalProto(e);if(l===n.buffer)return !1;if(l===n.date)return new Date(e.getTime());if(l===n.regex)return new RegExp(e);const c=o.base(e,l,t);if(c===e)return e;if(i&&i.set(e,c),l===n.set)for(const r of e)c.add(s(r,t,i));else if(l===n.map)for(const[r,n]of e)c.set(r,s(n,t,i));const u=a.keys(e,t);for(const r of u){if("__proto__"===r)continue;if(l===n.array&&"length"===r){c.length=e.length;continue}const a=Object.getOwnPropertyDescriptor(e,r);a?a.get||a.set?Object.defineProperty(c,r,a):a.enumerable?c[r]=s(e[r],t,i):Object.defineProperty(c,r,{enumerable:!1,writable:!0,configurable:!0,value:s(e[r],t,i)}):Object.defineProperty(c,r,{enumerable:!0,writable:!0,configurable:!0,value:s(e[r],t,i)});}return c},o.cloneWithShallow=function(e,t){const r=t.shallow;(t=Object.assign({},t)).shallow=!1;const n=new Map;for(const t of r){const r=s(e,t);"object"!=typeof r&&"function"!=typeof r||n.set(r,r);}return o.clone(e,t,n)},o.base=function(e,t,r){if(!1===r.prototype)return o.needsProtoHack.has(t)?new t.constructor:t===n.array?[]:{};const s=Object.getPrototypeOf(e);if(s&&s.isImmutable)return e;if(t===n.array){const e=[];return s!==t&&Object.setPrototypeOf(e,s),e}if(o.needsProtoHack.has(t)){const e=new s.constructor;return s!==t&&Object.setPrototypeOf(e,s),e}return Object.create(s)};},9474:(e,t,r)=>{const s=r(4277),n={mismatched:null};e.exports=function(e,t,r){return r=Object.assign({prototype:!0},r),!!n.isDeepEqual(e,t,r,[])},n.isDeepEqual=function(e,t,r,a){if(e===t)return 0!==e||1/e==1/t;const o=typeof e;if(o!==typeof t)return !1;if(null===e||null===t)return !1;if("function"===o){if(!r.deepFunction||e.toString()!==t.toString())return !1}else if("object"!==o)return e!=e&&t!=t;const i=n.getSharedType(e,t,!!r.prototype);switch(i){case s.buffer:return !1;case s.promise:return e===t;case s.regex:return e.toString()===t.toString();case n.mismatched:return !1}for(let r=a.length-1;r>=0;--r)if(a[r].isSame(e,t))return !0;a.push(new n.SeenEntry(e,t));try{return !!n.isDeepEqualObj(i,e,t,r,a)}finally{a.pop();}},n.getSharedType=function(e,t,r){if(r)return Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?n.mismatched:s.getInternalProto(e);const a=s.getInternalProto(e);return a!==s.getInternalProto(t)?n.mismatched:a},n.valueOf=function(e){const t=e.valueOf;if(void 0===t)return e;try{return t.call(e)}catch(e){return e}},n.hasOwnEnumerableProperty=function(e,t){return Object.prototype.propertyIsEnumerable.call(e,t)},n.isSetSimpleEqual=function(e,t){for(const r of Set.prototype.values.call(e))if(!Set.prototype.has.call(t,r))return !1;return !0},n.isDeepEqualObj=function(e,t,r,a,o){const{isDeepEqual:i,valueOf:l,hasOwnEnumerableProperty:c}=n,{keys:u,getOwnPropertySymbols:f}=Object;if(e===s.array){if(!a.part){if(t.length!==r.length)return !1;for(let e=0;e<t.length;++e)if(!i(t[e],r[e],a,o))return !1;return !0}for(const e of t)for(const t of r)if(i(e,t,a,o))return !0}else if(e===s.set){if(t.size!==r.size)return !1;if(!n.isSetSimpleEqual(t,r)){const e=new Set(Set.prototype.values.call(r));for(const r of Set.prototype.values.call(t)){if(e.delete(r))continue;let t=!1;for(const s of e)if(i(r,s,a,o)){e.delete(s),t=!0;break}if(!t)return !1}}}else if(e===s.map){if(t.size!==r.size)return !1;for(const[e,s]of Map.prototype.entries.call(t)){if(void 0===s&&!Map.prototype.has.call(r,e))return !1;if(!i(s,Map.prototype.get.call(r,e),a,o))return !1}}else if(e===s.error&&(t.name!==r.name||t.message!==r.message))return !1;const m=l(t),h=l(r);if((t!==m||r!==h)&&!i(m,h,a,o))return !1;const d=u(t);if(!a.part&&d.length!==u(r).length&&!a.skip)return !1;let p=0;for(const e of d)if(a.skip&&a.skip.includes(e))void 0===r[e]&&++p;else {if(!c(r,e))return !1;if(!i(t[e],r[e],a,o))return !1}if(!a.part&&d.length-p!==u(r).length)return !1;if(!1!==a.symbols){const e=f(t),s=new Set(f(r));for(const n of e){if(!a.skip||!a.skip.includes(n))if(c(t,n)){if(!c(r,n))return !1;if(!i(t[n],r[n],a,o))return !1}else if(c(r,n))return !1;s.delete(n);}for(const e of s)if(c(r,e))return !1}return !0},n.SeenEntry=class{constructor(e,t){this.obj=e,this.ref=t;}isSame(e,t){return this.obj===e&&this.ref===t}};},7916:(e,t,r)=>{const s=r(8761);e.exports=class extends Error{constructor(e){super(e.filter((e=>""!==e)).map((e=>"string"==typeof e?e:e instanceof Error?e.message:s(e))).join(" ")||"Unknown error"),"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t.assert);}};},5277:e=>{const t={};e.exports=function(e){if(!e)return "";let r="";for(let s=0;s<e.length;++s){const n=e.charCodeAt(s);t.isSafe(n)?r+=e[s]:r+=t.escapeHtmlChar(n);}return r},t.escapeHtmlChar=function(e){const r=t.namedHtml[e];if(void 0!==r)return r;if(e>=256)return "&#"+e+";";const s=e.toString(16).padStart(2,"0");return "&#x".concat(s,";")},t.isSafe=function(e){return void 0!==t.safeCharCodes[e]},t.namedHtml={38:"&amp;",60:"&lt;",62:"&gt;",34:"&quot;",160:"&nbsp;",162:"&cent;",163:"&pound;",164:"&curren;",169:"&copy;",174:"&reg;"},t.safeCharCodes=function(){const e={};for(let t=32;t<123;++t)(t>=97||t>=65&&t<=90||t>=48&&t<=57||32===t||46===t||44===t||45===t||58===t||95===t)&&(e[t]=null);return e}();},6064:e=>{e.exports=function(e){return e.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g,"\\$&")};},738:e=>{e.exports=function(){};},1687:(e,t,r)=>{const s=r(375),n=r(8571),a=r(7043),o={};e.exports=o.merge=function(e,t,r){if(s(e&&"object"==typeof e,"Invalid target value: must be an object"),s(null==t||"object"==typeof t,"Invalid source value: must be null, undefined, or an object"),!t)return e;if(r=Object.assign({nullOverride:!0,mergeArrays:!0},r),Array.isArray(t)){s(Array.isArray(e),"Cannot merge array onto an object"),r.mergeArrays||(e.length=0);for(let s=0;s<t.length;++s)e.push(n(t[s],{symbols:r.symbols}));return e}const i=a.keys(t,r);for(let s=0;s<i.length;++s){const a=i[s];if("__proto__"===a||!Object.prototype.propertyIsEnumerable.call(t,a))continue;const l=t[a];if(l&&"object"==typeof l){if(e[a]===l)continue;!e[a]||"object"!=typeof e[a]||Array.isArray(e[a])!==Array.isArray(l)||l instanceof Date||l instanceof RegExp?e[a]=n(l,{symbols:r.symbols}):o.merge(e[a],l,r);}else (null!=l||r.nullOverride)&&(e[a]=l);}return e};},9621:(e,t,r)=>{const s=r(375),n={};e.exports=function(e,t,r){if(!1===t||null==t)return e;"string"==typeof(r=r||{})&&(r={separator:r});const a=Array.isArray(t);s(!a||!r.separator,"Separator option no valid for array-based chain");const o=a?t:t.split(r.separator||".");let i=e;for(let e=0;e<o.length;++e){let a=o[e];const l=r.iterables&&n.iterables(i);if(Array.isArray(i)||"set"===l){const e=Number(a);Number.isInteger(e)&&(a=e<0?i.length+e:e);}if(!i||"function"==typeof i&&!1===r.functions||!l&&void 0===i[a]){s(!r.strict||e+1===o.length,"Missing segment",a,"in reach path ",t),s("object"==typeof i||!0===r.functions||"function"!=typeof i,"Invalid segment",a,"in reach path ",t),i=r.default;break}i=l?"set"===l?[...i][a]:i.get(a):i[a];}return i},n.iterables=function(e){return e instanceof Set?"set":e instanceof Map?"map":void 0};},8761:e=>{e.exports=function(...e){try{return JSON.stringify.apply(null,e)}catch(e){return "[Cannot display object: "+e.message+"]"}};},4277:(e,t)=>{const r={};t=e.exports={array:Array.prototype,buffer:!1,date:Date.prototype,error:Error.prototype,generic:Object.prototype,map:Map.prototype,promise:Promise.prototype,regex:RegExp.prototype,set:Set.prototype,weakMap:WeakMap.prototype,weakSet:WeakSet.prototype},r.typeMap=new Map([["[object Error]",t.error],["[object Map]",t.map],["[object Promise]",t.promise],["[object Set]",t.set],["[object WeakMap]",t.weakMap],["[object WeakSet]",t.weakSet]]),t.getInternalProto=function(e){if(Array.isArray(e))return t.array;if(e instanceof Date)return t.date;if(e instanceof RegExp)return t.regex;if(e instanceof Error)return t.error;const s=Object.prototype.toString.call(e);return r.typeMap.get(s)||t.generic};},7043:(e,t)=>{t.keys=function(e,t={}){return !1!==t.symbols?Reflect.ownKeys(e):Object.getOwnPropertyNames(e)};},3652:(e,t,r)=>{const s=r(375),n={};t.Sorter=class{constructor(){this._items=[],this.nodes=[];}add(e,t){const r=[].concat((t=t||{}).before||[]),n=[].concat(t.after||[]),a=t.group||"?",o=t.sort||0;s(!r.includes(a),"Item cannot come before itself: ".concat(a)),s(!r.includes("?"),"Item cannot come before unassociated items"),s(!n.includes(a),"Item cannot come after itself: ".concat(a)),s(!n.includes("?"),"Item cannot come after unassociated items"),Array.isArray(e)||(e=[e]);for(const t of e){const e={seq:this._items.length,sort:o,before:r,after:n,group:a,node:t};this._items.push(e);}if(!t.manual){const e=this._sort();s(e,"item","?"!==a?"added into group ".concat(a):"","created a dependencies error");}return this.nodes}merge(e){Array.isArray(e)||(e=[e]);for(const t of e)if(t)for(const e of t._items)this._items.push(Object.assign({},e));this._items.sort(n.mergeSort);for(let e=0;e<this._items.length;++e)this._items[e].seq=e;const t=this._sort();return s(t,"merge created a dependencies error"),this.nodes}sort(){const e=this._sort();return s(e,"sort created a dependencies error"),this.nodes}_sort(){const e={},t=Object.create(null),r=Object.create(null);for(const s of this._items){const n=s.seq,a=s.group;r[a]=r[a]||[],r[a].push(n),e[n]=s.before;for(const e of s.after)t[e]=t[e]||[],t[e].push(n);}for(const t in e){const s=[];for(const n in e[t]){const a=e[t][n];r[a]=r[a]||[],s.push(...r[a]);}e[t]=s;}for(const s in t)if(r[s])for(const n of r[s])e[n].push(...t[s]);const s={};for(const t in e){const r=e[t];for(const e of r)s[e]=s[e]||[],s[e].push(t);}const n={},a=[];for(let e=0;e<this._items.length;++e){let t=e;if(s[e]){t=null;for(let e=0;e<this._items.length;++e){if(!0===n[e])continue;s[e]||(s[e]=[]);const r=s[e].length;let a=0;for(let t=0;t<r;++t)n[s[e][t]]&&++a;if(a===r){t=e;break}}}null!==t&&(n[t]=!0,a.push(t));}if(a.length!==this._items.length)return !1;const o={};for(const e of this._items)o[e.seq]=e;this._items=[],this.nodes=[];for(const e of a){const t=o[e];this.nodes.push(t.node),this._items.push(t);}return !0}},n.mergeSort=(e,t)=>e.sort===t.sort?0:e.sort<t.sort?-1:1;},5380:(e,t,r)=>{const s=r(443),n=r(2178),a={minDomainSegments:2,nonAsciiRx:/[^\x00-\x7f]/,domainControlRx:/[\x00-\x20@\:\/\\#!\$&\'\(\)\*\+,;=\?]/,tldSegmentRx:/^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,domainSegmentRx:/^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,URL:s.URL||URL};t.analyze=function(e,t={}){if("string"!=typeof e)throw new Error("Invalid input: domain must be a string");if(!e)return n.code("DOMAIN_NON_EMPTY_STRING");if(e.length>256)return n.code("DOMAIN_TOO_LONG");if(a.nonAsciiRx.test(e)){if(!1===t.allowUnicode)return n.code("DOMAIN_INVALID_UNICODE_CHARS");e=e.normalize("NFC");}if(a.domainControlRx.test(e))return n.code("DOMAIN_INVALID_CHARS");e=a.punycode(e);const r=t.minDomainSegments||a.minDomainSegments,s=e.split(".");if(s.length<r)return n.code("DOMAIN_SEGMENTS_COUNT");if(t.maxDomainSegments&&s.length>t.maxDomainSegments)return n.code("DOMAIN_SEGMENTS_COUNT_MAX");const o=t.tlds;if(o){const e=s[s.length-1].toLowerCase();if(o.deny&&o.deny.has(e)||o.allow&&!o.allow.has(e))return n.code("DOMAIN_FORBIDDEN_TLDS")}for(let e=0;e<s.length;++e){const t=s[e];if(!t.length)return n.code("DOMAIN_EMPTY_SEGMENT");if(t.length>63)return n.code("DOMAIN_LONG_SEGMENT");if(e<s.length-1){if(!a.domainSegmentRx.test(t))return n.code("DOMAIN_INVALID_CHARS")}else if(!a.tldSegmentRx.test(t))return n.code("DOMAIN_INVALID_TLDS_CHARS")}return null},t.isValid=function(e,r){return !t.analyze(e,r)},a.punycode=function(e){try{return new a.URL("http://".concat(e)).host}catch(t){return e}};},1745:(e,t,r)=>{const s=r(9848),n=r(5380),a=r(2178),o={nonAsciiRx:/[^\x00-\x7f]/,encoder:new(s.TextEncoder||TextEncoder)};t.analyze=function(e,t){return o.email(e,t)},t.isValid=function(e,t){return !o.email(e,t)},o.email=function(e,t={}){if("string"!=typeof e)throw new Error("Invalid input: email must be a string");if(!e)return a.code("EMPTY_STRING");const r=!o.nonAsciiRx.test(e);if(!r){if(!1===t.allowUnicode)return a.code("FORBIDDEN_UNICODE");e=e.normalize("NFC");}const s=e.split("@");if(2!==s.length)return s.length>2?a.code("MULTIPLE_AT_CHAR"):a.code("MISSING_AT_CHAR");const[i,l]=s;if(!i)return a.code("EMPTY_LOCAL");if(!t.ignoreLength){if(e.length>254)return a.code("ADDRESS_TOO_LONG");if(o.encoder.encode(i).length>64)return a.code("LOCAL_TOO_LONG")}return o.local(i,r)||n.analyze(l,t)},o.local=function(e,t){const r=e.split(".");for(const e of r){if(!e.length)return a.code("EMPTY_LOCAL_SEGMENT");if(t){if(!o.atextRx.test(e))return a.code("INVALID_LOCAL_CHARS")}else for(const t of e){if(o.atextRx.test(t))continue;const e=o.binary(t);if(!o.atomRx.test(e))return a.code("INVALID_LOCAL_CHARS")}}},o.binary=function(e){return Array.from(o.encoder.encode(e)).map((e=>String.fromCharCode(e))).join("")},o.atextRx=/^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/,o.atomRx=new RegExp(["(?:[\\xc2-\\xdf][\\x80-\\xbf])","(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})","(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})"].join("|"));},2178:(e,t)=>{t.codes={EMPTY_STRING:"Address must be a non-empty string",FORBIDDEN_UNICODE:"Address contains forbidden Unicode characters",MULTIPLE_AT_CHAR:"Address cannot contain more than one @ character",MISSING_AT_CHAR:"Address must contain one @ character",EMPTY_LOCAL:"Address local part cannot be empty",ADDRESS_TOO_LONG:"Address too long",LOCAL_TOO_LONG:"Address local part too long",EMPTY_LOCAL_SEGMENT:"Address local part contains empty dot-separated segment",INVALID_LOCAL_CHARS:"Address local part contains invalid character",DOMAIN_NON_EMPTY_STRING:"Domain must be a non-empty string",DOMAIN_TOO_LONG:"Domain too long",DOMAIN_INVALID_UNICODE_CHARS:"Domain contains forbidden Unicode characters",DOMAIN_INVALID_CHARS:"Domain contains invalid character",DOMAIN_INVALID_TLDS_CHARS:"Domain contains invalid tld character",DOMAIN_SEGMENTS_COUNT:"Domain lacks the minimum required number of segments",DOMAIN_SEGMENTS_COUNT_MAX:"Domain contains too many segments",DOMAIN_FORBIDDEN_TLDS:"Domain uses forbidden TLD",DOMAIN_EMPTY_SEGMENT:"Domain contains empty dot-separated segment",DOMAIN_LONG_SEGMENT:"Domain contains dot-separated segment that is too long"},t.code=function(e){return {code:e,error:t.codes[e]}};},9959:(e,t,r)=>{const s=r(375),n=r(5752);t.regex=function(e={}){s(void 0===e.cidr||"string"==typeof e.cidr,"options.cidr must be a string");const t=e.cidr?e.cidr.toLowerCase():"optional";s(["required","optional","forbidden"].includes(t),"options.cidr must be one of required, optional, forbidden"),s(void 0===e.version||"string"==typeof e.version||Array.isArray(e.version),"options.version must be a string or an array of string");let r=e.version||["ipv4","ipv6","ipvfuture"];Array.isArray(r)||(r=[r]),s(r.length>=1,"options.version must have at least 1 version specified");for(let e=0;e<r.length;++e)s("string"==typeof r[e],"options.version must only contain strings"),r[e]=r[e].toLowerCase(),s(["ipv4","ipv6","ipvfuture"].includes(r[e]),"options.version contains unknown version "+r[e]+" - must be one of ipv4, ipv6, ipvfuture");r=Array.from(new Set(r));const a=r.map((e=>{if("forbidden"===t)return n.ip[e];const r="\\/".concat("ipv4"===e?n.ip.v4Cidr:n.ip.v6Cidr);return "required"===t?"".concat(n.ip[e]).concat(r):"".concat(n.ip[e],"(?:").concat(r,")?")})),o="(?:".concat(a.join("|"),")"),i=new RegExp("^".concat(o,"$"));return {cidr:t,versions:r,regex:i,raw:o}};},5752:(e,t,r)=>{const s=r(375),n=r(6064),a={generate:function(){const e={},t="!\\$&'\\(\\)\\*\\+,;=",r="\\w-\\.~%\\dA-Fa-f"+t+":@",s="["+r+"]",n="(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])";e.ipv4address="(?:"+n+"\\.){3}"+n;const a="[\\dA-Fa-f]{1,4}",o="(?:"+a+":"+a+"|"+e.ipv4address+")",i="(?:"+a+":){6}"+o,l="::(?:"+a+":){5}"+o,c="(?:"+a+")?::(?:"+a+":){4}"+o,u="(?:(?:"+a+":){0,1}"+a+")?::(?:"+a+":){3}"+o,f="(?:(?:"+a+":){0,2}"+a+")?::(?:"+a+":){2}"+o,m="(?:(?:"+a+":){0,3}"+a+")?::"+a+":"+o,h="(?:(?:"+a+":){0,4}"+a+")?::"+o;e.ipv4Cidr="(?:\\d|[1-2]\\d|3[0-2])",e.ipv6Cidr="(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])",e.ipv6address="(?:"+i+"|"+l+"|"+c+"|"+u+"|"+f+"|"+m+"|"+h+"|(?:(?:[\\dA-Fa-f]{1,4}:){0,5}[\\dA-Fa-f]{1,4})?::[\\dA-Fa-f]{1,4}|(?:(?:[\\dA-Fa-f]{1,4}:){0,6}[\\dA-Fa-f]{1,4})?::)",e.ipvFuture="v[\\dA-Fa-f]+\\.[\\w-\\.~"+t+":]+",e.scheme="[a-zA-Z][a-zA-Z\\d+-\\.]*",e.schemeRegex=new RegExp(e.scheme);const d="[\\w-\\.~%\\dA-Fa-f"+t+":]*",p="(?:\\[(?:"+e.ipv6address+"|"+e.ipvFuture+")\\]|"+e.ipv4address+"|[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=]{1,255})",g="(?:"+d+"@)?"+p+"(?::\\d*)?",y="(?:"+d+"@)?("+p+")(?::\\d*)?",b=s+"+",v="(?:\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*",_="\\/(?:"+b+v+")?",w=b+v,$="[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=@]+"+v;return e.hierPart="(?:(?:\\/\\/"+g+v+")|"+_+"|"+w+"|(?:\\/\\/\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*(?:\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*))",e.hierPartCapture="(?:(?:\\/\\/"+y+v+")|"+_+"|"+w+")",e.relativeRef="(?:(?:\\/\\/"+g+v+")|"+_+"|"+$+"|)",e.relativeRefCapture="(?:(?:\\/\\/"+y+v+")|"+_+"|"+$+"|)",e.query="["+r+"\\/\\?]*(?=#|$)",e.queryWithSquareBrackets="["+r+"\\[\\]\\/\\?]*(?=#|$)",e.fragment="["+r+"\\/\\?]*",e}};a.rfc3986=a.generate(),t.ip={v4Cidr:a.rfc3986.ipv4Cidr,v6Cidr:a.rfc3986.ipv6Cidr,ipv4:a.rfc3986.ipv4address,ipv6:a.rfc3986.ipv6address,ipvfuture:a.rfc3986.ipvFuture},a.createRegex=function(e){const t=a.rfc3986,r="(?:\\?"+(e.allowQuerySquareBrackets?t.queryWithSquareBrackets:t.query)+")?(?:#"+t.fragment+")?",o=e.domain?t.relativeRefCapture:t.relativeRef;if(e.relativeOnly)return a.wrap(o+r);let i="";if(e.scheme){s(e.scheme instanceof RegExp||"string"==typeof e.scheme||Array.isArray(e.scheme),"scheme must be a RegExp, String, or Array");const r=[].concat(e.scheme);s(r.length>=1,"scheme must have at least 1 scheme specified");const a=[];for(let e=0;e<r.length;++e){const o=r[e];s(o instanceof RegExp||"string"==typeof o,"scheme at position "+e+" must be a RegExp or String"),o instanceof RegExp?a.push(o.source.toString()):(s(t.schemeRegex.test(o),"scheme at position "+e+" must be a valid scheme"),a.push(n(o)));}i=a.join("|");}const l="(?:"+(i?"(?:"+i+")":t.scheme)+":"+(e.domain?t.hierPartCapture:t.hierPart)+")",c=e.allowRelative?"(?:"+l+"|"+o+")":l;return a.wrap(c+r,i)},a.wrap=function(e,t){return {raw:e="(?=.)(?!https?:/$)".concat(e),regex:new RegExp("^".concat(e,"$")),scheme:t}},a.uriRegex=a.createRegex({}),t.regex=function(e={}){return e.scheme||e.allowRelative||e.relativeOnly||e.allowQuerySquareBrackets||e.domain?a.createRegex(e):a.uriRegex};},1447:(e,t)=>{const r={operators:["!","^","*","/","%","+","-","<","<=",">",">=","==","!=","&&","||","??"],operatorCharacters:["!","^","*","/","%","+","-","<","=",">","&","|","?"],operatorsOrder:[["^"],["*","/","%"],["+","-"],["<","<=",">",">="],["==","!="],["&&"],["||","??"]],operatorsPrefix:["!","n"],literals:{'"':'"',"`":"`","'":"'","[":"]"},numberRx:/^(?:[0-9]*\.?[0-9]*){1}$/,tokenRx:/^[\w\$\#\.\@\:\{\}]+$/,symbol:Symbol("formula"),settings:Symbol("settings")};t.Parser=class{constructor(e,t={}){if(!t[r.settings]&&t.constants)for(const e in t.constants){const r=t.constants[e];if(null!==r&&!["boolean","number","string"].includes(typeof r))throw new Error("Formula constant ".concat(e," contains invalid ").concat(typeof r," value type"))}this.settings=t[r.settings]?t:Object.assign({[r.settings]:!0,constants:{},functions:{}},t),this.single=null,this._parts=null,this._parse(e);}_parse(e){let s=[],n="",a=0,o=!1;const i=e=>{if(a)throw new Error("Formula missing closing parenthesis");const i=s.length?s[s.length-1]:null;if(o||n||e){if(i&&"reference"===i.type&&")"===e)return i.type="function",i.value=this._subFormula(n,i.value),void(n="");if(")"===e){const e=new t.Parser(n,this.settings);s.push({type:"segment",value:e});}else if(o){if("]"===o)return s.push({type:"reference",value:n}),void(n="");s.push({type:"literal",value:n});}else if(r.operatorCharacters.includes(n))i&&"operator"===i.type&&r.operators.includes(i.value+n)?i.value+=n:s.push({type:"operator",value:n});else if(n.match(r.numberRx))s.push({type:"constant",value:parseFloat(n)});else if(void 0!==this.settings.constants[n])s.push({type:"constant",value:this.settings.constants[n]});else {if(!n.match(r.tokenRx))throw new Error("Formula contains invalid token: ".concat(n));s.push({type:"reference",value:n});}n="";}};for(const t of e)o?t===o?(i(),o=!1):n+=t:a?"("===t?(n+=t,++a):")"===t?(--a,a?n+=t:i(t)):n+=t:t in r.literals?o=r.literals[t]:"("===t?(i(),++a):r.operatorCharacters.includes(t)?(i(),n=t,i()):" "!==t?n+=t:i();i(),s=s.map(((e,t)=>"operator"!==e.type||"-"!==e.value||t&&"operator"!==s[t-1].type?e:{type:"operator",value:"n"}));let l=!1;for(const e of s){if("operator"===e.type){if(r.operatorsPrefix.includes(e.value))continue;if(!l)throw new Error("Formula contains an operator in invalid position");if(!r.operators.includes(e.value))throw new Error("Formula contains an unknown operator ".concat(e.value))}else if(l)throw new Error("Formula missing expected operator");l=!l;}if(!l)throw new Error("Formula contains invalid trailing operator");1===s.length&&["reference","literal","constant"].includes(s[0].type)&&(this.single={type:"reference"===s[0].type?"reference":"value",value:s[0].value}),this._parts=s.map((e=>{if("operator"===e.type)return r.operatorsPrefix.includes(e.value)?e:e.value;if("reference"!==e.type)return e.value;if(this.settings.tokenRx&&!this.settings.tokenRx.test(e.value))throw new Error("Formula contains invalid reference ".concat(e.value));return this.settings.reference?this.settings.reference(e.value):r.reference(e.value)}));}_subFormula(e,s){const n=this.settings.functions[s];if("function"!=typeof n)throw new Error("Formula contains unknown function ".concat(s));let a=[];if(e){let t="",n=0,o=!1;const i=()=>{if(!t)throw new Error("Formula contains function ".concat(s," with invalid arguments ").concat(e));a.push(t),t="";};for(let s=0;s<e.length;++s){const a=e[s];o?(t+=a,a===o&&(o=!1)):a in r.literals&&!n?(t+=a,o=r.literals[a]):","!==a||n?(t+=a,"("===a?++n:")"===a&&--n):i();}i();}return a=a.map((e=>new t.Parser(e,this.settings))),function(e){const t=[];for(const r of a)t.push(r.evaluate(e));return n.call(e,...t)}}evaluate(e){const t=this._parts.slice();for(let s=t.length-2;s>=0;--s){const n=t[s];if(n&&"operator"===n.type){const a=t[s+1];t.splice(s+1,1);const o=r.evaluate(a,e);t[s]=r.single(n.value,o);}}return r.operatorsOrder.forEach((s=>{for(let n=1;n<t.length-1;)if(s.includes(t[n])){const s=t[n],a=r.evaluate(t[n-1],e),o=r.evaluate(t[n+1],e);t.splice(n,2);const i=r.calculate(s,a,o);t[n-1]=0===i?0:i;}else n+=2;})),r.evaluate(t[0],e)}},t.Parser.prototype[r.symbol]=!0,r.reference=function(e){return function(t){return t&&void 0!==t[e]?t[e]:null}},r.evaluate=function(e,t){return null===e?null:"function"==typeof e?e(t):e[r.symbol]?e.evaluate(t):e},r.single=function(e,t){if("!"===e)return !t;const r=-t;return 0===r?0:r},r.calculate=function(e,t,s){if("??"===e)return r.exists(t)?t:s;if("string"==typeof t||"string"==typeof s){if("+"===e)return (t=r.exists(t)?t:"")+(r.exists(s)?s:"")}else switch(e){case"^":return Math.pow(t,s);case"*":return t*s;case"/":return t/s;case"%":return t%s;case"+":return t+s;case"-":return t-s}switch(e){case"<":return t<s;case"<=":return t<=s;case">":return t>s;case">=":return t>=s;case"==":return t===s;case"!=":return t!==s;case"&&":return t&&s;case"||":return t||s}return null},r.exists=function(e){return null!=e};},9926:()=>{},5688:()=>{},9708:()=>{},1152:()=>{},443:()=>{},9848:()=>{}},t={},function r(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,r),a.exports}(5107);var e,t;}));
}(joiBrowser_min));

var joi = joiBrowser_min.exports;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var NotyfNotification = /** @class */ (function () {
    function NotyfNotification(options) {
        this.options = options;
        this.listeners = {};
    }
    NotyfNotification.prototype.on = function (eventType, cb) {
        var callbacks = this.listeners[eventType] || [];
        this.listeners[eventType] = callbacks.concat([cb]);
    };
    NotyfNotification.prototype.triggerEvent = function (eventType, event) {
        var _this = this;
        var callbacks = this.listeners[eventType] || [];
        callbacks.forEach(function (cb) { return cb({ target: _this, event: event }); });
    };
    return NotyfNotification;
}());
var NotyfArrayEvent;
(function (NotyfArrayEvent) {
    NotyfArrayEvent[NotyfArrayEvent["Add"] = 0] = "Add";
    NotyfArrayEvent[NotyfArrayEvent["Remove"] = 1] = "Remove";
})(NotyfArrayEvent || (NotyfArrayEvent = {}));
var NotyfArray = /** @class */ (function () {
    function NotyfArray() {
        this.notifications = [];
    }
    NotyfArray.prototype.push = function (elem) {
        this.notifications.push(elem);
        this.updateFn(elem, NotyfArrayEvent.Add, this.notifications);
    };
    NotyfArray.prototype.splice = function (index, num) {
        var elem = this.notifications.splice(index, num)[0];
        this.updateFn(elem, NotyfArrayEvent.Remove, this.notifications);
        return elem;
    };
    NotyfArray.prototype.indexOf = function (elem) {
        return this.notifications.indexOf(elem);
    };
    NotyfArray.prototype.onUpdate = function (fn) {
        this.updateFn = fn;
    };
    return NotyfArray;
}());

var NotyfEvent;
(function (NotyfEvent) {
    NotyfEvent["Dismiss"] = "dismiss";
    NotyfEvent["Click"] = "click";
})(NotyfEvent || (NotyfEvent = {}));
var DEFAULT_OPTIONS = {
    types: [
        {
            type: 'success',
            className: 'notyf__toast--success',
            backgroundColor: '#3dc763',
            icon: {
                className: 'notyf__icon--success',
                tagName: 'i',
            },
        },
        {
            type: 'error',
            className: 'notyf__toast--error',
            backgroundColor: '#ed3d3d',
            icon: {
                className: 'notyf__icon--error',
                tagName: 'i',
            },
        },
    ],
    duration: 2000,
    ripple: true,
    position: {
        x: 'right',
        y: 'bottom',
    },
    dismissible: false,
};

var NotyfView = /** @class */ (function () {
    function NotyfView() {
        this.notifications = [];
        this.events = {};
        this.X_POSITION_FLEX_MAP = {
            left: 'flex-start',
            center: 'center',
            right: 'flex-end',
        };
        this.Y_POSITION_FLEX_MAP = {
            top: 'flex-start',
            center: 'center',
            bottom: 'flex-end',
        };
        // Creates the main notifications container
        var docFrag = document.createDocumentFragment();
        var notyfContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf' });
        docFrag.appendChild(notyfContainer);
        document.body.appendChild(docFrag);
        this.container = notyfContainer;
        // Identifies the main animation end event
        this.animationEndEventName = this._getAnimationEndEventName();
        this._createA11yContainer();
    }
    NotyfView.prototype.on = function (event, cb) {
        var _a;
        this.events = __assign(__assign({}, this.events), (_a = {}, _a[event] = cb, _a));
    };
    NotyfView.prototype.update = function (notification, type) {
        if (type === NotyfArrayEvent.Add) {
            this.addNotification(notification);
        }
        else if (type === NotyfArrayEvent.Remove) {
            this.removeNotification(notification);
        }
    };
    NotyfView.prototype.removeNotification = function (notification) {
        var _this = this;
        var renderedNotification = this._popRenderedNotification(notification);
        var node;
        if (!renderedNotification) {
            return;
        }
        node = renderedNotification.node;
        node.classList.add('notyf__toast--disappear');
        var handleEvent;
        node.addEventListener(this.animationEndEventName, (handleEvent = function (event) {
            if (event.target === node) {
                node.removeEventListener(_this.animationEndEventName, handleEvent);
                _this.container.removeChild(node);
            }
        }));
    };
    NotyfView.prototype.addNotification = function (notification) {
        var node = this._renderNotification(notification);
        this.notifications.push({ notification: notification, node: node });
        // For a11y purposes, we still want to announce that there's a notification in the screen
        // even if it comes with no message.
        this._announce(notification.options.message || 'Notification');
    };
    NotyfView.prototype._renderNotification = function (notification) {
        var _a;
        var card = this._buildNotificationCard(notification);
        var className = notification.options.className;
        if (className) {
            (_a = card.classList).add.apply(_a, className.split(' '));
        }
        this.container.appendChild(card);
        return card;
    };
    NotyfView.prototype._popRenderedNotification = function (notification) {
        var idx = -1;
        for (var i = 0; i < this.notifications.length && idx < 0; i++) {
            if (this.notifications[i].notification === notification) {
                idx = i;
            }
        }
        if (idx !== -1) {
            return this.notifications.splice(idx, 1)[0];
        }
        return;
    };
    NotyfView.prototype.getXPosition = function (options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.x) || 'right';
    };
    NotyfView.prototype.getYPosition = function (options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.y) || 'bottom';
    };
    NotyfView.prototype.adjustContainerAlignment = function (options) {
        var align = this.X_POSITION_FLEX_MAP[this.getXPosition(options)];
        var justify = this.Y_POSITION_FLEX_MAP[this.getYPosition(options)];
        var style = this.container.style;
        style.setProperty('justify-content', justify);
        style.setProperty('align-items', align);
    };
    NotyfView.prototype._buildNotificationCard = function (notification) {
        var _this = this;
        var options = notification.options;
        var iconOpts = options.icon;
        // Adjust container according to position (e.g. top-left, bottom-center, etc)
        this.adjustContainerAlignment(options);
        // Create elements
        var notificationElem = this._createHTMLElement({ tagName: 'div', className: 'notyf__toast' });
        var ripple = this._createHTMLElement({ tagName: 'div', className: 'notyf__ripple' });
        var wrapper = this._createHTMLElement({ tagName: 'div', className: 'notyf__wrapper' });
        var message = this._createHTMLElement({ tagName: 'div', className: 'notyf__message' });
        message.innerHTML = options.message || '';
        var mainColor = options.background || options.backgroundColor;
        // Build the icon and append it to the card
        if (iconOpts) {
            var iconContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf__icon' });
            if (typeof iconOpts === 'string' || iconOpts instanceof String)
                iconContainer.innerHTML = new String(iconOpts).valueOf();
            if (typeof iconOpts === 'object') {
                var _a = iconOpts.tagName, tagName = _a === void 0 ? 'i' : _a, className_1 = iconOpts.className, text = iconOpts.text, _b = iconOpts.color, color = _b === void 0 ? mainColor : _b;
                var iconElement = this._createHTMLElement({ tagName: tagName, className: className_1, text: text });
                if (color)
                    iconElement.style.color = color;
                iconContainer.appendChild(iconElement);
            }
            wrapper.appendChild(iconContainer);
        }
        wrapper.appendChild(message);
        notificationElem.appendChild(wrapper);
        // Add ripple if applicable, else just paint the full toast
        if (mainColor) {
            if (options.ripple) {
                ripple.style.background = mainColor;
                notificationElem.appendChild(ripple);
            }
            else {
                notificationElem.style.background = mainColor;
            }
        }
        // Add dismiss button
        if (options.dismissible) {
            var dismissWrapper = this._createHTMLElement({ tagName: 'div', className: 'notyf__dismiss' });
            var dismissButton = this._createHTMLElement({
                tagName: 'button',
                className: 'notyf__dismiss-btn',
            });
            dismissWrapper.appendChild(dismissButton);
            wrapper.appendChild(dismissWrapper);
            notificationElem.classList.add("notyf__toast--dismissible");
            dismissButton.addEventListener('click', function (event) {
                var _a, _b;
                (_b = (_a = _this.events)[NotyfEvent.Dismiss]) === null || _b === void 0 ? void 0 : _b.call(_a, { target: notification, event: event });
                event.stopPropagation();
            });
        }
        notificationElem.addEventListener('click', function (event) { var _a, _b; return (_b = (_a = _this.events)[NotyfEvent.Click]) === null || _b === void 0 ? void 0 : _b.call(_a, { target: notification, event: event }); });
        // Adjust margins depending on whether its an upper or lower notification
        var className = this.getYPosition(options) === 'top' ? 'upper' : 'lower';
        notificationElem.classList.add("notyf__toast--" + className);
        return notificationElem;
    };
    NotyfView.prototype._createHTMLElement = function (_a) {
        var tagName = _a.tagName, className = _a.className, text = _a.text;
        var elem = document.createElement(tagName);
        if (className) {
            elem.className = className;
        }
        elem.textContent = text || null;
        return elem;
    };
    /**
     * Creates an invisible container which will announce the notyfs to
     * screen readers
     */
    NotyfView.prototype._createA11yContainer = function () {
        var a11yContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf-announcer' });
        a11yContainer.setAttribute('aria-atomic', 'true');
        a11yContainer.setAttribute('aria-live', 'polite');
        // Set the a11y container to be visible hidden. Can't use display: none as
        // screen readers won't read it.
        a11yContainer.style.border = '0';
        a11yContainer.style.clip = 'rect(0 0 0 0)';
        a11yContainer.style.height = '1px';
        a11yContainer.style.margin = '-1px';
        a11yContainer.style.overflow = 'hidden';
        a11yContainer.style.padding = '0';
        a11yContainer.style.position = 'absolute';
        a11yContainer.style.width = '1px';
        a11yContainer.style.outline = '0';
        document.body.appendChild(a11yContainer);
        this.a11yContainer = a11yContainer;
    };
    /**
     * Announces a message to screenreaders.
     */
    NotyfView.prototype._announce = function (message) {
        var _this = this;
        this.a11yContainer.textContent = '';
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        // https://github.com/angular/material2/blob/master/src/cdk/a11y/live-announcer/live-announcer.ts
        setTimeout(function () {
            _this.a11yContainer.textContent = message;
        }, 100);
    };
    /**
     * Determine which animationend event is supported
     */
    NotyfView.prototype._getAnimationEndEventName = function () {
        var el = document.createElement('_fake');
        var transitions = {
            MozTransition: 'animationend',
            OTransition: 'oAnimationEnd',
            WebkitTransition: 'webkitAnimationEnd',
            transition: 'animationend',
        };
        var t;
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
        // No supported animation end event. Using "animationend" as a fallback
        return 'animationend';
    };
    return NotyfView;
}());

/**
 * Main controller class. Defines the main Notyf API.
 */
var Notyf = /** @class */ (function () {
    function Notyf(opts) {
        var _this = this;
        this.dismiss = this._removeNotification;
        this.notifications = new NotyfArray();
        this.view = new NotyfView();
        var types = this.registerTypes(opts);
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), opts);
        this.options.types = types;
        this.notifications.onUpdate(function (elem, type) { return _this.view.update(elem, type); });
        this.view.on(NotyfEvent.Dismiss, function (_a) {
            var target = _a.target, event = _a.event;
            _this._removeNotification(target);
            // tslint:disable-next-line: no-string-literal
            target['triggerEvent'](NotyfEvent.Dismiss, event);
        });
        // tslint:disable-next-line: no-string-literal
        this.view.on(NotyfEvent.Click, function (_a) {
            var target = _a.target, event = _a.event;
            return target['triggerEvent'](NotyfEvent.Click, event);
        });
    }
    Notyf.prototype.error = function (payload) {
        var options = this.normalizeOptions('error', payload);
        return this.open(options);
    };
    Notyf.prototype.success = function (payload) {
        var options = this.normalizeOptions('success', payload);
        return this.open(options);
    };
    Notyf.prototype.open = function (options) {
        var defaultOpts = this.options.types.find(function (_a) {
            var type = _a.type;
            return type === options.type;
        }) || {};
        var config = __assign(__assign({}, defaultOpts), options);
        this.assignProps(['ripple', 'position', 'dismissible'], config);
        var notification = new NotyfNotification(config);
        this._pushNotification(notification);
        return notification;
    };
    Notyf.prototype.dismissAll = function () {
        while (this.notifications.splice(0, 1))
            ;
    };
    /**
     * Assigns properties to a config object based on two rules:
     * 1. If the config object already sets that prop, leave it as so
     * 2. Otherwise, use the default prop from the global options
     *
     * It's intended to build the final config object to open a notification. e.g. if
     * 'dismissible' is not set, then use the value from the global config.
     *
     * @param props - properties to be assigned to the config object
     * @param config - object whose properties need to be set
     */
    Notyf.prototype.assignProps = function (props, config) {
        var _this = this;
        props.forEach(function (prop) {
            // intentional double equality to check for both null and undefined
            config[prop] = config[prop] == null ? _this.options[prop] : config[prop];
        });
    };
    Notyf.prototype._pushNotification = function (notification) {
        var _this = this;
        this.notifications.push(notification);
        var duration = notification.options.duration !== undefined ? notification.options.duration : this.options.duration;
        if (duration) {
            setTimeout(function () { return _this._removeNotification(notification); }, duration);
        }
    };
    Notyf.prototype._removeNotification = function (notification) {
        var index = this.notifications.indexOf(notification);
        if (index !== -1) {
            this.notifications.splice(index, 1);
        }
    };
    Notyf.prototype.normalizeOptions = function (type, payload) {
        var options = { type: type };
        if (typeof payload === 'string') {
            options.message = payload;
        }
        else if (typeof payload === 'object') {
            options = __assign(__assign({}, options), payload);
        }
        return options;
    };
    Notyf.prototype.registerTypes = function (opts) {
        var incomingTypes = ((opts && opts.types) || []).slice();
        var finalDefaultTypes = DEFAULT_OPTIONS.types.map(function (defaultType) {
            // find if there's a default type within the user input's types, if so, it means the user
            // wants to change some of the default settings
            var userTypeIdx = -1;
            incomingTypes.forEach(function (t, idx) {
                if (t.type === defaultType.type)
                    userTypeIdx = idx;
            });
            var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};
            return __assign(__assign({}, defaultType), userType);
        });
        return finalDefaultTypes.concat(incomingTypes);
    };
    return Notyf;
}());

let notyf = new Notyf();
class Logger {
    clearAllNotifications() {
        notyf.dismissAll();
    }

    static logToConsole(
        errors,
        verificationSummary,
        additionalText,
        dataLayerObject,
        schemaExample,
        isMissingUserData
    ) {
        if (errors.length > 0 || isMissingUserData) {
            notyf.error({
                message: verificationSummary,
                duration: 6000,
                dismissible: false,
                position: { x: "left", y: "bottom" },
                ripple: false,
            });
            console.group(
                "%c" + verificationSummary,
                "background-color: #ed3d3d ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
            );
            if (isMissingUserData) {
                console.log(
                    "%c" + "Event not preceded by dl_user_data in the data layer",
                    "display: inline-block ; background-color: gold ; color: black ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;"
                );
            }
            errors.forEach((error) =>
                console.log(
                    "%c" + error.message,
                    "display: inline-block ; background-color: gold ; color: black ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;"
                )
            );
            console.group("Object pushed to datalayer");
            // Remove marketing and gtm.uniqueEventId from the object
            let dataLayerObjectModified = Object.assign({}, dataLayerObject);
            try {
                delete dataLayerObjectModified.marketing;
                // eslint-disable-next-line no-empty
            } catch (e) {}
            try {
                delete dataLayerObjectModified["gtm.uniqueEventId"];
                // eslint-disable-next-line no-empty
            } catch (e) {}
            try {
                delete dataLayerObjectModified.event_time;
                // eslint-disable-next-line no-empty
            } catch (e) {}
            console.log(dataLayerObjectModified);
            console.groupEnd();
            console.group("Reference object with correct shape");
            console.log(schemaExample);
            console.groupEnd();
            console.groupEnd();
        } else {
            notyf.success({
                message: verificationSummary,
                duration: 6000,
                dismissible: false,
                position: { x: "left", y: "bottom" },
                ripple: false,
            });
        }
    }
}

// This file contains all schemas to check dl items against.

joi.string().allow("").required().messages({
    "any.required": `"crto_mapped_user_id" should be a string representing the crto_mapped_user_id cookie. See documentation for more details.`,
});

joi.string().allow("").required().messages({
    "any.required": `"ttclid" should be a string representing the ttclid cookie from TikTok. See documentation for more details.`,
});

joi.string().allow("").required().messages({
    "any.required": `"crto_is_user_optout" should be a string representing the crto_is_user_optout cookie. See documentation for more details.`,
});

joi.string().allow("").required().messages({
    "any.required": `"_fbp" should be a string representing the _fbp cookie. See documentation for more details.`,
});

joi.string().allow("").required().messages({
    "any.required": `"_ga" should be a string representing the ga_XXXXXXXX cookie. See documentation for more details.`,
});

joi.string().allow("").required().messages({
    "any.required": `"_ga_XXXXXXXX" should be a string representing the GA4 cookie. See documentation for more details.`,
});

const category = joi.string().allow("").required().messages({
    "any.required": `"category" is a required field on the impressions and products array constituent objects. This represents the category from which the product is from. A Chess board might have a category of "board_game".`,
});

const name = joi.string().required().messages({
    "any.required": `"name" is a required field and should be in the impressions and products array constituent objects. It should represent the name of the product.`,
});

const SKU = joi.string().allow("").required().messages({
    "any.required": `"id" is a required field on the impressions and products array constituent objects. It should be a string containing the product SKU`,
});

const productId = joi.string().min(5).required().messages({
    "any.required": `"product_id" is a required field on the impressions and products array constituent objects. It should be a string containing the product ID.`,
});

const variantId = joi.string().min(2).required().messages({
    "any.required": `"variant_id" is a required field on the impressions and products array constituent objects. It should be a string representing the Shopify variant ID.`,
});

const brand = joi.string().allow("").required().messages({
    "any.required": `"brand" is a required field on the impressions and products array constituent objects. If a brand can't be determined use an empty string.`,
});

const price = joi.string().required().messages({
    "any.required": `"price" is a required field on the impressions and products array constituent objects. It should be a string representing the price of the product, for example "125.99"`,
});

const position = joi.number().required().messages({
    "any.required": `"position" is a required field on the impressions array constituent objects. It should contain the position in the list for each array element. For example, the first element should be have the value 1(integer), the next, 2 etc...`,
});

const list = joi.string().required().optional().messages({
    "any.required": `"list" is a required field on the impressions array constituent objects. It should contain the path to the collection the product is from. For example "/collections/toys"`,
});

const buildListSchema = (locations) => {
    return joi
        .string()
        .required()
        .messages({
            "any.required": `"list" is a required field on the ${locations} object. It should contain the path to the collection the product was visited from. For example "/collections/toys"`,
        });
};

const ecommerce = (contents) => {
    return joi.object().keys(contents).required();
};

const image = joi.string().allow("").messages({
    "any.required": `"image" is an optional field on the ecommerce object and should be a valid URL.`,
});

const variant = joi.string().allow("").messages({
    "string.base": `"variant" should be a descriptive name of the product variant, for example "Blue shirt"`,
    "any.required": `"variant" is a required field on the ecommerce object.`,
});

const inventoryString = `"inventory" should be a string representing the quantity in stock for the product. For example: "22"`;
const inventory = joi.string().allow("").messages({
    "any.all": inventoryString,
    "any.required": inventoryString,
});

const userId = joi.string().required().messages({
    "any.required": `"user_id" is a required field on the user_properties object and should contain a unique identifier for your user that is persisted across sessions.`,
});

const userConsent = joi.string().allow("").messages({
    "any.required": `"user_consent" is a required field on the user_properties object and should contain an empty string if no consent is present.`,
});

const customerId = joi.string().required().messages({
    "any.required": `"customer_id" is a required field on the user_properties object when the customer is logged in, it should contain the Shopify customer id.`,
});
const customerEmail = joi.string().required().messages({
    "any.required": `"customer_email" is a required field on the user_properties object when the customer is logged in, it should contain the customer email.`,
});
const customerOrderCount = joi.string().required().messages({
    "any.required": `"customer_order_count" is a required field on the user_properties object when the customer is logged in, it should contain the order count for the customer.`,
});
const customerTotalSpent = joi.string().required().messages({
    "any.required": `"customer_total_spent" is a required field on the user_properties object when the customer is logged in, it should be a string containing the total spent by the customer.`,
});
const customerAddress1 = joi.string().required().messages({
    "any.required": `"customer_address_1" is a required field on the user_properties object when the user is logged in and should be a string containing the first line of the customer's address.`,
});
const customerAddress2 = joi.string().allow(null, "").required().messages({
    "any.required": `"customer_address_2" is a required field on the user_properties object when the user is logged in and should be a string containing the second line of the customer's address.`,
});
const customerCity = joi.string().required().messages({
    "any.required": `"customer_city" is a required field on the user_properties object when the user is logged in and should be a string containing the customer's city.`,
});
const customerCountry = joi.string().required().messages({
    "any.required": `"customer_country" is a required field on the user_properties object when the user is logged in and should be a string containing the customer's country.`,
});
const customerFirstName = joi.string().required().messages({
    "any.required": `"customer_first_name" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's first name.`,
});
const customerLastName = joi.string().required().messages({
    "any.required": `"customer_last_name" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's last name.`,
});
const customerPhone = joi.string().required().messages({
    "any.required": `"customer_phone" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's phone number.`,
});
const customerProvince = joi.string().required().messages({
    "any.required": `"customer_province" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's province or state.`,
});
const customerProvinceCode = joi.string().required().messages({
    "any.required": `"customer_province_code" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's province code for example SC or AB.`,
});
const customerZip = joi.string().required().messages({
    "any.required": `"customer_zip" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's zip or postal code.`,
});
const buildStepSchema = (stepNumber) => {
    return joi
        .any()
        .valid(stepNumber)
        .required()
        .messages({
            "any.required": `"step" is a required field on the actionField object and should contain the string "${stepNumber}".`,
        });
};
const visitorType = joi
    .any()
    .valid("guest", "logged_in")
    .required()
    .messages({
        "any.only": `"visitor_type" should be one of "logged_in" or "guest".`,
        "any.required": `"visitor_type" is a required field on the user_properties object and should be one of "logged in" or "guest".`,
    });

const eventId = joi.string().min(5).required().messages({
    "any.required": `"event_id" is a required field. It should be a UUID like value.`,
});

const cartTotal = joi.string().min(2).required().messages({
    "any.required": `"cart_total" is a required field. It should be a string representing the total value of the cart, for example "26.99".`,
});

const currencyCode = joi.string().min(3).max(3).required().messages({
    "any.required": `"currencyCode" is a required field on the ecommerce object, it should be 3 characters long and contain a currency code such as "USD".`,
});

const buildActionSchema = (location, stringName) => {
    return joi
        .string()
        .allow(stringName)
        .required()
        .messages({
            "any.required": `"action" is a required field on the ${location} object and should contain the string "${stringName}"`,
        });
};

joi
    .object()
    .keys({
        visitor_type: visitorType,
        user_id: userId,
        user_consent: userConsent,
    })
    .required()
    .messages({
        "any.required": `"user_properties" should be an object representing the Shopify user properties. See documentation for more details.`,
    });

const marketingSchema = joi
    .object()
    .keys({
        // _fbp: fbp,
        // _ga: ga,
        // [joi.string()
        // .pattern(new RegExp('^_ga_.*$'))]: ga4,
        // ttclid: ttclid,
        user_id: userId,
        // crto_mapped_user_id: crtoMappedUserId,
        // crto_is_user_optout: crtoIsUserOptout,
    })
    .required()
    .messages({
        "any.required": `"marketing" should be an object representing all marketing data. See documentation for more details.`,
    });

const impressions = joi
    .array()
    .items({
        name: name,
        id: SKU,
        product_id: productId,
        variant_id: variantId,
        brand: brand,
        category: category,
        price: price,
        position: position,
        list: list,
    })
    .min(1)
    .required()
    .messages({
        "any.required": `You must have at least one product in the "impressions" array.`,
    });

const products = joi
    .array()
    .items({
        name: name,
        id: SKU,
        product_id: productId,
        variant_id: variantId,
        image: image,
        brand: brand,
        category: category,
        variant: variant,
        price: price,
        inventory: inventory,
    })
    .min(1)
    .required()
    .messages({
        "any.required": `You must have at least one product in the "products" array.`,
    });

const getEventNameSchema = (eventName) => {
    return joi.string().valid(eventName).required().messages({
        "any.required": `"event" is a required field on the data layer object and should contain and event name such as dl_view_item, dl_add_to_cart etc...`,
    });
};

const userPropertiesLoggedIn$1 = joi
    .object()
    .keys({
        user_consent: userConsent,
        user_id: userId,
        visitor_type: visitorType,
        customer_id: customerId,
        customer_email: customerEmail,
        customer_order_count: customerOrderCount,
        customer_total_spent: customerTotalSpent,
        customer_address_1: customerAddress1,
        customer_address_2: customerAddress2,
        customer_city: customerCity,
        customer_country: customerCountry,
        customer_first_name: customerFirstName,
        customer_last_name: customerLastName,
        customer_phone: customerPhone,
        customer_province: customerProvince,
        customer_province_code: customerProvinceCode,
        customer_zip: customerZip,
    })
    .required()
    .messages({
        "any.required": `"user_properties" is a required field on the data layer object`,
    });

const userPropertiesNotLoggedIn$1 = joi
    .object()
    .keys({
        user_consent: userConsent,
        user_id: userId,
        visitor_type: visitorType,
    })
    .required()
    .messages({
        "any.required": `"user_properties" is a required field on the data layer object`,
    });

const marketingObject = {
    // This is the GA4 cookie ID. The XXX... portion of the cookie will differ for every client
    "_ga_XXXXXXXXXX": "GS1.1.1649714540.17.0.1.60", // GA4 Cookie ID
    _fbp: "fb.1.1649615616201.121355119", // FB cookie id
    _ga: "GA1.2.162823682.1647884841", // GA cookie id
    user_id: "bc574dca-c842-4de7-98a1-dd9529729456", // UUID uniqe per user, should be persisted as long as possible and kept consistent between sessions
    crto_mapped_user_id: "dlkjla38uj", // Criteo cookie id if using Criteo
    crto_is_user_optout: "false", // Criteo opt out status
};

const dl_view_item_schema_example = {
    event: "dl_view_item",
    event_id: "231f2c91-c2f3-421f-9d20-bb46a956e87a",
    marketing: marketingObject,
    ecommerce: {
        currencyCode: "USD",
        detail: {
            actionField: {
                list: "/collections/games",
                action: "detail",
            },
            products: [
                {
                    id: "CHESS-SET", // SKU
                    name: "Gold Chess Set",
                    brand: "Chess Inc.",
                    category: "Games",
                    variant: "Large Board",
                    price: "199.00",
                    list: "/collections/games",
                    product_id: "7112843886744",
                    variant_id: "41275778367640",
                    compare_at_price: "0.0",
                    image: "//cdn.shopify.com/s/files/1/0200/7616/products/arena-concrete-chess-set_f75103a8-2ecc-4d91-8d6c-d80b2501dbd7.png?v=1636459884",
                    inventory: "20",
                },
            ],
        },
    },
};

const dl_add_to_cart_schema_example = {
    event: "dl_add_to_cart",
    event_id: "887cb1e5-27ea-47c3-95a3-fdca8299e719",
    marketing: marketingObject,
    ecommerce: {
        currencyCode: "USD",
        add: {
            actionField: {
                list: "/collections/puzzles",
                action: "add",
            },
            products: [
                {
                    id: "0A-CLUE-BOX",
                    name: "Clue Puzzle",
                    brand: "iDVENTURE",
                    category: "Puzzles",
                    variant: "Clue puzzle size large",
                    price: "40",
                    quantity: "1",
                    list: "/collections/puzzles",
                    product_id: "5074792185993",
                    variant_id: "33922510782601",
                    image: "https://cdn.shopify.com/s/files/1/0200/7616/products/Cluebox-1_098a06ca-1389-46cc-b34e-ec85c86e99df.png?v=1636419558",
                },
            ],
        },
    },
};

const dl_begin_checkout_schema_example = {
    event: "dl_begin_checkout",
    event_id: "4b2be7b2-bf61-4959-b340-065d262da12a",
    marketing: marketingObject,
    ecommerce: {
        currencyCode: "USD",
        checkout: {
            actionField: {
                step: "1",
                action: "checkout",
            },
            products: [
                {
                    id: "LB00161-34689553170476",
                    name: "Lovebox Original Color & Photo",
                    brand: "Lovebox INC",
                    category: "Home,Living,Art & Objects,Tabletop",
                    variant: "USA plug",
                    price: "119.99",
                    quantity: "1",
                    list: "",
                    product_id: "6979886940352",
                    variant_id: "41141193965760",
                    image: "//cdn.shopify.com/s/files/1/0562/3916/1536/products/LBCP_First_FREN_1200x1200_14e856e9-cef5-4ed3-b5f6-22250cfcf128_small.png?v=1636136551",
                },
            ],
        },
    },
};

const dl_remove_from_cart_schema_example = {
    event: "dl_remove_from_cart",
    event_id: "07df1ccc-7a89-4be2-a863-b0a238080280",
    marketing: marketingObject,
    ecommerce: {
        currencyCode: "USD",
        remove: {
            actionField: {
                list: "/collections/puzzles",
            },
            products: [
                {
                    id: "0A-CLUE-BOX",
                    name: "Cluebox",
                    brand: "iDVENTURE",
                    category: "Puzzles",
                    variant: "Clue puzzle size large",
                    price: "40",
                    quantity: "1",
                    list: "/collections/puzzles",
                    product_id: "5074792185993",
                    variant_id: "33922510782601",
                    image: "https://cdn.shopify.com/s/files/1/0200/7616/products/Cluebox-1_098a06ca-1389-46cc-b34e-ec85c86e99df.png?v=1636419558",
                },
            ],
        },
    },
};

const dl_search_results_schema_example = {
    event: "dl_search_results",
    event_id: "ee8eb7ca-8db2-4cc6-b875-2398b66b8ffe",
    marketing: marketingObject,
    ecommerce: {
        currencyCode: "USD",
        actionField: {
            list: "search results",
        },
        impressions: [
            {
                id: "4-AUDUBON-BIRDCALL",
                name: "Audubon Bird Call",
                brand: "American Bird Products, Inc.",
                category: "Toys",
                price: "8.0",
                position: 0,
                list: "/collections/toys",
                product_id: "4400067903625",
                variant_id: "31410300551305",
            },
            {
                id: "5-FLIPBOOK-KIT-BLANK",
                name: "FlipBooKit",
                brand: "Art of Play",
                category: "Toys",
                price: "35.0",
                position: 2,
                list: "/collections/toys",
                product_id: "7846286032",
                variant_id: "41275883683992",
            },
            {
                id: "5-MYSTERY-TOP",
                name: "Mystery Top",
                brand: "Art of Play",
                category: "Toys",
                price: "12.0",
                position: 3,
                list: "/collections/toys",
                product_id: "1856914849850",
                variant_id: "18298859880506",
            }
        ],
    },
};

const dl_view_cart_schema_example = {
    event: "dl_view_cart",
    event_id: "e06ba901-57c9-41ee-89f0-28ea91258230",
    marketing: marketingObject,
    cart_total: "26.99",
    ecommerce: {
        currencyCode: "USD",
        actionField: {
            list: "Shopping Cart",
        },
        impressions: [
            {
                id: "4-AUDUBON-BIRDCALL",
                name: "Audubon Bird Call",
                brand: "American Bird Products, Inc.",
                category: "Toys",
                price: "8.0",
                position: 0,
                list: "/collections/toys",
                product_id: "4400067903625",
                variant_id: "31410300551305",
                quantity: 1,
            },
            {
                id: "5-FLIPBOOK-KIT-BLANK",
                name: "FlipBooKit",
                brand: "Art of Play",
                category: "Toys",
                price: "35.0",
                position: 1,
                list: "/collections/toys",
                product_id: "7846286032",
                variant_id: "41275883683992",
                quantity: 2,
            },
        ],
    },
};

const dl_view_item_list_schema_example = {
    event: "dl_view_item_list",
    event_id: "2b0c5796-7abe-4465-8e24-0ffade4699df",
    marketing: marketingObject,
    ecommerce: {
        currencyCode: "USD",
        impressions: [
            {
                id: "4-AUDUBON-BIRDCALL",
                name: "Audubon Bird Call",
                brand: "American Bird Products, Inc.",
                category: "Toys",
                price: "8.0",
                position: 9,
                list: "/collections/toys",
                product_id: "4400067903625",
                variant_id: "31410300551305",
            },
            {
                id: "5-FLIPBOOK-KIT-BLANK",
                name: "FlipBooKit",
                brand: "Art of Play",
                category: "Toys",
                price: "35.0",
                position: 10,
                list: "/collections/toys",
                product_id: "7846286032",
                variant_id: "41275883683992",
            },
            {
                id: "5-MYSTERY-TOP",
                name: "Mystery Top",
                brand: "Art of Play",
                category: "Toys",
                price: "12.0",
                position: 11,
                list: "/collections/toys",
                product_id: "1856914849850",
                variant_id: "18298859880506",
            }
        ],
    },
};

const dl_select_item_schema_example = {
    event: "dl_select_item",
    event_id: "0446f7d6-070d-44e7-b355-06a27d0fc312",
    marketing: marketingObject,
    ecommerce: {
        currencyCode: "USD",
        click: {
            actionField: {
                list: "/collections/toys",
                action: "click",
            },
            products: [
                {
                    id: "5-TIPPY-TOP-WALNUT",
                    name: "Wooden Tippe Tops",
                    brand: "Mader Kreiselmanufaktur",
                    category: "Toys",
                    price: "12.0",
                    position: 5,
                    list: "/collections/toys",
                    product_id: "9229206160",
                    variant_id: "36638578960",
                },
            ],
        },
    },
};

const userPropertiesNotLoggedIn = {
    user_consent: "",
    user_id: "fadee0bb-008a-48d5-a659-983b4b77fbfb",
    visitor_type: "guest"
};

const dl_user_data_schema_example = {
    event: "dl_user_data",
    event_id: "8ff28e85-0503-484e-bb86-53110aba98fb",
    marketing: marketingObject,
    cart_total: "85.0",
    user_properties: userPropertiesNotLoggedIn
};

const userPropertiesLoggedIn = {
    customer_address_1: "1 Hills Plantation Drive",
	customer_address_2: "",
	customer_city: "Charleston",
	customer_country: "United States",
	customer_email: "bill@gmail.com",
	customer_first_name: "Bill",
	customer_id: "5928549548188",
	customer_last_name: "CA",
	customer_order_count: "1",
	customer_phone: "999-999-9999",
	customer_province: "South Carolina",
	customer_province_code: "SC",
	customer_tags: "",
	customer_total_spent: "0.0",
	customer_zip: "22222",
    user_consent: "",
    user_id: "fadee0bb-008a-48d5-a659-983b4b77fbfb",
    visitor_type: "logged_in"
};

const dl_login_schema_example = {
    event: "dl_login",
    event_id: "0446f7d6-070d-44e7-b355-06a27d0fc312", // unique uuid for FB conversion API
    marketing: marketingObject,
    user_properties: userPropertiesLoggedIn
};

const dl_sign_up_schema_example = {
    event: "dl_sign_up",
    event_id: "0446f7d6-070d-44e7-b355-06a27d0fc312", // unique uuid for FB conversion API
    marketing: marketingObject,
    user_properties: userPropertiesLoggedIn,
};

const dl_route_change_schema_example = {
    event: "dl_route_change",
};

class DLEvent {
    constructor(dataLayerObject, schemaExample, dataLayer) {
        this._dlEventName = schemaExample.event;
        if (dataLayer) this.setShouldBePrecededByDLUserData(dataLayer);
        this._schemaExample = schemaExample;
        this._dataLayerObject = dataLayerObject;
        this._errors = [];
        this._verificationSummary;
        this._isValid;
        this._userIsLoggedIn =
            dataLayerObject.user_properties?.visitor_type === "logged_in";
        this.verify();
    }

    verify(additionalSchemas) {
        if (this._verificationhasBeenRun)
            throw new Error(
                "Can't call verify more than once on the same object."
            );

        // Build the schema for the event
        const dlEventSchema = joi.object({
            event: getEventNameSchema(this._dlEventName),
            // Marketing not required on route change
            ...(this.eventRequiresMarketingProperties() && {
                marketing: marketingSchema,
            }),
            // user_properties only required on dl_user_data, dl_login, dl_signup
            ...(this.eventRequiresUserProperties() && {
                user_properties: this.getUserPropertiesSchema(),
            }),
            // No event_id for dl_route_change
            ...(this.eventRequiresEventId() && {
                event_id: eventId,
            }),
            ...additionalSchemas,
        });

        const validation = dlEventSchema.validate(this._dataLayerObject, {
            abortEarly: false,
            allowUnknown: true,
        });

        if (validation.error) {
            // console.log(validation.error);
            this._isValid = false;
            this._errors = validation.error.details;
            this._verificationSummary = `${
                this._dlEventName
            } event_id ${this.formatEventID(
                this._dataLayerObject.event_id
            )} is invalid`;
        } else {
            this._isValid = true;
            this._verificationSummary = `${
                this._dlEventName
            } event_id: ${this.formatEventID(
                this._dataLayerObject.event_id
            )} is valid.`;
        }
        this._verificationhasBeenRun = true;
        return validation;
    }

    getErrors() {
        return this._errors;
    }

    eventRequiresUserProperties() {
        return (
            this.eventsRequiringUserPropertiesSchema().includes(
                this._dlEventName
            ) === true
        );
    }

    eventsRequiringUserPropertiesSchema() {
        return ["dl_user_data", "dl_login", "dl_sign_up"];
    }

    eventsNotRequiringUserDataToPrecedeThem() {
        return ["dl_user_data", "dl_login", "dl_sign_up", "dl_route_change"];
    }

    eventRequiresMarketingProperties() {
        return this._dlEventName !== "dl_route_change";
    }

    eventRequiresEventId() {
        return this.getEventName() !== "dl_route_change";
    }

    getUserPropertiesSchema() {
        return this.userIsLoggedIn()
            ? userPropertiesLoggedIn$1
            : userPropertiesNotLoggedIn$1;
    }

    getEventName() {
        return this._dlEventName;
    }

    isValid() {
        return this._isValid;
    }

    getVerificationSummary() {
        return this._verificationSummary;
    }

    logVerificationOutcome(additionalText) {
        Logger.logToConsole(
            this._errors,
            this._verificationSummary,
            additionalText,
            this._dataLayerObject,
            this._schemaExample,
            this.isMissingUserData()
        );
    }

    userIsLoggedIn() {
        return this._userIsLoggedIn;
    }

    isMissingUserData() {
        return this._missingUserData;
    }

    setMissingUserData(isMissing) {
        this._missingUserData = isMissing;
    }

    eventMustBePrecededByUserData() {
        return !this.eventsNotRequiringUserDataToPrecedeThem().includes(
            this._dlEventName
        );
    }

    eventWasPrecededByUserData(dataLayerSnapshot, eventName) {
        // First find the index of the earliest event by this name in the DL
        const indexOfEvent = dataLayerSnapshot.findIndex(
            (event) => eventName === event.event
        );
        if (indexOfEvent === -1)
            throw new Error(
                `Could not find event ${eventName} in the data layer`
            );
        const indexOfDlUserData = dataLayerSnapshot.findIndex(
            (event) => event.event === "dl_user_data"
        );
        if (indexOfDlUserData === -1) return false;
        return indexOfDlUserData < indexOfEvent;
    }

    setShouldBePrecededByDLUserData(dataLayerSnapshot) {
        // If not required set to false
        if (!this.eventMustBePrecededByUserData())
            return this.setMissingUserData(false);
        // If we're here we know it's required
        if (this.eventWasPrecededByUserData(dataLayerSnapshot, this.getEventName())) {
            this.setMissingUserData(false);
        } else {
            this.setMissingUserData(true);
        }
    }

    formatEventID(eventID) {
        if (eventID === undefined) return "N/A";
        return `${eventID.slice(0, 5)}...`;
    }

    getProperties() {
        return {
            eventVerificationStatus: this.isValid() ? "verified" : "failed",
            isMissingUserData: this.isMissingUserData(),
        };
    }

    static shouldProcessEvent(dlEventObject) {
        if (typeof dlEventObject !== "object") return false;
        if (!(dlEventObject.event in this.getEventMap())) return false;
        return true;
    }

    static getEventMap() {
        return {
            dl_view_item: DLEventViewItem,
            dl_add_to_cart: DLEventAddToCart,
            dl_remove_from_cart: DLEventRemoveFromCart,
            dl_select_item: DLEventSelectItem,
            dl_user_data: DLEventUserData,
            dl_view_cart: DLEventViewCart,
            dl_view_item_list: DLEventViewItemList,
            dl_route_change: DLEventRouteChange,
            dl_begin_checkout: DLEventBeginCheckout,
            dl_login: DLEventLogin,
            dl_sign_up: DLEventSignUp,
            dl_search_results: DLEventSearchResults,
        };
    }

    static dlEventFactory(dlEventObject, dataLayer) {
        const dlEvent = DLEvent.getEventMap()[dlEventObject.event];
        const event = new dlEvent(dlEventObject, dataLayer);
        return event;
        // return new DLEvent.getEventMap()[dlEventObject.event](dlEventObject, dataLayer);
    }
}

class DLEventUserData extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_user_data_schema_example, dataLayer);
    }
}

class DLEventLogin extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_login_schema_example, dataLayer);
    }
}

class DLEventSignUp extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_sign_up_schema_example, dataLayer);
    }
}

class DLEventViewItem extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_view_item_schema_example, dataLayer);
    }

    verify() {
        // console.log("Running verify on DLEventViewItem");
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                detail: joi
                    .object()
                    .keys({
                        actionField: joi
                            .object()
                            .keys({
                                list: buildListSchema("action field"),
                                action: buildActionSchema(
                                    "action field",
                                    "detail"
                                ),
                            })
                            .required(),
                        products: products,
                    })
                    .required(),
            }),
        });
    }
}

class DLEventAddToCart extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_add_to_cart_schema_example, dataLayer);
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                add: joi
                    .object()
                    .keys({
                        actionField: joi
                            .object()
                            .keys({
                                list: buildListSchema("action field"),
                                action: buildActionSchema(
                                    "action field",
                                    "add"
                                ),
                            })
                            .required(),
                        products: products,
                    })
                    .required(),
            }),
        });
    }
}

class DLEventBeginCheckout extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_begin_checkout_schema_example, dataLayer);
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                checkout: joi
                    .object()
                    .keys({
                        actionField: joi
                            .object()
                            .keys({
                                step: buildStepSchema("1"),
                                action: buildActionSchema(
                                    "action field",
                                    "checkout"
                                ),
                            })
                            .required(),
                        products: products,
                    })
                    .required(),
            }),
        });
    }
}

class DLEventRemoveFromCart extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_remove_from_cart_schema_example, dataLayer);
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                remove: joi
                    .object()
                    .keys({
                        actionField: joi
                            .object()
                            .keys({
                                list: buildListSchema("action field"),
                            })
                            .required(),
                        products: products,
                    })
                    .required(),
            }),
        });
    }
}

class DLEventSelectItem extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_select_item_schema_example, dataLayer);
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                click: joi.object().keys({
                    actionField: joi
                        .object()
                        .keys({
                            list: buildListSchema("action field"),
                            action: buildActionSchema("action field", "click"),
                        })
                        .required(),
                    products: products,
                }),
            }),
        });
    }
}

class DLEventSearchResults extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_search_results_schema_example, dataLayer);
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                actionField: joi
                    .object()
                    .keys({
                        list: buildListSchema("action field"),
                    })
                    .required(),
                impressions: impressions,
            }),
        });
    }
}

class DLEventViewCart extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_view_cart_schema_example, dataLayer);
    }

    verify() {
        return super.verify({
            cart_total: cartTotal,
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                actionField: joi
                    .object()
                    .keys({
                        list: buildListSchema("action field"),
                    })
                    .required(),
                impressions: impressions,
            }),
        });
    }
}

class DLEventViewItemList extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_view_item_list_schema_example, dataLayer);
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                impressions: impressions,
            }),
        });
    }
}

class DLEventRouteChange extends DLEvent {
    constructor(dataLayerObject, dataLayer) {
        super(dataLayerObject, dl_route_change_schema_example, dataLayer);
    }
}

const eventList = [
    "dl_add_to_cart",
    "dl_remove_from_cart",
    "dl_select_item",
    "dl_user_data",
    "dl_view_cart",
    "dl_view_item_list",
    "dl_view_item",
    "dl_route_change",
    "dl_begin_checkout",
    "dl_sign_up",
    "dl_search_results",
    "dl_login",
];

// Polling here because overriding the push method on window.dataLayer caused issuese in GTM preview mode
class DB {
    constructor() {
        if (DB._instance) return DB._instance;
        DB._instance = this; 
        this._dbName = "_verifier_db";
        this._eventList = eventList;
        this._initDB();

    }

    getDB() {
        return JSON.parse(window.localStorage.getItem(this._dbName));
    }

    _initDB() {
        const initialDB = {
            events: {},
        };
        // 2 = unseen // 1 = valid // 0 = invalid all start at 2
        eventList.forEach((item) => initialDB.events[item] = {
            eventVerificationStatus: "unseen",
            isMissingUserData: "undetermined",
        });
        if (!window.localStorage.getItem(this._dbName)) {
            window.localStorage.setItem(
                this._dbName,
                JSON.stringify(initialDB)
            );
        }
    }

    setEventValidityProperty(property, value) {
        const currentDB = this.getDB();
        currentDB.events[property] = value;
        window.localStorage.setItem(
            this._dbName,
            JSON.stringify(currentDB)
        );
    }

    clear() {
        const initialDB = {
            events: {},
        };
        // 2 = unseen // 1 = valid // 0 = invalid all start at 2
        eventList.forEach((item) => initialDB.events[item] = {
            eventVerificationStatus: "unseen",
            isMissingUserData: "undetermined",
        });
        window.localStorage.setItem(
            this._dbName,
            JSON.stringify(initialDB)
        );
    }
}

if (typeof dataLayerDB === "undefined") {
    var dataLayerDB = new DB();
}

// Sends a copy of the db to the background script for routing to the panel
const sendUpdatedDB = () => {
    window.dispatchEvent(
        new CustomEvent("__elever_injected_script_message", {
            detail: { db: dataLayerDB.getDB() },
        })
    );
};

// Evaluate each relevant event that's pushed to the DL
const evaluateDLEvent = (dlEventObject) => {
    if (!DLEvent.shouldProcessEvent(dlEventObject)) return;
    const dlEvent = DLEvent.dlEventFactory(dlEventObject, window.dataLayer);
    try {
        dlEvent.logVerificationOutcome();
        dataLayerDB.setEventValidityProperty(
            dlEvent.getEventName(),
            dlEvent.getProperties()
        );
        sendUpdatedDB();
    } catch (e) {
        console.log(e);
    }
};

// Listen for DL updates and push for evaluation
let lastIndexProcessed = 0;
window.dataLayer = window.dataLayer || [];
setInterval(function () {
    for (; lastIndexProcessed < window.dataLayer.length; lastIndexProcessed++) {
        evaluateDLEvent(window.dataLayer[lastIndexProcessed]);
    }
}, 1000);

// Listen for db reset event from panel.js
window.addEventListener("__elever_reset_db", async function () {
    // console.log("Reset DB called");
    dataLayerDB.clear();
    sendUpdatedDB();
});

// Send initial db to background script
sendUpdatedDB();
